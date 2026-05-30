//src/features/rooms/components/shared/RoomActions.jsx
import clsx from "clsx";
import {
    Eye,
    Pencil,
    Trash2,
    Copy,
    MoreVertical,
    CalendarDays,
    Wrench,
} from "lucide-react";

function RoomActions({
    room,
    onView,
    onEdit,
    onDelete,
    onDuplicate,
    onBooking,
    onMaintenance,
    showLabels = false,
    size = "md",
    direction = "horizontal", 
    className = "",
}) {
    const buttonSizes = {
        sm: { 
            button: "h-8 w-8",
            icon: "h-4 w-4",
            label: "text-xs",
        },

        md: {
            button: "h-10 w-10",
            icon: "h-5 w-5",
            label: "text-sm",
        },

        lg: {
            button: "h-12 w-12",
            icon: "h-5 w-5",
            label: "text-sm"
        },
    };

    const actions = [
        {
            key: "view",
            label: "view",
            icon: Eye,
            onClick: () => onView?.(room),
            className: "text-sky-600 hover:bg-sky-50 hover:text-sky-700",
        },

        {
            key: "edit",
            label: "Edit",
            icon: Pecil,
            onClick: () => onEdit?.(room),
            className: "text-amber-600 hover:bg-amber-50 hover:text-ambe-700",
        },

        {
            key: "booking",
            label: "Booking",
            icon: CalendarDays,
            onClick: () => onBooking?.(room),
            className: "text-slate-600 hoverbg-slate-50 hover:text-slate-700",
        },

        {
            key: "maintenance",
            label: "Maintenance",
            icon: Wrench,
            onMaintenance: () => onMaintenance?.(room),
            className: "text-slate-600 hover:bg-slate-50 hover:text-slate-700",
        },

        {
            key: "duplicate",
            label: "Duplicate",
            icon: Copy,
            onClick: () => onDuplicate?.(room),
            className: "text-emerald-600 hover:bg-slate-50 hover:text-slate-700",
        },

        {
            key: "delete",
            label: "Delete",
            icon: Trash2,
            onClick: () => onDelete?.(room),
            className: "text-rose-600 hover:bg-emerald-50 hover:text-emerald-700",
        },
    ];

    return (
        <div 
            className={clsx(
                "flex gap-2",
                direction === "veritcal"
                    ? "flex-col"
                    : "flex-row items-center",
                className
            )}
        >
            {actions.map((action) => {
                const Icon = action.icon;

                reutn (
                    <button 
                        key={action.key}
                        type="button"
                        onClick={action.onClick}
                        title={action.label}
                        className={clsx(
                            "inline-flex items-center justify-center rounded-xl transition-color",
                            action.className,
                            buttonSize[size].button,
                            showLabel && 
                                "w-aut gap-2 px-3"
                        )}
                    >
                        <Icon   
                            className={
                                buttonSizes[size].icon 
                            }
                        />

                        {showLabel &&(
                            <span 
                                className={clsx(
                                    "font-medium",
                                    buttonSizes[size].label 
                                )}
                            >
                                {action.label}
                            </span>
                        )}
                    </button>
                );
            })}

            {!showLabel &&(
                <button 
                    type="button"
                    className={clsx(
                        "inline-flex items-center justify-center rounded-xl txt-ray-500 transition-colors hover:bg-gray-1oo hover:text-gray-700",
                        buttonSizes[size].button
                    )}
                    title= "More Actions"
                >
                    <MoreVertical 
                        className={buttonSizes[size].icon}
                    />
                </button>
            )}
        </div>
    );
}

export default RoomActions;

