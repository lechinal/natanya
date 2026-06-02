export default function StarRating({ rating, size = 18, color = "#D4891A", emptyColor = "#3a2010" }) {
  const stars = [1, 2, 3, 4, 5].map((i) => ({
    i,
    pct: Math.round(Math.min(100, Math.max(0, (rating - (i - 1)) * 100))),
  }));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          {stars.map(({ i, pct }) => (
            <linearGradient key={i} id={`sr${i}`} x1="0" x2="1" y1="0" y2="0">
              <stop offset={`${pct}%`} stopColor={color} />
              <stop offset={`${pct}%`} stopColor={emptyColor} />
            </linearGradient>
          ))}
        </defs>
      </svg>
      {stars.map(({ i }) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={`url(#sr${i})`}
            stroke={color}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
