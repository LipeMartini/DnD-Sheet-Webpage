import Hero from './components/Hero.jsx'
import Overview from './components/Overview.jsx'
import Workflow from './components/Workflow.jsx'
import Demo from './components/Demo.jsx'
import Download from './components/Download.jsx'
import Author from './components/Author.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body text-parchment min-h-screen">
      <Hero />
      <main className="px-[clamp(1.5rem,4vw,5rem)] pb-16">
        <Overview />
        <Workflow />
        <Demo />
        <Download />
        <Author />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
