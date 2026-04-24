const projects = [
  {
    title: "E-Commerce Site",
    tags: "HTML | CSS | FIGMA",
    img: "/figma.png",
    url: "#",
  },
  {
    title: "Portfolio",
    tags: "REACT JS",
    img: "/port.png",
    url: "#",
  },
  {
    title: "Bootstrap Demo",
    tags: "HTML | CSS | BOOTSTRAP",
    img: "/boots.png",
    url: "#",
  },
  {
    title: "Elegance Site",
    tags: "HTML | CSS",
    img: "/elegance.png",
    url: "#",
  },
];

function Project() {
  return (
    <section className="bg-[#121127c2] px-6 md:px-20 py-20">
      <h2 className="text-white text-4xl font-bold pb-10 text-center md:text-left">
        Latest Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="bg-black/60 rounded-3xl shadow-md overflow-hidden w-full max-w-[320px] cursor-pointer group"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="bg-gray-100/10 p-5">
              <h3 className="text-white text-xl font-semibold">{p.title}</h3>
              <p className="bg-gray-500 text-white rounded-full px-4 py-1 mt-2 inline-block text-sm">
                {p.tags}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
