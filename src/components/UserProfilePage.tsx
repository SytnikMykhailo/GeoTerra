import { useState } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Settings, History, Download, FileText, Clock } from 'lucide-react';

type ProfileSection = 'preferences' | 'history';

interface ExportHistoryItem {
  id: string;
  name: string;
  date: string;
  format: string;
  size: string;
}

export function UserProfilePage() {
  const [activeSection, setActiveSection] = useState<ProfileSection>('preferences');
  
  // Preferences state
  const [autoSave, setAutoSave] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [enableShortcuts, setEnableShortcuts] = useState(true);
  const [theme, setTheme] = useState('purple');
  const [quality, setQuality] = useState('high');
  const [language, setLanguage] = useState('english');

  // Mock export history
  const exportHistory: ExportHistoryItem[] = [
    { id: '1', name: 'Mountain_Terrain_01.obj', date: '2025-11-18 14:32', format: 'OBJ', size: '24.5 MB' },
    { id: '2', name: 'Desert_Map_02.fbx', date: '2025-11-17 10:15', format: 'FBX', size: '18.2 MB' },
    { id: '3', name: 'Ocean_Terrain.gltf', date: '2025-11-16 16:45', format: 'glTF', size: '32.1 MB' },
    { id: '4', name: 'Canyon_Height_Map.stl', date: '2025-11-15 09:22', format: 'STL', size: '15.8 MB' },
    { id: '5', name: 'Forest_Terrain_05.obj', date: '2025-11-14 12:03', format: 'OBJ', size: '28.7 MB' },
  ];

  return (
    <div className="w-screen h-full flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Left Panel - Navigation */}
      <div className="w-full md:w-[40%] lg:w-[35%] h-auto md:h-full bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm md:border-r border-purple-700/50 flex flex-col p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-purple-600 border-2 border-purple-400 flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-purple-100 text-lg sm:text-xl md:text-2xl truncate">User Profile</h2>
            <p className="text-purple-300 text-xs sm:text-sm truncate">Manage your settings</p>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <button
            onClick={() => setActiveSection('preferences')}
            className={`w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 rounded-lg transition-all ${
              activeSection === 'preferences'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-800/50 text-purple-200 hover:bg-gray-700/70 hover:text-white'
            }`}
          >
            <Settings className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-base sm:text-lg md:text-2xl truncate">User Preferences</span>
          </button>

          <button
            onClick={() => setActiveSection('history')}
            className={`w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 rounded-lg transition-all ${
              activeSection === 'history'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-800/50 text-purple-200 hover:bg-gray-700/70 hover:text-white'
            }`}
          >
            <History className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-base sm:text-lg md:text-2xl truncate">Export History</span>
          </button>
        </div>

        <div className="mt-auto hidden md:block">
          <Card className="bg-purple-900/40 backdrop-blur-sm border-purple-700/50 p-4">
            <p className="text-purple-200 text-sm">
              Configure your application settings and view your export history.
            </p>
          </Card>
        </div>
      </div>

      {/* Right Panel - Content */}
      <div className="w-full md:w-[60%] lg:w-[65%] h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeSection === 'preferences' ? (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="text-purple-100 text-xl sm:text-2xl md:text-4xl mb-1 md:mb-2">User Preferences</h2>
                <p className="text-purple-300 text-xs sm:text-sm md:text-base">Customize your application experience</p>
              </div>

              {/* General Settings */}
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <h3 className="text-purple-100 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                  General Settings
                </h3>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Label className="text-purple-200 text-sm sm:text-base">Auto-save</Label>
                      <p className="text-xs sm:text-sm text-purple-300 mt-1">Automatically save your work</p>
                    </div>
                    <Switch checked={autoSave} onCheckedChange={setAutoSave} className="flex-shrink-0" />
                  </div>

                  <Separator className="bg-purple-700/50" />

                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Label className="text-purple-200 text-sm sm:text-base">Show Grid</Label>
                      <p className="text-xs sm:text-sm text-purple-300 mt-1">Display grid in 3D preview</p>
                    </div>
                    <Switch checked={showGrid} onCheckedChange={setShowGrid} className="flex-shrink-0" />
                  </div>

                  <Separator className="bg-purple-700/50" />

                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Label className="text-purple-200 text-sm sm:text-base">Keyboard Shortcuts</Label>
                      <p className="text-xs sm:text-sm text-purple-300 mt-1">Enable keyboard shortcuts</p>
                    </div>
                    <Switch checked={enableShortcuts} onCheckedChange={setEnableShortcuts} className="flex-shrink-0" />
                  </div>
                </div>
              </Card>

              {/* Appearance */}
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <h3 className="text-purple-100 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6">Appearance</h3>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">Theme</Label>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger className="bg-gray-700/50 border-purple-600 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-purple-600">
                        <SelectItem value="purple" className="text-white text-sm sm:text-base">Purple (Default)</SelectItem>
                        <SelectItem value="dark" className="text-white text-sm sm:text-base">Dark</SelectItem>
                        <SelectItem value="blue" className="text-white text-sm sm:text-base">Blue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">Render Quality</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger className="bg-gray-700/50 border-purple-600 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-purple-600">
                        <SelectItem value="low" className="text-white text-sm sm:text-base">Low</SelectItem>
                        <SelectItem value="medium" className="text-white text-sm sm:text-base">Medium</SelectItem>
                        <SelectItem value="high" className="text-white text-sm sm:text-base">High</SelectItem>
                        <SelectItem value="ultra" className="text-white text-sm sm:text-base">Ultra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* Language & Region */}
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <h3 className="text-purple-100 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6">Language & Region</h3>

                <div className="space-y-2">
                  <Label className="text-purple-200 text-sm sm:text-base">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="bg-gray-700/50 border-purple-600 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-purple-600">
                      <SelectItem value="english" className="text-white text-sm sm:text-base">English</SelectItem>
                      <SelectItem value="ukrainian" className="text-white text-sm sm:text-base">Українська</SelectItem>
                      <SelectItem value="spanish" className="text-white text-sm sm:text-base">Español</SelectItem>
                      <SelectItem value="french" className="text-white text-sm sm:text-base">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Save Button */}
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 sm:h-13 md:h-14 text-base sm:text-lg transition-all">
                Save Preferences
              </Button>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="text-purple-100 text-xl sm:text-2xl md:text-4xl mb-1 md:mb-2">Export History</h2>
                <p className="text-purple-300 text-xs sm:text-sm md:text-base">View and manage your exported files</p>
              </div>

              {/* History List */}
              <div className="space-y-2 sm:space-y-3">
                {exportHistory.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-3 sm:p-4 md:p-6 hover:border-purple-500 transition-all"
                  >
                    <div className="flex items-start justify-between flex-col sm:flex-row gap-3">
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-purple-600/30 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-purple-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-purple-100 mb-1 text-sm sm:text-base truncate">{item.name}</h4>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-purple-300">
                            <span className="flex items-center gap-1 flex-shrink-0">
                              <Clock className="w-3 h-3" />
                              <span className="hidden xs:inline">{item.date}</span>
                              <span className="xs:hidden">{item.date.split(' ')[0]}</span>
                            </span>
                            <span className="flex-shrink-0">Format: {item.format}</span>
                            <span className="flex-shrink-0">Size: {item.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-300 hover:text-white hover:bg-purple-600/50 w-full sm:w-auto flex-shrink-0 text-xs sm:text-sm"
                      >
                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {exportHistory.length === 0 && (
                <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-8 sm:p-10 md:p-12 text-center">
                  <History className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-purple-200 text-base sm:text-lg">No export history yet</p>
                  <p className="text-purple-300 text-xs sm:text-sm mt-2">
                    Your exported files will appear here
                  </p>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}