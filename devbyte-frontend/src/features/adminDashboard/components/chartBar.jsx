export const LineChart = ({ data }) => {
  // Extract Y values
  const values = data.map((d) => d.value);
  const max = Math.max(...values);

  // Generate SVG points
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100; // % horizontally
      const y = 100 - (d.value / max) * 100; // flip vertically
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Chart */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <polyline
          fill="none"
          stroke="rgb(56 189 248)"
          strokeWidth="2"
          points={points}
          className="transition-all duration-300"
        />

        {/* Gradient shadow under the curve */}
        <polyline
          points={`${points} 100,100 0,100`}
          fill="url(#fade)"
          className="opacity-30"
        />

        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(56 189 248)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Labels */}
      <div className="flex w-full justify-between text-xs text-gray-700 dark:text-gray-400  mt-2">
        {data.map((d) => (
          <span key={d.day}>{d.day}</span>
        ))}
      </div>
    </div>
  );
};
