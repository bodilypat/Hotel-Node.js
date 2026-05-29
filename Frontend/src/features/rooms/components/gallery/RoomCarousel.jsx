//src/features/rooms/components/gallery/RoomCarousel.jsx 

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import RoomImage from "./RoomImage";

function RoomCarousel({
    images,
    currentIndex,
    setCurrentIndex,
}) {
    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? images.length - 1 : prev -1 
        );
    };

    const nextSide = () => {
        setCurrentIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1 
        );
    };

    return (
        <div className="relative overflow-hidden rounded-2xl">
            <RoomImage 
                src={imges[currentIndex]}
                alt={`Room ${currentIndex + 1}`}
                className="h-[400px] rounded-2xl"
            />

            <button 
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition hover:bg-white"
            >
                <Chevronleft size={20} />
            </button>

            <button 
                type="button"
                onClick={nextSide}
                className="absolute right-3 top 1/2 translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition hover:bg-white"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

export default RoomCarousel;

