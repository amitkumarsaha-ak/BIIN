"use client"

import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { motion, useReducedMotion } from "framer-motion"
import {
  FaFire,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaGlobe,
} from "react-icons/fa"

const benefits = [
  {
    icon: <FaFire size={20} />,
    iconStyle: "text-orange-500 bg-orange-50 ring-orange-100",
    text: "Cutting-edge IT skill development",
  },
  {
    icon: <FaGraduationCap size={20} />,
    iconStyle: "text-blue-500 bg-blue-50 ring-blue-100",
    text: "Certified courses & real-world projects",
  },
  {
    icon: <FaGlobe size={20} />,
    iconStyle: "text-green-500 bg-green-50 ring-green-100",
    text: "Access to national and International ICT events",
  },
  {
    icon: <FaHandshake size={20} />,
    iconStyle: "text-purple-500 bg-purple-50 ring-purple-100",
    text: "Internship & job opportunities",
  },
  {
    icon: <FaLightbulb size={20} />,
    iconStyle: "text-yellow-500 bg-yellow-50 ring-yellow-100",
    text: "Personalized mentorship",
  },
  {
    icon: <FaUsers size={20} />,
    iconStyle: "text-indigo-500 bg-indigo-50 ring-indigo-100",
    text: "Chapter branding & recognition",
  },
  {
    icon: <FaTrophy size={20} />,
    iconStyle: "text-emerald-500 bg-emerald-50 ring-emerald-100",
    text: "Leadership training & community service",
  },
  {
    icon: <FaRocket size={20} />,
    iconStyle: "text-pink-500 bg-pink-50 ring-pink-100",
    text: "Exposure to startup & investment networks",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const Benefits = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* Background Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -25, 0],
                y: [0, -20, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Why BIIN
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Why Join BIIN?
          </h1>

          {/* Accent */}
          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { width: 56 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-emerald-500"
          />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Joining BIIN means becoming part of a vibrant youth tech community
            committed to making a difference.
          </p>
        </motion.div>

        {/* =======================================================
            CONTENT
        ======================================================= */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* =====================================================
              BENEFITS PANEL
          ===================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-7 lg:p-8">

              {/* Panel Header */}
              <div className="mb-7 flex items-center gap-4">
                
                {/* Trophy */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <FaTrophy size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Membership Benefits
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Opportunities designed for your growth
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -5,
                            transition: {
                              duration: 0.2,
                            },
                          }
                    }
                    className="
                      group
                      relative
                      flex
                      min-h-[88px]
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50/70
                      p-4
                      transition-colors
                      duration-300
                      hover:border-emerald-200
                      hover:bg-white
                      hover:shadow-lg
                      sm:p-5
                    "
                  >
                    {/* Hover Accent */}
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ring-1
                        transition-all
                        duration-300
                        group-hover:scale-110
                        ${benefit.iconStyle}
                      `}
                    >
                      {benefit.icon}
                    </div>

                    {/* Text */}
                    <span className="text-sm font-semibold leading-6 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-base">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* =====================================================
              CTA PANEL
          ===================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-4"
          >
            <div className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 p-8 shadow-[0_20px_60px_rgba(5,150,105,0.20)] sm:p-10">

              {/* Animated Glow */}
              <motion.div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                aria-hidden="true"
                className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-teal-300/20 blur-2xl"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Decorative Ring */}
              <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute right-12 top-12 h-12 w-12 rounded-full border border-white/10" />

              {/* CTA Content */}
              <div className="relative z-10 flex h-full flex-col">

                {/* Icon */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -5, 0],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm"
                >
                  <FaRocket size={24} />
                </motion.div>

                {/* Heading */}
                <h2 className="max-w-xs text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Benefits of{" "}
                  <span className="text-emerald-100">
                    Joining
                  </span>
                </h2>

                {/* Divider */}
                <div className="mt-5 h-px w-16 bg-white/30" />

                {/* Description */}
                <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                  Unlock exclusive opportunities, resources, and a vibrant
                  community. Join us and shape the future of Bangladesh&apos;s
                  digital landscape!
                </p>

                {/* Spacer */}
                <div className="flex-1 min-h-8" />

                {/* CTA */}
                <motion.a
                  href="/get-involved"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    group/button
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-4
                    font-bold
                    text-emerald-700
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-emerald-50
                    hover:shadow-xl
                  "
                >
                  <span>Join BIIN</span>

                  <BsArrowRight
                    size={21}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </motion.a>

                {/* Small supporting text */}
                <p className="mt-4 text-center text-xs text-white/60">
                  Build skills. Build connections. Build the future.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits