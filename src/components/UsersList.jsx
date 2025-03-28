import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { RiPageSeparator } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    const fetchUsers = async (pageNumber) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(`${BASE_URL}/api/users?page=${pageNumber}`);
            setUsers(response.data.data);
            setFilteredUsers(response.data.data); 
            setTotalPages(response.data.total_pages);
        } catch (err) {
            setError("Failed to fetch users. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/login"); 
    };

    useEffect(() => {
        if (!searchQuery) {
            setFilteredUsers(users);
        } else {
            const lowerCaseQuery = searchQuery.toLowerCase();
            setFilteredUsers(
                users.filter(user =>
                    user.first_name.toLowerCase().includes(lowerCaseQuery) ||
                    user.last_name.toLowerCase().includes(lowerCaseQuery) ||
                    user.email.toLowerCase().includes(lowerCaseQuery)
                )
            );
        }
    }, [searchQuery, users]);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 relative">
            <button
                onClick={handleLogout}
                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg 
                           hover:bg-red-600 transition font-semibold shadow-md hidden sm:flex"
            >
                Logout
            </button>
            <button
                onClick={handleLogout}
                className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-lg 
                           hover:bg-red-600 transition font-semibold shadow-md sm:hidden"
            >
                <IoIosLogOut size={24} />
            </button>

            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold  mb-4 text-blue-800 underline font-serif">
                        User Management
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif">
                        Manage users efficiently with an easy-to-use interface.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search users by name or email..."
                        className="w-full max-w-lg px-4 py-2 md:px-4  border border-gray-300 rounded-lg shadow-sm text-blue-600
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                    {/* Stats */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-flex items-center">
                            <span className="mr-2"><LuUsers /></span>
                            Total Users: {filteredUsers.length}
                        </div>
                        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full inline-flex items-center">
                            <span className="mr-2"><RiPageSeparator /></span>
                            Pages: {page} / {totalPages}
                        </div>
                    </div>
                </div>



                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center mb-6">
                        {error}
                    </div>
                )}

                {/* Users List */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                        ) : (
                            <div className="text-center text-gray-500 col-span-full text-xl">
                                No users found.
                            </div>
                        )}
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </div>
        </div>
    );
}
