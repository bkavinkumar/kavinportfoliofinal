
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma, LayoutDashboard } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Railway Reservation System",
      description: "Built a full-stack railway booking system with real-time seat availability, secure authentication, and a responsive UI. Implemented role-based access and MongoDB for efficient data management.",
      image: "https://t4.ftcdn.net/jpg/06/21/68/41/360_F_621684156_GHCg1koda7y1FKwCZ1WsuwIxk27Sezuh.jpg",
      technologies: ["MongoDB", "React", "Node.js", "Express", "Authentication"],
      date: "OCT 2023",
      githubUrl: "https://github.com/kavinkumarb/railwayreservation-system",
      liveUrl: "#",
      type: "fullstack"
    },
    {
      title: "Cafe Management System",
      description: "Developed a web-based café management platform for handling orders, inventory, and billing. Integrated React.js for UI, MongoDB for data storage, and Node.js for backend operations.",
      image: "https://www.shutterstock.com/image-illustration/cafe-shop-restaurant-design-modern-600nw-1457147903.jpg",
      technologies: ["React.js", "MongoDB", "Node.js", "Express", "UI/UX"],
      date: "FEB 2024",
      githubUrl: "https://github.com/kavinkumarb/Cafe-management-system",
      liveUrl: "#",
      type: "fullstack"
    },
    {
      title: "Password Manager",
      description: "Created a secure password manager with OTP-based authentication. Implemented encryption, JWT authentication, and Email OTP verification for enhanced security.",
      image: "https://pmecdn.protonweb.com/image-transformation/?s=c&image=images%2Ff_auto%2Cq_auto%2Fv1723561493%2Fwp-pme%2F5_reasons_you_need_a_business_password_manager_blog_cover2x%2F5_reasons_you_need_a_business_password_manager_blog_cover2x.%3F_i%3DAA",
      technologies: ["JWT", "OTP", "Encryption", "Email Verification"],
      date: "NOV 2023",
      githubUrl: "https://github.com/kavinkumarb/password-manager1",
      liveUrl: "#",
      type: "fullstack"
    },
    {
      title: "Spotify Clone",
      description: "Developed a Spotify clone using React.js and Node.js, featuring user authentication, playlist management, and music streaming capabilities. Integrated Spotify API for real-time data.",
      image: "https://www.figma.com/community/resource/6674c000-0287-4379-a445-7c73d3ab36fa/thumbnail",
      technologies: ["Figma", "UI/UX", "Design System", "Prototyping"],
      date: "JAN 2024",
      githubUrl: null,
      figmaUrl: "https://www.figma.com/proto/TNcmGCwSDwKD8XOamiVkVA/spotify-kavin?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A185",
      liveUrl: "https://www.figma.com/proto/TNcmGCwSDwKD8XOamiVkVA/spotify-kavin?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A185",
      type: "ui-ux"
    },
    {
      title: "WhatsApp Clone",
      description: "Designed a WhatsApp clone with real-time chat functionality, media sharing, and user authentication. Focused on creating a seamless user experience and intuitive interface.",
      image: "https://www.figma.com/community/resource/b6bfe825-0e7d-4858-b9ca-8b22abaa9f07/thumbnail",
      technologies: ["Figma", "UI/UX", "Wireframing", "User Research"],
      date: "MAR 2024",
      githubUrl: null,
      figmaUrl: "https://www.figma.com/proto/kArgqWEKaX7NZHAL0UW2K0/whatsapp-kavin?page-id=0%3A1&node-id=8-5&starting-point-node-id=8%3A5",
      liveUrl: "https://www.figma.com/proto/kArgqWEKaX7NZHAL0UW2K0/whatsapp-kavin?page-id=0%3A1&node-id=8-5&starting-point-node-id=8%3A5",
      type: "ui-ux"
    },
    {
      title: "Watch World",
      description: "Created a movie streaming platform with user authentication, watchlists, and ratings. Focused on responsive design and user-friendly navigation.",
      image: "https://i.ytimg.com/vi/a3qRRHnQdHk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzeGqZWQSHfJ7Q4qLOohxw1ryBmg",
      technologies: ["Figma", "Mobile Design", "Prototyping", "User Testing"],
      date: "APR 2024",
      githubUrl: null,
      figmaUrl: "https://www.figma.com/proto/pov6ODug8RWc1jJrWn3gVN/Untitled?page-id=0%3A1&node-id=1-21&t=rZ1VNseP2wNPjWo7-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A21",
      liveUrl: "https://www.figma.com/proto/kArgqWEKaX7NZHAL0UW2K0/whatsapp-kavin?page-id=0%3A1&node-id=8-5&starting-point-node-id=8%3A5",
      type: "ui-ux"
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-6 mt-8 mb-10">
          <Button 
            variant="outline" 
            className="rounded-full" 
            size="sm"
            onClick={() => document.getElementById('fullstack-projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fullstack
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full" 
            size="sm"
            onClick={() => document.getElementById('ui-ux-projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            UI/UX Design
          </Button>
        </div>

        <h3 id="fullstack-projects" className="text-2xl font-bold mt-10 mb-8 flex items-center gap-2">
          <LayoutDashboard className="w-6 h-6 text-primary" />
          Fullstack Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => project.type === "fullstack").map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardHeader className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge variant="outline">{project.date}</Badge>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 pt-2">
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h3 id="ui-ux-projects" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2">
          <Figma className="w-6 h-6 text-primary" />
          UI/UX Design Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => project.type === "ui-ux").map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardHeader className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge variant="outline">{project.date}</Badge>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 pt-2">
                {project.figmaUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Figma className="w-4 h-4" />
                      Figma
                    </a>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
