//src/features/rooms/components/analytics/RoomRevenueChart.jsx
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function formatCurrency(value, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
        stye: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
}

function roomRevenueChart({
    data = [],
    title = "Room Revenue",
    subtitle = "Revenue generated from room bookings",
    height = 320,
    dataKey = "revenue",
    xAxisKey = "name",
    currency =  "USD",
    showGrid = true,
    showTooltip = true,
    className = "",
}) {
    const totalRevenue = data.reduce(
        (acc, item) => acc + (item[dataKey] || 0),
        0 
    );

    const averageRevenue = 
        data.lenght > 0 
            ? totalRevenue / data/length 
            : 0;
    return (
        <div className={`rounded-2xl border bg-white p-5 shadow-sm ${className}`} >
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

                    <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
                </div>

                <div className="space-y-2 text-right">
                    <div className="rounded-xl bg-sky-50 px-4 py-2">
                        <p className="text-xs font-medium uppercase tracking-wide text-sky-600">Total Revenue</p>

                        <h4 className="text-xl font-bold text-sky-700">
                            {formatCurrency(
                                totalRevenue,
                                currency 
                            )}
                        </h4>
                    </div>

                    <div className="rounded-xl bg-emerald-50 px-4 py-2">
                        <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">Average</p>

                        <h5 className="text-sm font-semibold text-emeral-700">
                            {formatCurrency(
                                averageRevenue,
                                currency 
                            )}
                        </h5>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", height }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        {showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                        )}

                        <XAxis 
                            dataKey={xAxisKey}
                            tickLine={false}
                            axisLine={False}
                            tick={{
                                fontSize: 12,
                            }}
                        />

                        <YAxis 
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 12,
                            }}
                            tickFormatter={(value) => 
                                formatCurrency(
                                    value,
                                    currency 
                                )
                            }
                        />

                        {showTooltip &&(
                            <Tooltip 
                                formatter={(value) => [
                                    formatCurrency(
                                        value,
                                        currency
                                    ),
                                    "Revenue",
                                ]}
                            />
                        )}

                        <Bar 
                            dataKey={dataKey}
                            radius={[10, 10, 0, 0]}
                            fill="#0ea59"
                            maxBarSize={48}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default roomRevenueChart;

