//src/modules/dashboard/dashboard.service.js 
import Booking from "../bookings/booking.model.js"
import Payment from "../payments/payment.model.js"
import Room from "./rooms/room.model.js";
import User from "../users/user.model.js";

export const getDashboardStatusService = async () => {
    const [
        totalUsers,
        totalRooms,
        totalBookings,
        totalPayments,
        revenue,
        recentBookings,
    ] = await Promise.all([
        User.countDocuments(),

        Room.countDocuments,

        Booking.countDocuments(),

        Payment.countDocuments(),

        Payment.aggregate([
            {
                $match: {
                    status: "paid",
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$amount",
                    },
                },
            },
        ]),

        Booking.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("user")
            .populate("hotel")
            .populate("room"),
    ]);

    return {
        statistics: {
            totalUsers,
            totalRooms,
            totalBookings,
            totalPayments,
            totalRevenue: 
                revenue[0]?.totalRevenue || 0,
        },

        recentBookings,
    };
};

export const getRevenueAnalyticService = async () => {
    const anakytics =
        await Payment.aggregate([
            {
                $match: {
                    status: "paid",
                },
            },

            {
                $group: {
                    _id: {
                        month: {
                            $month: "$createdAt",
                        },


                        year: {
                            $year: "$createdAt",
                        },
                    },

                    totalRevenue: {
                        $sum: "$amount",
                    },

                    totalTransaction: {
                        $sum: 1,
                    },
                },
            },

            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1,
                },
            },
        ]);

    return analytics;
};

export const getBookingAnalyticsService = 
    async () => {
        const anayltics = 
            await Booking.aggregate([
                {
                    $group: {
                        _id: "$bookingStatus",

                        totalBookings: {
                            $sum: 1,
                        },
                    },
                },
            ]);

        return anayltics;
};

