import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Download, Trash2, FileDown } from 'lucide-react';
import { Card } from './ui/card';

interface ExportHistoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ExportRecord {
  id: string;
  name: string;
  format: string;
  date: string;
  size: string;
}

const mockHistory: ExportRecord[] = [
  {
    id: '1',
    name: 'Mountain_Terrain_v1',
    format: 'OBJ',
    date: '2025-11-12 14:30',
    size: '2.4 MB',
  },
  {
    id: '2',
    name: 'Valley_Map_Final',
    format: 'glTF',
    date: '2025-11-11 09:15',
    size: '1.8 MB',
  },
  {
    id: '3',
    name: 'Desert_Landscape',
    format: 'FBX',
    date: '2025-11-10 16:45',
    size: '3.2 MB',
  },
  {
    id: '4',
    name: 'Forest_Terrain_Test',
    format: 'OBJ',
    date: '2025-11-09 11:20',
    size: '2.1 MB',
  },
];

export function ExportHistoryDialog({ open, onOpenChange }: ExportHistoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-purple-700 text-white max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-purple-200">Export History</DialogTitle>
          <DialogDescription className="text-gray-400">
            View and manage your previous exports
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
          {mockHistory.map((record) => (
            <Card 
              key={record.id} 
              className="bg-gray-700/50 border-purple-700/50 p-4 hover:bg-gray-700/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded">
                    <FileDown className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-white">{record.name}</h4>
                    <div className="flex gap-3 text-sm text-gray-400 mt-1">
                      <span className="uppercase">{record.format}</span>
                      <span>•</span>
                      <span>{record.size}</span>
                      <span>•</span>
                      <span>{record.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-600 text-purple-200 hover:bg-purple-600/20"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-300 hover:bg-red-600/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
