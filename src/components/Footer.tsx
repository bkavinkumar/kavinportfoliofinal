
import { ThemeToggle } from "./ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="#home" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top
          </a>
          
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
