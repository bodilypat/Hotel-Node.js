//src/features/rooms/components/modals/CreateRoomModal.jsx 

import { useState } from "react";

function CreateRoomModal({ isOpen, onClose, onCreate }) {
    const [form, setForm] = useState({
        name: "",
        roomNumber:"",
        type: "single",
        price: "",
        capacity: "",
        image: "",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate?.(form);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Create Room</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="name" placeholder="Room Name" onChange={handleChange} className="input" />
                    <input name="roomNumber" placeholder="Room number" onChange={handleChange} className="input" />
                    <input name="price" placeholder="Price" onChange={handleChange} className="input" />
                    <input name="capacity" placeholder="Capacity" onChange={handleChange} className="input" />
                    <input name="image" placeholder="Image URL" onChange={handleChange} className="input" />

                    <select name="type" onChange={handleChange} className="input">
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                        <option value="deluxe">Deluxe</option>
                    </select>

                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
                        
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateRoomModal;

