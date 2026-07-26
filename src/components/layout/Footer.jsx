import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#08111F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="VIDHINAAD"
              className="h-16 w-auto"
            />

            <p className="mt-6 leading-8 text-gray-400">
              Strategic legal solutions backed by integrity, expertise,
              and a client-first approach for businesses,
              startups and individuals.
            </p>

            <div className="mt-8 flex gap-4">


            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/services">Services</Link>

              <Link to="/founding-partners">
                Founding Partners
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Practice Areas */}
          <div>

            <h3 className="text-xl font-semibold">
              Practice Areas
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <span>Corporate Advisory</span>

              <span>Corporate Compliance</span>

              <span>Commercial Drafting</span>

              <span>Litigation</span>

              <span>Dispute Resolution</span>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-[#D4AF37]"
                />

                <p className="text-gray-400">
                  Jaipur, Rajasthan
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 text-[#D4AF37]"
                />

                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 text-[#D4AF37]"
                />

                <p className="text-gray-400">
                  contact@vidhinaad.com
                </p>

              </div>

            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#B08D57] px-5 py-3 transition hover:bg-[#9B7A48]"
            >
              Book Consultation

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-sm text-gray-500">
              © {year} VIDHINAAD. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm">

              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#D4AF37]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/disclaimer"
                className="text-gray-400 hover:text-[#D4AF37]"
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;