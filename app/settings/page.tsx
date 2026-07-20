"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/settings/PageHeader";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex ">
            <div className="hidden lg:block lg:flex-shrink-0">
              <Sidebar />
            </div>
            <div className="flex flex-1 flex-col space-y-4 px-4 py-5 sm:px-6">
            <PageHeader username="Parichay Gupta" lastUpdated="21/07/26" createdOn="18/07/26" />
            </div>
        </main>
      </div>
    </div>
  );
}