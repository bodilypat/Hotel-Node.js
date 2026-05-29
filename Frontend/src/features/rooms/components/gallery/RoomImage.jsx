//src/features/rooms/components/gallery/RoomImage.jsx 

function RoomImage({
    src,
    alt,
    className = "",
}) {
    return (
        <img 
            src={src}
            alt={alt}
            className={`w-full object-cover ${className}`}
        />
    );
}

export default RoomImage;

