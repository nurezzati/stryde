import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#ff3500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Product Highlights
            </p>
            <h2
              className="text-[#0a0a0a] text-5xl md:text-6xl leading-none"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              Gear That
              <br />
              Goes The Distance
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4" style={{ height: "680px" }}>
          {/* Large left image */}
          <div className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80&fit=crop"
              alt="Runner on track"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span
                className="block text-white text-5xl leading-none mb-2"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
              >
                Velocity Pro Tee
              </span>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Lightweight Run Series</span>
                <Link
                  href="#"
                  className="bg-[#ff3500] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-[#d42d00] transition-colors"
                >
                  FROM RM350
                </Link>
              </div>
            </div>
          </div>

          {/* Top-right image */}
          <div className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&q=80&fit=crop"
              alt="Athletic gear flat lay"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span
                className="block text-white text-3xl leading-none mb-1"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
              >
                Pace Shorts 5"
              </span>
              <span className="text-white/60 text-sm"> FROM RM650</span>
            </div>
          </div>

          {/* Bottom-right: two cells */}
          <div className="col-span-12 md:col-span-3 row-span-1 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1549476464-37392f717541?w=500&q=80&fit=crop"
              alt="Running compression tights"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span
                className="block text-white text-2xl leading-none mb-1"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
              >
                Stride Tights
              </span>
              <span className="text-white/60 text-sm">FROM RM400</span>
            </div>
          </div>

          {/* Quote / accent block */}
          <div className="col-span-12 md:col-span-2 row-span-1 bg-[#ff3500] flex flex-col justify-between p-6 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            <span
              className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase"
            >
              Our mantra
            </span>
            <p
              className="text-white text-3xl leading-none"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
            >
              Every
              <br />
              Mile
              <br />
              Counts.
            </p>
          </div>
        </div>

        {/* Browse CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-3 border border-black text-[#0a0a0a] text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#0a0a0a] hover:text-white transition-all group"
          >
            Browse All Products
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
        </div>
      </div>
    </section>
  );
}
