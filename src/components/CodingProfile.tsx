import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  TrendingUp,
  Star,
  GitFork,
  Users,
  ExternalLink,
  Sparkles,
  Rocket,
  Target,
  BookOpen
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

// ইমেজ ইম্পোর্ট
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
      username: "meherun-enta",
      url: "https://github.com/meherunnesaenta",
      stats: {
        repos: "30",
        followers: 14,
        contributions: "263+",
      },
      color: "from-gray-700 to-gray-900",
      achievements: ["30+ repos", "Active contributor"],
    },
    {
      name: "LinkedIn",
      icon: linkedinImg,
      username: "meherun-enta",
      url: "https://linkedin.com/in/meherun-nesa-enta-4b9506395",
      stats: {
        connections: 120,
        posts: 15,
        views: "1k+",
      },
      color: "from-blue-600 to-blue-800",
      achievements: ["Growing network", "Tech enthusiast"],
    },
    {
      name: "Codeforces",
      icon: codeforcesImg,
      username: "meherun_enta",
      url: "https://codeforces.com/profile/meherunenta",
      stats: {
        rating: "Newbie",
        problems: 30,
        contests: 5,
      },
      color: "from-red-600 to-red-800",
      achievements: ["30+ solved", "Learning DSA"],
    },
    {
      name: "CodeChef",
      icon: codechefImg,
      username: "meherun_enta",
      url: "https://www.codechef.com/users/meherunenta",
      stats: {
        rating: "1★",
        problems: 392,
        contests: 5,
      },
      color: "from-amber-600 to-amber-800",
      achievements: ["392+ solved", "Active learner"],
    },
    {
      name: "HackerRank",
      icon: hackerrankImg,
      username: "meherun_enta",
      url: "https://www.hackerrank.com/profile/meherunnesaenta1",
      stats: {
        badges: 5,
        points: 350,
        rank: "Silver",
      },
      color: "from-green-600 to-green-800",
      achievements: ["5 badges", "Problem solving"],
    },
  ];

  return (
    <section id="codingprofile" className=" section-padding bg-gradient-to-b from-background via-primary/5 to-background">
      <div className=" ">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-primary/10 text-primary">
            <Code2 className="w-3 h-3 mr-1" />
            My Digital Presence
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Coding <span className="text-primary">Profiles</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Connect with me on various platforms and follow my coding journey
          </p>
        </motion.div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="group cursor-pointer"
                onClick={() => window.open(profile.url, "_blank")}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${profile.color}`} />
                  
                  <CardHeader className="text-center pb-2">
                    {/* Icon Container - No background, just image */}
                    <div className="w-30 h-30 mx-auto mb-3 flex items-center justify-center">
                      <img
                        src={profile.icon}
                        alt={profile.name}
                        className="w-20 h-20 rounded-2xl object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg">{profile.name}</CardTitle>
                    <CardDescription className="text-xs">@{profile.username}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-base font-bold">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {profile.achievements.map((achievement) => (
                        <Badge key={achievement} variant="outline" className="text-xs">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>

                    {/* View Profile Button */}
                    <Button 
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="shadow-lg">
            <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { icon: GitFork, label: "GitHub Repos", value: "30+" },
                  { icon: Users, label: "Network", value: "120+" },
                  { icon: Trophy, label: "Problems Solved", value: "772+" },
                  { icon: TrendingUp, label: "Active Days", value: "100+" },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <stat.icon className="w-5 h-5 mx-auto text-primary" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4 text-primary" />
            Let's connect and grow together
            <Sparkles className="w-4 h-4 text-secondary" />
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { icon: Target, label: "Open to collaboration" },
              { icon: BookOpen, label: "Learning in public" },
              { icon: Star, label: "Building portfolio" },
            ].map((item, idx) => (
              <Badge key={idx} variant="outline" className="px-3 py-1 text-sm">
                <item.icon className="w-3 h-3 mr-1" />
                {item.label}
              </Badge>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default CodingProfile;