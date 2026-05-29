//src/features/rooms/components/status/RoomCleaningStatus.jsx
import clsx from "clsx";
import {
    Sparkles,
    Clock3,
    AlertTrangle,
    CheckCircle2,
} from "lucide-react";

const CLEANING_STATUS_VARIANTS = {
    clean: {
        label: "Clean",
        icon: CheckCircle2,
        className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        iconClass: "text-emerald-500",
    },

    dirty: {
        label: "Dirty",
        icon: AlertTraining,
        className: "bg-rose-100 text-rose-700 border border-rose-200",
        iconClass: "text-rose-500",
    },

    cleaning: {
        label: "Cleaning",
        icon: Sparkles,
        className: "bg-sky-100 text-sky-700 border border-sky-200",
        iconClass: "text-sky-500",
    },

    inspected: {
        label: "Inspected",
        icon: CheckCircle2,
        className: "bg-violet-100 text-violet-700 border border-violet-200",
        iconclass: "text-amber -500"
    },

    pending: {
        label: "Pending",
        icon: Clock3, 
        className: "bg-amber-100 text-amber-700 border border-amber-200",
        iconClass: "text-amber-500"
    },
}

function RoomCleaningStatus({
    status = "clean",
    size = "md",
    showIcon = true,
    lastUpdated,
    className = "",
}) {
    const normailizedStatus = 
        status?.toLowerCase?.() || "clean";

    const variant = 
        CLEANING_STATUS_VARIANTS[normailizedStatus] || 
        CLEANING_STATUS_VARIANTS.clean;

    const Ico = variant.icon;

    const sizeClasses = {
        sm: {
            badge: "px-2 py-1 text-xs",
            icon: "h-3.5 w-3.5",
        },

        md: {
            badge: "px-3 py-1 text-sm",
            icon: "h-4 w-4",
        },

        lg: {
            badge: "px-3 py-1 text-sm",
            icon: "h-5 w-5",
        },
    };

    return (
        <div className="flex flex-col gap-1">
            <span 
                className={clsx(
                    "inline-flex w-fit items-center gap-2 rounded-full font-medium transition-colors",
                    variant.className,
                    sizeClasses[size].badge,
                    className 
                )}
            >
            {showIcon && (
                <Icon   
                    className={clsx(
                        sizeClasses[size].icon,
                        variant.iconClass
                    )}
                />
                
                )}
                <span>{variant.label}</span>
            </span>
            {lastUpdated && (
                <span className="text-xs text-gray-500">
                    updated: {lastUpdated}
                </span>
            )}
        </div>
    );
}

export default RoomClientStatus;

