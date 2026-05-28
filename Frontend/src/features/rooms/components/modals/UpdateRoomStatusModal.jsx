//src/features/rooms/components/modals/RoomStatusModal.jsx 

import { useState } from "react";

function UpdateRoomStatusModal({ isOpen, onClose, room, onUpdate }) {
    const [status, setStatus] = useState(room?.status || "");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate?.({ ...room, status });
        onClose();
    };

    return (
        <div className="flxed insert-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Update Status</h2>

                <form onSubmit={handleSubmit}>
                    <select 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="input w-full"
                    >
                        <option value="available">Available</option>
                        <option value="occupied">Occupied</option>
                        <option value="maintenance">Maintenance</option>
                    </select>

                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={onClose} className="border px-4 py-2 rounded-lg">
                            cancel
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateRoomStatusModal;

