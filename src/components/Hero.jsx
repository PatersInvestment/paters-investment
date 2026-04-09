function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          Clean Spaces.<br />Pest-Free Places.
        </h1>
        <p style={styles.subtext}>
          Paters Investment delivers professional cleaning and pest control
          services you can trust — for homes and businesses across the region.
        </p>
        <a href="#services" style={styles.cta}>
          View Our Services ↓
        </a>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a6b3c 0%, #2d9e5f 100%)',
    padding: '60px 24px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '640px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  heading: {
    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.3',
  },
  subtext: {
    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
    color: '#c8f0d8',
    lineHeight: '1.7',
  },
  cta: {
    display: 'inline-block',
    padding: '14px 32px',
    backgroundColor: '#ffffff',
    color: '#1a6b3c',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
}

export default Hero