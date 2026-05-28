//src/features/rooms/components/filters/RoomTypeFilter.jsx
function  RoomTypeFilter({ type, setType }) {
    return (
        <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500"
        >
            <option value="">All Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="delux">Deluxe</option>
        </select>
    );
}

export default RoomTypeFilter;

