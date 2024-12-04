'use client';

import { Home, BookOpen, Trophy, Lightbulb, AlertCircle, Share2 } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: <Home />, label: '' },
    { icon: <BookOpen />, label: '' },
    { icon: <Trophy />, label: '' },
    { icon: <Lightbulb />, label: '' },
    { icon: <AlertCircle />, label: '' },
    { icon: <Share2 />, label: '' },
  ];

  return (
    <aside className="w-20 bg-[#0B2D4E] flex flex-col items-center py-4">
      {navItems.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center mb-6 cursor-pointer hover:text-[#FFD700]"
        >
          <div className="p-2">{item.icon}</div>
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </aside>
  );
}
