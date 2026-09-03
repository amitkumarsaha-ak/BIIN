"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRight, BsX } from "react-icons/bs";
import logo from "../../../public/BIIN Logo-1.png";

const membershipCategories = [
  {
    id: 2,
    title: "Youth Member",
    subtitle: "For Young Innovators, Entrepreneurs & Change-Makers (Age 21–42)",
    description:
      "•\tCareer Guidance.\n•\tIndustry Certifications\n•\tExclusive Learning Resources.",
    requirements:
      "National ID, profile photo, contact info, occupation/startup details.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 1,
    title: "Institutional Member",
    subtitle: "For Organizations Committed to Digital Development",
    description:
      "•\tBrand Exposure.\n•\tTop-Tier Recruitment.\n•\tStrategic Partnership.",
    requirements:
      "Company/NGO registration, logo, authorized representative info.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 3,
    title: "General Member",
    subtitle: "For Citizens Committed to ICT Development & Social Change",
    description:
      "•\tBe an Advisor.\n•\tProfessional Influence\n•\tRecognition.",
    requirements:
      "Full name, contact details, occupation, national ID, photo.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
];

const formCategories = [
  "Donor Member",
  "General Member",
  "Institutional Member",
  "Youth Member",
];

const areasOfInterest = [
  "AI & Data Science",
  "Policy & Advocacy",
  "Startup Incubation",
  "Research",
  "Mentorship",
  "Skills Training",
];

const divisions = [
  "Barishal",
  "Chattogram",
  "Dhaka",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];

const initialFormState = {
  membershipCategory: "",
  name: "",
  idNumber: "",
  email: "",
  phone: "01",
  division: "",
  areaOfInterest: "",
};

/*
|--------------------------------------------------------------------------
| FORM VALIDATION
|--------------------------------------------------------------------------
*/

function validateForm(form) {
  const errors = {};

  if (!form.membershipCategory) {
    errors.membershipCategory = "Please select a membership category.";
  }

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.idNumber.trim()) {
    errors.idNumber = "Student ID / NID / Passport number is required.";
  }

  /*
  |--------------------------------------------------------------------------
  | EMAIL VALIDATION
  |--------------------------------------------------------------------------
  */

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else {
    const email = form.email.trim();

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  /*
  |--------------------------------------------------------------------------
  | BANGLADESH PHONE VALIDATION
  |--------------------------------------------------------------------------
  |
  | +880 is displayed separately.
  |
  | User enters only 9 digits after the fixed "01".
  |
  | Example:
  |
  | 01712345678
  | 01812345678
  | 01912345678
  |
  | Input internally:
  | 01 + 9 digits
  |
  */

  if (!form.phone || form.phone.length !== 11) {
    errors.phone =
      "Enter exactly 9 digits after 01. Example: 01712345678";
  } else if (!/^01[3-9]\d{8}$/.test(form.phone)) {
    errors.phone =
      "Enter a valid Bangladesh phone number. Example: 01712345678";
  }

  if (!form.division) {
    errors.division = "Please select a division.";
  }

  return errors;
}

/*
|--------------------------------------------------------------------------
| MEMBERSHIP MODAL
|--------------------------------------------------------------------------
*/

const MembershipModal = ({
  isOpen,
  onClose,
  preselectedCategory,
  onSuccess,
}) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | OPEN / CLOSE MODAL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (isOpen) {
      setForm({
        ...initialFormState,
        membershipCategory: preselectedCategory || "",
      });

      setErrors({});
      setSubmitError("");

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, preselectedCategory]);

  /*
  |--------------------------------------------------------------------------
  | ESCAPE KEY
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting, onClose]);

  /*
  |--------------------------------------------------------------------------
  | HANDLE INPUT CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | PHONE INPUT
  |--------------------------------------------------------------------------
  |
  | "01" is permanently fixed.
  |
  | User can only enter 9 additional digits.
  |
  | Examples:
  |
  | User types:
  | 712345678
  |
  | Form stores:
  | 01712345678
  |
  */

  const handlePhoneChange = (e) => {
    // Only digits
    const digitsOnly = e.target.value.replace(/\D/g, "");

    // Remove any existing "01" if browser/paste includes it
    let remainingDigits = digitsOnly;

    if (remainingDigits.startsWith("01")) {
      remainingDigits = remainingDigits.slice(2);
    }

    // Maximum 9 digits after fixed 01
    remainingDigits = remainingDigits.slice(0, 9);

    // Always keep 01 fixed
    const phoneNumber = `01${remainingDigits}`;

    handleChange("phone", phoneNumber);
  };

  /*
  |--------------------------------------------------------------------------
  | PREVENT NON-NUMERIC KEYBOARD INPUT
  |--------------------------------------------------------------------------
  */

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
    ];

    if (
      allowedKeys.includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    // Only allow numeric keys
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  /*
  |--------------------------------------------------------------------------
  | CLEAR FORM
  |--------------------------------------------------------------------------
  */

  const handleClear = () => {
    setForm({
      ...initialFormState,
      membershipCategory: preselectedCategory || "",
    });

    setErrors({});
    setSubmitError("");
  };

  /*
  |--------------------------------------------------------------------------
  | SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(
          data.error || "Submission failed. Please try again."
        );
        return;
      }

      onSuccess();
      onClose();
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && onClose()}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 320,
            }}
            className="relative flex w-full max-h-[95vh] flex-col overflow-hidden rounded-t-2xl bg-[#f8f5f0] shadow-2xl sm:max-w-2xl sm:max-h-[90vh] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="shrink-0 bg-gradient-to-r from-[#8b7355] to-[#a68b5b] px-5 py-4 text-white sm:px-6 sm:py-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src={logo}
                    alt="BIIN"
                    className="h-10 w-auto shrink-0 rounded-lg bg-white/90 p-1"
                    width={48}
                    height={48}
                  />

                  <div className="min-w-0">
                    <h2
                      id="membership-modal-title"
                      className="text-lg font-bold leading-tight sm:text-xl"
                    >
                      BIIN Membership Registration
                    </h2>

                    <p className="mt-0.5 text-xs text-white/85 sm:text-sm">
                      +88 09640 123 701-3 · info@biin.org.bd
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="shrink-0 rounded-full p-2 transition-colors hover:bg-white/20 disabled:opacity-50"
                  aria-label="Close registration form"
                >
                  <BsX size={24} />
                </button>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-sm">
                BIIN is a registered non-profit trust dedicated to transforming
                the future of Bangladesh through ICT skill development and
                innovation.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6"
              noValidate
            >
              {/* Membership Category */}
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-800">
                  Membership Category{" "}
                  <span className="text-red-500">*</span>
                </legend>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {formCategories.map((category) => (
                    <label
                      key={category}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition-all ${
                        form.membershipCategory === category
                          ? "border-[#8b7355] bg-[#8b7355]/10 text-gray-900"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="membershipCategory"
                        value={category}
                        checked={form.membershipCategory === category}
                        onChange={(e) =>
                          handleChange(
                            "membershipCategory",
                            e.target.value
                          )
                        }
                        className="accent-[#8b7355]"
                      />

                      {category}
                    </label>
                  ))}
                </div>

                {errors.membershipCategory && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.membershipCategory}
                  </p>
                )}
              </fieldset>

              {/* Name */}
              <div>
                <label
                  htmlFor="member-name"
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
                  Name of Person / Contact Person / Organization{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="member-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40"
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* ID + Division */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* ID */}
                <div>
                  <label
                    htmlFor="member-id"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Student ID / NID / Passport No.{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="member-id"
                    type="text"
                    value={form.idNumber}
                    onChange={(e) =>
                      handleChange("idNumber", e.target.value)
                    }
                    placeholder="Your answer"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40"
                  />

                  {errors.idNumber && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.idNumber}
                    </p>
                  )}
                </div>

                {/* Division */}
                <div>
                  <label
                    htmlFor="member-division"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Division <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="member-division"
                    value={form.division}
                    onChange={(e) =>
                      handleChange("division", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40"
                  >
                    <option value="">Select division</option>

                    {divisions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {errors.division && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.division}
                    </p>
                  )}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label
                    htmlFor="member-email"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Email / Office Mail{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="member-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40"
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="member-phone"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Phone / Contact Number{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="flex">
                    {/* Fixed Bangladesh Country Code */}
                    <div className="flex shrink-0 items-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-100 px-3 text-sm font-semibold text-gray-700">
                      +880
                    </div>

                    {/* Phone input */}
                    <div className="flex min-w-0 flex-1">
                      {/* Fixed 01 */}
                      <div className="flex items-center rounded-none border border-gray-200 bg-gray-100 px-3 text-sm font-semibold text-gray-700">
                        01
                      </div>

                      <input
                        id="member-phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={9}
                        value={form.phone.slice(2)}
                        onChange={handlePhoneChange}
                        onKeyDown={handlePhoneKeyDown}
                        onPaste={(e) => {
                          e.preventDefault();

                          const pastedText =
                            e.clipboardData.getData("text");

                          const digitsOnly =
                            pastedText.replace(/\D/g, "");

                          let remainingDigits = digitsOnly;

                          if (remainingDigits.startsWith("01")) {
                            remainingDigits =
                              remainingDigits.slice(2);
                          }

                          remainingDigits =
                            remainingDigits.slice(0, 9);

                          handleChange(
                            "phone",
                            `01${remainingDigits}`
                          );
                        }}
                        placeholder="XXXXXXXXX"
                        autoComplete="tel-national"
                        className="w-full min-w-0 rounded-r-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40"
                      />
                    </div>
                  </div>

                  <p className="mt-1 text-[11px] text-gray-500">
                    01 is fixed. Enter 9 more digits
                    (e.g. 712345678)
                  </p>

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Area of Interest */}
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-800">
                  Area of Interest
                </legend>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {areasOfInterest.map((area) => (
                    <label
                      key={area}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition-all ${
                        form.areaOfInterest === area
                          ? "border-emerald-500 bg-emerald-50 text-gray-900"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="areaOfInterest"
                        value={area}
                        checked={form.areaOfInterest === area}
                        onChange={(e) =>
                          handleChange(
                            "areaOfInterest",
                            e.target.value
                          )
                        }
                        className="accent-emerald-500"
                      />

                      {area}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Submit Error */}
              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-2 pb-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#8b7355] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#756045] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  disabled={isSubmitting}
                  className="text-sm font-medium text-[#8b7355] hover:text-[#5c4a35] disabled:opacity-50"
                >
                  Clear form
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/*
|--------------------------------------------------------------------------
| MEMBERSHIP PAGE
|--------------------------------------------------------------------------
*/

const Membership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const openModal = useCallback((category = "") => {
    setPreselectedCategory(category);
    setIsModalOpen(true);
    setSuccessMessage("");
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setPreselectedCategory("");
  }, []);

  const handleSuccess = useCallback(() => {
    setSuccessMessage(
      "Registration submitted successfully! We will contact you soon."
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 6000);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Success Message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-800"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">
            BIIN Membership Categories
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Join the Bangladesh ICT & Innovation Network (BIIN) and become part
            of a movement that&apos;s digitally transforming Bangladesh through
            youth empowerment, education, innovation, and collaboration.
          </p>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {membershipCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className={`${category.bgColor} ${category.borderColor} rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-full bg-gradient-to-r ${category.color} p-3`}
                >
                  <span
                    className="block h-8 w-8"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-gray-700">
                {category.description}
              </p>

              <div className="mb-4 rounded-lg bg-white/50 p-3">
                <h4 className="mb-2 text-sm font-semibold text-gray-800">
                  Requirements:
                </h4>

                <p className="text-xs leading-relaxed text-gray-600">
                  {category.requirements}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openModal(category.title)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 font-semibold text-white transition-all duration-200 hover:from-sky-500 hover:to-emerald-500"
              >
                Apply Now
                <BsArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Membership Upgrade */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Membership Upgrade & Conversion
            </h3>

            <p className="mb-6 text-lg">
              Members may upgrade or transition from one category to another
              (e.g., Youth Member to Life Member) with applicable discounts on
              registration or renewal fees.
            </p>

            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-600 transition-all duration-200 hover:bg-gray-100"
            >
              Register Now
              <BsArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Registration Modal */}
      <MembershipModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preselectedCategory={preselectedCategory}
        onSuccess={handleSuccess}
      />
    </section>
  );
};

export default Membership;