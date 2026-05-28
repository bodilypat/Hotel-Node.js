//src/features/rooms/components/tables/RoomTableAction.jsx
import {
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

function ToomtableAction({
    room,
    onEdit,
    onDelete,
    onView, 
}) {
    return(
        <div className="flex items-center gap-2">
            <button 
                type="button"
                onClick={() => onView?.(room)}
                className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                arid-label={`View ${room.name}`}
            >
                <Eye size={18} />
            </button>

            <button 
                type="button"
                onClick={() => onEdit?.(room)}
                className="rounded-lg p-2 text-green-600 transition hover:bg-green-50"
                aria-label={`Edit ${room.name}`}
            >
                <Pencil size={18} />
            </button>

            <button 
                type="button"
                onClick={() => onDelete?.(room)}
                className="rounded-lg p-2 text-read-600 transition hover:bg-red-50"
                aria-label={`Delete ${room.name}`}
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}

export default RoomTableAction;

