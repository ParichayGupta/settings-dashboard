"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function SettingsPage() {
  return (
  
      <div className="flex min-h-screen w-full bg-gray-50">

        <div className="flex min-w-0 flex-1 flex-col">
          <Header/>
          <main className="flex-1 overflow-y-auto p-6">
            <Sidebar />
          </main>
        </div>
      </div>
  );
}