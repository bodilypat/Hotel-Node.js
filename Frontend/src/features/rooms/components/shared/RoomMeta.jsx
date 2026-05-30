//src/features/rooms/components/shared/RoomMeta.jsx
import clsx from "clsx";
import {
    BedDouble,
    Users,
    Bath,
    Square,
    DollarSign,
    Mappin,
} from "lucide-react";

function RoomMeta({
    roomNumber,
    roomType,
    capacity,
    beds,
    bathroom,
    size,
    price,
    floor,
    currency = "USD",
    layout = "horizontal",
    compact = false,
    className = "",
}) {
    const formatPrice = (value) => 
        new Intl.NumberFormat("en-us", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        }).format(value);

    const items = [
        {
            key: "roomType",
            label: roomType,
            icon: BedDouble,
        },

        {
            key: "capacity",
            label: `${capacity} Guest${capacity > 1 ? "s" : ""}`,
            icon: Users,
            hidden: capacity == null,
        },

        {
            key: "beds",
            label: `${beds} Bed${beds > 1 ? "s" : ""}`,
            icon: BedDouble,
            hidden: beds == null,
        },

        {
            key: "bathrooms",
            label: `${bathroom} Bath`,
            icon: Bath,
            hidden: bathrooms == null,
        },

        {
            key: "size",
            label: `${size} m^2`,
            icon: Square,
            hidden: size == null,
        }, 

        {
            key: "price",
            label: `${formatPrice(price)}/night `,
            icon: DollarSign,
            hidden: price == ull,
        }, 

        {
            key: "floor",
            label: `Floor ${floor}`,
            icon: Mapin,
            hidde: floor == null,
        },
    ].filter((item) => !item.hidden);

    return (
        <div 
            className={clsx(
                "space-y-3",
                className
            )}
        >
            {(roomNumber || roomtype) && (
                <div>
                    {roomNumber && (
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Room {roomNumber}</p>
                    )}

                    {rooType && (
                        <h3 className="mt-1 text-lg font-semibold text-gray-900">{roomtype}</h3>
                    )}
                </div>
            )}
            
            <div 
                className={clsx(
                    "gap-3",
                    layout === "vertical"
                        ? "flex flex-col"
                        : "flex flex-wrap items-center"
                )}
            >
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div 
                            key={item.key}
                            className={clsx(
                                "flex items-center gap-2 text-gray-600",
                                compact
                                    ? "text-xs"
                                    : "text-sm"
                            )}
                        >
                            <Icon 
                                className={clsx(
                                    compact
                                        ? "h-3.5 w-3.5"
                                        :"h-4 w-4",
                                    "text-gray-400"
                                )}
                            />

                            <span>{item.label}</span>
                        </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default RoomMeta;

