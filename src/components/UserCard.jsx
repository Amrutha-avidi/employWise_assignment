import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";

export default function UserCard({ user }) {
    const handleEdit = () => console.log("Edit user:", user);
    const handleDelete = () => console.log("Delete user:", user);

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative">
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                        onClick={handleEdit}
                        className="bg-blue-50 text-blue-500 p-2 rounded-full hover:bg-blue-100 transition"
                        title="Edit User"
                    >
                        <FaEdit size={18} />
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="bg-red-50 text-red-500 p-2 rounded-full hover:bg-red-100 transition"
                        title="Delete User"
                    >
                        <FaTrash size={18} />
                    </button>
                </div>
                <div className="p-6 text-center">
                    {user.avatar ? (
                        <img 
                            src={user.avatar} 
                            alt={user.first_name} 
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 shadow-md"
                        />
                    ) : (
                        <FaUserCircle className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                    )}
                    <h3 className="text-xl font-semibold text-[#2C3E50]">
                        {user.first_name} {user.last_name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                </div>
            </div>
        </div>
    );
}
