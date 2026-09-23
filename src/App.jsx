import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./Footer";
import { initSmoothScroll, scrollToSection, startScroll, stopScroll } from "./lib/scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => initSmoothScroll(), []);

  useEffect(() => {
    if (loading) {
      stopScroll();
      return;
    }
    startScroll();
    // Layout settles after the loader and web fonts, so re-measure pinned sections.
    ScrollTrigger.refresh();
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const hash = window.location.hash.replace("#", "");
    if (hash) setTimeout(() => scrollToSection(hash, 0, "auto"), 100);
  }, [loading]);

  return (
    <div className="relative bg-ink text-bone">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className="grain" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="overflow-x-clip">
        <Hero ready={!loading} />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
