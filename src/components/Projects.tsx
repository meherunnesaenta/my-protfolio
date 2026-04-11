import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Calendar, Users, Star, X, Sparkles, Rocket, Target, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Separator } from "./ui/separator";

// Import project images
import project1 from "../assets/styledecor.png";
import project2 from "../assets/care.png";
import project3 from "../assets/krishlink.png";

const projects = [
      {
    id: 1,
    title: "Care.IO – Babies and Older Caring Service Booking System",
    shortTitle: "Care.IO",
    description: "A full-stack web-based Caring Service booking platform that allows users to helping hand or other  caring service for babies and olders, track real-time project status, make secure Stripe payments, and manage service efficiently.",
    fullDescription: `Care.IO is a comprehensive service booking platform designed specifically for baby and elderly care services. 

Key Features:
• User authentication with JWT and Next Auth
• Service booking with real-time availability checking
• Secure payment integration with Stripe
• Admin dashboard with analytics and user management
• Service provider workflow tracking
• Booking status notifications via email
• Review and rating system
• Responsive design for all devices

Technical Highlights:
• Implemented role-based access control (Admin, User, Provider)
• Real-time booking updates using WebSockets
• Optimized database queries for fast service search
• Secure payment processing with Stripe webhooks
• Comprehensive error handling and logging`,
    image: project2,
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Next Auth"],
    liveUrl: "https://careio-gamma.vercel.app/",
    githubUrl: "https://github.com/meherunnesaenta/Careio",
    gradient: "from-pink-500 to-purple-500",
    features: [
      "User Authentication & Authorization",
      "Service Booking System",
      "Secure Payment Gateway",
      "Admin Analytics Dashboard",
      "Real-time Status Tracking",
      "Email Notifications"
    ],
    techStack: {
      frontend: "Next.js, Tailwind CSS, Framer Motion",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      auth: "JWT, Next Auth",
      payment: "Stripe",
    },
    challenges: "Implemented secure payment processing and real-time booking updates while maintaining data consistency across multiple users.",
    solutions: "Used Stripe webhooks for payment confirmation and WebSockets for real-time status updates with optimistic UI updates."
  },
  {
    id: 2,
    title: "StyleDecor – Smart Home & Ceremony Decoration Booking System",
    shortTitle: "StyleDecor",
    description: "A full-stack web-based decoration booking platform that allows users to book home & ceremony decoration services, track real-time project status, make secure Stripe payments, and manage bookings efficiently.",
    fullDescription: `StyleDecor is an innovative decoration booking platform that transforms how people plan their events and home decorations.


## ✨ Key Features

### 👤 User Features

* Browse decoration services & packages
* Search services by name
* Filter by category & budget
* View detailed service information
* Book consultation or on-site services
* Secure payment via Stripe
* Track booking status in real-time
* View booking history & receipts
* Cancel or update bookings

---

### 🛠️ Admin Features

* Manage decorators (Create, Update, Disable)
* Manage services & packages (CRUD)
* Assign decorators for projects
* Verify payment status
* Monitor revenue
* Analytics dashboard with charts
* Service demand visualization

---

### 🎨 Decorator Features

* View assigned projects
* Daily schedule tracking
* Update project status step-by-step:

  * Assigned
  * Planning Phase
  * Materials Prepared
  * On the Way
  * Setup in Progress
  * Completed
* View earnings summary
* Track payment history

---

## 🔐 Authentication & Security

* Firebase Authentication (Email/Password & Social Login)
* JWT-based authentication
* Role-based access control (Admin, Decorator, User)
* Secure environment variables

---

## 💳 Payment System

* Stripe integration
* Secure transactions
* Payment receipt in dashboard

---

## 🌍 Additional Features

* 🗺️ Interactive map (React Leaflet)
* 🎬 Animations (Framer Motion)
* 🔄 Global loading & skeleton UI
* ⚠️ Error handling system
* 🔔 Toast notifications
* 📱 Fully responsive design
`,
    image: project1,
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase Auth"],
    liveUrl: "https://cheery-cranachan-6e2445.netlify.app/",
    githubUrl: "https://github.com/meherunnesaenta/StyleDecor-client",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Decoration Package Browsing",
      "Custom Design Requests",
      "Secure Payment Integration",
      "Project Timeline Tracking",
      "Designer Portfolio",
      "Client Reviews"
    ],
    techStack: {
      frontend: "React.js, Tailwind CSS, Framer Motion",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      auth: "JWT, Firebase Auth",
      payment: "Stripe",
    },
    challenges: "Creating an intuitive design preview tool that allows clients to visualize decorations before booking.",
    solutions: "Built an interactive canvas with real-time design elements and color customization options."
  },
  {
    id: 3,
    title: "AgriConnect – Farmer & Buyer Marketplace Platform",
    shortTitle: "AgriConnect",
    description: "A full-stack marketplace platform that connects farmers directly with buyers. Farmers can list crops with detailed information, while buyers can send purchase interest requests.",
    fullDescription: `AgriConnect revolutionizes agricultural commerce by directly connecting farmers with buyers.

Key Features:
• Farmer crop listing with detailed information
• Buyer interest request system
• Accept/reject workflow for farmers
• Real-time interest tracking
• Personalized dashboard for both parties
• Price negotiation system
• Crop quality certification
• Delivery tracking integration

Technical Highlights:
• Built marketplace matching algorithm
• Implemented chat system for negotiation
• Created analytics dashboard for farmers
• Integrated Google Maps for location tracking
• Built notification system for request updates`,
    image: project3,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://endearing-bubblegum-6944b3.netlify.app/",
    githubUrl: "https://github.com/meherunnesaenta/krishilink-client",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Farmer & Buyer Marketplace",
      "Crop Listing Management",
      "Interest Request System",
      "Price Negotiation",
      "Delivery Tracking",
      "Analytics Dashboard"
    ],
    techStack: {
      frontend: "React.js, Tailwind CSS, Framer Motion",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      auth: "Firebase Auth",
      maps: "Google Maps API",
    },
    challenges: "Building a trust-based marketplace where farmers and buyers can safely transact.",
    solutions: "Implemented user verification system, rating system, and secure messaging platform."
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
                <Layers className="w-3 h-3 mr-1" />
                My Portfolio
              </Badge>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">Projects</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my best works that showcase my skills in full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-border/50">
                  {/* Gradient Border Top */}
                  <motion.div 
                    className={`h-1.5 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  />
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* View Details Button Overlay */}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white/90 dark:bg-black/90"
                      onClick={() => handleViewDetails(project)}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Quick View
                    </Button>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                          {project.shortTitle}
                        </CardTitle>
                        <CardDescription className="text-xs line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1 group/btn"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2 text-muted-foreground  group/btn"
                      onClick={() => handleViewDetails(project)}
                    >
                      <Eye className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <Separator className="my-4" />

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 mt-4">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.fullDescription}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tech" className="space-y-4 mt-4">
                  <div className="grid gap-4">
                    {Object.entries(selectedProject.techStack).map(([key, value]) => (
                      <div key={key} className="group">
                        <div className="text-sm font-semibold mb-1 capitalize flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {key}
                        </div>
                        <div className="text-sm text-muted-foreground pl-4">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-orange-500" />
                      Challenges Faced:
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-primary" />
                      Solutions Implemented:
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.solutions}
                    </p>
                  </div>

                  <Separator />

                  <div className="flex gap-3 pt-2">
                    <Button className="flex-1 group" onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Live Project
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => window.open(selectedProject.githubUrl, '_blank')}>
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>


            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper component for checkmark
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Projects;