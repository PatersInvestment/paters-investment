function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <span style={styles.logo}>🏠</span>
        <span style={styles.name}>Paters Investment</span>
      </div>
      <span style={styles.tagline}>Cleaning & Pest Control Experts</span>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#1a6b3c',
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    fontSize: '1.6rem',
  },
  name: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  tagline: {
    color: '#a8f0c6',
    fontSize: '0.85rem',
    fontStyle: 'italic',
  },
}

export default Navbar