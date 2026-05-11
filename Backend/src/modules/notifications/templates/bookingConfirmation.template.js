//src/modules/notifications/templates/bookingConfirmation.template.js 
const bookingConfirmationTemplate = ({
    name,
    bookingId,
    checkInDate,
    checkOutDate,
}) => {
    return `
        <div>
            <h2>Booking Confirmation</h2>
            
            <p>Hello ${name},</p>
            
            <p>Your booking has been confirmed.</p>
            
            <ul>
                <li>Booking ID: ${bookingId}</li>
                <li>Check-In: ${checkInDate}</li>
                <li>Check-Out: ${checkOutDate}</li>
            </ul>
            
            <p>We look forward to hosting you.</p>
        </div>
    `;
};

export default bookingConfirmationTemplate;

