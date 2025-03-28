import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function EditUserModal({ user, onClose, onUpdate }) {
    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.put(`${BASE_URL}/api/users/${user.id}`, formData);
            onUpdate({ ...user, ...response.data });
            onClose();
        } catch (err) {
            setError("Failed to update user. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={true} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <h2 className="text-xl font-bold mb-4 text-blue-800">Edit User</h2>

                <TextField
                    fullWidth
                    label="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                />

                {error && <p className="text-red-500 mt-2">{error}</p>}

                <div className="flex justify-end mt-4">
                    <Button onClick={onClose} variant="outlined" sx={{ mr: 2 }}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update"}
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}
