//src/features/rooms/components/filters/RoomFilters.jsx 
import RoomSearchFilter from "./RoomSearchFilter";
import RoomStatusFilter from "./RoomStatusFilter";
import RoomTypeFilter from ".RoomTypeFilter";
import RoomPriceFilter from "./RoomPriceFilter";

function RoomFilters({
    search,
    setSearch,
    status,
    setStatus,
    type,
    setType,
    priceRange,
    setPriceRange,
}) {
    return (
        <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-xl shadow">
            <RoomSearchFilters
                search={search}
                setSearch={setSearch}
            />

            <RoomStatusFilter 
                status={status}
                setStatus={setStatus}
            />

            <RoomTypeFilter
                type={type}
                setType={setType}
            />

            <RoomPriceFilter 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        </div>
    );
}

export default RoomFilter;

