import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import ContactModal from './components/ContactModal'

function App() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <div id="services">
          <ServicesSection onSelectService={setSelectedService} />
        </div>
      </main>
      <Footer />
      <ContactModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  )
}

export default App