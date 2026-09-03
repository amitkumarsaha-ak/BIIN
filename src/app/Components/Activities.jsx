"use client"

import React from "react"
import {
  IoGameController,
  IoLaptop,
  IoCode,
  IoGlobe,
  IoRibbon,
  IoTrophy,
  IoCodeSlash,
} from "react-icons/io5"
import {
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa"
import { motion } from "framer-motion"

const sizes = 32

const data = [
  {
    id: 1,
    title: "ICT and Innovation Awards",
    icon: <IoTrophy size={sizes} />,
    description:
      "National celebration of technological creativity and innovation",
  },
  {
    id: 2,
    title: "Digital Literacy Campaigns",
    icon: <IoGlobe size={sizes} />,
    description: "Rural Bangladesh digital literacy initiatives",
  },
  {
    id: 3,
    title: "Hackathons & Codeathons",
    icon: <IoCode size={sizes} />,
    description: "Tech competitions and innovation contests",
  },
  {
    id: 4,
    title: "ICT & Programming Training",
    icon: <FaLaptopCode size={sizes} />,
    description:
      "Comprehensive training in programming and ICT skills",
  },
  {
    id: 5,
    title: "Esports & Gaming Tournaments",
    icon: <IoGameController size={sizes} />,
    description: "Competitive gaming and esports events",
  },
  {
    id: 6,
    title: "Tech Talks & Workshops",
    icon: <FaLightbulb size={sizes} />,
    description: "Educational sessions and skill development",
  },
  {
    id: 7,
    title: "University Club Programs",
    icon: <FaUsers size={sizes} />,
    description: "Campus engagements and student leadership",
  },
  {
    id: 8,
    title: "Learning Platforms",
    icon: <FaGraduationCap size={sizes} />,
    description: "Remote learning solutions for students",
  },
  {
    id: 9,
    title: "Youth IT Training Program",
    icon: <IoLaptop size={sizes} />,
    description: "Comprehensive youth development program",
  },
  {
    id: 10,
    title: "Bangladesh National ICT Fest",
    icon: <IoRibbon size={sizes} />,
    description: "National technology festival and showcase",
  },
  {
    id: 11,
    title: "ICT Job Fair & Internship Expo",
    icon: <FaHandshake size={sizes} />,
    description: "Career opportunities and industry connections",
  },
  {
    id: 12,
    title: "Code Village",
    icon: <IoCodeSlash size={sizes} />,
    description: "Rural Computer Literacy",
  },
]

const Activities = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      
      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
        }}
      />

      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          {/* Small Label */}
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Our Programs
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Programs That Power the Future
          </h1>

          {/* Accent Line */}
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-emerald-500" />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            BIIN designs and delivers a range of skill-building and
            impact-driven initiatives to make IT education in Bangladesh more
            inclusive and future-ready.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="
                group
                relative
                flex
                min-h-[250px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-300
                hover:shadow-xl
              "
            >
              {/* Top Hover Accent */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-emerald-500
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              {/* Icon */}
              <div
                className="
                  mb-5
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-50
                  text-emerald-600
                  ring-1
                  ring-emerald-100
                  transition-all
                  duration-300
                  group-hover:bg-emerald-600
                  group-hover:text-white
                  group-hover:shadow-lg
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  mb-2
                  text-lg
                  font-semibold
                  leading-6
                  text-slate-800
                  transition-colors
                  duration-300
                  group-hover:text-emerald-700
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-[260px]
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities