import { HeroSection } from "./components/portfolio/heroSession";
import { Header } from "./components/portfolio/header";
import { SkillsSection } from "./components/portfolio/skillsSection";
import { JourneySection } from "./components/portfolio/journeySection";
import { ProjectsSection } from "./components/portfolio/projectsSection";
import { Footer } from "./components/portfolio/footer";

export default function Home() {
  return (
   <div className="bg-background text-white">
    <Header/>
      <main>
        <HeroSection />
        <SkillsSection/>
        <JourneySection/>
        <ProjectsSection/>
      </main>
    <Footer/>
    </div>
  );
}
