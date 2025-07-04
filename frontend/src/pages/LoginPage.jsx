import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-start gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-centre justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          {/* Email */}
          <form onSubmit={handleSubmit} className="space-y-6">
  {/* Email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">Email</span>
    </label>
    <label className="input input-bordered flex items-center gap-2">
      <Mail className="size-5 text-base-content/40" />
      <input
        type="email"
        className="grow"
        placeholder="you@example.com"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
    </label>
  </div>

  {/* Password */}
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">Password</span>
    </label>
    <label className="input input-bordered flex items-center gap-2 pr-3">
      <Lock className="size-5 text-base-content/40" />
      <input
        type={showPassword ? "text" : "password"}
        className="grow"
        placeholder="••••••••"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <button
        type="button"
        className="focus:outline-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className="size-5 text-base-content/40" />
        ) : (
          <Eye className="size-5 text-base-content/40" />
        )}
      </button>
    </label>
  </div>

  {/* Submit Button */}
  <div className="input input-bordered p-0">
    <button
      type="submit"
      className="btn btn-primary w-full rounded-md h-full"
      disabled={isLoggingIn}
    >
      {isLoggingIn ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          Loading...
        </>
      ) : (
        "Sign in"
      )}
    </button>
  </div>
</form>


          <div className="text-start">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </div>
  );
};
export default LoginPage;