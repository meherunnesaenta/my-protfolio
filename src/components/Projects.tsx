import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// 🔹 Import your project images
import project1 from "../assets/styledecor.png";
import project2 from "../assets/krishlink.png";

const projects = [
{
  title: "StyleDecor – Smart Home & Ceremony Decoration Booking System",
  description:
    "A full-stack web-based decoration booking platform that allows users to book home & ceremony decoration services, track real-time project status, make secure Stripe payments, and manage bookings efficiently. Includes Admin analytics dashboard, role-based authentication, and decorator workflow tracking.",
  image: project1, // তোমার project screenshot image
  tags: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Stripe",
    "Firebase Auth"
  ],
  liveUrl: "https://cheery-cranachan-6e2445.netlify.app/",
  githubUrl: "https://github.com/meherunnesaenta/StyleDecor-client", // যদি repo থাকে
  gradient: "from-pink-500/20 to-purple-500/20",
},
{
  title: "AgriConnect – Farmer & Buyer Marketplace Platform",
  description:
    "A full-stack marketplace platform that connects farmers directly with buyers. Farmers can list crops with detailed information, while buyers can send purchase interest requests. Includes accept/reject workflow, real-time interest tracking, and a personalized 'My Interests' dashboard with status updates.",
  image: project2, // তোমার screenshot image
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Auth",
    "Tailwind CSS",
    "Framer Motion"
  ],
  liveUrl: "https://endearing-bubblegum-6944b3.netlify.app/",
  githubUrl: "https://github.com/meherunnesaenta/krishilink-client", // থাকলে দাও
  gradient: "from-green-500/20 to-emerald-500/20",
},

];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Some of my work that demonstrates my skills in full-stack
            development, AI, and cybersecurity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl p-6 hover-glow transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-muted/60 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted/60 text-foreground text-sm font-medium hover:bg-muted transition-colors duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;