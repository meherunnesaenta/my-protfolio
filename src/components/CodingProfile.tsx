import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Award,
  TrendingUp,
  Star,
  GitFork,
  Users,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Rocket,
  Target,
  BookOpen
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// ইমেজ ইম্পোর্ট - সব ইমেজ এখন কাস্টম
import gitImg from "/github.png";
import linkedinImg from "/linkedin.png";
import codeforcesImg from "/codeforces.png";
import codechefImg from "/codechef.png";
import hackerrankImg from "/hackerrank.png";

const CodingProfile = () => {
  const codingProfiles = [
    {
      name: "GitHub",
      icon: gitImg,
      isCustomIcon: true,  // true করে দিয়েছি
      username: "meherun-enta",
      url: "https://github.com/meherunnesaenta",
      stats: {
        repos: 15,
        followers: 8,
        contributions: "250+",
      },
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
      achievements: ["10+ repos", "Active contributor"],
    },
    {
      name: "LinkedIn",
      icon: linkedinImg,
      isCustomIcon: true,  // true করে দিয়েছি
      username: "meherun-enta",
      url: "https://linkedin.com/in/meherun-nesa-enta-4b9506395",
      stats: {
        connections: 120,
        posts: 15,
        views: "1k+",
      },
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      achievements: ["Growing network", "Tech enthusiast"],
    },
    {
      name: "Codeforces",
      icon: codeforcesImg,
      isCustomIcon: true,
      username: "meherun_enta",
      url: "https://codeforces.com/profile/meherunenta",
      stats: {
        rating: "Newbie",
        problems: 85,
        contests: 12,
      },
      color: "from-red-600 to-red-800",
      bgColor: "bg-gradient-to-br from-red-600 to-red-800",
      achievements: ["85+ solved", "Learning DSA"],
    },
    {
      name: "CodeChef",
      icon: codechefImg,
      isCustomIcon: true,
      username: "meherun_enta",
      url: "https://www.codechef.com/users/meherunenta",
      stats: {
        rating: "1★",
        problems: 45,
        contests: 8,
      },
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-gradient-to-br from-amber-600 to-amber-800",
      achievements: ["45+ solved", "Active learner"],
    },
    {
      name: "HackerRank",
      icon: hackerrankImg,
      isCustomIcon: true,
      username: "meherun_enta",
      url: "https://www.hackerrank.com/profile/meherunnesaenta1",
      stats: {
        badges: 3,
        points: 350,
        rank: "Silver",
      },
      color: "from-green-600 to-green-800",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      achievements: ["3 badges earned", "Problem solving"],
    },
  ];

  return (
    <TooltipProvider>
      <section id="codingprofile" className="relative py-24 md:py-32 overflow-x-hidden w-full bg-gradient-to-b from-background via-primary/5 to-background">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="container-responsive">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
                <Code2 className="w-3 h-3 mr-1" />
                My Digital Presence
              </Badge>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4">
              Coding <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%] animate-gradient-shift">Profiles</span>
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Connect with me on various platforms and follow my coding journey
            </p>
          </motion.div>

          {/* Profile Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-border/50 bg-card">
                  <motion.div
                    className={`h-1.5 bg-gradient-to-r ${profile.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />

                  <CardHeader className="text-center pb-2">
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl ${profile.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}
                      whileHover={{ rotate: 5 }}
                    >
                      {/* সবগুলো এখন কাস্টম ইমেজ */}
                      <img
                        src={profile.icon}
                        alt={profile.name}
                        className='w-10 h-10 sm:w-12 sm:h-12 object-contain brightness-0 invert'
                      />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl text-foreground">{profile.name}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">@{profile.username}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="text-center group/stat">
                          <div className="text-base sm:text-lg font-bold text-foreground group-hover/stat:text-primary transition-colors">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                      {profile.achievements.map((achievement) => (
                        <Badge key={achievement} variant="outline" className="text-xs hover:bg-primary/10 transition-colors border-border text-foreground">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500 border-border text-foreground hover:border-primary cursor-pointer"
                          onClick={() => {
                            window.open(profile.url, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Visit Profile
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open {profile.name} profile in new tab</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Overall Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-12 md:mt-16 px-4 md:px-0"
          >
            <Card className="border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card overflow-hidden group">
              <motion.div
                className="h-1 bg-gradient-to-r from-primary to-secondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                  {[
                    { icon: GitFork, label: "GitHub Repos", value: "15+" },
                    { icon: Users, label: "Network", value: "120+" },
                    { icon: Trophy, label: "Problems Solved", value: "130+" },
                    { icon: TrendingUp, label: "Active Days", value: "100+" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="space-y-2 group/stat"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                    >
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto text-primary group-hover/stat:scale-110 transition-transform duration-300" />
                      <div className="text-xl md:text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="text-center mt-10 md:mt-12 px-4"
          >
            <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2 text-sm md:text-base">
              <Rocket className="w-4 h-4 text-primary" />
              <span>Let's connect and grow together</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {[
                { icon: Target, label: "Open to collaboration" },
                { icon: BookOpen, label: "Learning in public" },
                { icon: Star, label: "Building portfolio" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm hover:bg-primary/10 transition-all cursor-default flex items-center gap-1 border-border text-foreground">
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </TooltipProvider>
  );
};

// Helper component
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default CodingProfile;