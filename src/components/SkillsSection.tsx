import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const [viewingCertificate, setViewingCertificate] = useState<null | {
    title: string;
    issuer: string;
    description: string;
    certificateUrl?: string;
  }>(null);

  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        { name: "UI & UX", level: 85 },
        { name: "Backend Development", level: 75 },
        { name: "Problem Solving", level: 90 },
        { name: "Web Development", level: 80 },
        { name: "Data Analysis", level: 70 },
      ],
    },
    {
      category: "Personal Skills",
      skills: ["Time Management", "Adaptability & Flexible", "Teamwork", "Creativity"],
    },
    {
      category: "Areas of Interest",
      skills: ["UI & UX", "3D Animation (Blender)", "Figma", "Web Development"],
    },
    {
      category: "Languages",
      skills: ["C", "C++", "JAVA", "PYTHON", "React.js"],
    },
  ];

  const certifications = [
    {
      title: "MongoDB Associative Developer",
      issuer: "MongoDB University",
      duration: "Feb 2024",
      description: "Certified in database design, security implementation, and data modeling with MongoDB.",
      type: "certification",
      certificateUrl: "/mongodbpic.png",
    },
    {
      title: "Internet of Things",
      issuer: "NPTEL",
      duration: "Dec 2023",
      description: "Learned about IoT architectures, protocols, and practical applications.",
      type: "certification",
      certificateUrl: "/npteliot.png",
    },
  ];

  const getColorByLevel = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Skills & Interests</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                {category.category === "Technical Skills" ? (
                  <div className="space-y-4">
                    {category.skills.map((skill: any) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted h-2 rounded">
                          <div
                            className={cn(
                              "h-2 rounded",
                              getColorByLevel(skill.level)
                            )}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="py-1.5 px-3 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          Certifications
        </h3>

        <div className="space-y-6">
          {certifications.map((certification, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="text-lg font-bold">{certification.title}</h4>
                  <Badge variant="outline" className="text-sm">
                    {certification.duration}
                  </Badge>
                </div>

                <p className="text-primary">{certification.issuer}</p>
                <p className="mt-3">{certification.description}</p>

                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewingCertificate(certification)}
                  >
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!viewingCertificate} onOpenChange={() => setViewingCertificate(null)}>
          {viewingCertificate && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{viewingCertificate.title}</DialogTitle>
                <DialogDescription>Issued by {viewingCertificate.issuer}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-secondary/30">
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>{viewingCertificate.description}</p>
                </div>

                {viewingCertificate.certificateUrl ? (
                  <img
                    src={viewingCertificate.certificateUrl}
                    alt="Certificate"
                    className="w-full rounded-md border shadow"
                  />
                ) : (
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                    <p className="text-muted-foreground">Certificate Not Available</p>
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
