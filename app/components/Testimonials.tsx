import Image from "next/image";

const testimonials = [
  {
    quote:
      "I've tried every major brand. Nothing comes close to STRYDE for long-distance comfort. Ran my first 100-miler in the Velocity Pro — zero chafing, zero regrets.",
    name: "Marcus T.",
    title: "Ultra-Marathon Runner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop&crop=face",
    miles: "3,200 mi / year",
  },
  {
    quote:
      "The ThermalShift tech is real. I run year-round in Boston and these are the first pieces I've found that actually work in both 90°F heat and 20°F cold.",
    name: "Priya S.",
    title: "Boston Marathon Qualifier",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80&fit=crop&crop=face",
    miles: "1,800 mi / year",
  },
  {
    quote:
      "Switched my whole kit to STRYDE last season. My PR dropped by 4 minutes. Coincidence? I don't think so. The shorts feel like wearing nothing.",
    name: "Jordan K.",
    title: "Track Athlete, 10K Specialist",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face",
    miles: "2,500 mi / year",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f5] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff3500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            From the Community
          </p>
          <h2
            className="text-[#0a0a0a] text-5xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            Run by Runners
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 flex flex-col gap-6 group hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 right-6 text-[#ff3500]/10 text-9xl leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-bebas)" }}
                aria-hidden
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-[#ff3500]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[#333] text-sm leading-relaxed flex-1 relative z-10">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/8">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0a0a0a] text-sm font-semibold truncate">{t.name}</p>
                  <p className="text-[#999] text-xs truncate">{t.title}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#ff3500] text-xs font-semibold tracking-wider">
                    {t.miles}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
