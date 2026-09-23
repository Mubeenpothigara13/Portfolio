/** Infinite horizontal ticker. Items are duplicated so the loop is seamless. */
function Marquee({ items, reverse = false, className = "", renderItem }) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i >= items.length}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
