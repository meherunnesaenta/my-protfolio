import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-8xl md:text-9xl font-bold font-display gradient-text-full bg-[length:200%_200%] animate-gradient-shift mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground font-body mb-8">
          This page doesn't exist in my universe.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
