const stack = [
  { src: "/html.webp", label: "HTML / CSS" },
  { src: "/c.png", label: "C" },
  { src: "/j.webp", label: "JavaScript" },
  { src: "/f.webp", label: "React" },
  { src: "/b.png", label: "Bootstrap" },
];

function About() {
  return (
    <section className="bg-[#121127e3] px-6 md:px-20 py-20 flex flex-col md:flex-row items-center md:items-start gap-12">
      <div className="md:w-1/2 w-full text-center">
        <span className="bg-green-300 text-black font-semibold px-4 py-1 rounded-md inline-block">
          My TechStack
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8 place-items-center">
          {stack.map((t) => (
            <div
              key={t.label}
              className="bg-[#121127d8] rounded-lg p-4 w-full flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <img src={t.src} alt={t.label} className="h-20 object-contain" />
              <span className="text-gray-300 text-sm">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 w-full text-left">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-widest">
          Hello! I&apos;m Mubeen Pothigara
        </h1>

        <p className="text-gray-400 mt-6 text-[17px] leading-relaxed">
          Hey there! I&apos;m a full-stack web developer who loves turning ideas
          into clean, interactive digital experiences. I enjoy blending design
          thinking with solid code to build sites that feel as good as they look.
        </p>

        <p className="text-gray-400 mt-4 text-[17px] leading-relaxed">
          I work with HTML, CSS, JavaScript and React on the frontend, and I&apos;m
          comfortable bringing projects to life end to end — from first wireframe
          to deployed product.
        </p>
      </div>
    </section>
  );
}

export default About;
