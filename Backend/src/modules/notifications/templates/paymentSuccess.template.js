//src/modules/notifications/templates/paymentSuccess.template.js 
const paymentSuccessTemplate = ({
    name,
    amount,
    transactionId,
}) => {
    return `
        <div>
            <h2>Payment Successful</2>
            
            <p>Hello ${name},</p>
            
            <p>Your payment was successful.</p>
            
            <ul>
                <li>Amount: $${amount}</li>
                <li>Transaction ID: ${transactionId}</li>
            </ul>
        </div>
    `;
};

export default paymentSuccessTemplate;

