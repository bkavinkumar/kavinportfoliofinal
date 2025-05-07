import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, Eye } from "lucide-react";
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

export default function ExperienceSection() {
  const [viewingExperience, setViewingExperience] = useState<null | {
    title: string;
    company?: string;
    issuer?: string;
    location?: string;
    duration?: string;
    description: string;
    type: string;
    certificateUrl?: string;
  }>(null);

  const experiences = [
    {
      title: "Web Development Internship",
      company: "Cognifyz",
      location: "Remote",
      duration: "May 2023 - Jun 2023",
      description: "Completed a 1-month Web Development Internship gaining hands-on experience in building responsive websites using HTML, CSS, JavaScript, and React.js.",
      type: "internship",
      certificateUrl: "/cognifyzcertification.jpeg",
    },
    {
      title: "Inplant Training - Cloud Computing",
      company: "Durga Tech",
      location: "Tamil Nadu, India",
      duration: "7 days",
      description: "Gained hands-on experience in cloud computing technologies and platforms.",
      type: "training",
      certificateUrl: "/durgatech.jpg",
    },
    {
      title: "Inplant Training - Internet of Things",
      company: "Nxt Gen",
      location: "Tamil Nadu, India",
      duration: "7 days",
      description: "Learned about IoT technologies, protocols, and applications.",
      type: "training",
      certificateUrl: "/nxtgen.jpg",
    },
  ];

  const achievements = [
    {
      title: "Hackathon - Web Scraping",
      issuer: "KEC",
      description: "Secured 2nd prize in hackathon on domain of 'Web scraping'",
      type: "achievement",
      certificateUrl: "/webscrap.jpg",
    },
    {
      title: "Hackathon - 3D Animation",
      issuer: "KEC",
      description: "Participated in a 24hrs hackathon in the domain of '3D animation'",
      type: "achievement",
      certificateUrl: "/csdhack.jpg",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Experience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Internships & Training
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-bold">{exp.title}</h4>
                      <Badge variant="outline" className="text-sm">
                        {exp.type === "internship" ? "Internship" : "Training"}
                      </Badge>
                    </div>

                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.location} • {exp.duration}
                    </p>

                    <p>{exp.description}</p>

                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => setViewingExperience(exp)}
                      >
                        <Eye className="w-4 h-4" /> View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-bold">{achievement.title}</h4>
                    <p className="text-primary">{achievement.issuer}</p>
                    <p className="mt-3">{achievement.description}</p>

                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => setViewingExperience(achievement)}
                      >
                        <Eye className="w-4 h-4" /> View Achievement
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Dialog
          open={!!viewingExperience}
          onOpenChange={() => setViewingExperience(null)}
        >
          {viewingExperience && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{viewingExperience.title}</DialogTitle>
                <DialogDescription>
                  {viewingExperience.company || viewingExperience.issuer}
                  {viewingExperience.location &&
                    ` • ${viewingExperience.location}`}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-secondary/30">
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>{viewingExperience.description}</p>
                </div>

                {(viewingExperience.type === "internship" ||
                  viewingExperience.type === "training" ||
                  viewingExperience.type === "achievement") && (
                  <div className="mt-4">
                    {viewingExperience.certificateUrl ? (
                      <img
                        src={viewingExperience.certificateUrl}
                        alt="Certificate"
                        className="w-full rounded-md border shadow"
                      />
                    ) : (
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                        <p className="text-muted-foreground">
                          Certificate Not Available
                        </p>
                      </div>
                    )}
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
