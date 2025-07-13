import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    setError("");
    alert("Signup successful!");
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="flex w-full max-w-6xl shadow-lg bg-white rounded-xl overflow-hidden">

        
        <div className="hidden lg:flex flex-1 bg-orange-100 items-center justify-center p-8">
          <img
            src="https://khatabook-assets.s3.amazonaws.com/media/post/PKrFZ5uqCxoeafB64xj2zUBLv58F3kJr1qxmG8LFZv72_0uIL43ZGsyJ8wMih0NaBFiL6YGaTGyGArdcEx5yiBI-yfWMsDBtlwSpu1SXbpVbyVqouyr41ii5yObMJ6t8SCxIFvg28uSjDAaHSKO7azg.webp"
            alt="Swiggy Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>

        
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-6">Create your Swiggy account to get started.</p>

          {error && (
            <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to Swiggy's Terms & Conditions and Privacy Policy.
          </p>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span className="text-orange-600 font-medium hover:underline cursor-pointer">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
