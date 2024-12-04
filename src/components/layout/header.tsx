'use client';

import { Bell, Settings, Wifi, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-[#0B2D4E] flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-4">
        <Wifi />
        <span>Connected</span>
      </div>
      <div className="flex items-center gap-6">
        <User className="cursor-pointer" />
        <div className="flex items-center gap-2">
          <span>Level 5</span>
          <div className="h-2 w-24 bg-[#1E90FF] rounded-full">
            <div className="h-full w-2/3 bg-[#FFD700] rounded-full"></div>
          </div>
        </div>
        <span>50 PTS</span>
        <Bell className="cursor-pointer" />
        <Settings className="cursor-pointer" />
      </div>
    </header>
  );
}
