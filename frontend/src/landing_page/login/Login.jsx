import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Attempting login with email:", formData.email);
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        },
      );
      
     const userId = response.data.id;
      navigate(`/dashboard/${userId}`);
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-taupe-300 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-xl rounded-4xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.22)] backdrop-blur sm:p-8 lg:p-10">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Login
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Enter your email and password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-800"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-800"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
