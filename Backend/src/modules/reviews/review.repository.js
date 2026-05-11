//src/modules/reviews/review.repository.js 
import Review from "./review.model.js"

export const getReviews = async () => {
    return Review.find()
        .populate("user")
        .populate("hotel")
        .populate("booking")
};

export const getReviewById =  async (id) => {
    return Review.findById(id)
        .populate("user")
        .populate("hotel")
        .populate("booking")
};

export const getHotelReviews = async (hotelId) => {
    return Review.find({
        hotel: hotelId,
        isApproved: true,
    }).populate("user");
};

export const updateReview = async (id, payload) => {
    return Review.findByAndUpdate(id, payload, {
        new: true,
    });
};

export const deleteReview = async (id) => {
    return Review.findByIdAndDelete(id);
};

