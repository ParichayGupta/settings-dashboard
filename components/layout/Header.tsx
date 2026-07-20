"use client";

import { useState } from "react";
import { Bell, Moon, Sun } from "lucide-react";

export interface HeaderProps {
  dark: boolean;
  onToggleDark: () => void;
}

export default function Header({ dark, onToggleDark }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="flex items-center justify-end gap-3 border-b border-gray-100 bg-white px-6 py-3 dark:border-gray-800 dark:bg-gray-900">
      <div className="relative">
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setShowNotifications((s) => !s)}
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
        >
          <Bell size={16} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
        {showNotifications && (
          <div className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-gray-100 bg-white p-3 text-xs text-gray-500 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            You&apos;re all caught up — no new notifications.
          </div>
        )}
      </div>
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={onToggleDark}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
