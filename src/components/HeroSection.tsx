
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import LikeButton from "./LikeButton";
import image from "/kavin2e.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-20 pt-32 flex items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Kavin Kumar B</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Web Developer
            </p>
            <p className="max-w-[600px] text-muted-foreground">
              Motivated web developer passionate about building responsive, user-friendly, 
              and scalable web applications. Skilled in front-end and back-end 
              technologies, aiming to contribute to innovative projects while
              continuously learning and growing in a dynamic environment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="gap-2">
                <a href="#contact">
                  Get in touch
                </a>
              </Button>
              
              <Button variant="outline" asChild className="gap-2">
                <a href="/resume.pdf" download="KavinKumarB_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              
              <LikeButton />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg border border-border">
              <p className="font-medium">Web Developer</p>
              <p className="text-sm text-muted-foreground">Tamilnadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
