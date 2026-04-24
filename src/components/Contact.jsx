import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../motion";

const EMAIL = "mubeenpothigara2002@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "mt-2 w-full sm:w-[320px] p-4 rounded-full bg-[rgba(18,17,39,0.259)] border-2 border-teal-300/70 text-white outline-none transition-colors focus:border-teal-200";

  const navClass =
    "relative inline-block hover:text-teal-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <section className="relative bg-[rgba(18,17,39,0.929)] text-white py-24 px-6 md:px-20 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col lg:flex-row justify-around items-start gap-12">
        <motion.form
          onSubmit={send}
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6 w-full lg:w-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl tracking-wide">
            Let&apos;s make something{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              amazing together.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-3xl tracking-wide">
            Start by <span className="text-teal-300">saying hi</span>
          </motion.p>

          <motion.div variants={stagger(0.08)} className="space-y-4">
            <motion.div variants={fadeUp}>
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
            </motion.div>

            <motion.div variants={fadeUp}>
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
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-lg font-medium">Message:</label>
              <br />
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Write your message here"
                className="mt-2 w-full sm:w-[320px] p-4 rounded-3xl bg-[rgba(18,17,39,0.259)] border-2 border-teal-300/70 text-white outline-none resize-none transition-colors focus:border-teal-200"
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative text-lg text-teal-300 px-3 py-1 mt-3 transition-colors duration-300 hover:text-teal-200 group"
            >
              Send →
              <span className="absolute bottom-0 left-2 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-[90%]"></span>
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-md space-y-6 w-full lg:w-auto"
        >
          <motion.h1 variants={fadeUp} className="text-gray-400 tracking-wider text-2xl">
            INFORMATION.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-400 text-base tracking-wider pt-2">
            Near Madina Masjid, HMT, Gujarat-383001
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={`mailto:${EMAIL}`}
            className="text-2xl tracking-wider pt-2 pb-5 block hover:text-teal-300 transition-colors break-all"
          >
            {EMAIL}
          </motion.a>

          <motion.div variants={fadeUp} className="flex gap-5 text-2xl text-gray-300 pt-2">
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
                whileHover={{ y: -4, scale: 1.15 }}
                className="hover:text-teal-300 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.ul variants={stagger(0.06)} className="space-y-4 text-lg pt-4">
            {[
              { to: "/", label: "home" },
              { to: "/About", label: "about" },
              { to: "/Project", label: "projects" },
              { to: "/Contact", label: "contact" },
            ].map((l) => (
              <motion.li key={l.to} variants={fadeUp}>
                <NavLink to={l.to} className={navClass}>
                  {l.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
