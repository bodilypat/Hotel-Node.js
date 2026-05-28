//src/features/rooms/components/filters/RoomPriceFilter.jsx 

function RoomPriceFilter({ priceRange, setPriceRange }) {
    const handleChange = (key, value) => {
        setPriceRange({
            ...priceRange,
            [key]: value
        });
    };

    return (
        <div className="flex items-center gap-2">
            <input 
                type="number"
                value={priceRange.min}
                onChange={(e) => handleChange("min", e.target.value)}
                placeholder="Min $"
                className="w-24 px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus: ring-blue-500"
            />

            <span className="text-gray-500">-</span>

            <input 
                type="number"
                value={(e) => handleChange("max", e.target.value)}
                placeholder="MAx $"
                className="w-24 px-2 py-2 border rounded-lg focus:outline-none focus:ring-blue-500"
            />
        </div>
    );
}

export default RoomPriceFilter;

