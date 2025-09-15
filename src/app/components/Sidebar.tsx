import Link from "next/link";
import { LayoutDashboard, BookOpen, FileText, CheckSquare } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Courses", icon: BookOpen, href: "/courses" },
  { label: "Results", icon: FileText, href: "/results" },
  { label: "Attendance", icon: CheckSquare, href: "/attendance" },
];
const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r flex flex-col justify-between z-50">
      {/* Top - Logo */}
      <div>
        <div className="p-6 flex items-center gap-2">
          <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
            DX
          </div>
          <div>
            <div className="text-lg font-semibold">DevXcript</div>
            <div className="text-sm text-muted-foreground">Student Portal</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-2 mt-4 space-y-1">
          {navItems.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center px-3 py-5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary transition group"
            >
              <Icon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-primary" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom - Footer */}
      <div className="text-center text-xs text-muted-foreground mb-4">
        Developed By DevXcript
      </div>
    </aside>
  );
};

export default Sidebar;
