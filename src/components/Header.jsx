import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block md:inline-block transition-colors hover:text-cyan-400 ${
      isActive ? 'text-cyan-400' : 'text-white'
    }`;

  const close = () => setMenuOpen(false);

  return (
    <header className="bg-[#121127] shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
        <NavLink to="/" onClick={close} className="text-white text-2xl font-bold">
          Mubeen <span className="text-cyan-500">Pothigara</span>
        </NavLink>

        <button
          aria-label="Toggle menu"
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex md:space-x-8 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/About" className={linkClass}>About</NavLink>
          <NavLink to="/Project" className={linkClass}>Projects</NavLink>
          <NavLink to="/Contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#121127] border-t border-white/10 px-5 py-4 space-y-4 font-medium">
          <NavLink to="/" className={linkClass} onClick={close}>Home</NavLink>
          <NavLink to="/About" className={linkClass} onClick={close}>About</NavLink>
          <NavLink to="/Project" className={linkClass} onClick={close}>Projects</NavLink>
          <NavLink to="/Contact" className={linkClass} onClick={close}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
