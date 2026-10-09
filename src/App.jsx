import logo from "./assets/logo.png";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex flex-col items-center border-b border-gray-200 shadow-sm pb-4 lg:flex-row lg:justify-between">
        <Link to="/home">
          <img
            src={logo}
            alt="Logo E-Shop"
            className="w-20 h-20 ml-5 rounded-xl cursor-pointer object-cover"
          />
        </Link>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Cari produk..."
            className="border border-gray-300 bg-white rounded-xl px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80% lg:px-50"
          />
          <button>
            <i class="fa-solid fa-magnifying-glass text-blue-600 text-2xl cursor-pointer hover:text-blue-800"></i>
          </button>
        </div>

        <div className="flex items-center gap-4 mr-5 mt-3">
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
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Logout
          </Link>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
