//src/features/rooms/components/tables/RoomTable.jsx
import RoomTableHeader from "./RoomTableHeader";
import RoomTableRow from "./RoomTableRow";

function RoomTable({
    rooms = [],
    onEdit,
    onDelete,
    OnView,
}) {
    const hasRooms = rooms.length > 0;

    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full border-collapse">
                <RoomTableHeader />
                <tbody>
                    {hasRooms ? (
                        rooms.map((room) => (
                            <RoomTableRow 
                                key={room.id}
                                room={room}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onView={onView}
                            />
                        ))
                    ) : (
                        <tr>
                            <td 
                                colSpan={8}
                                className="py-10 text-center text-gray-500"
                            >
                                No rooms found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RoomTable;

