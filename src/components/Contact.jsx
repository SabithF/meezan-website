import React, { useState } from "react";
import { motion } from "motion/react";

// ===== Motion Variants (same pattern) =====
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUpStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeChild = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace with your API / Email service
    console.log("Contact form submitted:", form);

    // Optional: clear form
    setForm({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="w-full font-outfit ">
      {/* ===================== HERO ===================== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/assets/img/banner/team-banner.jpg"
          alt="Contact Meezan Group"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/55" />

        {/* Hero title */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <h1 className="text-white font-messiri text-4xl md:text-6xl drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Reach out for enquiries, partnerships, or support — we’ll get back to
              you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== CONTENT (Luxury Background) ===================== */}
      <section className="relative py-20 px-4 md:px-6 lg:px-10">
        {/* Luxury background layers */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7F6F2] via-white to-[#EEF1EA]" />

          {/* Soft radial glows */}
          {/* <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#3F4F2A]/10 blur-[120px]" />
          <div className="absolute bottom-[-80px] right-[-60px] w-[460px] h-[460px] rounded-full bg-[#C9B873]/10 blur-[120px]" /> */}

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] via-transparent to-black/[0.06]" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* ===== LEFT: Contact info cards ===== */}
            <motion.aside
              variants={fadeChild}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <h2 className="text-2xl md:text-3xl font-messiri text-slate-900">
                  Let’s talk
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Whether you’re looking for product information, business
                  opportunities, or general enquiries, we’re happy to help.
                </p>

                <div className="mt-6 space-y-4">
                  <InfoRow
                    label="Phone"
                    value="+94 XX XXX XXXX"
                    hint="Mon–Sat, 9:00 AM – 6:00 PM"
                  />
                  <InfoRow
                    label="Email"
                    value="info@meezangroup.lk"
                    hint="We typically respond within 24–48 hours"
                  />
                  <InfoRow
                    label="Address"
                    value="Matale, Sri Lanka"
                    hint="Visit by appointment if needed"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <h3 className="text-xl font-messiri text-slate-900">
                  Business Hours
                </h3>
                <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                  <li className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-slate-800">9:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-slate-800">9:00 – 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-slate-800">Closed</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-white/70 border border-white/50 p-4 text-sm text-slate-600">
                  For urgent matters, please call during business hours.
                </div>
              </div>
            </motion.aside>

            {/* ===== RIGHT: Contact form ===== */}
            <motion.section variants={fadeChild} className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <h2 className="text-2xl md:text-3xl font-messiri text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Fill out the form and our team will get back to you.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Full Name"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      type="email"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Phone (optional)"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+94 ..."
                    />
                    <Field
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      rows={6}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 text-slate-800 outline-none transition focus:bg-white focus:border-[#C9B873] focus:ring-2 focus:ring-[#C9B873]/30"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      By submitting this form, you agree to be contacted by Meezan
                      Group regarding your enquiry.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-2xl
                      bg-gradient-to-br from-[#3F4F2A] to-[#2E3B1F]
                      px-6 py-3 text-sm font-semibold text-white
                      shadow-[0_10px_30px_-10px_rgba(63,79,42,0.6)]
                      transition hover:brightness-110 active:scale-[0.98]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.section>
          </motion.div>

          {/* ===================== MAP ===================== */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12"
          >
            <div className="overflow-hidden rounded-3xl border border-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] bg-white/80 backdrop-blur-xl">
              <div className="px-8 py-6 border-b border-white/40">
                <h3 className="text-xl font-messiri text-slate-900">
                  Find us on the map
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Replace the embed link with your exact location.
                </p>
              </div>

              <iframe
                title="Meezan Group Location"
                src="https://www.google.com/maps?q=Matale%20Sri%20Lanka&output=embed"
                className="w-full h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

// ===== Small UI helpers =====
const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}) => {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 text-slate-800 outline-none transition focus:bg-white focus:border-[#C9B873] focus:ring-2 focus:ring-[#C9B873]/30"
      />
    </div>
  );
};

const InfoRow = ({ label, value, hint }) => {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            {label}
          </p>
          <p className="mt-1 text-slate-900 font-semibold">{value}</p>
          {hint && <p className="mt-1 text-sm text-slate-600">{hint}</p>}
        </div>
      </div>
    </div>
  );
};
