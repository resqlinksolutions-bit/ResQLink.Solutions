import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      backdrop-blur-md bg-white/10 border border-white/10
      rounded-full px-8 py-3 flex items-center gap-8">

      <div className="flex items-center gap-2">
        <img src={logo} alt="ResQLink Logo" className="h-6" />
        <span className="font-semibold tracking-wide">ResQLink</span>
      </div>

      <div className="hidden md:flex gap-6 text-sm">
        <Link to="/technology">Technology</Link>
        <Link to="/features">Features</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-xs px-3 py-1 border border-white/20 rounded-full">
          Account
        </button>
        <span className="text-xs opacity-70 max-w-[80px] truncate border-l pl-3">
          Explorer
        </span>
      </div>
    </nav>
  );
}
