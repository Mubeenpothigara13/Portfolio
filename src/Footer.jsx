import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="bg-[#0c0b1f] text-gray-300 py-6 px-5 border-t border-white/5"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Mubeen{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-semibold">
            Pothigara
          </span>
          <span className="ml-2 text-gray-500">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </p>

        <div className="flex gap-4 text-lg">
          {[
            { icon: FaGithub, href: "https://github.com/Mubeenpothigara13", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
            { icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.15 }}
              className="hover:text-teal-300 transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
