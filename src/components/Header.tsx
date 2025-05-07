
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import LikeButton from "./LikeButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-primary">
          My Portfolio
        </a>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="https://github.com/kavinkumarb" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kavin-kumar-ab456299/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
