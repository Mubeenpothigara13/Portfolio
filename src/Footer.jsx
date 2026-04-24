import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0c0b1f] text-gray-300 py-6 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Mubeen <span className="text-cyan-500">Pothigara</span>
          <span className="ml-2 text-gray-500">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </p>

        <div className="flex gap-4 text-lg">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-teal-300 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal-300 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-teal-300 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
