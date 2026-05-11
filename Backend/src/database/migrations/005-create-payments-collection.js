//src/database/migrations/005-create-payments-collection.js
module.exports = {
    async up(db) {
        const paymentsCollection = await db.createCollection("payment");

        await paymentsCollection.createIndexes([
            {
                key: { bookingId: 1 },
                name: "booking_payment_index",
            },
            {
                key: { userId: 1 },
                name: "user_payment_index",
            },
            {
                key: { transactionId: 1 },
                unique: true,
                name: "unique_transaction_index"
            },
            {
                key: { satus: 1},
                name: "payment_status_index",
            },
            {
                key: { paymentMethod: 1 },
                name: "payment_created_index",
            },
        ]);

        console.log("Paymens collection created");
    },
    
    async down(db) {
        await db.collection("payments").drop();
        console.log("Payment collection dropped");
    },
};

