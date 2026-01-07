import { HeroSection } from "./components/Portfolio/heroSession";
import { Header } from "./components/Portfolio/header";
import { SkillsSection } from "./components/Portfolio/skillsSection";
import { JourneySection } from "./components/Portfolio/journeySection";
import { ProjectsSection } from "./components/Portfolio/projectsSection";
import { Footer } from "./components/Portfolio/footer";
import { PortfolioCode } from "./components/Portfolio/porfolioCode";

export default function Home() {
  return (
   <div className="bg-background text-white">
    <Header/>
      <main>
        <HeroSection />
        <SkillsSection/>
        <JourneySection/>
        <ProjectsSection/>
        <PortfolioCode/>
      </main>
    <Footer/>
    </div>
  );
}
