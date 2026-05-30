//src/features/rooms/components/shared/RoomErrorState.jsx
import clsx from "clsx";
import {
    AlertTriangle,
    RefreshCw,
    WifiOff,
    ServerCrash,
    ShieldAlert,
} from "lucide-react";

const ERROR_VARIANTS = {
    default: {
        icon: AlertTriangle,
        title: "Something went wrong",
        description:
            "An unexpected error occurred while loading room information.",
        iconClass:
            "bg-amber-100 text-amber-600 border border-amber-200",
    },

    network: {
        icon: WifiOff,
        title: "Connection Error",
        description:
            "unable to connect to the server. Check your internet connection and try-again.",
        iconClass:
            "bg-skey-100 text-sky-600 border border-sky-200",
    },

    server: {
        icon: ServerCrash,
        title: "Server Error",
        description:
            "The server encounted an error while processing your request.",
        iconClass:
            "bg-rose-100 text-rose-600 border border-rose-200",
    },

    permission: {
        icon: ShieldAlert,
        title: "Access Denied",
        description: 
            "You do not have permission to view or manage this room.",
        iconClass:
            "bg-violet-100 text-violet-600 border border-violet-200",
    },
};

function RoomErrorState({
    variant = "default",
    title,
    description,
    error,
    onRetry,
    retryLabel = "Try Again",
    showRetry = true,
    fullHeight = false,
    className = "",
}) {
    const selectedVariant =
        ERROR_VARIANTS[variant] ||
        ERROR_VARIANTS.default;

        const Icon = selectedVariant.icon;

        return (
            <div 
                className={clsx(
                    "flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center",
                    fullHeight && "min-h-[400px]",
                    className 
                )}
            >

                <div 
                    className={clsx(
                        "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl",
                        selectedVariant.iconClass 
                    )}
                >
                    <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">{title || selectedVariant.title}</h3>

                <p className="mt max-w-lg text-sm text-gray-500">
                    {description || selectedVariant.description}
                </p>

                {error?.message && (
                    <div className="mt-4 max-w-xl rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-left">
                        <p className="text-xs font-medium uppercase tracking-wide text-rose-600">Error Detail</p>

                        <p className="mt-1 break-words text-sm text-rose-700">{error.message}</p>
                    </div>
                )}

                {showRetry && onRetry && (
                    <button 
                        type="button"
                        onClick={onRetry}
                        className={clsx(
                            "mt-6 inline-flex items-center gap-2 rounded-xl",
                            "bg-sky-600 px-4 py-2.5 text-sm font-medium text-white",
                            "transition hover:bg-sky-700",
                            "focus:outline-none focus:ring-4 focus:ring-sky-100"
                        )}
                    >
                        <RefreshCw className="h-4 w-4" />
                        {retryLabel}
                    </button>
                )}
            </div>
        );
}

export default RoomErrorState;

