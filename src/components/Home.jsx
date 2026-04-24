import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { fadeUp, stagger } from "../motion";

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#121127] text-white flex flex-col md:flex-row items-center px-6 md:px-20 py-20 gap-10 min-h-[90vh]">
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={stagger(0.15, 0.2)}
          initial="hidden"
          animate="show"
          className="relative w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6 z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent animate-gradient"
          >
            WEB DEVELOPER
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            Talk is cheap. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Show me the code.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 max-w-md mx-auto md:mx-0">
            I design and code beautifully simple things, and I love what I do.
          </motion.p>

          <motion.div variants={fadeUp} className="self-center md:self-start">
            <Link
              to="/Contact"
              className="inline-block relative border-b-2 border-green-300 text-green-300 hover:text-green-200 hover:border-green-200 transition px-4 py-2"
            >
              <motion.span
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                LET&apos;S CHAT →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center z-10"
        >
          <motion.img
            src="/logo.webp"
            alt="Mubeen Pothigara"
            className="h-[280px] md:h-[450px] object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <About />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
