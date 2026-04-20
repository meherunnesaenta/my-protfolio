import * as React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin,
  Code2,
  Sparkles,
  Rocket,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

const timeline = [
  {
    type: "work",
    title: "Frontend Developer Intern",
    org: "9AM Solution",
    period: "Nov 2025 – Jan 2026",
    location: "Dhaka, Bangladesh",
    description: "Contributing to frontend development using React.js and Tailwind CSS. Building responsive UI components and enhancing user experience across the platform.",
    skills: ["React.js", "Tailwind CSS", "Git", "REST API"],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "education",
    title: "B.Sc in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    period: "2022 – 2026",
    location: "Dhaka, Bangladesh",
    description: "Specializing in Software Engineering and Web Development. Currently building projects in full-stack development.",
    skills: ["Data Structures", "Algorithms", "Database", "Web Development"],
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "education",
    title: "Higher Secondary Certificate (Science)",
    org: "Narsingdi Government Mohila College",
    period: "2018 – 2020",
    location: "Narsingdi, Bangladesh",
    description: "Completed higher secondary education with focus on science and mathematics.",
    skills: ["Physics", "Chemistry", "Mathematics", "Basic Programming"],
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative section-padding overflow-x-hidden w-full bg-gradient-to-b from-background via-primary/5 to-background">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 18, repeat: Infinity }}
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
              <Rocket className="w-3 h-3 mr-1" />
              My Journey
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">Education</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative px-4 md:px-0">
          {/* Center Line - মোবাইলে লেফটে শিফট */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-20 w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-5 md:left-1/2 top-60 w-2 h-2 bg-secondary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />

          <div className="space-y-10 md:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background z-10 top-5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color}/10`}>
                          <item.icon className={`w-4 h-4 text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.type === "work" ? "Work" : "Education"}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-base md:text-xl group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {item.org}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {item.skills.map((skill, idx) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 px-4"
        >
          <Card className="border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden group">
            <motion.div 
              className="h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
                {[
                  { icon: Code2, label: "Projects Built", value: "4" },
                  { icon: Briefcase, label: "Internship", value: "1" },
                  { icon: GraduationCap, label: "Degrees", value: "2" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    className="space-y-2 group/stat"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary group-hover/stat:scale-110 transition-transform duration-300" />
                    <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-6 md:mt-8 px-4"
        >
          <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            Continuously learning and growing
            <Target className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;