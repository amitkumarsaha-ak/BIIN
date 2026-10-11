
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsMenuButtonWideFill, BsFillBackspaceFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import logo from "../../../public/BIIN Logo-1.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  {
    name: "Awards",
    href: "https://awards.biin.org.bd",
    target: "_blank",
  },
  // {
  //   name: "Governance & Trust",
  //   href: "/governance-trust",
  // },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  { name: "Partner", href: "/partner" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  // For mobile dropdowns
  const handleDropdown = (idx) => {
    setDropdownOpen(dropdownOpen === idx ? null : idx);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <nav className="w-full border-b border-gray-300 bg-white px-4 py-2 transition-all duration-300 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="BIIN logo"
              height={80}
              width={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 font-semibold lg:flex xl:gap-4">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li key={link.name} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-black transition hover:bg-white/10 hover:text-teal-600 focus:outline-none"
                  >
                    <span className="text-sm">{link.name}</span>
                    <BiChevronDown
                      size={20}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>

                  <ul className="pointer-events-none absolute left-0 top-full z-40 min-w-[180px] translate-y-2 rounded-xl bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-5 py-2 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-5 py-2 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-600"
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  {link.target === "_blank" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-3 py-1.5 text-sm text-gray-700 transition-all duration-200 hover:bg-indigo-900/80 hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
                        pathname === link.href
                          ? "border border-indigo-700 bg-indigo-900 font-bold text-white shadow-sm"
                          : "text-gray-700 hover:bg-indigo-900/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20 lg:hidden"
          >
            {!isOpen ? (
              <BsMenuButtonWideFill size={28} color="#000" />
            ) : (
              <BsFillBackspaceFill size={28} color="#000" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-black/60 transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-xs transform bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="BIIN logo"
                height={44}
                width={44}
                className="rounded-full border border-gray-200 object-contain"
                priority
              />

              <span className="bg-gradient-to-r from-black via-emerald-600 to-indigo-700 bg-clip-text text-lg font-bold text-transparent">
                BIIN
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 transition hover:bg-gray-100"
              aria-label="Close menu"
            >
              <BsFillBackspaceFill size={24} color="#333" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li key={link.name} className="mb-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-800 transition hover:bg-teal-50"
                    onClick={() => handleDropdown(idx)}
                    aria-expanded={dropdownOpen === idx}
                  >
                    <span>{link.name}</span>

                    <BiChevronDown
                      size={22}
                      className={`transition-transform ${
                        dropdownOpen === idx
                          ? "rotate-180 text-teal-600"
                          : ""
                      }`}
                    />
                  </button>

                  <ul
                    className={`mt-0 space-y-1 overflow-hidden pl-3 transition-all duration-200 ${
                      dropdownOpen === idx
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  {link.target === "_blank" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-800 transition hover:bg-indigo-50/40 hover:text-indigo-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-base font-medium transition ${
                        pathname === link.href
                          ? "border-l-4 border-indigo-800 bg-indigo-50 font-bold text-indigo-900"
                          : "text-gray-800 hover:bg-indigo-50/40 hover:text-indigo-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Join Now */}
          <div className="px-4 pb-6">
            <a
              href="https://forms.gle/tqTmSpieThsCeQFV6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 py-2 text-center font-bold text-white shadow transition hover:from-sky-500 hover:to-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
};
