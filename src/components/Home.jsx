import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function Home() {
  return (
    <>
      <section className="bg-[#121127] text-white flex flex-col md:flex-row items-center px-6 md:px-20 py-16 gap-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
          <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
            WEB DEVELOPER
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight">
            Talk is cheap. <br /> Show me the code.
          </h1>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <Link
            to="/Contact"
            className="self-center md:self-start border-b-2 border-green-300 text-green-300 hover:text-green-200 hover:border-green-200 transition px-4 py-2"
          >
            LET&apos;S CHAT
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/logo.webp"
            alt="Mubeen Pothigara"
            className="h-[280px] md:h-[450px] object-contain"
          />
        </div>
      </section>

      <About />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
