import { useState } from "react";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import { EMAIL, SOCIALS } from "../lib/nav";
import { fadeUp, stagger, viewportOnce } from "../motion";
import SectionLabel from "./ui/SectionLabel";
import SplitReveal from "./ui/SplitReveal";
import Magnetic from "./ui/Magnetic";

function Field({ label, as: Tag = "input", ...props }) {
  return (
    <label className="group block border-b border-white/15 pb-3 transition-colors focus-within:border-accent">
      <span className="text-xs uppercase tracking-[0.2em] text-mute">{label}</span>
      <Tag
        {...props}
        className="mt-2 block w-full resize-none bg-transparent text-xl text-bone outline-none placeholder:text-white/20 md:text-2xl"
      />
    </label>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0e0e10] px-5 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionLabel no="05">Contact</SectionLabel>

        <SplitReveal
          lines={["Let's build", { text: "something great.", className: "font-serif italic font-normal text-accent" }]}
          className="mt-6 font-display text-[13vw] font-semibold leading-[0.9] tracking-tightest text-bone md:text-[9vw]"
        />

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <motion.form
            onSubmit={send}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-10 md:col-span-7"
          >
            <motion.div variants={fadeUp} className="grid gap-10 sm:grid-cols-2">
              <Field label="Your name" required value={form.name} onChange={update("name")} placeholder="John Doe" />
              <Field
                label="Your email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="john@company.com"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Field
                label="Tell me about your project"
                as="textarea"
                rows={3}
                required
                value={form.message}
                onChange={update("message")}
                placeholder="I need an AI dashboard for…"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.4}>
                <button
                  type="submit"
                  className="group flex h-36 w-36 flex-col items-center justify-center rounded-full bg-accent text-ink transition-transform duration-500 hover:scale-105 md:h-44 md:w-44"
                >
                  <TbArrowUpRight className="text-3xl transition-transform duration-500 group-hover:rotate-45" />
                  <span className="mt-1 text-sm font-semibold uppercase tracking-widest">Send</span>
                </button>
              </Magnetic>
            </motion.div>
          </motion.form>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-10 md:col-span-4 md:col-start-9"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block break-all font-display text-xl text-bone transition-colors hover:text-accent md:text-2xl"
              >
                {EMAIL}
              </a>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Location</p>
              <p className="mt-2 text-lg text-bone">Himmatnagar, Gujarat, India</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Socials</p>
              <ul className="mt-3 border-t border-white/10">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-white/10 py-4 text-lg text-bone"
                    >
                      <span className="transition-transform duration-500 group-hover:translate-x-2">{s.label}</span>
                      <TbArrowUpRight className="transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
