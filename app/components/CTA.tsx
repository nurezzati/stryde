"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85&fit=crop"
          alt="Runner at sunset"
          fill
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Diagonal geometric accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,53,0,0.15) 0%, transparent 50%)",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff3500]" />

      <div className="max-w-4xl mx-auto relative text-center">
        <p className="text-[#ff3500] text-xs font-semibold tracking-[0.35em] uppercase mb-6">
          Join the Movement
        </p>
        <h2
          className="text-white leading-none mb-6"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            letterSpacing: "0.02em",
          }}
        >
          Never Miss
          <br />
          A Drop.
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto mb-10">
          Get early access to new collections, exclusive member pricing, and training
          content from elite athletes.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/35 text-sm px-6 py-4 focus:outline-none focus:border-[#ff3500] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#ff3500] text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#d42d00] transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/25 text-xs mt-4">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
