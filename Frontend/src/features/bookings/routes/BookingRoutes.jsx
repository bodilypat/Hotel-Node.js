//src/features/bookings/routes/BookingRoutes.jsx
import { Routes, Route } from "react-router-dom";

import Bookings from "../features/bookings/pages/Bookings";
import CreateBooking from "../features/bookings/pages/CreateBooking";
import EditBooking from "../features/bookings/pages/EditBooking";
import BookingDetails from "../features/bookings/pages/BookingDetails";

<Routes>
    <Route path="/bookings" element={<Bookings />} />
    <Route path="/bookings/create" element={<CreateBooking />} />
    <Route path="/bookings/:id" element={<BookingDetails />} />
    <Route path="/bookings/edit/:id" element={<EditBooking />} />
</Routes>
