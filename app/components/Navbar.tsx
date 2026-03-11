"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Collections", "Performance", "About", "Journal"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span
            className={`text-3xl tracking-[0.15em] transition-colors duration-300 ${
              scrolled ? "text-[#0a0a0a]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            STRYDE
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#ff3500] transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:text-[#ff3500] ${
                  scrolled ? "text-[#0a0a0a]" : "text-white/85"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-5">
          <button
            aria-label="Search"
            className={`transition-colors hover:text-[#ff3500] ${
              scrolled ? "text-[#0a0a0a]" : "text-white/85"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button
            aria-label="Cart"
            className={`transition-colors hover:text-[#ff3500] ${
              scrolled ? "text-[#0a0a0a]" : "text-white/85"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
          </button>
          <Link
            href="#"
            className="bg-[#ff3500] text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-[#d42d00] transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-black/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-xs font-semibold tracking-[0.2em] uppercase text-black hover:text-[#ff3500] transition-colors"
            >
              {link}
            </Link>
          ))}
          <Link
            href="#"
            className="mt-4 block text-center bg-[#ff3500] text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#d42d00] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
