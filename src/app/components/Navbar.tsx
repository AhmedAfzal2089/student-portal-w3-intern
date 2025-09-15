import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 px-6 border-b bg-white flex items-center justify-between ml-64 p-6">
      {/* Left - Page Title */}
      <h1 className="text-lg font-semibold">Dashboard</h1>

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
  );
}
