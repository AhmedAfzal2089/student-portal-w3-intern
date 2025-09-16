"use client";

import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Courses", href: "/course" },
  { label: "Results", href: "/results" },
  { label: "Attendance", href: "/attendance" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="h-16 px-6 border-b bg-white flex items-center justify-between md:ml-64 p-6">
        {/* Left - Hamburger (mobile only) + Page Title */}
        <div className="flex items-center gap-4">
          {/* Hamburger menu button - only on mobile */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Right - Notification + User */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              BA
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">Babar Azam</div>
              <div className="text-xs text-muted-foreground">
                babar@devxcript.c...
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Drawer Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setDrawerOpen(false)}
              className="px-4 py-3 rounded hover:bg-gray-100 font-medium text-gray-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
