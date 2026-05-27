import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        number: '',
        password: '',
        acceptedTerms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8000/api/auth/signup',
                {
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    number: formData.number,
                },
                { withCredentials: true }
            );

            const id = response.data.id;
            console.log(response.data);
            navigate(`/dashboard/${id}`);
        } catch (error) {
            console.error('Signup failed:', error);
            alert(error?.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <main className="min-h-[calc(100vh-72px)] bg-taupe-300 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-2xl rounded-4xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.22)] backdrop-blur sm:p-8 lg:p-10">
                <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Get started</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">Create account</h1>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        Fill in the details below to create your account and continue to the trading dashboard.
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-semibold text-slate-800">Full name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Nikola Tesla"
                            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tesla@example.com"
                                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-sm font-semibold text-slate-800">Number</label>
                            <input
                                id="mobile"
                                name="number"
                                type="tel"
                                value={formData.number}
                                onChange={handleChange}
                                placeholder="9876543210"
                                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-semibold text-slate-800">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a secure password"
                            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div>
                        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700" htmlFor="acceptedTerms">
                            <input
                                id="acceptedTerms"
                                name="acceptedTerms"
                                type="checkbox"
                                checked={formData.acceptedTerms}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span>I agree to the terms and confirm that my details are accurate.</span>
                        </label>
                    </div>

                    <button type="submit"  className="inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20">
                        Create account
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Signup;
