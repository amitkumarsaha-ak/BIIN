"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FaUserGraduate,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={20} className="text-blue-500" />,
    label: "Students Empowered",
    value: "10,000+",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <FaHandshake size={20} className="text-emerald-500" />,
    label: "Partner Organizations",
    value: "50+",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: <FaLightbulb size={20} className="text-yellow-500" />,
    label: "Active Chapters",
    value: "50+",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1738]">
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-[-2]">
        <img
          src="/1770013187869.jpg"
          alt="BIIN - Empowering Youth Through Technology"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* IMAGE OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[-1]
          bg-gradient-to-r
          from-[#08142d]/55
          via-[#0b1738]/25
          to-[#0b1738]/10
        "
      />

      {/* BOTTOM GRADIENT */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-t from-[#08142d]/40 via-transparent to-[#08142d]/10" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[540px] items-center py-14 sm:min-h-[580px] sm:py-16 lg:min-h-[640px] lg:py-20">
        <div className="mx-auto w-11/12 max-w-7xl">
          <div className="grid grid-cols-1 items-center md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              {/* MAIN HEADING */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 90,
                }}
                className="
                  max-w-3xl text-3xl font-extrabold leading-[1.08]
                  tracking-tight text-white
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]
                  sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
                "
              >
                Bangladesh ICT &
              </motion.h1>

              {/* SECOND HEADING */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 90,
                }}
                className="
                  mt-1 max-w-4xl text-3xl font-extrabold leading-[1.08]
                  tracking-tight text-[#65e6bd]
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]
                  sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
                "
              >
                Innovation Network
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                }}
                className="
                  mt-5 max-w-xl text-sm font-normal leading-relaxed
                  text-white
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                  sm:mt-6 sm:text-base md:text-lg lg:text-xl
                "
              >
                A registered non-profit trust empowering Bangladesh&apos;s
                youth through ICT skills, startup incubation, and digital
                innovation.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="
                  mt-7 flex w-full flex-col items-center gap-3
                  sm:w-auto sm:flex-row sm:gap-4 md:mt-8
                "
              >
                {/* JOIN BIIN */}
                <Link
                  href="/get-involved"
                  className="
                    group inline-flex min-h-[48px] items-center
                    justify-center gap-2 rounded-xl
                    bg-emerald-500 px-6 py-3
                    text-sm font-semibold text-white
                    shadow-lg shadow-emerald-950/20
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-emerald-400
                    hover:shadow-xl
                    focus:outline-none focus:ring-2
                    focus:ring-emerald-300 focus:ring-offset-2
                    focus:ring-offset-[#0b1738]
                    sm:min-w-[150px] sm:text-base
                  "
                >
                  Join BIIN
                  <FiArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* LEARN MORE */}
                <Link
                  href="/about"
                  className="
                    inline-flex min-h-[48px] items-center
                    justify-center rounded-xl
                    border border-white/40
                    bg-white/[0.07] px-6 py-3
                    text-sm font-semibold text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-white/60
                    hover:bg-white/15
                    focus:outline-none focus:ring-2
                    focus:ring-white/60 focus:ring-offset-2
                    focus:ring-offset-[#0b1738]
                    sm:min-w-[150px] sm:text-base
                  "
                >
                  Learn more
                </Link>
              </motion.div>
            </div>

            {/* RIGHT SIDE: BACKGROUND IMAGE VISIBLE */}
            <div
              aria-hidden="true"
              className="hidden min-h-[260px] md:block lg:min-h-[340px]"
            />
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="relative z-10 flex justify-center px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:pb-16">
        <div
          className="
            grid w-full max-w-4xl grid-cols-1 gap-3
            rounded-2xl border border-white/30
            bg-white/95 p-3 shadow-2xl
            backdrop-blur-md
            sm:grid-cols-3 sm:gap-4 sm:p-5
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className={`
                flex flex-col items-center justify-center
                gap-2 rounded-xl border px-3 py-4
                transition-all duration-300 hover:-translate-y-1
                hover:shadow-lg sm:py-5
                ${stat.bg} ${stat.border}
              `}
            >
              {/* ICON */}
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-white shadow-md
                  sm:h-12 sm:w-12
                "
              >
                {stat.icon}
              </div>

              {/* VALUE */}
              <p className="text-lg font-bold text-gray-800 sm:text-xl">
                {stat.value}
              </p>

              {/* LABEL */}
              <p className="text-center text-xs font-medium text-gray-600 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
