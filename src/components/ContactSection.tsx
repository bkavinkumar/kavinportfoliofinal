
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, Mail, MapPin, PhoneCall, 
  Github, Send, Loader2, AlertCircle 
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'idle' | 'checking' | 'online' | 'offline'>('idle');
  const [messageCount, setMessageCount] = useState(0);
  const [remainingMessages, setRemainingMessages] = useState(5);

  // Check message count and server status
  useEffect(() => {
    // Get stored message count
    const storedCount = localStorage.getItem("contactFormCount");
    if (storedCount) {
      const count = parseInt(storedCount);
      setMessageCount(count);
      setRemainingMessages(5 - count);
      
      // Disable form if max messages reached
      if (count >= 5) {
        setIsFormDisabled(true);
      }
    }
    
    // Check if server is running
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      setServerStatus('checking');
      const response = await fetch('https://kavin7portfolio.onrender.com/api/health', {
        method: 'GET',
      });
      
      if (response.ok) {
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch (error) {
      console.error('Server connection error:', error);
      setServerStatus('offline');
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Check if max messages reached
      if (messageCount >= 5) {
        toast.error("Message limit reached", {
          description: "You've already sent 5 messages. Thank you for your interest!",
        });
        setIsFormDisabled(true);
        return;
      }

      setIsLoading(true);
      console.log("Form submitted:", values);
      
      // Send data to our Nodemailer API
      const response = await fetch('https://kavin7portfolio.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send email');
      }
      
      // Update message count in localStorage
      const newCount = messageCount + 1;
      localStorage.setItem("contactFormCount", newCount.toString());
      setMessageCount(newCount);
      setRemainingMessages(5 - newCount);
      
      // Disable form if max messages reached
      if (newCount >= 5) {
        setIsFormDisabled(true);
      }
      
      // Show only one success toast
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show only one error toast
      toast.error("Failed to send message", {
        description: "Please make sure the email server is running. Check console for details.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            {/* Contact info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:kavinkumar0506@gmail.com" className="text-primary hover:underline">
                    kavinkumar0506@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <PhoneCall className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Phone</h3>
                  <a href="tel:+919677123159" className="text-primary hover:underline">
                    +91 9629723159
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">Tamilnadu, India</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Social profiles */}
            <div>
              <h3 className="text-xl font-bold mb-4">Social Profiles</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://github.com/kavinkumarb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Github</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/kavin-kumar-ab456299/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            {/* Resume buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild className="gap-2">
                <a href="/resume.pdf" download="KavinKumarB_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume Online
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                
                {serverStatus === 'offline' && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Server Offline</AlertTitle>
                    <AlertDescription>
                      The email server appears to be offline. Please make sure to start the server with:
                      <code className="block bg-muted p-2 mt-2 rounded-md text-xs">
                        cd server && node index.js
                      </code>
                    </AlertDescription>
                  </Alert>
                )}
                
                {messageCount >= 5 ? (
                  <div className="p-6 bg-primary/10 rounded-lg text-center">
                    <h4 className="text-lg font-medium mb-2">Message Limit Reached</h4>
                    <p>You've sent 5 messages already. Thank you for your interest!</p>
                  </div>
                ) : (
                  <>
                    {remainingMessages < 5 && (
                      <Alert className="mb-4">
                        <AlertTitle>Message Limit</AlertTitle>
                        <AlertDescription>
                          You have {remainingMessages} message{remainingMessages !== 1 ? 's' : ''} remaining.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name"
                                  disabled={isFormDisabled || isLoading || serverStatus === 'offline'}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your email address"
                                  disabled={isFormDisabled || isLoading || serverStatus === 'offline'}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="What would you like to talk about?"
                                  disabled={isFormDisabled || isLoading || serverStatus === 'offline'}
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full gap-2" 
                          disabled={isFormDisabled || isLoading || serverStatus === 'offline'}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                        {serverStatus === 'checking' && (
                          <p className="text-center text-sm text-muted-foreground">
                            Checking server status...
                          </p>
                        )}
                      </form>
                    </Form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
