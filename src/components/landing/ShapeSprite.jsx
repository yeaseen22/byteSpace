/** The lime coil used in the hero and on both feature showcases. */
export function SpringAccent({ width = 100, height = 120, className = '' }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10 C 80 10, 80 35, 20 45 C -20 55, 100 65, 20 85 C -20 95, 80 110, 30 115"
        stroke="#ccff00"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** The remaining decorative 3D accents, keyed by the reference class suffix. */
const sprites = {
  ribbon: (
    <svg width="90" height="100" viewBox="0 0 90 100" fill="none" aria-hidden="true">
      <path d="M15 15 Q 75 25 35 50 T 65 90" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
    </svg>
  ),
  coil: (
    <svg width="90" height="110" viewBox="0 0 90 110" fill="none" aria-hidden="true">
      <path d="M10 20 C 70 5, 80 40, 20 55 C -10 70, 75 80, 25 100" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
    </svg>
  ),
  torus: <div className="torus-3d" />,
  cylinder: <div className="cylinder-3d" />,
  pyramid: <div className="pyramid-3d" />,
}

export default function ShapeSprite({ shape }) {
  return sprites[shape] ?? null
}
