import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../motion";

const projects = [
  { title: "E-Commerce Site", tags: "HTML | CSS | FIGMA", img: "/figma.png", url: "#" },
  { title: "Portfolio", tags: "REACT JS", img: "/port.png", url: "#" },
  { title: "Bootstrap Demo", tags: "HTML | CSS | BOOTSTRAP", img: "/boots.png", url: "#" },
  { title: "Elegance Site", tags: "HTML | CSS", img: "/elegance.png", url: "#" },
];

function Project() {
  return (
    <section className="bg-[#121127c2] px-6 md:px-20 py-24">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-white text-4xl md:text-5xl font-bold pb-12 text-center md:text-left"
      >
        Latest{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Work
        </span>
      </motion.h2>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
      >
        {projects.map((p) => (
          <motion.a
            key={p.title}
            variants={scaleIn}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="relative bg-black/60 rounded-3xl shadow-xl overflow-hidden w-full max-w-[320px] cursor-pointer group border border-white/5 hover:border-cyan-400/40 transition-colors"
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-cyan-300 text-sm tracking-wider">View Project →</span>
              </div>
            </div>
            <div className="bg-gray-100/10 p-5">
              <h3 className="text-white text-xl font-semibold">{p.title}</h3>
              <p className="bg-gray-500/70 text-white rounded-full px-4 py-1 mt-2 inline-block text-sm">
                {p.tags}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Project;
