"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function SettingsPage() {
  const [dark, setDark] = useState(false);
  return (

    <div className={dark ? "dark" : ""}>
      <div className="flex min-h-screen w-full">
        <div className="flex min-w-0 flex-1 flex-col">
          <Header dark={dark} onToggleDark={() => setDark(!dark)} />
        </div>
      </div>
    </div>
  );
}