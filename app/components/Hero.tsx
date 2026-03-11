import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black" style={{ height: "100dvh", minHeight: "600px" }}>
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?w=1920&q=75&fit=crop"
        alt="Runner at golden hour"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Diagonal geometric accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 60%, rgba(255,53,0,0.12) 100%)",
        }}
      />

      {/* Orange vertical line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff3500]" />

      {/* Main content — pt-24 offsets the fixed navbar (~80px) so text never hides behind it */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl -translate-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 fade-up">
            <div className="h-px w-10 bg-[#ff3500]" />
            <span className="text-[#ff3500] text-xs font-semibold tracking-[0.35em] uppercase">
              SS26 Collection — Now Live
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white leading-none mb-6 fade-up-delay-1"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              letterSpacing: "0.02em",
            }}
          >
            Built 
            <br />
            <span className="text-[#ff3500]">For The</span>
            <br />
            Relentless.
          </h1>

          {/* Body copy */}
          <p className="text-white/65 text-base leading-relaxed max-w-md mb-8 fade-up-delay-2">
            Technical running apparel engineered for athletes who refuse to
            slow down. Every thread. Every stitch. Every mile.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-up-delay-3">
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#ff3500] text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#d42d00] transition-colors group"
            >
              Shop Now
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-white/40 text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

    </section>
  );
}
