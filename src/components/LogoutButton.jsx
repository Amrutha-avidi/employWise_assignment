import { IoIosLogOut } from "react-icons/io";

export default function LogoutButton({ onLogout }) {
    return (
        <>
            <button
                onClick={onLogout}
                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg 
                           hover:bg-red-600 transition font-semibold shadow-md hidden sm:flex"
            >
                Logout
            </button>
            <button
                onClick={onLogout}
                className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-lg 
                           hover:bg-red-600 transition font-semibold shadow-md sm:hidden"
            >
                <IoIosLogOut size={24} />
            </button>
        </>
    );
}
