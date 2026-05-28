//src/features/rooms/components/modals/RoomGalleryModal.jsx 
import { useState } from "react";

function RoomGalleryModal({ isOpen, onClose, image = [] }) {
    const [current, setCurrent] = useState(0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl rounded-xl p-4">
                <img 
                    src={image[current]}
                    alt="Room"
                    className="w-full h-96 object-cover rounded-lg"
                />

                <div className="flex justify-center gap-2 mt-4">
                    {images.map((img, i) => (
                        <img 
                            key={i}
                            src={img}
                            onClick={() => setCurrent(i)}
                            className={`h-14 w-14 object-cover rounded cursor-pointer border ${
                                i === current ? "border-blue-500" : "border-transparent"
                            }`}
                        />
                    ))}
                </div>

                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="px-4 py-2 border rounded-lg">
                        Close 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomGalleryModal;

