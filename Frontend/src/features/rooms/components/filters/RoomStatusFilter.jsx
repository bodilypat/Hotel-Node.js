//src/features/rooms/components/filters/RoomStatusFilter.jsx 

function RoomStatusFilter({ status, setStatus }) {
    return (
        <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2focus:ring-blue-500"
        >

            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
        </select>
    );
}

export default RoomStatusFilter;

