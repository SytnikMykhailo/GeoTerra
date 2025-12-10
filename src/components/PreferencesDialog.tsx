import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';

interface PreferencesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PreferencesDialog({ open, onOpenChange }: PreferencesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-purple-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-purple-200">User Preferences</DialogTitle>
          <DialogDescription className="text-gray-400">
            Customize your GeoTerra experience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Appearance */}
          <div className="space-y-4">
            <h3 className="text-purple-200">Appearance</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="darkMode" className="text-gray-300">
                Dark Mode
              </Label>
              <Switch id="darkMode" defaultChecked />
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme" className="text-gray-300">
                Theme Color
              </Label>
              <Select defaultValue="purple">
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="purple" className="text-white">Purple</SelectItem>
                  <SelectItem value="blue" className="text-white">Blue</SelectItem>
                  <SelectItem value="green" className="text-white">Green</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Editor Settings */}
          <div className="space-y-4">
            <h3 className="text-purple-200">Editor Settings</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="autoSave" className="text-gray-300">
                Auto-save
              </Label>
              <Switch id="autoSave" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="showGrid" className="text-gray-300">
                Show Grid in 3D View
              </Label>
              <Switch id="showGrid" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="snapToGrid" className="text-gray-300">
                Snap Nodes to Grid
              </Label>
              <Switch id="snapToGrid" />
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Export Settings */}
          <div className="space-y-4">
            <h3 className="text-purple-200">Default Export Settings</h3>
            
            <div className="space-y-2">
              <Label htmlFor="defaultFormat" className="text-gray-300">
                Default Format
              </Label>
              <Select defaultValue="obj">
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="obj" className="text-white">OBJ</SelectItem>
                  <SelectItem value="fbx" className="text-white">FBX</SelectItem>
                  <SelectItem value="gltf" className="text-white">glTF</SelectItem>
                  <SelectItem value="stl" className="text-white">STL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
