import { pathsSection } from '../../data/landingContent'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function PathsSection() {
  return (
    <section className="paths-section" id="categories">
      <div className="site-container">
        <SectionHeader title={pathsSection.title} subtitle={pathsSection.subtitle} />

        <div className="path-grid">
          {pathsSection.paths.map((path) => (
            <article className="path-card" key={path.name}>
              <div className="path-icon-circle">
                <Icon name={path.icon} />
              </div>
              <h3 className="path-name">{path.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
