import { Benefits } from "@/sections/Benefits"
import { Cta, Footer } from "@/sections/Closing"
import { Faq } from "@/sections/Faq"
import { Features } from "@/sections/Features"
import { Hero } from "@/sections/Hero"
import { Nav } from "@/sections/Nav"
import { Spotlight } from "@/sections/Spotlight"

// Mismo orden que la referencia (Cal AI), sin «quiénes somos» ni opiniones hasta tener reseñas reales.
export default function App() {
  return (
    <>
      <Nav />
      <main id="inicio">
        <Hero />
        <Features />
        <Benefits />
        <Spotlight />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
