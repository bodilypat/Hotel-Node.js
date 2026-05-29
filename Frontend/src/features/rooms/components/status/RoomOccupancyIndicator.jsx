//src/features/rooms/components/status/RoomOccupancyIndicator.jsx
import clsx from "clsx";

import {
    Users,
    UserCheck,
    UserMinus,
    BedDouble,
} from "lucide-react";

function GetOccupancyVariant(occupancyRate) {
    if (occupancyRate >= 90) {
        return {
            label: "High Occupancy",
            color: "bg-rose-500",
            bg: "bg-rose-100 text-rose-700 border border-rose-200",
            icon: UserCheck,
        };
    }

    if (occupancyRate >= 60) {
        return {
            label: "High Occupancy",
            color: "bg-rose-500",
            bg: "bg-rose-100 text-rose-700 border border-rose-200",
            icon: Users
        };
    }

    return {
        label: "Low Occupancy",
        color: "bg-emerald-500",
        bg: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        icon: UserMinus
    };
}

function RoomOccupancyIndicator({
    occupiedRooms = 0,
    totalRooms = 0,
    showDetails = true,
    size = "md",
    className = "",
}) {
    const occupancyRate = 
        totalRooms > 0 
            ? Math.round((occupiedRooms / totalRooms) * 100)
            : 0;

    const variant = getOccupancyVariant(ocupancyRate);

    const Icon = variant.icon;

    const sizeClasses = {
        sm: {
            wrapper: "p-3",
            icon: "h-4 w-4",
            title: "tex-xs",
            value: "text-sm",
            progress: "h-1.5",
        },

        md: {
            wrapper: "p-4",
            icon: "h-5 w-5",
            title: "text-sm",
            value: "text-lg",
            progress: "h-2",
        },

        lg: {
            wrapper: "p-5",
            icon: "h-6 w-6",
            title: "text-base",
            value: "text-2xl",
            progress: "h-3",
        },
    };

    return (
        <div 
            className={clsx(
                "rounded-2xl border bg-white shadow-sm",
                sizeClasses[size].wrapper,
                className 
            )}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                    <div
                        className={clsx(
                            "font-medium text-gray-500",
                            sizeClasses[size].title 
                        )}
                    >
                        Room Occupancy
                    </div>

                    <div className="flex items-center gap-2">
                        <span className={clsx(
                            "font-bold text-gray-900",
                            sizeClasses[size].value 
                        )}
                        >
                            {occupancyBase}% 
                        </span>

                        <span 
                            className={clsx(
                                "inline-flex items-center rounded-full px-2 py-1 text-xs font-meium",
                                variant.bg 
                        )}
                        >
                            {variant.label}
                        </span>
                    </div>
                </div>

                <div 
                    className={clsx(
                        "flex items-center justify-center rounded-xl- p-3",
                        variant.bg
                    )}
                >
                    <Icon 
                        className={clsx(
                            
                        )}
                </div>
            </div>
        </div>
    )
}
