const stats = [
  { value: "12K+", label: "Athletes Worldwide" },
  { value: "50+", label: "Countries" },
  { value: "4.9★", label: "Average Rating" },
  { value: "0%", label: "Compromise" },
];

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 relative overflow-hidden">
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
        style={{
          background: "rgba(255,53,0,0.08)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <p className="text-center text-white/30 text-xs font-semibold tracking-[0.35em] uppercase mb-14">
          The Numbers Speak
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] text-center py-12 px-6 hover:bg-[#111] transition-colors"
            >
              <p
                className="text-[#ff3500] mb-3"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                  letterSpacing: "0.03em",
                }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
