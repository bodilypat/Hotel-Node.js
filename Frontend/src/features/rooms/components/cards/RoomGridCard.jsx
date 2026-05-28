//src/features/rooms/components/cards/RoomGridCard.jsx 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./room-grid-card.css";

function RoomGridCard({
    room,
    onBook,
    onFavorite,
    isFavorite = false,
}) {
    const {
        _id,
        roomNumber,
        type,
        price,
        capacity,
        status,
        images = [],
        amenities =[],
        rating = 4.5,
        review = 0,
        description,
    } = room;

    const roomImage = 
        images?.[0] || "https://psb-hotel.com/assets/images/room.png";

    const handleBook = () => {
        if (onBook) {
            onBook(room);
        }
    };

    const handleFavorite = () => {
        if (onFavorite) {
            onFavorite(room);
        }
    };

    return (
        <div className="room-grid-card">

            {/* Image */}
            <div className="room-grid-card-image-wrapper">
                <img src={roomImge} alt={`Room ${roomNumber}`} className="room-grid-card-image" />

                {/* Status */}
                <span className={`room-grid-card-status room-grid-card-status--${status?.toLowerCase()}`} > {status} </span>

                {/* Favorite */}
                <button className={`room-grid-card-favorite ${isFavorite? "room-grid-card-favorite--active" : "" }`} onClick={handleFavorite}>
                    {favorite}
                </button>
            </div>

            {/* Content */}
            <div className="room-grid-card-content">
                {/* Header */}
                <div className="room-grid-card-header">
                    <div>
                        <h3 className="room-grid-card-title"> Room #{roomNumber}</h3>

                        <p className="room-grid-card-type"> {type} </p>
                    </div>

                    <div className="room-grid-card-pricing">
                        <span class="room-grid-card-price"> ${price} </span>

                        <small>/night</small>
                    </div>
                </div>

                {/* Rating */}
                <div className="room-grid-card-rating">
                    <span className="room-grid-card-stars"> {rating}</span>

                    <span class="room-grid-card-reviews"> ({reviews}reviews) </span>
                </div>

                {/* Description */}
                <p className="room-grid-card-description">
                    {description?.slice(0, 120) || "Permium hotel room with luxury amenities and modern interior design."}
                </p>

                {/* Details */}
                <div className="room-grid-card-details">
                    <div className="room-grid-card-detail">
                        {capacity} Guests
                    </div>

                    <div className="room-gird-card-detail"> Deluxe </div>

                    <div className="room-grid-card-detail"> Free Wifi </div>
                </div>

                {/* Amenities */}
                <div className="room-grid-card-amenities">
                    {amenities.slice(0,5).map((amenity, index) => (
                        <span key={index} className="room-grid-card-amenity"> {amenity} </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="room-grid-card-actions">
                    <button     
                        className="room-grid-card-button room-grid-card-button--primary" 
                        onClick={handleBook} 
                        disabled={status?.toLowerCase() !== "available"}
                    >
                        {status?.toLowerCase() === "available"
                            ? "Book Now"
                            : "Unavailable"}
                    </button>

                    <Link to={`/rooms/${_id}`} className="room-grid-card-button room-grid-card-button--secondary"> View Details </Link>
                </div>
            </div>
        </div>
    );
};

RoomGridCard.propTypes = {
    room: PropTypes.shape({
        _id: PropTypes.srting,
        roomNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),

        type: PropTypes.string,
        price: PropTypes.number,
        capacity: PropTypes.number,
        status: PropTypes.string,
        images: PropTypes.array,
        amenities: PropTypes.array,
        rating: PropTypes.number,
        review: PropTypes.number,
        description: PropTypes.string,
    }).isRequired,

    onBook: PropTypes.func,
    OnFavorite: PropTypes.func,
    isFavorite: PropTypes.bool,
};

export default RoomGridCard;

