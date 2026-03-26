import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

// Real logo URLs (Wikimedia / official sources)
const logoUrls = {
  JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "Express.js": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  "Nest.js": "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
  MongoDB: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",

  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Git: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  "React Icons": "https://react-icons.github.io/react-icons/assets/react-icons.svg",
  "React Toastify": "https://raw.githubusercontent.com/fkhadra/react-toastify/master/logo.png",
  SweetAlert2: "https://sweetalert2.github.io/images/SweetAlert2.png",
  Firebase: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
};

const skills = [
  { name: "JavaScript", logo: logoUrls.JavaScript },
  { name: "React", logo: logoUrls.React },
  { name: "Next.js", logo: logoUrls["Next.js"] },
  { name: "Node.js", logo: logoUrls["Node.js"] },
  { name: "Express.js", logo: logoUrls["Express.js"] },
  { name: "MongoDB", logo: logoUrls.MongoDB },
  { name: "Tailwind CSS", logo: logoUrls["Tailwind CSS"] },
  { name: "Git", logo: logoUrls.Git },
  { name: "React Icons", logo: logoUrls["React Icons"] },
  { name: "React Toastify", logo: logoUrls["React Toastify"] },
  { name: "SweetAlert2", logo: logoUrls.SweetAlert2 },
  { name: "Firebase", logo: logoUrls.Firebase },
];

const Technologies = () => {
  return (
    <section id="technologies" className="section-padding bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
            My <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies & tools I use daily to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>


        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8 lg:gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              whileHover={{ 
                scale: 1.18, 
                y: -6,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative group flex flex-col items-center"
            >
              {/* Outer Glow Ring on hover */}
              <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-out" />

              {/* Logo Container */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 backdrop-blur-md border-2 border-border/30 p-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-500">
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(var(--primary),0.5)] transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <Code2 className="w-10 h-10 md:w-12 md:h-12 text-primary/70 group-hover:text-primary transition-colors" />
                )}
              </div>

              {/* Skill Name */}
              <p className="mt-4 text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;