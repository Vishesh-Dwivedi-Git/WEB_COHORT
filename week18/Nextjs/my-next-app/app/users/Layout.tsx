import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-lg font-bold">MyApp</h1>
        <h1>Home</h1>
        <h1>Login</h1>
        <h1>Logout</h1>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} MyApp</p>
      </footer>
    </div>
  );
}
