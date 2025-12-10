import svgPaths from "../imports/svg-d3a2vq9gl7";
import { User, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

interface LandingPageProps {
  onCreateMap: () => void;
  onUsePreconfigured: () => void;
  onOpenPreferences: () => void;
  onOpenHistory: () => void;
  onOpenProfile?: () => void;
}

export function LandingPage({ onCreateMap, onUsePreconfigured, onOpenPreferences, onOpenHistory, onOpenProfile }: LandingPageProps) {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      <Header 
        onOpenProfile={onOpenProfile}
      />
      
      <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 md:p-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h1 className="text-purple-100 text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 sm:mb-4 md:mb-6 italic">GeoTerra</h1>
          <p className="text-purple-200 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">Procedural Map Generation Tool</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-3 sm:px-4">
          <Button
            onClick={onCreateMap}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-24 xs:h-28 sm:h-32 md:h-48 lg:h-64 text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl rounded-2xl shadow-2xl border-2 border-purple-400 transition-all hover:scale-105"
          >
            Create Map
          </Button>

          <Button
            onClick={onUsePreconfigured}
            variant="outline"
            className="flex-1 border-2 border-purple-600 bg-purple-900/40 hover:bg-purple-700/50 text-purple-100 hover:text-white h-24 xs:h-28 sm:h-32 md:h-48 lg:h-64 text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl rounded-2xl shadow-2xl transition-all hover:scale-105"
          >
            Use Pre-configured
          </Button>
        </div>
      </div>
    </div>
  );
}

function Header({ onOpenProfile }: { onOpenProfile?: () => void }) {
  return (
    <header className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-sm border-b border-purple-700/50 flex items-center justify-between px-2 sm:px-3 md:px-6">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-purple-200 text-base sm:text-lg md:text-xl lg:text-2xl italic">GeoTerra</h1>
      </div>

      {/* User Profile Button */}
      <Button
        onClick={onOpenProfile}
        variant="ghost"
        className="text-purple-200 hover:text-white hover:bg-purple-700/50 p-1 md:p-2 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
      >
        <Avatar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 bg-purple-600 border border-purple-400">
          <AvatarFallback className="bg-purple-600 text-white">
            <User className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </AvatarFallback>
        </Avatar>
      </Button>
    </header>
  );
}