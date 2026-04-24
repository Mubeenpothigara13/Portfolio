import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const EMAIL = "mubeenpothigara2002@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "mt-2 w-full sm:w-[320px] p-4 rounded-full bg-[rgba(18,17,39,0.259)] border-2 border-teal-300 text-white outline-none focus:border-teal-200";

  const navClass =
    "relative inline-block hover:text-teal-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <section className="bg-[rgba(18,17,39,0.929)] text-white py-20 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row justify-around items-start gap-12">
        <form onSubmit={send} className="space-y-6 w-full lg:w-auto">
          <h2 className="text-3xl tracking-wide">
            Let&apos;s make something amazing together.
          </h2>
          <p className="text-3xl tracking-wide">
            Start by <span className="text-teal-300">saying hi</span>
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-lg font-medium">Name:</label>
              <br />
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your Name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Email address:</label>
              <br />
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="Your Email"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Message:</label>
              <br />
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Write your message here"
                className="mt-2 w-full sm:w-[320px] p-4 rounded-3xl bg-[rgba(18,17,39,0.259)] border-2 border-teal-300 text-white outline-none focus:border-teal-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="relative text-lg text-teal-300 px-3 py-1 mt-3 transition-colors duration-300 hover:text-teal-200 group"
            >
              Send
              <span className="absolute bottom-0 left-2 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-[90%]"></span>
            </button>
          </div>
        </form>

        <div className="max-w-md space-y-6 w-full lg:w-auto">
          <h1 className="text-gray-400 tracking-wider text-2xl">INFORMATION.</h1>

          <p className="text-gray-400 text-base tracking-wider pt-2">
            Near Madina Masjid, HMT, Gujarat-383001
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="text-2xl tracking-wider pt-2 pb-5 block hover:text-teal-300 transition-colors break-all"
          >
            {EMAIL}
          </a>

          <div className="flex gap-5 text-2xl text-gray-300 pt-2">
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

          <ul className="space-y-4 text-lg pt-4">
            <li><NavLink to="/" className={navClass}>home</NavLink></li>
            <li><NavLink to="/About" className={navClass}>about</NavLink></li>
            <li><NavLink to="/Project" className={navClass}>projects</NavLink></li>
            <li><NavLink to="/Contact" className={navClass}>contact</NavLink></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
