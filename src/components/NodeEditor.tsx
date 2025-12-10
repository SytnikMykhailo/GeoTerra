import { useState, useRef, useEffect } from 'react';
import { NodeType, Connection, NodeDefinition } from '../types';
import { Node } from './Node';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

const NODE_DEFINITIONS: NodeDefinition[] = [
  { type: 'noise', label: 'Noise', color: '#10b981', inputs: 0, outputs: 1 },
  { type: 'multiply', label: 'Multiply', color: '#f59e0b', inputs: 2, outputs: 1 },
  { type: 'add', label: 'Add', color: '#3b82f6', inputs: 2, outputs: 1 },
  { type: 'clamp', label: 'Clamp', color: '#8b5cf6', inputs: 1, outputs: 1 },
  { type: 'output', label: 'Output', color: '#ef4444', inputs: 1, outputs: 0 },
];

export function NodeEditor() {
  const [nodes, setNodes] = useState<NodeType[]>([
    {
      id: '1',
      type: 'noise',
      position: { x: 50, y: 100 },
      inputs: [],
      outputs: ['out1'],
    },
    {
      id: '2',
      type: 'multiply',
      position: { x: 300, y: 100 },
      inputs: ['in1', 'in2'],
      outputs: ['out1'],
    },
    {
      id: '3',
      type: 'output',
      position: { x: 550, y: 100 },
      inputs: ['in1'],
      outputs: [],
    },
  ]);
  
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [connectingFrom, setConnectingFrom] = useState<{ nodeId: string; outputIndex: number } | null>(null);
  const [tempConnection, setTempConnection] = useState<{ x: number; y: number } | null>(null);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleNodeDragStart = (id: string, e: React.MouseEvent) => {
    const node = nodes.find(n => n.id === id);
    if (!node) return;
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setDraggingNode(id);
    setDragOffset({
      x: (e.clientX - rect.left) - node.position.x,
      y: (e.clientY - rect.top) - node.position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNode) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      setNodes(nodes.map(node => 
        node.id === draggingNode
          ? {
              ...node,
              position: {
                x: e.clientX - rect.left - dragOffset.x,
                y: e.clientY - rect.top - dragOffset.y,
              },
            }
          : node
      ));
    }
    
    if (connectingFrom) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      setTempConnection({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseUp = () => {
    setDraggingNode(null);
    setConnectingFrom(null);
    setTempConnection(null);
  };

  const handleConnectStart = (nodeId: string, outputIndex: number, e: React.MouseEvent) => {
    setConnectingFrom({ nodeId, outputIndex });
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setTempConnection({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleConnectEnd = (toNodeId: string, inputIndex: number) => {
    if (!connectingFrom) return;
    
    const newConnection: Connection = {
      id: `${connectingFrom.nodeId}-${toNodeId}-${Date.now()}`,
      from: connectingFrom.nodeId,
      to: toNodeId,
      fromOutput: connectingFrom.outputIndex,
      toInput: inputIndex,
    };
    
    setConnections([...connections, newConnection]);
    setConnectingFrom(null);
    setTempConnection(null);
  };

  const addNode = (type: NodeDefinition) => {
    const newNode: NodeType = {
      id: Date.now().toString(),
      type: type.type as any,
      position: { x: 200, y: 150 },
      inputs: Array(type.inputs).fill('').map((_, i) => `in${i + 1}`),
      outputs: Array(type.outputs).fill('').map((_, i) => `out${i + 1}`),
    };
    
    setNodes([...nodes, newNode]);
  };

  const deleteNode = (id: string) => {
    setNodes(nodes.filter(n => n.id !== id));
    setConnections(connections.filter(c => c.from !== id && c.to !== id));
  };

  const getPortPosition = (nodeId: string, isOutput: boolean, index: number) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return { x: 0, y: 0 };
    
    // Responsive port offset - smaller on mobile
    const isMobile = window.innerWidth < 640;
    const portOffset = isMobile ? 20 + index * 20 : 30 + index * 28;
    const nodeWidth = isMobile ? 120 : 150;
    
    return {
      x: node.position.x + (isOutput ? nodeWidth : 0),
      y: node.position.y + portOffset,
    };
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 right-1 sm:right-2 z-10 flex gap-1 sm:gap-2 bg-purple-900/60 backdrop-blur-md p-1 sm:p-2 rounded-lg border border-purple-700/50 flex-wrap">
        {NODE_DEFINITIONS.map(def => (
          <Button
            key={def.type}
            onClick={() => addNode(def)}
            size="sm"
            variant="outline"
            className="gap-1 border-purple-600 text-purple-200 hover:bg-purple-700/50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-auto min-h-[28px]"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">{def.label}</span>
          </Button>
        ))}
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* SVG for connections */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {connections.map(conn => {
            const from = getPortPosition(conn.from, true, conn.fromOutput);
            const to = getPortPosition(conn.to, false, conn.toInput);
            const midX = (from.x + to.x) / 2;
            
            return (
              <path
                key={conn.id}
                d={`M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`}
                stroke="#a78bfa"
                strokeWidth="2"
                fill="none"
              />
            );
          })}
          
          {connectingFrom && tempConnection && (() => {
            const from = getPortPosition(connectingFrom.nodeId, true, connectingFrom.outputIndex);
            const midX = (from.x + tempConnection.x) / 2;
            
            return (
              <path
                d={`M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${tempConnection.y}, ${tempConnection.x} ${tempConnection.y}`}
                stroke="#a78bfa"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.5"
              />
            );
          })()}
        </svg>

        {/* Nodes */}
        {nodes.map(node => (
          <Node
            key={node.id}
            node={node}
            onDragStart={handleNodeDragStart}
            onConnectStart={handleConnectStart}
            onConnectEnd={handleConnectEnd}
            onDelete={deleteNode}
            isSelected={selectedNode === node.id}
            onClick={setSelectedNode}
          />
        ))}
      </div>
    </div>
  );
}