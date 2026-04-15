import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useAuth } from '../context/authContext';

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function submitData(e) {
        e.preventDefault();
        // Save user data into auth context
        login({
            name: email.split('@')[0], // derive username from email
            email: email,
        });
        navigate('/dashboard');
        setEmail("");
        setPass("");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={submitData}
                className="bg-white p-8 rounded-2xl shadow-lg w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-gray-600">Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                    Sign In
                </button>

                <p className="text-sm text-center mt-4 text-gray-600">
                    Don't have an account?{" "}
                    <Link 
                        to="/register" 
                        className="text-black font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;