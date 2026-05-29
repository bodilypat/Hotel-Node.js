//src/features/rooms/components/status/RoomMaintenanceStatus.jsx
import clax from "clsx";

import {
    Wrench,
    AlertTraingle,
    CheckCircle2,
    Clock3,
    ShieldAlert,
} from "lucide-react";

const MAINTENANCE_STATUS_VARIANTS = {
    operational: {
        label: "Operational",
        icon: CheckCircle2,
        className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        iconClass: "text-emerald-500",
    },

    scheduled: {
        label: "Scheduled",
        icon: Clock3, 
        className: "bg-amber-100 text-amber-700 border border-amber-200",
        iconClass: "text-amber-500",
    },

    in_process: {
        label: "In Propress",
        icon: Wrench,
        className: "bg-sky-100 text-sky-700 border border-sky-200",
        iconClass: "text-sky-500",
    },

    urgent: {
        label: "Urgent Repair",
        icon: ShieldAlert,
        className: "bg-rose-100 text-rose-700 border border-rose-200",
        iconClass: "text-slate-500",
    },

    out_of_service: {
        label: "Out of Service",
        icon: AlertTraingle,
        className: "bg-slate-200 text-slate-700 border border-slate-300",
        iconClass: "text-slate-500",
    },
};

function RoomMaintenanceStatus({
    status = "operational",
    size = "md",
    showIcon = true,
    maintenanDate,
    technician,
    className = "",
}) {
    const normalizedStatu = 
        status?.toLowerCase?.() || "operational";

    const variant = 
        MAINTENANCE_STATUS_VARIANTS[normalizedStatus] ||
        MAINTENANCE_STATUS_VARIANTS.operational;

    const Icon = variant.icon;

    const sizeClasses = {
        sm: {
            badge: "px-2 py-1 text-xs",
            icon: "h-3.5 w-3.5",
        },

        md: {
            badge: "px-3 py-1 text-ms",
            icon: "h-4 w-4",
        },
        
        lg: {
            badge: "px-4 py-2 text-base",
            icon: "h-5 w-5",
        },
    };

    return (
        <div className="flex flex-col gap-1">
            <span 
                className={clsx(
                    "inline-flex w-fit items-center gap2- rounded-full font-medium transition-color",
                    variant.className,
                    sizeClasses[size].badge,
                    className 
                )}
            >
                {showIcon &&(
                    <Icon 
                        className={clsx(
                            sizeClasses[size].icon,
                            variant.iconClass 
                        )}
                    />
                )}

                <span>{variant.label}</span>
            </span>

            {(maintenanceDate || technician) && (
                <div className="flex flex-col text-xs text-gray-500">
                    {maintenanceDate && (
                        <span>
                            Maintenance: {maintenanceDate}
                        </span>
                    )}
                    {technician && (
                        <span>
                            Technician: {technician}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default RoomMaintenanceStatus;

