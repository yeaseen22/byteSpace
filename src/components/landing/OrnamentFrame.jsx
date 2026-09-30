/**
 * A frame of transparent 3D ornaments, positioned from measured Figma
 * geometry. Both the hero and the creator CTA use the same composition of
 * 3D renders, just at different sizes and offsets.
 */
export default function OrnamentFrame({ ornaments, className = '' }) {
  return (
    <div className={`ornament-frame ${className}`.trim()} aria-hidden="true">
      {ornaments.map((ornament) => (
        <img
          key={`${ornament.key}-${ornament.left}-${ornament.top}`}
          className={`ornament float-anim-${ornament.float}`}
          data-parallax={ornament.parallax ? String(ornament.parallax) : undefined}
          src={ornament.src}
          alt=""
          style={{
            left: `${ornament.left}%`,
            top: `${ornament.top}%`,
            width: `${ornament.width}px`,
            height: `${ornament.height}px`,
          }}
        />
      ))}
    </div>
  )
}
