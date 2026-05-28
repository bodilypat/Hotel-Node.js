//src/features/rooms/components/cards/RoomListCard.jsx 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./room-list-card.css";

function RoomListCard({
    room,
    onBook,
    onEdit,
    onDelete,
    onFavorite,
    isFavorite = false,
    showAdminActions = false,
}) {
    const {
        _id,
        roomNumber,
        type,
        price,
        capacity,
        floor,
        status,
        image = [],
        amenities = [],
        rating = 4.5,
        reviews = 0,
        description,
    } = room;

    const roomImage = "https://psb-hotel.com/assets/images/room.png";

    const handleBook = () => {
        if (onBook) {
            onBook(room)
        }
    };

    const handleEdit = () => {
        if (onEdit) {
            onEdit(room);
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(room);
        }
    };

    const handleFavorite = () => {
        if (onFavorite) {
            onFavorite(room);
        }
    };

    return (
        <div className="room-list-card">
            {/* Image */}
            <div className="room-list-card-image-wrapper">
                <img 
                    src={roomImage}
                    alt={`Room ${roomNumber}`}
                    className="room-list-card-image"
                />

                <span className={`room-list-card-status room-list-card-status--${status?.toLowerCase()}`}>
                    {status}
                </span>
            </div>

            {/* Content */}
            <div className="room-list-card-content">
                {/* Top */}
                <div className="room-list-card-top">
                    <div>
                        <h2 className="room-list-card-tilte"> Room #{roomNumber} </h2>

                        <p className="room-list-card-type"> {type} </p>
                    </div>

                    <button className={`room-list-card-favorite ${
                        isFavorite
                            ? "room-list-card-favorite--active"
                            : ""
                        }`}
                        onClick={handleFavorite}
                    >
                        {favorite}
                    </button>
                </div>

                {/* Rating */}
                <div className="room-list-card-rating">
                    <span> {rating}</span>
                    <span>({reviews} review)</span>
                </div>

                {/* Description */}
                <p className="room-list-card-description"> 
                    {description?.slice(0, 180) || 
                        "Luxury hotel room with premium facilities, elegant interior design, and modern amenities for comfortable stays."
                    }
                </p>

                {/* Details */}
                <div className="room-list-card-details">
                    <div className="room-list-card-detail">
                        Capacity: {capacity}
                    </div>

                    <div className="room-list-card-detail">
                        Floor: {floor}
                    </div>

                    <div className="room-list-card-detail">
                        {type}
                    </div>
                </div>
                
                {/* Amenities */}
                <div className="room-list-card-amenities">
                    {amenities.slice(0, 6).map((amenity, index) => (
                        <span 
                            key={index}
                            className="room-list-card-amenity"
                        >
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="room-list-card-bottom">
                    {/* Pricing */}
                    <div className="room-list-card-pricing">
                        <h3>${price}</h3>
                        <span>per night</span>
                    </div>

                    {/* Actions */}
                    <div className="room-list-card-actions">
                        <button 
                            className="room-list-card-button room-list-card-button--primary"
                            onClick={handleBook}
                            disabled={status?.toLowerCase() !== "available"}
                        >
                            {status?.toLowerCase() === "available"
                                ? "Book Now"
                                : "Unavailable"}
                        </button>

                        <Link to={`/room/${_id}`} className="room-list-card-button room-list-card-button--secondary"> View Details</Link>

                        {showAdminActions && (
                            <>
                            <button className="room-list-card-button room-list-card--edit" onClick={handleEdit}> 
                                Edit 
                            </button>

                            <button className="room-list-card-button room-list-card-button--delete" onClick={handleDelete}>
                                Delete
                            </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

RoomListCard.propTypes = {
    room: PropTypes.shape({
        _id: PropTypes.string,
        roomNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        type: PropTypes.string,
        price: PropTypes.number,
        capacity: PropTypes.number,
        floor: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        status: PropTypes.string,
        images: PropTypes.array,
        amenities: PropTypes.array,
        rating: PropTypes.number,
        reviews: PropTypes.number,
        description: PropTypes.string,
    }).isRequired,
    
    onBook: PropTypes.func,
    onEdit: PropType.func,
    onDelete: PropTypes.func,
    onFavorite: PropTypes.func,
    isFavorite: PropTypes.bool,
    showAdminActions: PropTypes.bool,
};

export default RoomListCard;

