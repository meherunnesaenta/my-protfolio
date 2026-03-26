import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        "service_oey5c9t",                          
        "template_ymcl4z2",                    
        formRef.current!,
        "sUc3k8YzHEBVqxp8p"                      
      );

      console.log("Email sent successfully:", result.text);

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);

      // Form clear
      if (formRef.current) formRef.current.reset();
    } catch (err: any) {
      console.error("EmailJS failed:", err);
      setError("Facing problem to send message. Please try direct email: meherunnesaenta1@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-medium">{error}</p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-300 disabled:opacity-50"
            >
              {submitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-primary-foreground"
                >
                  ✓ Message Sent!
                </motion.span>
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold font-display text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "meherunnesaenta1@gmail.com", href: "mailto:meherunnesaenta1@gmail.com" },
                { icon: Github, label: "github.com/meherunnesaenta", href: "https://github.com/meherunnesaenta" },
                { icon: Linkedin, label: "linkedin.com/in/meherunnesaenta", href: "https://linkedin.com/in/meherun-nesa-enta" },
                { icon: Twitter, label: "@meherunnesaenta", href: "https://twitter.com/meherunnesaenta" },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;