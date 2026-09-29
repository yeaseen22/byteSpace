/**
 * Centred section heading used by the Discover and Learning Paths sections.
 * `title` accepts a node so callers control their own line breaks.
 */
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header center">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}
