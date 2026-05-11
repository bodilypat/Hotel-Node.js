//src/modules/notifications/templates/invoice.template.js 
const invoiceTemplate = ({
    name,
    invoiceId,
    amount,
}) => {
    return `
        <div>
            <h2>Invoice</h2>
            
            <p>Hello ${name},</p>
            
            <p>Your invoice has been generated.</p>
            
            <ul>
                <li>Invoice Id: ${invoiced}</li>
                <li>Total Amount: ${amount}</li>
            </ul>
        `;
};

export default invoiceTemplate;

