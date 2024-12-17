import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;