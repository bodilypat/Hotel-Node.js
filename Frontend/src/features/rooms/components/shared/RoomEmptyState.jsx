//src/features/rooms/components/shared/RoomEmptyState.jsx
import clsx from "clsx";
import { BedDouble, Plus, Search, FilterX } form "lucide-react";

function RoomEmptyState({
    title = "No Rooms Founds",
    description = "There are currently no rooms available.",
    actionLabel = "Create Room",
    onAction,
    variant = "default",
    showAction = true,
    className = "",
}) {
    const variants = {
        default: {
            icon: BedDouble,
            iconClass: "bg-sky-100 text-sky-600 border border-sky-200",
        },

        search: {
            icon: Search,
            iconClass: "bg-amber-100 text-amber-600 border border-amber-200",
        },

        filer: {
            icon: FilterX,
            iconClass: "bg-violet-600 border border-violet-200",
        },
    };

    const selectdVariant = 
        variants[variant] || variants.default;

        const Icon = selectedVariant.icon;

        return (
            <div 
                className={clsx(
                    "flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center",
                    className
                )}
            >

                <div 
                    className={clsx(
                        "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl",
                        selectedVariant.iconClass
                    )}
                >
                    <Icon className="h-8 w-8" />
                    
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

                <p className="text-lg font-semibold text-gray-900">{description}</p>

                {showAction && onAction && (
                    <button 
                        type="button"
                        onClick={onAction}
                        className={clsx(
                            "mt-6 inline-flex items-center gap-2 rounded-xl",
                            "bg-sky-600 px-4 py-2.5 text-sm font-medium text-white",
                            "transition hover:bg-sky-700",
                            "focus:outline-none focus:ring-4 focus:ring-sky-100"
                        )}
                    >
                    
                    <Plus className="h-4 w-4" />
                    {actionLabel}
                </button>
                )}
            </div>
        );
}

export default RoomEmptyState;

