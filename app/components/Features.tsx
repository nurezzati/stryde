const features = [
  {
    number: "01",
    name: "AeroWeave™ Fabric",
    description:
      "Ultra-lightweight mesh with directional stretch zones. Breathes where you sweat, supports where you push.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "ErgoMove Fit",
    description:
      "Body-mapped construction that mirrors your natural gait cycle. Zero restrictions from warm-up to finish line.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "ThermalShift™",
    description:
      "Phase-change microfibers that regulate core temperature in real-time. Stay cool in summer, retain heat in winter.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "EcoForge Process",
    description:
      "72% recycled materials. Dope-dyed fibers that use 85% less water. Performance and planet, not a compromise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-[#f5f5f5] py-28 px-6 relative overflow-hidden">
      {/* Background geometric accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/50 pointer-events-none"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-[#ff3500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            The Science of Speed
          </p>
          <h2
            className="text-[#0a0a0a] text-5xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            Engineered for
            <br />
            Performance
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-white p-8 group hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[#ff3500] text-4xl leading-none group-hover:text-[#ff3500]"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {f.number}
                </span>
                <span className="text-black/30 group-hover:text-white/30 transition-colors">
                  {f.icon}
                </span>
              </div>

              <h3
                className="text-[#0a0a0a] group-hover:text-white text-xl mb-3 transition-colors"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
              >
                {f.name}
              </h3>
              <p className="text-sm text-[#666] group-hover:text-white/50 leading-relaxed transition-colors">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
