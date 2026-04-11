import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Code2, Heart, Coffee, BookOpen, Sparkles, Target, Rocket, Star, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const About = () => {
  return (
    <TooltipProvider>
      <section id="about" className="relative py-24 md:py-32 overflow-x-hidden w-full bg-gradient-to-b from-background via-primary/5 to-background">
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.15, 0.3],
              x: [0, -20, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.25, 0.1, 0.25],
              x: [0, 20, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.05, 0.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-responsive">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">Me</span>
            </motion.h2>
            
            <motion.p 
              className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              A passionate developer on a journey to learn and grow every day
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8 md:space-y-10">
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-card">
                <motion.div 
                  className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                <CardContent className="p-6 md:p-10">
                  
                  {/* Bio Text */}
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    >
                      Hey there! I'm Meherun Nesa Enta, 
                      a passionate full stack web developer. I'm on an exciting journey of learning 
                      and growing as a developer, and I love every moment of it!
                    </motion.p> 
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    >
                      I started my coding journey with curiosity and determination. Every day, I learn something new, 
                      face new challenges, and become a better developer than I was yesterday. I believe that 
                      consistency and passion matter more than experience.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    >
                      Currently, I'm focusing on building real-world projects that solve problems. I enjoy working 
                      with modern technologies and creating beautiful, functional web applications.
                    </motion.p>
                    
                    {/* Quote */}
                    <motion.div 
                      className="relative py-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    >
                      <Separator className="my-3 bg-border" />
                      <p className="text-center text-foreground font-medium italic text-base sm:text-lg">
                        "Every expert was once a beginner. I'm just getting started!"
                      </p>
                      <Separator className="mt-3 bg-border" />
                    </motion.div>
                    
                    {/* Currently Learning */}
                    <motion.div 
                      className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    >
                      <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Currently Learning:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 + idx * 0.05, ease: "easeOut" }}
                          >
                            <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors cursor-default border-border text-foreground">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* CV Button */}
                  <motion.div 
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="lg" 
                          className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-primary-foreground"
                          onClick={() => window.open('/meherun nesa enta.pdf', '_blank')}
                        >
                          <ArrowDownToLine className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                          View My CV
                          <motion.div
                            className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Opens my CV in a new tab</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                  
                  <motion.p 
                    className="text-center text-xs text-muted-foreground mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  >
                    My CV will open in a new browser tab
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3 justify-center px-4"
            >
              {[
                { icon: Target, label: "100+ hours of learning" },
                { icon: Rocket, label: "10+ projects completed" },
                { icon: Star, label: "Always learning" },
                { icon: Sparkles, label: "Open to opportunities" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm hover:bg-primary/10 transition-all cursor-default flex items-center gap-1 bg-muted text-muted-foreground">
                    <stat.icon className="w-3 h-3 text-primary" />
                    {stat.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default About;