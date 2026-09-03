"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "01",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ==========================================
    // PHONE NUMBER
    // 01 is fixed + only 9 digits allowed
    // ==========================================
    if (name === "phone") {
      // Remove anything that is not a digit
      let digits = value.replace(/\D/g, "");

      // Always keep 01 at the beginning
      if (!digits.startsWith("01")) {
        digits = "01" + digits.replace(/^0?1?/, "");
      }

      // Maximum 11 digits total
      digits = digits.slice(0, 11);

      // If somehow less than 01, reset
      if (digits.length < 2) {
        digits = "01";
      }

      setFormData((prev) => ({
        ...prev,
        phone: digits,
      }));

      if (submitted) {
        setSubmitted(false);
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bangladesh phone number:
    // 01 + exactly 9 digits
    const phoneRegex = /^01[0-9]{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      return;
    }

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "01",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 py-16 sm:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Get In Touch
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Ready to build your future with BIIN? Get in touch with us today.
          </p>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* =========================
              LEFT - CONTACT INFO
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Let&apos;s Connect
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Have a question, partnership opportunity, or want to learn
                  more about BIIN? We&apos;d love to hear from you.
                </p>
              </div>

              {/* =========================
                  ADDRESS
              ========================== */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=SimpleTree+Attalika+Level+19%2C+134+Gulshan+Avenue%2C+Dhaka+1212%2C+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-4 flex rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 transition-transform duration-300 group-hover:scale-105">
                  <FiMapPin size={21} />
                </div>

                <div className="ml-4 min-w-0">
                  <p className="font-bold text-slate-900">Our Address</p>

                  <p className="mt-1 text-sm leading-6 text-slate-600 transition-colors group-hover:text-emerald-700">
                    SimpleTree Attalika (Level 19), 134 Gulshan Avenue, Dhaka
                    1212, Bangladesh
                  </p>
                </div>
              </a>

              {/* =========================
                  EMAIL
              ========================== */}

              <a
                href="mailto:info@biin.org.bd"
                className="group mb-4 flex rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 transition-transform duration-300 group-hover:scale-105">
                  <FiMail size={21} />
                </div>

                <div className="ml-4 min-w-0">
                  <p className="font-bold text-slate-900">Our Email</p>

                  <p className="mt-1 break-all text-sm text-emerald-600 transition-colors group-hover:text-emerald-800">
                    info@biin.org.bd
                  </p>
                </div>
              </a>

              {/* =========================
                  PHONE
              ========================== */}

              <a
                href="tel:096401237013"
                className="group flex rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 transition-transform duration-300 group-hover:scale-105">
                  <FiPhone size={21} />
                </div>

                <div className="ml-4">
                  <p className="font-bold text-slate-900">Our Phone</p>

                  <p className="mt-1 text-sm text-emerald-600 transition-colors group-hover:text-emerald-800">
                    09640123701-3
                  </p>
                </div>
              </a>

              {/* Small Bottom Highlight */}

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-5 text-white shadow-lg">
                <p className="text-sm font-medium leading-6 text-emerald-50">
                  We are always open to meaningful collaborations,
                  partnerships, and opportunities that empower young people
                  through technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT - CONTACT FORM
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                  Fill out the form below and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* =========================
                    FULL NAME
                ========================== */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-slate-400
                      focus:border-emerald-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-emerald-500/10
                    "
                  />
                </div>

                {/* =========================
                    EMAIL
                ========================== */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-slate-400
                      focus:border-emerald-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-emerald-500/10
                    "
                  />
                </div>

                {/* =========================
                    PHONE
                ========================== */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <div className="flex w-full">
                    {/* Bangladesh Country Code */}
                    <div className="flex h-[54px] shrink-0 items-center rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 px-4 text-sm font-semibold text-slate-600">
                      +880
                    </div>

                    {/* Fixed 01 */}
                    <div className="flex h-[54px] shrink-0 items-center border border-r-0 border-slate-200 bg-white px-3 text-base font-semibold text-slate-700">
                      01
                    </div>

                    {/* Remaining 9 digits */}
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone.slice(2)}
                      onChange={(e) => {
                        const onlyDigits = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 9);

                        setFormData((prev) => ({
                          ...prev,
                          phone: `01${onlyDigits}`,
                        }));

                        if (submitted) {
                          setSubmitted(false);
                        }
                      }}
                      required
                      minLength={9}
                      maxLength={9}
                      pattern="[0-9]{9}"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="XXXXXXXXX"
                      className="
                        h-[54px]
                        min-w-0
                        flex-1
                        rounded-r-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-400
                        focus:border-emerald-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-emerald-500/10
                      "
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    +880 01 + 9 digits. Example: 01XXXXXXXXX
                  </p>
                </div>

                {/* =========================
                    MESSAGE
                ========================== */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Write your message here..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-slate-900
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-slate-400
                      focus:border-emerald-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-emerald-500/10
                    "
                  />
                </div>

                {/* =========================
                    SUCCESS MESSAGE
                ========================== */}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700"
                  >
                    <FiCheckCircle size={20} />

                    <span>
                      Your message has been submitted successfully.
                    </span>
                  </motion.div>
                )}

                {/* =========================
                    SUBMIT BUTTON
                ========================== */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-emerald-600
                    to-teal-600
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-emerald-200
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:from-emerald-700
                    hover:to-teal-700
                    hover:shadow-xl
                    active:translate-y-0
                  "
                >
                  Send Message

                  <FiSend
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;