//src/features/payments/components/PaymentTimeline.jsx 
import PropTypes from "prop-types";
import { formatDate } from "../../../shared/utils/formatDate";
import PaymentStatusBadge from "./PaymentStatusBadge";

const PaymentTimeline = ({
    events = [],
    title = "Payment Timeline",
    emptyMessage = "no payment activity available.",
}) => {
    if (events.length === 0) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    {title}
                </h3>

                <div className="rounded-lg border border-dashed border-gray-300 py-10 text-gray-500">
                    {emptyMessage}
                </div>
            </div>            
        );
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-gray-800">{title}</h3>

            <div className="relative">

                {/* Timeline line */}
                <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200" />

                <div className="space-y-6">
                    {events.map((event, index) => (
                        <div 
                            key={event.id ?? index}
                            className="relative flex gap-4"
                        >

                        {/* Timeline Dot */}
                        <div className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-500 bg-white">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                        </div>

                        {/* Event Content */}
                        <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50 p-4">
                            <div className="flex flex-col gap-2 md:flex-row md:item-center md:justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-800">{event.title}</h4>

                                    {event.description && (
                                        <p className="mt-1 text-sm text-gray-600">
                                            {event.description}
                                        </p>
                                    )}
                                </div>

                                {event.status && (
                                    <PaymentStatusBadge status={event.status} />
                                )}
                            </div>

                            <div className="mt-3 flex flex-wrap gap-6 text-sm text-gray-500">
                                {event.date && (
                                    <span>
                                        <strong>Date:</strong>{" "}
                                        {formatDate(event.date)}
                                    </span>
                                )}

                                {event.user && (
                                    <span>
                                        <strong>By:</strong> {event.user}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PaymentTimeline.propTypes = {
    title: PropTyeps.string,
    emptyMessage: PropTypes.string,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            title: PropTypes.string.isrequired,
            description: PropTypes.string,
            status: PropTypes.string,
            date: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.instanceOf(Date),
            ]),
            user: PropTypes.string,
        })
    ),
};

export default PaymentTimeline;
