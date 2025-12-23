export function IconFlagIndia({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" {...props}>
      <rect width="12" height="3" y="0" fill="#FF9933" />
      <rect width="12" height="3" y="3" fill="#fff" />
      <rect width="12" height="3" y="6" fill="#138808" />
      <circle cx="6" cy="4.5" r="0.9" fill="#054187" />
      <g stroke="#054187" strokeWidth="0.1">
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15) * Math.PI / 180;
          const x1 = 6 + 0.9 * Math.cos(angle);
          const y1 = 4.5 + 0.9 * Math.sin(angle);
          const x2 = 6 + 1.3 * Math.cos(angle);
          const y2 = 4.5 + 1.3 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  )
}
