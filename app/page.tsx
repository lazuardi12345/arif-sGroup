import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import MBGProgram from '@/components/mbg-program'
import Services from '@/components/services'
import Workflow from '@/components/workflow'
import WhyChooseUs from '@/components/why-choose-us'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MBGProgram />
      <Services />
      <Workflow />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
