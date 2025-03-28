import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import loginImage from "../assests/login_img.png"; 
import loginImage from "../assests/login_img2.jpg";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function LoginPage() {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/api/login`, { email, password });
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate("/home");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen bg-[#E6F0FF]  ">
            {/* Left Side - Image (Hidden on smaller screens) */}
            <div className="w-1/2 hidden md:flex items-center justify-center p-8 md:p-24">
                <img
                    src={loginImage}
                    alt="Login"
                    className="w-[1200px] object-cover shadow-2xl rounded-lg"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white  shadow-2xl rounded-lg">
                <div className="w-full max-w-lg  shadow-2xl rounded-xl p-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-[#095eb3] underline">
                    EmployWise User Dashboard
                    </h2>
                    <p className="text-center text-[#7F8C8D] mb-6">
                        Use the demo credentials to log in and manage users.
                    </p>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-[#2C3E50] font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-2 text-blue-900 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                            />
                        </div>
                        <div>
                            <label className="block text-[#2C3E50] font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border-2 text-blue-900 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full  text-blue-500 py-3 rounded-lg font-semibold  border-2 border-blue-800"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login & Manage Users"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
