
import { School, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Kongu Engineering College",
      location: "Tamil Nadu, India",
      year: "2022 - 2026",
      description: "Currently pursuing B.E. with CGPA: 7.88",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Education (HSC)",
      field: "Science",
      institution: "Sakthi Vigneshwara Higher Secondary School",
      location: "Tamil Nadu, India",
      year: "2021 - 2022",
      description: "Completed with 90.0% marks",
      icon: School,
    },
    {
      degree: "Secondary Education (SSLC)",
      field: "General",
      institution: "Sakthi Vigneshwara Higher Secondary School",
      location: "Tamil Nadu, India",
      year: "2019 - 2020",
      description: "Graduated with 87.6% marks",
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Education</h2>
        
        <div className="mt-10">
          <div className="space-y-8">
            {education.map((item, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4 bg-primary/10 p-6 flex flex-col justify-center items-center text-center">
                      <item.icon className="w-10 h-10 text-primary mb-2" />
                      <p className="font-semibold">{item.year}</p>
                    </div>
                    <div className="w-full sm:w-3/4 p-6">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution || item.field}</p>
                      <p className="text-muted-foreground mt-1">
                        {item.location}
                      </p>
                      <p className="mt-4">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
