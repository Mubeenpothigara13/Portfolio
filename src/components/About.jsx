import { motion } from "framer-motion";
import { fadeUp, scaleIn, slideLeft, slideRight, stagger, viewportOnce } from "../motion";

const stack = [
  { src: "/html.webp", label: "HTML / CSS" },
  { src: "/c.png", label: "C" },
  { src: "/j.webp", label: "JavaScript" },
  { src: "/f.webp", label: "React" },
  { src: "/b.png", label: "Bootstrap" },
];

function About() {
  return (
    <section className="relative bg-[#121127e3] px-6 md:px-20 py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="md:w-1/2 w-full text-center"
        >
          <span className="bg-green-300 text-black font-semibold px-4 py-1 rounded-md inline-block">
            My TechStack
          </span>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8 place-items-center"
          >
            {stack.map((t) => (
              <motion.div
                key={t.label}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.04 }}
                className="bg-[#121127d8] rounded-xl p-4 w-full flex flex-col items-center justify-center gap-2 border border-white/5 shadow-lg hover:border-cyan-400/40 transition-colors"
              >
                <img src={t.src} alt={t.label} className="h-20 object-contain" />
                <span className="text-gray-300 text-sm">{t.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="md:w-1/2 w-full text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white text-3xl md:text-4xl font-bold tracking-widest"
          >
            Hello! I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Mubeen Pothigara
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 mt-6 text-[17px] leading-relaxed">
            Hey there! I&apos;m a full-stack web developer who loves turning ideas
            into clean, interactive digital experiences. I blend design thinking
            with solid code to build sites that feel as good as they look.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400 mt-4 text-[17px] leading-relaxed">
            I work with HTML, CSS, JavaScript and React on the frontend, and I&apos;m
            comfortable bringing projects to life end to end — from first wireframe
            to deployed product.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
