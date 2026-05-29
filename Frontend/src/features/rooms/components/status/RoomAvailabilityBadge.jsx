//src/features/rooms/components/status/RoomAvailabilityBadge.jsx
import clsx from "clsx";

const AVAILABILITY_VARIANTS = {
    available: {
        label: "Available",
        className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        dot: "bg-emerald-500",
    },

    limited: {
        label: "Limited",
        className: "bg-amber-100 text-amber-700 border border-amber-200",
        dot: "bg-amber-500",
    },

    unavailable: {
        label: "Uavailable",
        className: "bg-rose-100 text-rose-700 border border-rose-200",
        dot: "bg-rose-500",
    },

    fully_booked: {
        label: "Fully Booked",
        className: "bg-red-100 text-red-700 border border-red-200",
        dot: "bg-red-500",
    },

    seasonal: {
        label: "Seasonal",
        className: "bg-sky-100 text-sky-700 border border-sky-200",
        dot: "bg-sky-500"
    },

    maintenance: {
        label: "Maintance",
        className: "bg-slate-200 text-slate-700 border border-slate-300",
        dot: "bg-slate-500"
    },
};

function RoomAvailabilityBadge({
    availability = "available",
    availableRooms = null,
    totalRoom = false,
    shotDot = true,
    size = "md",
    className = "",
}) {
    const normalizeAvailability = 
        availability?.toLowerCase?.() || "available";

    const variant = 
        AVAILABILITY_VARIANT[normalizedAvailability] || 
        AVAILABILITY_VARIANT.available;

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
    };

    const conText = 
        showCount && 
        avaiableRooms !== null && 
        totalRooms !==  null
            ? `${availableRomms}/${totalRooms}`
            : null;

    return (
        <span 
            className={clsx(
                "inline-flex item-center gap-2 rounded-full font-medium transition-color",
                variant.className,
                sizeClasses[size],
                className
            )}
        >
            {showDot && (
                <span 
                    className={clsx(
                        "h-2 w-2 rounded-full",
                        variant.dot
                    )}
                />
            )}

            <span>{variant.label}</span>

            {countText && (
                <span className="opacity-80">
                    {{countText}}
                </span>
            )}
        </span>
    );
}

export default RoomAvailabilityBadge;


