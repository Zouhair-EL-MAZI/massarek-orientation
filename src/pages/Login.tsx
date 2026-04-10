import { Link } from "react-router-dom";
import { useState } from "react";
import MassarekLogo from "@/components/MassarekLogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <MassarekLogo size="lg" />
          </div>
          <h1 className="text-2xl font-bold mt-4">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to your account to continue</p>
        </div>
        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" />
            </div>
            <Link to="/dashboard">
              <button className="w-full gradient-primary text-primary-foreground font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity mt-2">
                Sign in
              </button>
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
