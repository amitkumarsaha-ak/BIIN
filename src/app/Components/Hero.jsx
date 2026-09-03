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
    icon: <FaUserGraduate size={22} className="text-blue-500" />,
    label: "Students Empowered",
    value: "10,000+",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <FaHandshake size={22} className="text-emerald-500" />,
    label: "Partner Organizations",
    value: "50+",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: <FaLightbulb size={22} className="text-yellow-500" />,
    label: "Active Chapters",
    value: "50+",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#152a6e]">

      {/* =========================================================
          HERO BACKGROUND IMAGE
          ========================================================= */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="/1770013187869.jpg"
          alt="BIIN - Empowering Youth Through Technology"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          PROFESSIONAL READABILITY OVERLAY
          
          Strong on left where text exists.
          Gradually becomes transparent toward right
          so the original image remains visible.
          ========================================================= */}
      <div
        className="
          absolute inset-0 z-[2]
          bg-gradient-to-r
          from-[#061432]/95
          via-[#0b2450]/75
          via-[45%]
          to-transparent
        "
      />

      {/* =========================================================
          SUBTLE OVERALL IMAGE TINT
          ========================================================= */}
      <div className="absolute inset-0 z-[3] bg-[#061432]/10" />

      {/* =========================================================
          DECORATIVE GLOW
          ========================================================= */}
      <div className="absolute -top-20 -left-20 z-[4] w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 z-[4] w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl" />

      <div className="absolute top-1/3 right-1/4 z-[4] w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}
      <div className="relative z-[20] min-h-screen flex items-center">

        <div className="w-11/12 max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] items-end md:gap-x-14 lg:gap-x-20 xl:gap-x-24">

            {/* =====================================================
                LEFT CONTENT
                ===================================================== */}
            <div
              className="
                flex flex-col
                items-center md:items-start
                pt-10 sm:pt-12 md:pt-8 lg:pt-10
                pb-10 md:pb-12
                relative z-[20]
                md:-ml-6 lg:-ml-10
              "
            >

              {/* =================================================
                  MAIN HEADING
                  ================================================= */}
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                }}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-yellow-400
                  text-center md:text-left
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.65)]
                  pb-2
                "
              >
                Bangladesh ICT &
              </motion.h1>

              {/* =================================================
                  SECOND HEADING
                  ================================================= */}
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                }}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-white
                  text-center md:text-left
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)]
                  mt-1
                "
              >
                Innovation{" "}
                <span className="text-emerald-400">
                  Network
                </span>
              </motion.h1>

              {/* =================================================
                  SUB HEADING
                  ================================================= */}
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  type: "spring",
                }}
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                  font-bold
                  text-emerald-300
                  text-center md:text-left
                  mt-3 sm:mt-4
                  max-w-2xl
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                "
              >
                Empowering Youth Through Technology & Innovation
              </motion.h2>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-white
                  mt-3
                  sm:mt-5
                  mb-4
                  sm:mb-6
                  text-center
                  md:text-left
                  max-w-lg
                  leading-relaxed
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                "
              >
                Welcome to BIIN – Bangladesh ICT & Innovation Network,
                a registered non-profit trust dedicated to transforming
                the future of Bangladesh through ICT skill development,
                startup incubation and youth empowerment.
              </motion.p>

              {/* =================================================
                  BUTTONS
                  ================================================= */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                className="
                  w-full
                  flex flex-col
                  sm:flex-row
                  gap-3
                  sm:gap-4
                  justify-center
                  md:justify-start
                  items-center
                  md:items-start
                "
              >

                {/* JOIN BIIN */}
                <Link
                  href="/get-involved"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    sm:px-6
                    py-2.5
                    sm:py-3
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-500
                    to-teal-500
                    text-white
                    font-semibold
                    shadow-xl
                    hover:from-teal-500
                    hover:to-emerald-500
                    transition-all
                    duration-200
                    hover:scale-105
                    focus:outline-none
                    focus:ring-2
                    focus:ring-emerald-400
                    text-sm
                    sm:text-base
                  "
                >
                  Join BIIN
                  <FiArrowRight size={20} />
                </Link>

                {/* LEARN MORE */}
                <Link
                  href="/about"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    sm:px-6
                    py-2.5
                    sm:py-3
                    rounded-full
                    border-2
                    border-emerald-400
                    text-white
                    font-semibold
                    bg-black/10
                    hover:bg-emerald-500
                    hover:text-white
                    transition-all
                    duration-200
                    hover:scale-105
                    focus:outline-none
                    focus:ring-2
                    focus:ring-emerald-400
                    text-sm
                    sm:text-base
                  "
                >
                  Learn more
                </Link>

              </motion.div>
            </div>

            {/* =====================================================
                RIGHT SIDE
                Image remains visible here
                ===================================================== */}
            <div className="hidden md:block" />

          </div>
        </div>
      </div>

      {/* =========================================================
          STATS CARD
          ========================================================= */}
      <div
        className="
          relative
          z-[30]
          flex
          justify-center
          pt-8
          sm:pt-10
          md:pt-12
          pb-10
          sm:pb-12
          md:pb-16
        "
      >

        <div
          className="
            w-11/12
            max-w-4xl
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-3
            sm:gap-6
            bg-white/90
            backdrop-blur-md
            shadow-2xl
            rounded-2xl
            py-5
            sm:py-7
            px-3
            sm:px-8
          "
        >

          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`
                flex
                flex-col
                items-center
                justify-center
                gap-1
                sm:gap-3
                py-3
                sm:py-4
                px-1
                sm:px-2
                rounded-xl
                border
                ${stat.bg}
                ${stat.border}
                hover:shadow-lg
                transition-shadow
                duration-200
              `}
            >

              {/* ICON */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  sm:w-16
                  sm:h-16
                  rounded-full
                  bg-white
                  shadow-md
                  mb-1
                  sm:mb-2
                "
              >
                {stat.icon}
              </div>

              {/* VALUE */}
              <p className="text-base sm:text-2xl font-bold text-gray-800">
                {stat.value}
              </p>

              {/* LABEL */}
              <p className="text-gray-500 font-medium text-center text-xs sm:text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Hero;