import services from '../data/Services'
import ServiceCard from './ServiceCard'

function ServicesSection({ onSelectService }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <p style={styles.subheading}>
        Tap a service below to get in touch with us directly.
      </p>
      <div style={styles.grid}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={onSelectService}
          />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '32px 20px',
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a6b3c',
    marginBottom: '8px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '28px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
}

export default ServicesSection