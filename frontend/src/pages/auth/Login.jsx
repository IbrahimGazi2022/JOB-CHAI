import React, { useEffect, useState } from "react";
import { useSignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const { isSignedIn } = useUser();
    const { isLoaded, signIn, setActive } = useSignIn();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const result = await signIn.create({
                identifier: email, password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                navigate("/");
            } else {
                setError("Please complete additional authentication steps");
            }
        } catch (err) {
            if (err.errors?.[0]?.code === "form_identifier_exists") {
                router.push("/");
                return;
            } else if (err.errors?.[0]?.code === "form_password_incorrect") {
                setError("Incorrect password. Please try again.");
            } else if (err.errors?.[0]?.code === "form_identifier_not_found") {
                setError("Account not found. Please check your email.");
            } else {
                setError(err.errors?.[0]?.message || "Login failed. Please try again.");
            }
        }
    };

    const fillDemoCredentials = () => {
        setEmail("ibrahim@gmail.com");
        setPassword("$Islam1234");
    };

    useEffect(() => {
        if (isSignedIn) {
            navigate("/");
        }
    }, [isSignedIn]);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white p-4">
            <div className="absolute inset-0 z-0 bg-grid-pattern" />
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-gray-500">Sign in to continue to Job Chai</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="your@email.com"
                            autoComplete="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 bg-[#7d5be6] text-white py-3 px-4 rounded-lg transition cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2 hover:bg-[#9061F9]"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            onClick={fillDemoCredentials}
                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        >
                            Use Demo Account
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button className="font-medium text-[#9061F9] hover:text-[#e06a50]">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
