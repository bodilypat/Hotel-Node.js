//src/features/rooms/components/modals/DeleteRoomModal.jsx 
function deleteRoomModal({ isOpen, onClose, room, onDelete }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-2">Delete Room</h2>

                <p className="text-gray-600 mb-4">Are you sure you want to delete{" "}
                    <strong>{room?.name}</strong>?
                </p>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="border px-4 py-2 rounded-lg">
                        Cancel
                    </button>

                    <button onClick={() => {
                            onDelete?.(room);
                            onClose();
                        }}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DeleteRoomModal;

