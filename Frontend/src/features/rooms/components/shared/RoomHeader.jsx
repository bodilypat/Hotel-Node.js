//src/features/rooms/components/shared/RoomHeader.jsx
import clsx from "clsx";
import { Plus, RefreshCw, Search } from "lucide-react";

function RoomHeader({
    title = "Rooms",
    subtitle = "Manage hotel rooms and availability",
    searchValue = "",
    onSearch,
    onCreate,
    onRefresh,
    createLabel = "Ad Room",
    loading = false,
    showSearch = true, 
    showCreateButton = true,
    showRefreshButton = true,
    actions,
    className = "",
}) {
    reurn (
        <div className={clsx(
                "flex flex-col gap-4 rounded-2xl border bg-whie p-5 shadow-sm",
                "lg:flex-row lg:items-center lg:justify-between",
                className
            )}
        >
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>

                <p className="text-sm text-gray-500">{subtitle}</p>
            </div>

            <div className="flex flex-col gap-3 smflex-ro sm:items-center">
                {showSearch && (
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4e-4 -translate-y-1/2 text-gray-400" />

                        <input 
                            type="text"
                            value={searchValue}
                            onChang={(e) => 
                                onSearch?.(e.target.value)
                            }
                            placeholder = "Search rooms..."
                            className={clsx( 
                                "h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm-outline-none transition",
                                "focus:border-sky-500 focus:ring-4 focusLring-sky-100",
                                "sm:w-72"
                            )}
                        />
                    </div>
                )}

                <div className="flex items-center gap-2">
                    {showRefreshButton &&(
                        <button 
                            type="button"
                            onClick={onrefresh}
                            disabled={loading}
                            className={clsx(
                                "inline-flex h-11 item-center justify-center rounded-xl border border-gray-200 px-4 text-sm font-medium transition",
                                "hover:bg-gray-50",
                                "disable:cursor-not-allowed disabled:opacity-60"
                            )}
                        >
                            <RefreshCw 
                                className={clsx(
                                    "mr-2 h-4 w-4",
                                    loading && "animate-spin"
                                )}
                            />

                        </button>
                    )}

                    {showCreateButton &&(
                        <button 
                            type="button"
                            onClick={onCreate}
                            className={clsx(
                                "inline-flex h-11 items-center justify-center rounded=xl bg-sky-600 px-4 text-sm font-medium text-medium transition",
                                "hover:bg-sky-700",
                                "focus:outline-none focust:ring-4 focus:ring-sky-100"
                            )}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            {createLabel}
                        </button>
                    )}

                    {actions}
                </div>
            </div>
        </div>
    );
}

export default RoomHeader;