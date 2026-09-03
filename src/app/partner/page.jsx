"use client";

import React from "react";
import part from "../../../public/partner.png";
import part1 from "../../../public/partner1.png";
// import part3 from "../../../public/partner3.png";
import part4 from "../../../public/partner4.png";
import part5 from "../../../public/partner5.png";
import part6 from "../../../public/partner6.png";
import part7 from "../../../public/partner7.png";
import Image from "next/image";

const partners = [
  { src: part, alt: "Partner 1" },
  { src: part1, alt: "Partner 2" },
  // { src: part3, alt: "Partner 3" },
  { src: part4, alt: "Partner 4" },
  { src: part5, alt: "Partner 5" },
  { src: part6, alt: "Partner 6" },
  { src: part7, alt: "Partner 7" },
];

// Modern, responsive marquee using CSS animation
const Marquee = ({ children, reverse = false, speed = 30 }) => (
  <div className="relative w-full overflow-hidden">
    <div
      className={`flex items-center gap-8 animate-marquee ${
        reverse ? "animate-marquee-reverse" : ""
      }`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {children}
      {children}
    </div>
  </div>
);

// Marquee keyframes
const style = `
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}

.animate-marquee {
  animation: marquee linear infinite;
  min-width: 200%;
}

.animate-marquee-reverse {
  animation: marquee-reverse linear infinite;
  min-width: 200%;
}
`;

const Partner = () => {
  return (
    <>
      <style>{style}</style>

      {/* =====================================================
          PARTNERS SECTION
      ====================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          border-0
          outline-none
          bg-white
          py-12
          px-3
          shadow-none
          sm:py-20
          sm:px-10
        "
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ====================================================== */}

        {/* Soft Emerald Glow - Top Left */}
        <div
          className="
            pointer-events-none
            absolute
            -left-24
            -top-24
            z-0
            h-56
            w-56
            rounded-full
            bg-emerald-100/70
            blur-3xl
            sm:h-72
            sm:w-72
          "
        />

        {/* Soft Sky Glow - Right */}
        <div
          className="
            pointer-events-none
            absolute
            -right-28
            top-1/3
            z-0
            h-72
            w-72
            rounded-full
            bg-sky-100/60
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        {/* Soft Indigo Glow - Bottom */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-28
            -left-10
            z-0
            h-72
            w-72
            rounded-full
            bg-indigo-100/50
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        {/* Subtle Background Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-gradient-to-br
            from-white
            via-white
            to-slate-50
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* Heading */}
          <h2
            className="
              mb-3
              text-center
              text-4xl
              font-extrabold
              tracking-tight
              text-gray-900
              drop-shadow-lg
              sm:text-6xl
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-emerald-500
                via-indigo-500
                to-sky-500
                bg-clip-text
                text-transparent
              "
            >
              Our Partners
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mb-8
              px-2
              text-center
              text-lg
              text-gray-500
              sm:mb-12
              sm:text-xl
            "
          >
            We proudly collaborate with industry leaders and innovative
            organizations.
          </p>

          {/* =====================================================
              DESKTOP / TABLET MARQUEE - ROW 1
          ====================================================== */}

          <div className="mb-6 hidden sm:block">
            <Marquee speed={30}>
              {partners.map((partner, idx) => (
                <div
                  key={partner.alt}
                  className="
                    my-3
                    mx-6
                    flex
                    h-24
                    w-40
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gray-100
                    bg-white/90
                    shadow-lg
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-emerald-50
                    hover:shadow-2xl
                  "
                  style={{
                    minWidth: 160,
                  }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="object-contain"
                    width={120}
                    height={72}
                    sizes="(max-width: 640px) 80px, 120px"
                    loading={idx < 2 ? "eager" : "lazy"}
                    priority={idx < 2}
                    style={{
                      maxHeight: "72px",
                      maxWidth: "120px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>

          {/* =====================================================
              DESKTOP / TABLET MARQUEE - ROW 2
          ====================================================== */}

          <div className="hidden sm:block">
            <Marquee reverse speed={36}>
              {partners
                .slice()
                .reverse()
                .map((partner, idx) => (
                  <div
                    key={partner.alt}
                    className="
                      my-3
                      mx-6
                      flex
                      h-24
                      w-40
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-100
                      bg-white/90
                      shadow-lg
                      transition-all
                      duration-200
                      hover:scale-105
                      hover:bg-indigo-50
                      hover:shadow-2xl
                    "
                    style={{
                      minWidth: 160,
                    }}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      className="object-contain"
                      width={120}
                      height={72}
                      sizes="(max-width: 640px) 80px, 120px"
                      loading={idx < 2 ? "eager" : "lazy"}
                      priority={idx < 2}
                      style={{
                        maxHeight: "72px",
                        maxWidth: "120px",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                ))}
            </Marquee>
          </div>

          {/* =====================================================
              MOBILE GRID
          ====================================================== */}

          <div className="mt-6 grid grid-cols-2 gap-4 sm:hidden">
            {partners.map((partner, idx) => (
              <div
                key={partner.alt}
                className="
                  flex
                  h-20
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-100
                  bg-white/90
                  shadow
                  transition-all
                  duration-200
                  hover:bg-emerald-50
                "
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain"
                  width={80}
                  height={48}
                  sizes="80px"
                  loading={idx < 2 ? "eager" : "lazy"}
                  priority={idx < 2}
                  style={{
                    maxHeight: "48px",
                    maxWidth: "80px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;