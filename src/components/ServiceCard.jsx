function ServiceCard({ service, onSelect }) {
  return (
    <div
      className="service-card"
      style={styles.card}
      onClick={() => onSelect(service)}
    >
      <div style={styles.icon}>{service.icon}</div>
      <h3 style={styles.title}>{service.title}</h3>
      <p style={styles.description}>{service.description}</p>
      <ul style={styles.featureList}>
        {service.features.map((feature, index) => (
          <li key={index} style={styles.featureItem}>
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button style={styles.button}>Contact Us →</button>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#1eff00',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  icon: {
    fontSize: '3rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#1a6b3c',
  },
  description: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.6',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  featureItem: {
    fontSize: '0.9rem',
    color: '#333',
  },
  button: {
    marginTop: '8px',
    padding: '12px 20px',
    backgroundColor: '#1a6b3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
}

export default ServiceCard