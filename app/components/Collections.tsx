import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    label: "Men's Run",
    tagline: "Engineered for Speed",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80&fit=crop",
    alt: "Male runner in action",
  },
  {
    label: "Women's Run",
    tagline: "Move Without Limits",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80&fit=crop",
    alt: "Female runner at dawn",
    featured: true,
  },
  {
    label: "Accessories",
    tagline: "Finish the Look",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&fit=crop",
    alt: "Running shoes close-up",
  },
];

export default function Collections() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#ff3500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              SS26 Range
            </p>
            <h2
              className="text-[#0a0a0a] text-5xl md:text-6xl leading-none"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              The Collection
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0a0a0a] hover:text-[#ff3500] transition-colors group"
          >
            View All
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col) => (
            <Link
              key={col.label}
              href={col.href}
              className={`group relative overflow-hidden ${
                col.featured ? "md:row-span-1" : ""
              }`}
              style={{ height: col.featured ? "580px" : "580px" }}
            >
              {/* Image */}
              <Image
                src={col.image}
                alt={col.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Diagonal accent on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 70%, rgba(255,53,0,0.3) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  {col.tagline}
                </p>
                <h3
                  className="text-white text-4xl leading-none mb-6"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
                >
                  {col.label}
                </h3>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white border border-white/40 px-5 py-2.5 group-hover:bg-[#ff3500] group-hover:border-[#ff3500] transition-all duration-300">
                  Shop Now
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
