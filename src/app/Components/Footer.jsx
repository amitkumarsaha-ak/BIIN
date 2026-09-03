// components/Footer.js
// Footer Component - BIIN

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FiChevronsRight, FiArrowUpRight } from "react-icons/fi";

import biin from "../../../public/BIIN Profile Image/Biin_Logo_White.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f3f3d] via-[#124d4a] to-[#101f52] text-white">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/5 blur-3xl" />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-11/12 max-w-7xl pt-14 pb-8 sm:pt-16 lg:w-10/12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">

          {/* =================================================
              BRAND / ABOUT
          ================================================== */}

          <div className="md:col-span-1">

            <Link href="/" className="inline-block">
              <Image
                src={biin}
                alt="BIIN Logo"
                width={120}
                height={120}
                className="h-auto w-[100px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-200">
              Welcome to Empowering Youth through IT Skill Development and
              innovative community.
            </p>

            {/* Social Media */}

            <div className="mt-6">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Follow Us
              </p>

              <div className="flex items-center gap-3">

                {/* Facebook */}

                <a
                  href="https://www.facebook.com/BIINtrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BIIN Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FaFacebook size={18} />
                </a>

                {/* Twitter */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BIIN Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/20"
                >
                  <FaTwitter size={18} />
                </a>

                {/* Instagram */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BIIN Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <FaInstagram size={18} />
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/company/biin-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BIIN LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <FaLinkedinIn size={18} />
                </a>

              </div>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>
            <h2 className="mb-5 text-lg font-bold text-white">
              Explore
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                href="/faq"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                FAQ
              </Link>

              <Link
                href="/about"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                About Us
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Contact Us
              </Link>

              <Link
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Video Tour
              </Link>

              <Link
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Our Team
              </Link>

            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <h2 className="mb-5 text-lg font-bold text-white">
              Quick Link
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Join Us
              </Link>

              <Link
                href="/events"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Events
              </Link>

              <Link
                href="/partner"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Our Partners
              </Link>

              <Link
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <FiChevronsRight
                  className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                />
                Tech Venture
              </Link>

            </div>
          </div>

        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-6 text-slate-300 sm:text-sm">
            © {new Date().getFullYear()} Bangladesh ICT & Innovation Network
            (BIIN)
          </p>

        </div>
        

      </div>
    </footer>
  );
};

export default Footer;