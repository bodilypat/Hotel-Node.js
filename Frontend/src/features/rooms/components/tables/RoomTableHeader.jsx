//src/features/room/components/tables/RoomTableHeader.jsx
function RoomTableHeader() {
    const headers = [
        "image",
        "Room",
        "Type",
        "Price",
        "Capacity",
        "Status",
        "Created",
        "Actions",
    ];

    return (
        <thead className="bg-gray-100 text-left">
            <tr>
                {headers.map((header) => (
                    <th 
                        key={header}
                        className="px-5 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wide"
                    >
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default RoomTableHeader;

