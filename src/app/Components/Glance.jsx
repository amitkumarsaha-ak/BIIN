"use client";

import Image from "next/image";
import React from "react";
import { BsArrowUpRight, BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHandshake,
  FaGlobe,
  FaTrophy,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import about2 from "../../../public/about2.jpeg";
import about from "../../../public/about.jpg";

const impactMetrics = [
  {
    icon: <FaUserGraduate size={22} />,
    label: "Students Empowered",
    value: "10,000+",
    description: "Young individuals equipped with digital skills",
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaHandshake size={22} />,
    label: "Partner Organizations",
    value: "50+",
    description: "Strategic partnerships across sectors",
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <FaGlobe size={22} />,
    label: "Active Chapters",
    value: "50+",
    description: "Nationwide presence and reach",
    iconStyle: "bg-purple-50 text-purple-600",
  },
  {
    icon: <FaTrophy size={22} />,
    label: "Events Organized",
    value: "100+",
    description: "Hackathons, workshops, and competitions",
    iconStyle: "bg-amber-50 text-amber-600",
  },
  {
    icon: <FaUsers size={22} />,
    label: "Communities Served",
    value: "25+",
    description: "Urban and rural areas covered",
    iconStyle: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: <FaRocket size={22} />,
    label: "Startups Supported",
    value: "200+",
    description: "Entrepreneurial ventures incubated",
    iconStyle: "bg-pink-50 text-pink-600",
  },
];

const featuredPrograms = [
  "Youth IT Training Program",
  "Bangladesh National ICT Fest",
  "ICT Job Fair & Internship Expo",
  "Startup Bootcamps",
  "Campus Club Leadership Program",
  "National Hackathons & Innovation Contests",
];

const strategicInitiatives = [
  "Digital Literacy Campaigns",
  "University Club Programs",
  "Tech Talks & Workshops",
  "Esports & Gaming Tournaments",
  "Learning Platforms for Remote Learners",
  "Community-Based Tech Initiatives",
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const metricContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const metricItem = {
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
};

const Glance = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-16 sm:py-20 lg:py-24">
      {/* ------------------------------------------------
          Background decoration
      ------------------------------------------------ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-100/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------
            Section Header
        ------------------------------------------------ */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Our Impact
          </div>

          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Impact at a Glance
          </h1>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />

          <p className="mx-auto mt-5 max-w-3xl px-2 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From urban tech hubs to underserved regions, BIIN&apos;s reach
            continues to expand nationwide.
          </p>
        </motion.div>

        {/* ------------------------------------------------
            Impact Metrics
        ------------------------------------------------ */}
        <motion.div
          variants={metricContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={metricItem}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_6px_25px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${metric.iconStyle} transition-transform duration-300 group-hover:scale-105`}
              >
                {metric.icon}
              </div>

              <p className="text-2xl font-black tracking-tight text-slate-950">
                {metric.value}
              </p>

              <h3 className="mt-1.5 text-sm font-bold leading-5 text-slate-800">
                {metric.label}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ------------------------------------------------
            Featured Programs
        ------------------------------------------------ */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* Content */}
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                Featured Programs
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Building opportunities through technology
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                BIIN&apos;s programs focus on practical skills, innovation,
                leadership, entrepreneurship, and opportunities for young
                people across Bangladesh.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {featuredPrograms.map((program, index) => (
                  <motion.div
                    key={program}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 4 }}
                    className="group flex min-h-[54px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-emerald-200 hover:shadow-md"
                  >
                    <BsFillCheckCircleFill
                      className="shrink-0 text-emerald-500"
                      size={17}
                    />

                    <span className="text-sm font-medium leading-5 text-slate-700">
                      {program}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.a
              href="https://forms.gle/tqTmSpieThsCeQFV6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
            >
              <div className="relative aspect-[4/4] overflow-hidden rounded-[22px]">
                <Image
                  src={about}
                  alt="BIIN Programs and Activities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      BIIN
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Programs & Activities
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                    <BsArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* ------------------------------------------------
            Strategic Initiatives
        ------------------------------------------------ */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Image */}
            <motion.a
              href="https://forms.gle/5GYLHndDiLfrc5br6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group order-2 block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.10)] lg:order-1"
            >
              <div className="relative aspect-[4/4] overflow-hidden rounded-[22px]">
                <Image
                  src={about2}
                  alt="BIIN Impact and Achievements"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      BIIN
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Impact & Achievements
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                    <BsArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Strategic Initiatives
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Creating lasting digital impact
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Through community-focused initiatives and collaborative
                programs, BIIN works to make digital learning and innovation
                more accessible.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {strategicInitiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.45,
                    }}
                    whileHover={{ x: -4 }}
                    className="group flex min-h-[54px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
                  >
                    <BsFillCheckCircleFill
                      className="shrink-0 text-emerald-500"
                      size={17}
                    />

                    <span className="text-sm font-medium leading-5 text-slate-700">
                      {initiative}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Glance;