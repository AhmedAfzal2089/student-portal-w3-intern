import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 p-6 bg-muted">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
