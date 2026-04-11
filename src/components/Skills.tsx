import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Server,
  GitBranch,
  Sparkles,
  Zap,
  BookOpen,
  Target,
  Rocket,
  Star,
  Layers,
  Cpu
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Framer Motion"
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "NextAuth",
        "JWT Authentication",
        "Python"
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        "MongoDB",
        "Mongoose",
        "Firebase"
      ],
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Netlify",
        "Figma"
      ],
    },
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-x-hidden w-full bg-gradient-to-b from-background via-primary/5 to-background">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container-responsive">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
              <Code2 className="w-3 h-3 mr-1" />
              My Expertise
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">Skills</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-border/50 bg-card">
                <motion.div 
                  className={`h-1.5 bg-gradient-to-r ${category.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
                
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${category.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-5 h-5 md:w-6 md:h-6 text-transparent bg-gradient-to-r ${category.color} bg-clip-text`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors text-foreground">
                        {category.title}
                      </CardTitle>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 md:gap-2.5">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.02 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm hover:scale-105 transition-all duration-300 cursor-default bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section - Fixed visibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-12 px-4 md:px-0"
        >
          <Card className="border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card overflow-hidden group">
            <motion.div 
              className="h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <CardContent className="p-5 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </motion.div>
                <span className="font-semibold text-base md:text-lg text-foreground">Currently Learning</span>
                <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {["Next.js ", "TypeScript "].map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm transition-all duration-300 cursor-default border-primary/20">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Total Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 md:mt-10 text-center px-4 md:px-0"
        >
          <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <Target className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Constantly learning and expanding my skill set</span>
            <Rocket className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mt-3 md:mt-4">
            {[
              { icon: Layers, label: `${allSkills.length}+ Technologies` },
              { icon: Star, label: "Always Learning" },
              { icon: Cpu, label: "Problem Solver" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm hover:bg-primary/10 transition-all cursor-default flex items-center gap-1 border-border text-foreground">
                  <item.icon className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  {item.label}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;