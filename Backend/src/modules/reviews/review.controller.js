//src/modules/reviews/review.controller.js 
import * as reviewService from = "./review.service.js"

export const createReview = async (
    req, 
    res,
    next
) => {
    try {
        const review = 
            await reviewService.createReviewService(
                req.body,
                req.user.id
            );
        
            res.status(201).json({
                success: true,
                message: "Review added successfully",
                data: review,
            });
    } catch (error) {
        next(error);
    }
};

export cost getReviews = async (
    req, 
    res,
    next
) => {
    try {
        const reviews = 
            await reviewService.getReviewsService();

        res.status(200).json({
            success: true,
            data: review,
        });
    } catch (error) {
        next(error)
    }
};

export const getReview = async (
    req,
    res,
    next
) => {
    try {
        const review = 
            await reviewService.getReviewService(
                req.params.id
            );
        
        res.status(200).json({
            success: true,
            data: review,
        });
    } catch (error) {
        next(error);
    }
};

export const getHotelReviews = async (
    req,
    res,
    next
) => {
    try {
        const reviews = 
            await reviewService.getReviewsService(
                req.params.hotelId
            );
        
        res.status(200).json({
            success: true,
            data: reviews,
        });
    } catch (error) {
        next(error);
    }
};

export const updateReview = async (
    req,
    res,
    next 
) => {
    try {
        const review = 
            await reviewService.updateReviewService(
                req.params.id,
                req.body
            );
        
        res.status(200).json({
            success: true,
            message: "Review updated successfully",
            data: review,
        });
    } catch (error) {
        next(error)
    }
};

export const deleteReview = async (
    req,
    res,
    next 
) => {
    try {
        await reviewService.deleteReviewService(
            req.params.id
        );
        
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

