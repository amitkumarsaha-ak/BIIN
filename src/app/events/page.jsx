
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import EventCard from "../Components/EventCard";
import { eventsData, eventCategories } from "../data/eventsData";

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on category and search
  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      activeCategory === "All" || event.category === activeCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[650px] md:min-h-[750px] lg:min-h-[850px] py-24 px-4 sm:px-6 overflow-hidden flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/events hero.jpeg"
            alt="BIIN Events and Activities"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-slate-950/65"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-indigo-950/50 to-slate-950/75"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="
              absolute -top-40 -right-40
              w-80 h-80
              bg-emerald-400/20
              rounded-full blur-3xl
            "
          ></div>

          <div
            className="
              absolute top-1/2 -left-40
              w-96 h-96
              bg-indigo-500/20
              rounded-full blur-3xl
            "
          ></div>

          <div
            className="
              absolute bottom-0 right-1/4
              w-72 h-72
              bg-sky-500/10
              rounded-full blur-3xl
            "
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 pt-12 sm:pt-16">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center text-center"
          >
            {/* Calendar Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                inline-flex items-center justify-center
                p-3
                bg-emerald-500/20
                backdrop-blur-md
                border border-emerald-300/20
                rounded-2xl
                mb-6
                shadow-lg
              "
            >
              <FaCalendarAlt
                className="text-emerald-400"
                size={40}
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                w-full
                max-w-5xl
                mx-auto
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-white
                mb-4
                tracking-tight
                leading-tight
                text-center
                break-words
                drop-shadow-2xl
              "
            >
              Our Events &amp; Activities
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                w-full
                max-w-4xl
                mx-auto
                px-2
                sm:px-4
                text-base
                sm:text-lg
                md:text-xl
                text-gray-200
                leading-relaxed
                text-center
                break-words
                [overflow-wrap:anywhere]
                drop-shadow-lg
              "
            >
              Explore the impactful events, workshops, and initiatives
              organized by BIIN to empower youth and foster innovation in
              Bangladesh.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar - Preserved from original code */}
          {/*
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative max-w-xl mx-auto">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full
                  pl-12 pr-4 py-4
                  bg-white
                  border border-gray-200
                  rounded-xl
                  text-gray-700
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-500
                  focus:border-transparent
                  shadow-sm
                  transition-all duration-300
                "
              />
            </div>
          </motion.div>
          */}

          {/* Category Filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2.5
                  rounded-full
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">
                No events found matching your search.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="
                  mt-4
                  text-emerald-600
                  hover:text-emerald-700
                  underline
                  font-medium
                  transition-colors
                "
              >
                Clear filters
              </button>
            </motion.div>
          )}

          {/* Events Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500">
              Showing{" "}
              <span className="font-semibold text-emerald-600">
                {filteredEvents.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold">
                {eventsData.length}
              </span>{" "}
              events
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
