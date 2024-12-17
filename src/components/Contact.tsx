import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Get In Touch</CardTitle>
          <CardDescription className="text-center">
            I'm always open to new opportunities and collaborations
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center gap-4">
          <Button variant="outline" size="icon">
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};