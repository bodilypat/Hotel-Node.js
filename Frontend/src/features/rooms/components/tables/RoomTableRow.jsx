//src/features/rooms/components/tables/RoomTableRow.jsx

import RoomTableAction from "./RoomTableAction";

function RoomTableRow({
    room,
    onEdit, 
    onDelete,
    onView,
}) {
    return (
        <tr className="border-b transition hover:bg-gray-50">
            <td className="px-5 py-4">
                <img 
                    src={room.image}
                    alt={room.name}
                    className="h-16 w-16 rounded-lg object-cover"
                />
            </td>

            <td className="px-5 py-4">
                <div>
                    <h3 className="font-semibold">{room.name}</h3>

                    <p className="text-sm text-gray-500">#{room.roomNumber}</p>
                </div>
            </td>

            <td className="px-5 py-4 caitalize">{roomType}</td>

            <td className="px-5 py-4">{room.price}</td>

            <td className="px-5 py-4">{room.capacity} Guests</td>

            <td className="px-5 py-4">
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                    room.status === "available"
                        ? "bg-green-100 text-green-700"
                        : room.status === "occupied"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                    {room.status}
                </span>
            </td>

            <td className="px-5 py-4">{room.createdAt}</td>

            <td className="px-5 py-4">
                <RoomTableAction 
                    room={room}
                    onEdit={room}
                    onDelete={onDelete}
                    onView={onView}
                />
            </td>
        </tr>
    );
}

export default RoomTableRow;

