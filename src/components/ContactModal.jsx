function ContactModal({ service, onClose }) {
  if (!service) return null

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(service.whatsapp.message)
    const url = `https://wa.me/${service.whatsapp.number}?text=${encoded}`
    window.open(url, '_blank')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(service.email.subject)
    const body = encodeURIComponent(service.email.body)
    const url = `mailto:${service.email.address}?subject=${subject}&body=${body}`
    window.location.href = url
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <span style={styles.icon}>{service.icon}</span>
          <h3 style={styles.title}>{service.title}</h3>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <p style={styles.prompt}>
          How would you like to reach us about <strong>{service.title}</strong>?
        </p>
        <div style={styles.actions}>
          <button style={styles.whatsappBtn} onClick={handleWhatsApp}>
            <span>📱</span> Contact via WhatsApp
          </button>
          <button style={styles.emailBtn} onClick={handleEmail}>
            <span>📧</span> Contact via Email
          </button>
        </div>
        <button style={styles.cancelBtn} onClick={onClose}>
          Maybe later
        </button>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '28px 24px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '1.8rem',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1a6b3c',
    flex: 1,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    color: '#999',
    padding: '4px',
  },
  prompt: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: '1.6',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  whatsappBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '14px',
    backgroundColor: '#25D366',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  emailBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '14px',
    backgroundColor: '#1a6b3c',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  cancelBtn: {
    background: 'none',
    border: 'none',
    color: '#999',
    fontSize: '0.9rem',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'underline',
  },
}

export default ContactModal