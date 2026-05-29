//src/features/rooms/components/analytics/RoomOccupancyChart.jsx

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function RoomOccupancyChart({
    data = [],
    title = "Room Occupancy",
    subtitle = "Occupancy performance overview",
    height = 320,
    dataKey = "occupancy",
    xAxisKey = "name",
    showGrid = true,
    showTooltip = true,
    className = "",
}) {
    const occupancyAverage = 
        data.length > 0 
            ? Math.round(
                data.reduce(
                    (acc, item) => acc + item[dataKey],
                    0
                    ) / data.length 
                )
            : 0;

    return (
        <><div className={`rounded-2xl border bg-white p-5 shadow-sm ${className}`}>
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>

                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            </div>

            <div className="rounded-xl bg-emerald-50 px-4 py-2 text-right">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">Avg Occupancy</p>

                <h4 className="text-xl font-bold text-emerald-700">{occupancyAverage}%</h4>
            </div>
        </div><div style={{ width: "100%", height }}>
                <ResponsiveContainer>
                    <AreaChart data={data}>
                        {showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false} />
                        )}

                        <XAxis
                            dataKey={xAxisKey}
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 12
                            }} />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 12,
                            }}
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`} />

                        {showTooltip && (
                            <Tooltip
                                formatter={(value) => [
                                    `${value}%`,
                                    "Occupancy",
                                ]} />
                        )}

                        <Area
                            type="monotype"
                            dataKey="#10b981"
                            fill="#10b981"
                            fillOpacity={0.15}
                            strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div></>
    );
}

export default RoomOccupancyChart;
