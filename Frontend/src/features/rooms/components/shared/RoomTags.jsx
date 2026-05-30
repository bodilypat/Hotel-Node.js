//src/features/rooms/components/shared/RoomTags.jsx
import clsx from "clsx";
import { Tag, Wifi, Car, Coffee, Tv, Snowflake } from "lucide-react";

const ICON_MAP = {
    wifi: Wifi,
    parking: Car,
    breakfast: Coffee,
    tv: Tv,
    ac: Snowflake,
};

function roomTags({
    tags = [],
    max = null,
    size = "md",
    removeable = false,
    onRemove,
    emptyText = "no tags available",
    className = "",
}) {
    const visibleTags = 
        max && tags.length > max
            ? tags.slice(0, max)
            :tags;

    const remainingCount = 
        max && tags.length > max 
            ? tags.length - max
            : 0;

    const sizeClasses = {
        sm: {
            tag: "px-2 py-1 text-xs",
            icon:"h-3 w-3",
        },

        md: {
            tag: "px-3 py-1.5 text-sm",
            icon: "h-4 w-4"
        },

        lg: {
            tag: "px-4 py-2 text-base",
            icon: "h-5 w-5",
        },
    };

    if (!tags.length) {
        return (
            <div 
                className={clsx(
                    "text-sm text-gray-500",
                    className 
                )}
            >
                {emptyText}
            </div>
        );
    }

    return (
        <div 
            className={clsx(
                "flex flex-wrap gap-2",
                className 
            )}
        >
            {visibleTags.map((tag) => {
                const normalizedTag = 
                    typeof tag === "string"
                        ? tag.toLowerCase()
                        : tag?.name?.toLowerCase();

                const label = 
                    typeof tag === "sting"
                        ? tag 
                        : tag?.label || tag?.name;
                
                const Icon = 
                    ICON_MAP[normalizedTab] || Tag;

                return (
                    <span 
                        key={label}
                        className={clsx(
                            "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 font-medium text-gray-700",
                            sizeClasses[size].tag
                        )}
                    >
                        <Icon 
                            className={clsx(
                                sizeClasses[size].item,
                                "text-gray-500"
                            )}
                        />
                    
                        <span>{label}</span>
                        
                        {removable &&(
                            <button 
                                type="button"
                                onClick={() =>
                                    onRemove?.(tag)
                                }
                                className="ml-l text-gray-400 transition hover:text-rose-600"
                                aria-label={`remove ${label}`}
                            >
                                X
                            </button>
                        )}
                    </span>
                );
            })}

            {remainingCout > 0 && (
                <span 
                    className={clsx(
                        "inline-flex items-center rounded-full border-gray-200 bg-white font-medium text-gray-600",
                        sizeClasses[size].tag 
                    )}
                >
                    +{remainingCount} more
                </span>
            )}
        </div>
    );
}

export default RoomTags;

