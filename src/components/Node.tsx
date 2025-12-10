import { useRef } from 'react';
import { NodeType } from '../types';

interface NodeProps {
  node: NodeType;
  onDragStart: (id: string, e: React.MouseEvent) => void;
  onConnectStart: (nodeId: string, outputIndex: number, e: React.MouseEvent) => void;
  onConnectEnd: (nodeId: string, inputIndex: number) => void;
  onDelete: (id: string) => void;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const NODE_COLORS = {
  noise: '#10b981',
  multiply: '#f59e0b',
  add: '#3b82f6',
  clamp: '#8b5cf6',
  output: '#ef4444',
};

const NODE_LABELS = {
  noise: 'Noise',
  multiply: 'Multiply',
  add: 'Add',
  clamp: 'Clamp',
  output: 'Output',
};

export function Node({ 
  node, 
  onDragStart, 
  onConnectStart, 
  onConnectEnd,
  onDelete,
  isSelected,
  onClick 
}: NodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.port')) return;
    onDragStart(node.id, e);
  };

  return (
    <div
      ref={nodeRef}
      className="absolute cursor-move select-none"
      style={{ left: node.position.x, top: node.position.y }}
      onMouseDown={handleMouseDown}
      onClick={() => onClick(node.id)}
    >
      <div 
        className={`bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border-2 transition-all ${
          isSelected ? 'border-purple-400 shadow-purple-400/50' : 'border-purple-700/50'
        }`}
        style={{ minWidth: '120px', width: 'max-content' }}
      >
        {/* Header */}
        <div 
          className="px-2 py-1 sm:px-3 sm:py-2 rounded-t-lg text-white text-xs sm:text-sm"
          style={{ backgroundColor: NODE_COLORS[node.type] }}
        >
          <div className="flex items-center justify-between">
            <span className="whitespace-nowrap">{NODE_LABELS[node.type]}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(node.id);
              }}
              className="text-white/80 hover:text-white transition-colors ml-2 text-base sm:text-lg"
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-2 sm:p-3">
          {/* Input ports */}
          {node.inputs.length > 0 && (
            <div className="space-y-1 sm:space-y-2 mb-1 sm:mb-2">
              {node.inputs.map((input, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2">
                  <div
                    className="port w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-900 border-2 border-purple-400 cursor-pointer hover:bg-purple-600 transition-colors flex-shrink-0"
                    onMouseUp={() => onConnectEnd(node.id, idx)}
                  />
                  <span className="text-purple-200 text-xs sm:text-sm whitespace-nowrap">In {idx + 1}</span>
                </div>
              ))}
            </div>
          )}

          {/* Output ports */}
          {node.outputs.length > 0 && (
            <div className="space-y-1 sm:space-y-2">
              {node.outputs.map((output, idx) => (
                <div key={idx} className="flex items-center justify-end gap-1 sm:gap-2">
                  <span className="text-purple-200 text-xs sm:text-sm whitespace-nowrap">Out {idx + 1}</span>
                  <div
                    className="port w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-900 border-2 border-purple-400 cursor-pointer hover:bg-purple-600 transition-colors flex-shrink-0"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      onConnectStart(node.id, idx, e);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}