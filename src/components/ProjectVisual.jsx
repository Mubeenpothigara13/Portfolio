// Illustrated mockups shown until a real screenshot (`img`) is added to a project.

function Window({ children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0f0f12] shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  );
}

function Dashboard({ color }) {
  const bars = [38, 52, 44, 70, 58, 82, 66, 90, 74, 96];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[6%]">
      <Window className="w-full max-w-[640px]">
        <div className="grid grid-cols-12 gap-3 p-4 text-[10px] text-mute md:text-xs">
          <div className="col-span-3 hidden flex-col gap-2 sm:flex">
            <span className="mb-2 font-semibold text-bone">BizPilot</span>
            {["Overview", "Inventory", "Sales", "Forecast", "AI Insights"].map((l, i) => (
              <span
                key={l}
                className="rounded-md px-2 py-1"
                style={i === 3 ? { background: `${color}22`, color } : undefined}
              >
                {l}
              </span>
            ))}
          </div>
          <div className="col-span-12 flex flex-col gap-3 sm:col-span-9">
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Revenue", "₹4.2L", "+18%"],
                ["Stock SKUs", "1,284", "12 low"],
                ["Forecast", "↑ 32%", "next 7d"],
              ].map(([k, v, d]) => (
                <div key={k} className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
                  <p>{k}</p>
                  <p className="mt-1 text-sm font-semibold text-bone md:text-base">{v}</p>
                  <p style={{ color }}>{d}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
              <p className="mb-2">Sales vs predicted demand</p>
              <div className="flex h-24 items-end gap-1.5 md:h-32">
                {bars.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className="rounded-t-sm transition-all duration-700 group-hover:opacity-100"
                      style={{
                        height: `${h}%`,
                        background: i >= 7 ? `repeating-linear-gradient(45deg, ${color}, ${color} 3px, transparent 3px, transparent 6px)` : color,
                        opacity: i >= 7 ? 0.7 : 0.9,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-2" style={{ borderColor: `${color}44`, background: `${color}11` }}>
              <span className="rounded px-1.5 py-0.5 text-[9px] font-bold text-ink" style={{ background: color }}>
                AI
              </span>
              <span className="text-bone/90">Restock “Cotton Tee — M” — demand up 32% next week.</span>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

function Phone({ color }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-6 p-[6%]">
      <div className="relative aspect-[9/19] h-[88%] max-h-[520px] rounded-[2.2rem] border-[6px] border-[#1d1d21] bg-[#0f0f12] p-3 shadow-2xl">
        <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-white/10" />
        <div
          className="relative aspect-square w-full overflow-hidden rounded-2xl"
          style={{ background: `radial-gradient(circle at 30% 30%, ${color}, #1b3a5c 60%, #0b0b0e)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1/2 w-1/2 animate-[spin_12s_linear_infinite] rounded-full border border-white/20 bg-black/40">
              <div className="mx-auto mt-[45%] h-[10%] w-[10%] rounded-full bg-white/60" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-bone">Midnight Drive</p>
            <p className="text-[11px] text-mute">Sonio Mix · Lo-fi</p>
          </div>
          <div className="flex h-5 items-end gap-0.5">
            {[0, 0.2, 0.4, 0.1, 0.3].map((d, i) => (
              <span
                key={i}
                className="w-1 origin-bottom animate-eq rounded-full"
                style={{ height: "100%", background: color, animationDelay: `${d}s` }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 h-1 w-full rounded-full bg-white/10">
          <div className="h-full w-2/5 rounded-full" style={{ background: color }} />
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-mute">
          <span>1:24</span>
          <span>3:31</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-6 text-bone">
          <span className="text-xs">⏮</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-ink" style={{ background: color }}>
            ❚❚
          </span>
          <span className="text-xs">⏭</span>
        </div>
      </div>
      <div className="hidden w-40 flex-col gap-2 lg:flex">
        <p className="text-xs uppercase tracking-[0.2em] text-mute">Up next</p>
        {["Ocean Eyes", "Neon Lights", "Slow Motion", "Afterglow"].map((s, i) => (
          <div key={s} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] p-2">
            <span
              className="h-8 w-8 shrink-0 rounded-md"
              style={{ background: `linear-gradient(135deg, ${color}${["", "99", "66", "44"][i]}, #16161a)` }}
            />
            <span className="text-xs text-bone/90">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fashion({ color, brand = "" }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[80%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `${color}33` }}
      />
      <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 whitespace-pre-line text-center font-display text-[clamp(3rem,8vw,9rem)] font-bold leading-[0.85] tracking-tightest outline-text">
        {brand}
      </p>
      <div className="absolute left-1/2 top-1/2 w-[34%] max-w-[260px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:-translate-y-[55%] group-hover:rotate-[-6deg]">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id={`g-${color}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor="#1a1a1f" />
              </linearGradient>
            </defs>
            <path
              d="M70 20 L40 32 L10 62 L32 88 L48 76 L48 180 L152 180 L152 76 L168 88 L190 62 L160 32 L130 20 C124 36 112 44 100 44 C88 44 76 36 70 20 Z"
              fill={`url(#g-${color})`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />
            <path d="M70 20 C76 36 88 44 100 44 C112 44 124 36 130 20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8%] left-[6%] right-[6%] flex items-end justify-between text-[10px] uppercase tracking-[0.2em] text-mute md:text-xs">
        <span>SS / 25 Collection</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
          AI-generated 3D
        </span>
      </div>
    </div>
  );
}

function Invoice({ color }) {
  const rows = [
    ["14.2 kg Domestic", "2", "₹1,806"],
    ["19 kg Commercial", "1", "₹1,742"],
    ["5 kg FTL", "3", "₹1,473"],
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-5 p-[6%]">
      <div className="relative w-full max-w-[340px] rotate-[-3deg] rounded-xl bg-[#f3f1ea] p-5 text-[#1a1a1a] shadow-2xl transition-transform duration-700 group-hover:rotate-0">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold tracking-tight">SP GAS AGENCY</p>
            <p className="text-[10px] text-black/50">Tax Invoice · #SP-2419</p>
          </div>
          <span
            className="rotate-12 rounded border-2 px-2 py-0.5 text-[10px] font-bold"
            style={{ borderColor: color, color }}
          >
            PAID
          </span>
        </div>
        <div className="mt-4 border-t border-dashed border-black/20 pt-3 text-[11px]">
          {rows.map(([item, qty, amt]) => (
            <div key={item} className="flex justify-between py-1">
              <span className="w-1/2">{item}</span>
              <span className="text-black/50">×{qty}</span>
              <span className="font-medium">{amt}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t border-black/20 pt-3 text-sm font-bold">
          <span>Total</span>
          <span>₹5,021</span>
        </div>
      </div>
      <div className="hidden w-44 flex-col gap-3 md:flex">
        {[
          ["Filled", 142, 80],
          ["Empty", 58, 35],
          ["Due today", 17, 18],
        ].map(([k, v, w]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-mute">{k} cylinders</p>
            <p className="text-xl font-semibold text-bone">{v}</p>
            <div className="mt-2 h-1 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${w}%`, background: color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = { dashboard: Dashboard, phone: Phone, fashion: Fashion, invoice: Invoice };

function ProjectVisual({ project }) {
  if (project.img) {
    return (
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
    );
  }
  const Visual = VISUALS[project.visual];
  return (
    <div
      className="absolute inset-0"
      style={{ background: `radial-gradient(120% 90% at 50% 0%, ${project.color}1f, transparent 60%), #111114` }}
    >
      {Visual && <Visual color={project.color} brand={project.brand} />}
    </div>
  );
}

export default ProjectVisual;
