//src/features/rooms/components/gallery/RoomGallery.jsx 
import { useState } from "react";

import RoomCarousel from "./RoomCarousel";
import RoomThumbnail from './RoomThumbnail';

function RoomGallery({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images.length){
        return (
            <div className="flex h-64 items-center justify-center rountered-xl bg-gray-100 text-gray-500">
                No images available 
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <RoomCarousel 
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />

            <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                    <RoomThumbnail
                        key={index}
                        image={image}
                        onclick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RoomGallery;

