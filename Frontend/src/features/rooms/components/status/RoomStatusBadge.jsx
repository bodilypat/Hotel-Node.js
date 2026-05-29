//src/features/rooms/components/status/RoomStatusBadge.jsx
import clsx from "clsx"

const STATUS_VARIENTS = {
    available: {
        label: "Available",
        className: "bg-emerald-100 text -emerald-700 border border-emerald-200",
        dot: "bg-emerald-500",
    },

    occupied: {
        label: "Occupied",
        className: "bg-rose-100 text-rose-700 border border-rose-200",
        dot: "bg-rose-500"
    },

    reserved: {
        label: "Reserved",
        className: "bg-amber-100 text-amber-700 border border-amber-200",
        dot: "bg-amber-500",
    },

    cleaning: {
        label: "Cleaning",
        className: "bg-sky-100 text-sky-700 border border-sky-200",
        dot: "bg-sky-500"
    },

    maintenance: {
        label: "Maintenance",
        className: "bg-slate-200 text-slate-700 border border-slate-300",
        dot: "bg-state-500",
    },

    inactive: {
        label: "inactive",
        className: "bg-zinc-200 text-zinc-700 border border-zinc-300",
        dot: "bg-zinc-500",
    },
};

function RoomStatusBadge({
    status = "available",
    size = "md",
    showDot = true,
    className = "",
}) {
    const normalizedStatus = staus?.toLowerCase?.() ||"available";

    const variant = 
        STATUS_VARIANT[normalizedStatus] || 
        STATUS_VARIANT.available;

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
    };

    return (
        <span 
            className={clsx(
                "inline-flex-item-center gap-2 rounded-full font-medium transition-color",
                variant.className,
                sizeClasses[size],
                className 
            )}
        >
            {showDot &&(
                <span   
                    className={clsx(
                        "h-2 w-2 rounded-full",
                        variant.dot 
                    )}
                />
            )}
            <span>{variant.label}</span>
        </span>
    );
}

export default RoomStatusBadge;

