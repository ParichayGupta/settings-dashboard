"use client";

import { useState, useEffect } from "react";
import { Bell, Moon, Sun } from "lucide-react";
import kpmg from '@/assets/kpmg.png';

export default function Header(){
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showNotifications) {
      timer = setTimeout(() => {
        setShowNotifications(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showNotifications]);

  return (
    <header className="flex items-center justify-between border-b border-gray-500 bg-white px-6 py-2">
      <img src={kpmg.src} alt="Logo" className="w-24" />
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setShowNotifications((s) => !s)}
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500  text-gray-900 border-b border-gray-900 hover:bg-gray-100">
          <Bell size={16} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
        {showNotifications && (
          <div onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(true)}
            className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-gray-100 bg-white p-3 text-xs text-gray-500 shadow-lg">
            You&apos;re all caught up — no new notifications.
          </div>
        )}
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 border-b border-gray-900 hover:bg-gray-400">
        <Moon size={16} />
        </button>
      </div>
    </header>
  );
}
