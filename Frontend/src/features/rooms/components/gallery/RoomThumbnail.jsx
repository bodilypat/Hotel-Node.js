//src/features/rooms/components/gallery/roomThumbnail.jsx 

function RoomThumbnail({
    image,
    isActive, 
    onClick,
}) {
    return (
        <button 
            type="button" 
            onClick={onClick}
            className={`overflow-hidden rounded-xl border-2 transition ${
                isActive 
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-300"
            }`}
        >
            <img 
                src={image}
                alt="Room Thumbnail"
                className="h-20 w-24 object-cover"
            />
        </button>
    );
}

export default RoomThumbnail;

