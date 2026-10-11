"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const trustees = [
  {
    name: "Syed Almas Kabir",
    role: "Chairman, Board of Trustees",
    image: "/Almas sir.jpeg",
    description:
      "Renowned ICT industry leader and policy advocate, Mr. Kabir serves as the Chairman of BIIN. With over three decades of experience in technology, entrepreneurship and public policy, he leads the strategic direction of the organization and oversees governance as a Founder Trustee.",
    quote:
      "Technology is the bridge between dreams and reality for our youth.",
  },
  {
    name: "Ms. Rubaba Dowla",
    role: "EC Member",
    image: "/Image/Ms-Rubaba-Dowla.jpg",
    description:
      "As an Executive Committee Member of BIIN, Ms. Dowla contributes to strategic initiatives, organizational development, and programs that encourage innovation, youth engagement, and community growth.",
    quote:
      "Great teamwork turns ideas into meaningful impact.",
  },
  {
    name: "Syed Ahsan Habib",
    role: "EC Member",
    image: "/Image/Habib.jpeg",
    description:
      "As an Executive Committee Member of BIIN, Mr. Habib contributes to the organization's initiatives and supports strategic planning, youth engagement, and program development.",
    quote:
      "Empowering young minds today creates a stronger and brighter future.",
  },
  {
    name: "Farzanah Chowdhury",
    role: "EC Member",
    image: "/Farzanah.png",
    description:
      "As an Executive Committee Member of BIIN, Ms. Chowdhury supports organizational initiatives, youth engagement, and programs focused on innovation, technology, and community development.",
    quote:
      "Inspiring young people to innovate is the first step toward a better tomorrow.",
  },
  {
    name: "Joya Kabir",
    role: "EC Member",
    image: "/joya.png",
    description:
      "As an Executive Committee Member of BIIN, Ms. Kabir contributes to the organization's initiatives, supporting youth engagement, innovation, and meaningful programs for community development.",
    quote:
      "Empowering youth with the right opportunities can transform ideas into lasting impact.",
  },
  
  {
    name: "Moon M. Rajib",
    role: "General Secretary & Founder Trustee",
    image: "/moon.jpg",
    description:
      "As the Founder and General Secretary of BIIN, Mr. Rajib drives the organization's vision, program development, and national outreach. With a strong background in communication, branding, and youth engagement, he plays a key role in managing BIIN's day-to-day operations and partnerships.",
    quote:
      "Empowering youth through innovation is not just our mission, it's our passion.",
  },
];

const secretariat = [
  { name: "Tanjin Prity", role: "Manager", initials: "TP" },
  { name: "Mahbub Sharif", role: "PR Officer", initials: "MS" },
  {
    name: "Mehnaz Chowdhury",
    role: "Senior Executive, IT",
    initials: "MC",
  },
  {
    name: "Mobarak Hossain Joy",
    role: "Executive, Event",
    initials: "MH",
  },
  {
    name: "Mohammad Sish",
    role: "Executive, Design",
    initials: "MS",
  },
  { name: "Rajaul Karim", role: "Web Developer", initials: "RK" },
  { name: "Asmaul Husna Oishe", role: "Junior Executive", initials: "AO" },

];

const Trustees = () => {
  return (
    <main className="bg-white">
      {/* Governance & Trust */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100 py-16 sm:py-20 lg:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
              Leadership
            </span>

            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Governance &amp; Trust
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              BIIN is governed by a Board of Trustees as per its registered
              Trust Deed, ensuring all operations, finances, and partnerships
              are guided by transparency, legality, and accountability.
            </p>
          </motion.div>

          {/* Trustee Cards */}
          <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2 xl:gap-8">
            {trustees.map((trustee, index) => (
              <motion.article
                key={trustee.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group h-full"
              >
                <div className="h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-full flex-col sm:flex-row">
                    {/* Image - fills the full card side (no gaps) */}
                    <div className="relative w-full shrink-0 overflow-hidden bg-gray-100 aspect-[4/3] sm:aspect-auto sm:min-h-[360px] sm:w-[42%] lg:w-[44%]">
                      <Image
                        src={trustee.image}
                        alt={trustee.name}
                        fill
                        priority={index === 0}
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 42vw, 550px"
                      />

                      <div className="absolute bottom-0 right-0 z-10 flex h-14 w-14 items-center justify-center rounded-tl-2xl bg-gradient-to-br from-emerald-500 to-teal-500 sm:h-16 sm:w-16">
                        <FaQuoteLeft
                          className="text-white/90"
                          size={20}
                        />
                      </div>
                    </div>

                    {/* Content - Always Starts at the Top */}
                    <div className="flex min-w-0 flex-1 flex-col items-start justify-start p-5 text-left sm:p-6 lg:p-8">
                      <div className="mb-4 w-full">
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-600 sm:text-2xl">
                          {trustee.name}
                        </h2>

                        <p className="text-sm font-semibold leading-6 text-emerald-600">
                          {trustee.role}
                        </p>
                      </div>

                      <p className="mb-5 w-full text-sm leading-7 text-gray-600 sm:text-[15px]">
                        {trustee.description}
                      </p>

                      <div className="mt-auto w-full border-l-2 border-emerald-500 py-1 pl-4">
                        <p className="text-sm italic leading-6 text-gray-500">
                          &ldquo;{trustee.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BIIN Secretariat */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-indigo-600">
              Operations
            </span>

            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              BIIN Secretariat
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              The team coordinating programs, communications, and day-to-day
              delivery across BIIN initiatives.
            </p>
          </motion.div>

          {/* Secretariat Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {secretariat.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="h-full"
              >
                <div className="flex h-full min-h-[112px] items-center gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-base font-extrabold text-indigo-600">
                    {member.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-lg font-extrabold leading-snug text-gray-900">
                      {member.name}
                    </h3>

                    <p className="text-sm leading-6 text-slate-600">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trustees;