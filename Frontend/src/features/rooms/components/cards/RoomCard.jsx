//src/features/rooms/components/cards/RoomCard.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./room-card.css";

function RoomCard({
    room,
    onBank,
    onEdit,
    onDelete,
    showAction = true,
}) {
    const {
        _id,
        roomNumber,
        type,
        price,
        status,
        image,
        amenities = [],
        description,
    } = room;

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

    return (
        <div className="room-card">
            {/* Image */}
            <div className="room-card__image-wrapper">
                <image  
                    src={
                        image ||
                            "https://psb-hotel.com/assets/images/"
                    }
                />

                <span className={`room-card-status room-card-status--${status?.toLowerCase()}`}> {status} </span>
            </div>

            {/* Content */}
            <div className="room-card-content">
                <div className="room-card-header">
                    <h3 className="room-card-title">
                        Room #{roomNumber}
                    </h3>

                    <p className="room-card-type"> {type} </p>
                </div>

                <p className="room-card-description"> {description?.slice(0, 100) || "Luxury hotel room"} </p>

                {/* Details */}
                <div className="room-card-details">
                    <div className="room-card-detail">
                        <span>Guest: </span>
                        <strong>{capacity}</strong>
                    </div>

                    <div className="room-card-detail">
                        <span>Price: </span>
                        <strong>${price}/night</strong>
                    </div>
                </div>
                {/* Amenities */}
                <div className="room-card-amenities">
                    {amenities.slice(0,4).map((item, index) => (
                        <span key={inex} className="room-card-amenity">{item}</span>
                    ))}
                </div>

                {/* Action */}
                {showActions && (
                    <div className="room-card-actions">
                        <button className="room-card-button room-card-button-primary" onClick={handleBook}> Book Now </button>

                        <Link to={`/dashboard/rooms/${_id}`} className="room-card-button room-card-button-secondary"> Details </Link>

                        <button className="room-card-button room-card-button-edit" onClick={handleEdit}> Edit </button>

                        <button class="room-card-button room-card-button-delete" onClick={handleDelete}> Delete </button>
                    </div>
                )}
            </div>
        </div>
    );
}


RoomCard.propTypes = {
    room: PropTypes.shape({
        _id: PropTypes.string,
        roomNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),

        type: PropTypes.string,
        price: PropTypes.number,
        capacity: PropTypes.number,
        status: PropTypes.string,
        image: PropTypes.string,
        amenities: PropTypes.array,
        description: PropTypes.string,
    }).isRequired,

    onBook: PropTypes.func,
    onEdit: Proptype.func,
    onDelete: PropTypes.func,
    showActions: PropTypes.bool,
};

export default RoomCard;