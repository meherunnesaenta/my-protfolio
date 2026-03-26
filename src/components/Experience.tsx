import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Frontend Developer Intern",
    org: "9AM Solution",
    period: "Nov 2025 – Jan 2026 ",
    description: "Contributing to frontend development using React.js and Tailwind CSS. Building responsive UI components and enhancing user experience across the platform.",
  },
  {
    type: "education",
    title: "B.Sc in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    period: "2022 – 2026",
    description: "Specializing in Software Engineering and Web Development. Actively building projects in full-stack development and exploring AI & cybersecurity.",
  },
  {
    type: "education",
    title: "Higher Secondary (Science)",
    org: "Narsingdi Gov.t Mohila College",
    period: "2018 – 2020",
    description: "Scored high marks in board exams. Learned foundational programming skills and built initial full-stack projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Experience & <span className="gradient-text-accent">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 mt-2" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-6">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.type === "work" ? (
                        <Briefcase className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-secondary" />
                      )}
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-body">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-display text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium font-body mb-2">{item.org}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;