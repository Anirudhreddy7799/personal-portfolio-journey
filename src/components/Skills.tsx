import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "AWS",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
  "Next.js",
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-lg py-2 px-4 hover:bg-primary hover:text-white transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};