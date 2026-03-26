import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-background"
    >
      {/* Background Gradient (always there) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Mobile: Image as full background + overlay text */}
      <div className="relative w-full h-full lg:hidden">
        {/* Profile image as background */}
        <div className="absolute inset-0">
          <img
            src={profileImg}
            alt="Meherun Nesa Enta"
            decoding="async"
            loading="eager"
            className="w-full h-full object-cover object-top brightness-100 contrast-[1.05] scale-100"
          />
          {/* Optional: extra overlay for better text readability */}
          <div className="absolute inset-0" />
        </div>

        {/* Text content overlay - centered */}
        <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-16 sm:pb-20 md:pb-24 lg:hidden min-h-screen">
          <div className="w-full max-w-2xl space-y-6 sm:space-y-8 pb-4">  

            <motion.p
              className="text-primary  font-semibold tracking-widest uppercase mb-3 text-sm sm:text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              My Name Is
            </motion.p>

            <motion.h1
              className="text-4xl text-primary sm:text-5xl md:text-6xl font-bold leading-tight mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Meherun Nesa Enta <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Crafting scalable, secure and modern web applications with clean code and beautiful UI experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
            </motion.div>

          </div>
        </div>
      </div>

      {/* Desktop/Large: Original side-by-side grid layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 container mx-auto px-6 lg:px-12 py-20">
        {/* Left - Text */}
        <div className="text-center lg:text-left">
          <motion.p
            className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Name Is
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Meherun Nesa Enta <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg max-w-xl lg:mx-0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Crafting scalable, secure and modern web applications with clean code and beautiful UI experiences.
          </motion.p>


          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition"
            >
              <ExternalLink className="w-4 h-4" />
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-muted transition"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            <img
              src={profileImg}
              alt="Meherun Nesa Enta"

              className="relative w-80 xl:w-[420px] object-contain drop-shadow-2xl "
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - optional, hide on mobile if you want */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground/60" />
      </motion.div>
    </section>
  );
};

export default Hero;