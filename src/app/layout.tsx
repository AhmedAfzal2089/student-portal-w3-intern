import "./globals.css";

export const metadata = {
  title: "DevXcript",
  description: "Student Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-muted">{children}</body>
    </html>
  );
}
