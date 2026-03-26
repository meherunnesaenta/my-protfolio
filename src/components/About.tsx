import { motion } from "framer-motion";
import { ArrowDownToLine, Code2, Database, Globe, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary/10 via-secondary/10 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack developer crafting modern, efficient, and user-centered web experiences.
          </p>
        </motion.div>

        {/* Main Content - centered, full width, no left/right split */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-16 max-w-4xl mx-auto"
        >
          {/* <div className="text-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Globe, label: "Frontend", desc: "React • Next.js • Tailwind CSS" },
                { icon: Code2, label: "Backend", desc: "Node.js • Express" },
                { icon: Database, label: "Database", desc: "MongoDB • Prisma" },
                { icon: Palette, label: "Design", desc: "UI/UX • Figma" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.2)" }}
                  className="glass rounded-2xl p-8 text-center border border-border/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-xl mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div> */}
          {/* Bio Card */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl hover:shadow-3xl hover:shadow-primary/15 transition-all duration-500">

            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg md:text-xl">
              <p>
                I am Meherun Nesa Enta, a passionate full-stack developer focused on building scalable, performant, and beautiful web applications. I specialize in React ecosystem, clean code architecture.
              </p>
              <p>
                My goal is to create digital experiences that are not only functional but also intuitive and enjoyable. When I'm not coding, I explore emerging tech like AI tools, contribute to open-source, or refine my design skills in Figma.
              </p>
              <p className="text-center font-medium text-foreground italic text-xl">
                "Crafting code that tells stories and solves problems elegantly."
              </p>
            </div>

            {/* Download Button - centered */}
            <div className="mt-12 flex justify-center">

              <motion.a
                href="/cv.pdf"
                download="Meherun_Nesa_Enta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition group"
              >
                <ArrowDownToLine className="w-6 h-6 group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            </div>
          </div>

          {/* Icon Cards - centered grid */}

        </motion.div>
      </div>
    </section>
  );
};

export default About;



// <motion.div
//   initial={{ opacity: 0, x: 30 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6 }}
// >
//   <h3 className="text-xl font-semibold font-display mb-6 text-foreground">Tech Stack</h3>
//   <div className="flex flex-wrap gap-3">
//     {skills.map((skill, i) => (
//       <motion.span
//         key={skill.name}
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.3, delay: i * 0.05 }}
//         whileHover={{ scale: 1.05, y: -2 }}
//         className="px-4 py-2 rounded-2xl glass text-sm font-medium text-foreground cursor-default hover-glow transition-all duration-300"
//       >
//         {skill.name}
//       </motion.span>
//     ))}
//   </div>
// </motion.div>