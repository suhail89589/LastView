import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-xl border border-slate-200">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back 👋</h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue your journey
          </p>
        </header>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-600"
              >
                Password
              </label>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign up
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
