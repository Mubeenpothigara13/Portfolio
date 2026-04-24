import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/Project', label: 'Projects' },
  { to: '/Contact', label: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#121127]/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-white/5"
    >
      <div className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
        <NavLink to="/" onClick={close} className="text-white text-2xl font-bold">
          Mubeen{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Pothigara
          </span>
        </NavLink>

        <button
          aria-label="Toggle menu"
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </motion.span>
          </AnimatePresence>
        </button>

        <nav className="hidden md:flex md:space-x-8 font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : 'text-white'
                } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121127] border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-4 font-medium">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `block transition-colors hover:text-cyan-400 ${
                      isActive ? 'text-cyan-400' : 'text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
