
import HeroSection from "../components/NebulaTrade/heroSection"
import HeaderNebula from "../components/NebulaTrade/headerNebula"
import AboutSection from "../components/NebulaTrade/aboutSection"
import DocumentationSection from "../components/NebulaTrade/documentationSection"
import FooterSection from "../components/NebulaTrade/footerSection"

export default function page() {
  return (
    <div>
      <HeaderNebula/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <DocumentationSection/>
        </main>
      <FooterSection/>
    </div>
  )
}
