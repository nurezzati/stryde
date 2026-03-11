export default function Ticker() {
  const items = [
    "Free Shipping Over $100",
    "New Arrivals: Velocity Series",
    "Summer Collection Now Live",
    "Built For Runners, By Runners",
    "30-Day Performance Guarantee",
    "Engineered for Every Mile",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 overflow-hidden py-3.5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-0 shrink-0">
            <span className="text-white/85 text-[11px] font-semibold tracking-[0.25em] uppercase whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-[#ff3500] text-xs select-none">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
