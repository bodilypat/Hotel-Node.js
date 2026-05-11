//src/modules/dashboard/dashboard.controller.js 
import * as dashboardService from "./dashboard.service.js";

export const getDashboardStatus = 
    async (
        req,
        res,
        next
    ) => {
        try {
            const data = 
                await dashboardService.getDashboardStatusService();

            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            next(error);
        }
    };

export const getRevenueAnalytics = 
    async (
        req,
        res,
        next
    ) => {
        try {
            const data =
                await dashboardService.getRevenueAnalyticsService();
            
            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            next(error);
        }
    };

export const getBookingAnalytics = 
    async (
        req,
        res,
        next
    ) => {
        try {
            const data =
                await dashboardService.getDashboardAnalyticsService();

            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            next(error)
        }
    };

    
