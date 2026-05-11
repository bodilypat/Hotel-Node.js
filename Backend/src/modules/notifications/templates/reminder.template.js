//src/modules/notifications/templates/reminder.template.js 
const reminderTemplate = ({
    name,
    checkInDate,
}) => {
    return `
        <div>
            <h2>Booking Reminder</h2>
            
            <p>Hello ${name},</p>
            
            <p>This is a reminder for your upcomming stay.</p>
            
            <p>Check-In Date: ${checkInDate}</p>
        </div>
    `;
};

export default  reminderTemplate;

