import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center hero-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <Button
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};