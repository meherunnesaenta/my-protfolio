import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
    color: "primary",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "REST & APIs", level: 90 },
      { name: "Authentication", level: 85 },
    ],
    color: "secondary",
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },

    ],
    color: "accent",
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel", level: 78 },

    ],
    color: "primary",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-lg font-bold font-display text-foreground mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground font-body">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-body">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted/60 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${colorMap[cat.color]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
