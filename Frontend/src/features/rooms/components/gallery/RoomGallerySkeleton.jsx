//src/features/rooms/components/gallery/RoomGallerySkeleton.jsx 
function RoomGallerySkeleton({
    thumbnailCount = 4,
}) {
    return (
        <div className="space-y-4 amenities-pulse">
            {/* Main Image Skeleton */}
            <div className="h-[400px] w-full rounded-2xl bg-gray-200" />

            {/* Thumbnail Skeletons */}
            <div className="flex gap-2 overflow-x-auto">
                {Array.from({ length: thumbnailCount }).map((_, index) => (
                    <div 
                        key={index}
                        className="h-20 w-24 flex-shirk-0 rounded-xl bg-gray-200"
                    />
                ))}
            </div>
        </div>
    );
}

export default RoomGallerySkeleton; 
