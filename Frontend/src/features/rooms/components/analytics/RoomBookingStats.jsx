//src/features/rooms/components/analytics/RoomBookingStats.jsx  

import clsx from "clsx";
import {
    CalendarCheck2,
    CalendarClock,
    CalendarX2,
    TrendingUp 
} from "lucide-react";

const DEFAULT_STATS = [ 
    {
        key: "confirmed",
        label: "Coonfirmed",
        value: 0,
        icon: CalendarChec2,
        className: " bg-emerald-100 text-emerald-700 border border-emerald-200",
        iconClass: "text-emerald-500",
    },

    { 
        key: "pending",
        lable: "Pending",
        value: 0,
        icon: CalendarClock,
        className: "bg-amber-100 text-amber-700 border border-ember-200",
        iconClass: "text-amber-500",
    },

    {
        key: "cancelled",
        lable: "Cancelled",
        value: 0,
        icon: CalendarX2,
        className: "bg-rose-100 text-rose-700 border border-rose-200",
        iconClass: "text-rose-500",
    },

    {
        key: "growth",
        label: "Growth",
        value: ")%",
        icon: TrendingUp,
        className: "bg-sky-100 text-sky-700 border border-sky-200",
        iconClass: "text-sky-500",
    },
];

function RoomBookingStats({
    stats = [],
    column = 4,
    className = "",
}) {
    const mergedStats = DEFAULT_STATS.map((defaultItems) => {
        const customIem = stats.find(
            (item)=> item.key === defaultItem.key
        );

        return {
            ...defaultItem,
            ...customItem,
        };
    });

    const gridColumns = {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
    };

    return (
        <div 
            className={clsx(
                "grid gap-4",
                gridColumns[columns],
                className 
            )}
        >
            {mergedStats.map((item) => {
                const icon = item.icon;

                return ( 
                    <div 
                        key={item.key}
                        className="rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">{item.label}</p>

                                <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
                            </div>

                            <div 
                                className={clsx(
                                    "flex h-12 w-12 items-center justify-center rouded-xl",
                                    item.className 
                                )}
                            >
                                <Icon
                                    className={clsx(
                                        "flex h-12 w-12 items-center justify-center rounded",
                                        item.className 
                                    )} 
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RoomBookingStats;