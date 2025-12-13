import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2f46] text-white font-outfit">
      {/* TOP */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* LEFT LOGO */}
          <div className="md:col-span-4">
            <img
              src="/assets/logo/meez-logo.png"
              alt="Meezan Group"
              className="w-56 md:w-64 object-contain"
            />
          </div>

          {/* LINKS 1 */}
          <div className="md:col-span-2">
            <ul className="space-y-4 text-white/80">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://www.meezanbungalows.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Bungalows
                </a>
              </li>
              <li>
                <Link to="/tea-factory" className="hover:text-white transition">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/tea" className="hover:text-white transition">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LINKS 2 */}
          <div className="md:col-span-3">
            <ul className="space-y-4 text-white/80">
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div className="md:col-span-3 md:text-right">
            <div className="space-y-4 text-white/80">
              <a
                href="tel:+94768304310"
                className="block hover:text-white transition"
              >
                +94 76 830 4310
              </a>

              <a
                href="mailto:meezanbungalow@sltnet.lk"
                className="block hover:text-white transition break-all"
              >
                meezanbungalow@sltnet.lk
              </a>

              {/* Social icons */}
              {/* <div className="flex md:justify-end gap-4 pt-2">
                
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white/80 hover:text-white transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

               
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white/80 hover:text-white transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Optional developer logo (like your screenshot) */}
            <div className="mt-8 flex md:justify-end">
              <img
                src="/assets/logo/hai-logo-2.png"
                alt="Hai Creations"
                className="w-12 h-12 object-contain opacity-90"
              />
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black/35 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-white/70">
          <span>© {year} Meezan Group. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <span>
            Website developed by{" "}
            <a
              href="#"
              className="text-white hover:underline underline-offset-4"
            >
              Hai Creations
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
