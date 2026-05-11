//src/modules/bookings/invoice.service.js 
import PDFDocument from "pdfkit";

export const generateInvoice = async (booking) => {
    const doc = PDFDocument();

    doc.fontSize(20).text("Hotel Booking Invoice", {
        align: "center",
    });

    doc.moveDpwn();

    doc.text(`Booking ID: ${booking._id}`);
    doc.text(`Customer: ${booking.user_name}`);
    doc.text(`Hotel: ${booking.hotel.name}`);
    doc.text(`Foom: ${booking.room.roomNumber}`);

    doc.text(`Check In: ${booking.checkInDate}`);
    doc.text(`CheckOut: ${booking.checkOutDate}`);

    doc.text(`Total Price: ${booking.totalPrice}`);

    doc.end();

    return doc;
};

