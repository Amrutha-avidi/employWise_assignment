import { LuUsers } from "react-icons/lu";
import { RiPageSeparator } from "react-icons/ri";

export default function Stats({ totalUsers, currentPage, totalPages }) {
    return (
        <div className="flex justify-center md:justify-between w-full md:w-auto space-x-4">
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-flex items-center">
                <span className="mr-2"><LuUsers /></span>
                Total Users: {totalUsers}
            </div>
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full inline-flex items-center">
                <span className="mr-2"><RiPageSeparator /></span>
                Pages: {currentPage} / {totalPages}
            </div>
        </div>
    );
}
