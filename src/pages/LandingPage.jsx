import HeroSection from "../components/HeroSection"
import SkillSection from "../components/SkillSection"
import ExperienceSection from "../components/ExperienceSection"

function LandingPage() {
  return (
    <main className="flex flex-col items-center w-full bg-primary text-text-primary">
        <HeroSection />
        <SkillSection />
        <ExperienceSection />
    </main>
  );
}

export default LandingPage;