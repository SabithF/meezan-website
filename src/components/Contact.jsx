import React, { useRef, useState } from "react";
import { motion } from "motion/react";
// import emailjs from '@emailjs/browser';


// ===== Motion Variants =====
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
  const formRef = useRef();
  const [alert, setAlert] = useState(null);



  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });



  const onSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setAlert({ type: "info", message: "Sending..." });

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "c4ccddfa-9d4e-4572-953b-cc4ba678808e");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setAlert({ type: "success", message: "Message sent successfully!" });

      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setAlert(null), 4000); // ✅ must be a function
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };



  return (
    <main className="w-full font-outfit">
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/assets/img/banner/team-banner.jpg"
          alt="Contact Meezan Group"
          className="absolute inset-0 w-full h-full object-cover"
        />

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

      {/* ===================== CONTENT WITH IMAGE BACKGROUND ===================== */}
      <section
        className="relative py-20 px-4 md:px-6 lg:px-10 overflow-hidden opacity-95 "
        style={{
          backgroundImage: "url('/assets/img/tea-leaves.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* ===== LEFT: Contact info ===== */}
            <motion.aside
              variants={fadeChild}
              className="lg:col-span-5 space-y-6"
            >
              <GlassCard>
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
                    value="+94 77 77 77 227"
                    hint="Mon–Fri, 9:00 AM – 6:00 PM"
                  />
                  <InfoRow
                    label="Email"
                    value="meezans@sltnet.lk"
                    hint="We typically respond within 24–48 hours"
                  />
                </div>
              </GlassCard>

              <GlassCard>
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
              </GlassCard>
            </motion.aside>

            {/* ===== RIGHT: Contact form ===== */}
            <motion.section variants={fadeChild} className="lg:col-span-7">
              <GlassCard>
                <h2 className="text-2xl md:text-3xl font-messiri text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Fill out the form and our team will get back to you.
                </p>

                 {alert && (
                    <div className="mt-6 rounded-2xl px-4 py-3 text-sm border bg-slate-50">
                      <div className="flex items-start justify-between gap-4">
                        <p>{alert.message}</p>
                        <button
                          type="button"
                          onClick={() => setAlert(null)}
                          className="text-xs font-semibold opacity-70 hover:opacity-100"
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  )}

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
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
                      label="Phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07..."
                      type="number"
                      required
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

                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-2xl bg-gradient-to-br from-[#3F4F2A] to-[#2E3B1F]
  px-6 py-3 text-sm font-semibold text-white
  shadow-[0_10px_30px_-10px_rgba(63,79,42,0.6)]
  transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>



                 


                </form>
              </GlassCard>
            </motion.section>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

// ===== Reusable Glass Card =====
const GlassCard = ({ children }) => (
  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
    {children}
  </div>
);

// ===== Input Field =====
const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}) => (
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

// ===== Info Row =====
const InfoRow = ({ label, value, hint }) => (
  <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-4">
    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
    <p className="mt-1 text-slate-900 font-semibold">{value}</p>
    {hint && <p className="mt-1 text-sm text-slate-600">{hint}</p>}
  </div>
);
