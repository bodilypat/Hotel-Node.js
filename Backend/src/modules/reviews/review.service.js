//src/modules/reviews/review.service.js 
import * as reviewRepository from "./review.repository.js";

export const createReviewService = async (
    payload,
    userId
) => {
    return reviewRepository.createReview({
        ...payload,
        user: userId,
    });
};

export const getReviewsService = ansyc (id) => {
    return reviewRepository.getReviews();
};

export const getReviewService = async (id) => {
    return reviewRepository.getReviewById(id);
};

export const getHotelReviewService = async (
    hotelId
) => {
    return reviewRepository.getHotelReviews(
        hotelId
    );
};

export const updateReviewService = async (
    id,
    payload,
) => {
    return reviewRepository.updateReview(
        id,
        payload
    );
};

export const deleteReviewService = async (
    id
) => {
    return reviewRepository.deleteReview(id);
};

