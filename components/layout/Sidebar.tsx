import { NAV_SECTIONS } from '@/assets/mock-data';
import { useState } from 'react';
import { UserCircle2, Power } from "lucide-react";

export default function Sidebar() {
    const [active, setActive] = useState<string>("Solutions");
    return (
      <aside className="hidden w-56 shrink-0 flex-col border-r border-gray-200 bg-white px-4 py-5 lg:flex ">
        <nav className="flex-1 space-y-6 overflow-y-auto" aria-label="Primary">
          {NAV_SECTIONS.map((section) => (
            <div key={section.heading} >
              <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{section.heading}</p>
                <div className="space-y-1">
                  {section.items.map(({ label, icon: Icon }) => {
                    const isActive = active === label;
                      return(
                        <button
                          key={label}
                          type="button"
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setActive(label)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                          isActive ? "bg-violet-50 font-medium text-violet-700" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                          </button>
                        )
                    })}
                </div>
            </div>
          ))}
        </nav>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-gray-100 px-3 py-2.5 dark:border-gray-800">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-900/30">
          <UserCircle2 size={18} />
        </span>
        <span className="flex-1 truncate text-sm font-medium text-gray-700">ikegaiuser</span>
        <Power size={15} className="text-gray-400" aria-label="Sign out" />
      </div>
      </aside>
    );
}   