import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Privileges from "@/components/sections/Privileges"
import Reviews from "@/components/sections/Reviews"
import Features from "@/components/sections/Features"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
          <Hero/>
          <Stats/>
          <Features/>
          <Privileges/>
          <Reviews/>
          <CTA/>
    </>
  )
}
