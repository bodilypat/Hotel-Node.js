//src/features/rooms/components/gallery/RoomLightbox.jsx 
import { useEffect } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

function RoomLightbox({
    images = [],
    currentIndex = 0,
    setCurrentIndex,
    isOpen,
    onClose,
}) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === "Escape") {
                onClose?.();
            }

            if (e.key === "ArrowLeft") {
                prevSlide();
            }

            if (e.key === "ArrowRight") {
                nextSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, currentIndex]);

    if (!isOpen || !images.length) {
        return null;
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? images.length -1 : prev - 1
        );
    };

    return (
        <div className="flex inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            {/* Close Button */}
            <button 
                type="button"
                onClick={onClose}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-ful bg-white/10 p-3 text-white/20"
            >
                <X size={24} />
            </button>

            {/* Previous */}
            <button 
                type="button"
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Previous image"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Main Image */}
            <div className="max-h[90h] max-w-6xl overflow-hidden rounded-2xl">
                <img 
                    src={images[currentIndex]}
                    alt={`Room ${currentIndex + 1}`}
                    className="max-h-[90vh] w-full object-contain"
                />
            </div>

            {/* Next */}
            <button 
                type={button}
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Next image"
            >
                <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default RoomLightbox;
