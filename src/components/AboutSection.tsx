
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Coffee, BookOpen } from "lucide-react";
import image2 from "/kavin11.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="w-full aspect-square rounded-xl overflow-hidden border-4 border-primary/20 mb-6">
                <img
                  src={image2}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">Kavin Kumar B</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span>Web Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Computer Science Graduate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I am a passionate web developer with expertise in creating responsive and user-friendly web applications. 
                    My journey in the world of programming started during my college days, where I discovered my love for 
                    turning ideas into functional digital solutions.
                  </p>
                  <p>
                    Throughout my career, I've worked on various projects ranging from simple static websites to complex 
                    web applications. I enjoy both frontend and backend development, allowing me to build full-stack 
                    solutions that provide great user experiences while maintaining robust functionality.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                    or designing UI/UX concepts in Figma. I believe in continuous learning and staying updated with the 
                    latest industry trends.
                  </p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">What I Bring to the Table:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Problem Solving</Badge>
                    <Badge>Clean Code</Badge>
                    <Badge>UI/UX Design</Badge>
                    <Badge>Team Collaboration</Badge>
                    <Badge>Fast Learning</Badge>
                    <Badge>Adaptability</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
