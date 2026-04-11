'use client'

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full"
        />
      </div>

      {/* MOBILE DESIGN */}
      <div className="lg:hidden w-full">
        {/* Image Top */}
        <div className="flex justify-center  relative z-10">
          <div className="relative z-10 ">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            <Avatar className="w-60 h-60 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src={profileImg} className="object-cover object-[50%_20%] scale-110" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Text OVER image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="-mt-30 px-6 relative z-30 text-center flex flex-col items-center space-y-5"
        >
          <motion.div variants={itemVariants}>
            <Badge className="px-4 py-1 bg-primary/10 text-primary border border-primary/20">
              Available for Work
            </Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl font-bold">
            Hi, I'm
            <span className="block text-primary">Meherun Nesa Enta</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm text-muted-foreground max-w-md">
            I build modern, scalable and user-friendly web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-3">
            <a href="#projects">
              <Button size="sm">Projects</Button>
            </a>
            <a href="#contact">
              <Button size="sm" variant="outline">Contact</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* DESKTOP DESIGN */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hidden lg:grid container mx-auto px-6 grid-cols-2 gap-12 items-center"
      >
        {/* LEFT */}
        <div className="space-y-6 text-center flex flex-col items-center">
          <motion.div variants={itemVariants}>
            <Badge className="px-4 py-1 bg-primary/10 text-primary border border-primary/20">
              Available for Work
            </Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl font-bold">
            Hi, I'm
            <span className="block text-primary">Meherun Nesa Enta</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl">
            I build modern, scalable and user-friendly web applications using React, Next.js and MongoDB.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a href="#projects">
              <Button size="lg">Projects</Button>
            </a>
            <a href="#contact"><Button size="lg" variant="outline">Contact</Button></a>
            
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Avatar className="w-80 h-80 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src={profileImg} className="object-cover object-[50%_20%] scale-110" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
