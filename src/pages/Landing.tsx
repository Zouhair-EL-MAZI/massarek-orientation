import { Link } from "react-router-dom";
import { Sparkles, FileQuestion, MessageSquare, Briefcase, ArrowRight, Compass, Target, TrendingUp } from "lucide-react";
import MassarekLogo from "@/components/MassarekLogo";

const features = [
  { icon: Sparkles, title: "AI Recommendations", desc: "Get personalized field suggestions based on your unique profile and test results." },
  { icon: FileQuestion, title: "Smart Tests", desc: "Take orientation tests designed to uncover your strengths and interests." },
  { icon: MessageSquare, title: "AI Chatbot", desc: "Chat with our AI assistant for guidance on academic and career decisions." },
  { icon: Briefcase, title: "Career Explorer", desc: "Explore hundreds of career paths with detailed insights and compatibility scores." },
];

const stats = [
  { value: "10K+", label: "Students guided" },
  { value: "95%", label: "Satisfaction rate" },
  { value: "200+", label: "Career paths" },
  { value: "50+", label: "Test modules" },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <MassarekLogo size="md" />
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Log in
          </Link>
          <Link to="/register" className="text-sm font-medium gradient-primary text-primary-foreground px-5 py-2 rounded-xl hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
            <Sparkles size={14} /> Powered by AI
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Find your perfect <br />
            <span className="gradient-text">academic path</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Massarek uses AI to analyze your skills, interests, and personality to recommend the best academic fields and career paths for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/test" className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-2xl hover:opacity-90 transition-opacity text-base shadow-elevated">
              Start your orientation test <ArrowRight size={18} />
            </Link>
            <Link to="/careers" className="inline-flex items-center justify-center gap-2 border border-border bg-card font-semibold px-8 py-3.5 rounded-2xl hover:bg-accent transition-colors text-base">
              Explore careers
            </Link>
          </div>
        </div>

        {/* Floating icons */}
        <div className="hidden lg:block absolute top-32 left-16 animate-float">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-card">
            <Compass size={24} className="text-primary" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-48 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-card">
            <Target size={24} className="text-secondary" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-20 right-32 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-card">
            <TrendingUp size={24} className="text-primary" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-12 border-y border-border bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to choose your future</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our AI-powered platform provides comprehensive tools to help you make the best academic and career decisions.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-shadow group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <f.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto gradient-primary rounded-3xl p-10 md:p-14 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to discover your path?</h2>
          <p className="opacity-90 mb-8 text-lg">Join thousands of students who found their ideal academic field with Massarek.</p>
          <Link to="/register" className="inline-flex items-center gap-2 bg-card text-foreground font-semibold px-8 py-3.5 rounded-2xl hover:opacity-90 transition-opacity">
            Get started for free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 Massarek. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
