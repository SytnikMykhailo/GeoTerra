import { useState } from 'react';
import { User, Settings, History, LogOut, ChevronDown, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

interface HeaderProps {
  onOpenPreferences?: () => void;
  onOpenHistory?: () => void;
  onOpenProfile?: () => void;
  onBack?: () => void;
  showBackButton?: boolean;
  hideProfileButton?: boolean;
}

export function Header({ onOpenPreferences, onOpenHistory, onOpenProfile, onBack, showBackButton = false, hideProfileButton = false }: HeaderProps) {
  return (
    <header className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-sm border-b border-purple-700/50 flex items-center justify-between px-2 sm:px-3 md:px-6">
      {/* Logo with optional back button */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        {showBackButton && onBack && (
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-purple-200 hover:text-white hover:bg-purple-700/50 px-1.5 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9"
          >
            <ArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 md:mr-2" />
            <span className="hidden sm:inline text-xs sm:text-sm">Back</span>
          </Button>
        )}
        <h1 className="text-purple-200 text-base sm:text-lg md:text-xl lg:text-2xl italic">GeoTerra</h1>
      </div>

      {/* User Profile Button */}
      {!hideProfileButton && (
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
      )}
    </header>
  );
}