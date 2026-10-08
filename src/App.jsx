import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex gap-6 p-4 border-b border-gray-200 bg-white shadow-sm">
        <Link
          to="/home"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Beranda
        </Link>
        <Link
          to="/about"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Tentang
        </Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
