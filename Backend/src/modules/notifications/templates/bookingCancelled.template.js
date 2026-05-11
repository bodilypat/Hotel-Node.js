//src/modules/notifications/templates/bookingCancelled.template.js 
const bookingCancelledTemplate = ({
    name,
    bookingId,
}) => {
    return `
        <div>
            <h2>Booking Cancelled</h2>
            
            <p>Hello ${name},</p>
            
            <p>Your booking has been cancelled.</p>
            
            <p>Booking ID: ${bookingId}</p>
        </div>
    `;
};

export default bookingCancelledTemplate;

