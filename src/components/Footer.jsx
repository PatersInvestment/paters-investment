function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Paters Investment. All rights reserved.
      </p>
      <p style={styles.sub}>Cleaning & Pest Control — Serving you with care.</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a6b3c',
    padding: '20px 24px',
    textAlign: 'center',
    marginTop: 'auto',
  },
  text: {
    color: '#ffffff',
    fontSize: '0.9rem',
    marginBottom: '4px',
  },
  sub: {
    color: '#a8f0c6',
    fontSize: '0.8rem',
    fontStyle: 'italic',
  },
}

export default Footer