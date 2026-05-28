//src/features/rooms/components/modals/RoomDetailsModal.jsx 
function RoomDetailsModal({ isOpen, onClose, room }) {
    if (!isOpen || !room) return null;
    
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Room Details</h2>

                <img 
                    src={room.image}
                    alt={room.name}
                    className="w-flex h-48 object-cover rounded-lg mb-4"
                />

                <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong>{room.name}</p>
                    <p><strong>Number:</strong>{room.roomNumber}</p>
                    <p><strong>Type:</strong>{room.type}</p>
                    <p><strong>Price:</strong>${room.price}</p>
                    <p><strong>Capacity:</strong>{room.capacity}</p>
                    <p><strong>Status:</strong>{room.status}</p>
                </div>

                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="px-4 py-2 border rounded-lg">Close</button>
                </div>
            </div>
        </div>
    );
}

export default RoomDetialsModal;

