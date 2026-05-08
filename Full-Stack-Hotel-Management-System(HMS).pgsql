Fullstack-Hotel-Management-System/
├── frontend: HTML, CSS, JavaScript                            
│   ├── public/   
│   │   └── index.html
│   ├── src/   
│   │   ├── assets/ 
│   │	│   ├── images/
│   │	│   ├── icons/
│   │   │   └── fonts/
│   │   ├── components/
│   │	│   ├── layout/
│   │	│   │   ├── Navbar.jsx
│   │	│   │   ├── Sidebar.jsx
│   │	│   │   ├── Footer.jsx
│   │   │   │   └── DashboardLayout.jsx
│   │	│   ├── ui/
│   │	│   │   ├── Button.jsx
│   │	│   │   ├── Card.jsx
│   │	│   │   ├── Modal.jsx
│   │	│   │   ├── Input.jsx
│   │   │   │   └── Table.jsx
│   │   │   └── common/
│   │	│       ├── Loader.jsx
│   │	│       ├── ErrorMessage.jsx
│   │   │       └── ProtectedRoute.jsx
│   │   ├── features/                                      # Feature-based modules 
│   │	│   ├── auth/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │	│   │   ├── components/
│   │   │   │   │   └── LoginForm.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── authService.js
│   │	│   │   ├── context/
│   │   │   │   │   └── authContext.jsx
│   │   │   │   └── utils/
│   │   │   │       └── authHelpers.js
│   │	│   ├── rooms/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Rooms.jsx
│   │   │   │   │   └── RoomDetails.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── RoomCard.jsx
│   │	│   │   │   ├── RoomForm.jsx
│   │   │   │   │   └── RoomTable.jsx
│   │   │   │   └── services/
│   │   │   │       └── roomService.js
│   │	│   ├── bookings/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Booking.jsx
│   │   │   │   │   └── BookingForm.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── BookingCard.jsx
│   │   │   │   │   └── BookingForm.jsx
│   │   │   │   └── services/
│   │   │   │       └── bookingService.js
│   │	│   ├── customers/
│   │	│   │   ├── pages/
│   │   │   │   │   └── Customers.jsx
│   │	│   │   ├── components/
│   │   │   │   │   └── CustomerTable.jsx
│   │   │   │   └── services/
│   │   │   │       └── customerService.js
│   │	│   ├── payments/
│   │	│   │   ├── pages/
│   │   │   │   │   └── Payments.jsx
│   │	│   │   ├── components/
│   │   │   │   │   └── PaymentCard.jsx
│   │   │   │   └── services/
│   │   │   │       └── paymentService.js
│   │	│   ├── admin/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── AdminDashboard.jsx
│   │   │   │   │   └── Managements.jsx
│   │   │   │   └── services/
│   │   │   │       └── adminService.js
│   │   │   └── Unauthorized.jsx
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx                              
│   │   ├── services/                                    
│   │	│   ├── api.js
│   │   │   └── axiosInterceptor.js
│   │   ├── hooks/                                       # Custom hooks
│   │	│   ├── useAuth.js
│   │	│   ├── useFetch.js
│   │   │   └── useDebounce.js
│   │   ├── store/                                       
│   │   │   └── index.js
│   │   ├── context/                                       
│   │   │   └── ThemeContext.jsx
│   │   ├── styles/                                      # Global styles only
│   │	│   ├── globals.css
│   │	│   ├── variables.css
│   │   │   └── dashboard.css
│   │   ├── constants/                                    
│   │	│   ├── roles.js
│   │   │   └── apiEndpoint.js
│   │   ├── utils/    
│   │	│   ├── formatDate.js
│   │	│   ├── currencyFormatter.js
│   │   │   └── validators.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── 
│
├── backend/                              
│   │     
│   ├── src/  
│   │  	├── config/                                      
│   │	│   ├── env.js
│   │	│   ├── db.js
│   │	│   ├── redis.js
│   │	│   ├── logger.js
│   │	│   ├── swagger.js
│   │   │   └── cloudinary.js
│   │  	├── core/     
│   │	│   ├── middleware/
│   │	│   │   ├── auth.middleware.js
│   │	│   │   ├── role.middleware.js
│   │	│   │   ├── validate.middleware.js
│   │	│   │   ├── error.middleware.js
│   │	│   │   ├── upload.middleware.js
│   │	│   │   ├── rateLimit.middleware.js
│   │   │   │   └── audit.middleware.js
│   │	│   ├── error/
│   │	│   │   ├── ApiError.js
│   │	│   │   ├── NotFoundError.js
│   │	│   │   ├── UnauthorizedError.js
│   │   │   │   └── ValidationError.js
│   │	│   ├── utils/
│   │	│   │   ├── asyncHandler.js
│   │	│   │   ├── response.js
│   │	│   │   ├── pagination.js
│   │	│   │   ├── generateToken.js
│   │	│   │   ├── password.js 
│   │	│   │   ├── date.js
│   │   │   │   └── constants.js
│   │   │   └── services/
│   │	│       ├── email.service.js
│   │	│       ├── sms.service.js
│   │	│       ├── cache.service.js
│   │	│       ├── upload.service.js
│   │   │       └── queue.service.js
│   │  	├── modules/                                     # Feature-based modules (BEST PRACTICE)
│   │	│   ├── auth/
│   │	│   │   ├── auth.routes.js
│   │	│   │   ├── auth.controller.js
│   │	│   │   ├── auth.service.js
│   │	│   │   ├── auth.respository.js
│   │	│   │   ├── auth.validation.js
│   │	│   │   ├── auth.constants.js
│   │   │   │   └── auth.token.js
│   │	│   ├── users/
│   │	│   │   ├── user.model.js
│   │	│   │   ├── user.routes.js
│   │	│   │   ├── user.controller.js
│   │	│   │   ├── user.service.js
│   │	│   │   ├── user.respository.js
│   │	│   │   ├── user.validation.js
│   │   │   │   └── user.constants.js
│   │	│   ├── hotels/
│   │	│   │   ├── hotel.model.js
│   │	│   │   ├── hotel.routes.js
│   │	│   │   ├── hotel.controller.js
│   │	│   │   ├── hotel.service.js
│   │	│   │   ├── hotel.respository.js
│   │	│   │   ├── hotel.validation.js
│   │   │   │   └── hotel.constants.js
│   │	│   ├── rooms/
│   │	│   │   ├── room.model.js
│   │	│   │   ├── room.routes.js
│   │	│   │   ├── room.controller.js
│   │	│   │   ├── room.service.js
│   │	│   │   ├── room.respository.js
│   │	│   │   ├── room.validation.js
│   │	│   │   ├── room.constants.js
│   │   │   │   └── availability.service.js
│   │	│   ├── bookings/
│   │	│   │   ├── booking.model.js
│   │	│   │   ├── booking.routes.js
│   │	│   │   ├── booking.controller.js
│   │	│   │   ├── booking.services.js
│   │	│   │   ├── booking.respository.js
│   │	│   │   ├── booking.validation.js
│   │	│   │   ├── booking.constants.js
│   │	│   │   ├── booking.scheduler.js
│   │   │   │   └── invoice.service.js
│   │	│   ├── payments/
│   │	│   │   ├── payment.model.js
│   │	│   │   ├── payment.routes.js
│   │	│   │   ├── payment.controller.js
│   │	│   │   ├── payment.service.js
│   │	│   │   ├── payment.respository.js
│   │   │   │   └── stripe.service.js
│   │	│   ├── reviews/
│   │	│   │   ├── review.model.js
│   │	│   │   ├── review.routes.js
│   │	│   │   ├── review.controller.js
│   │	│   │   ├── review.service.js
│   │   │   │   └── review.validation.js
│   │	│   ├── notifications/
│   │	│   │   ├── notification.service.js
│   │	│   │   ├── notification.queue.js
│   │   │   │   └── templates/
│   │   │   └── dashboard/
│   │	│       ├── dashboard.routes.js
│   │	│       ├── dashboard.controller.js
│   │   │       └── dashboard.service.js
│   │  	├── database/
│   │	│   ├── migrations/
│   │	│   ├── seeders/
│   │	│   ├── factories/
│   │   │   └── indexes/
│   │  	├── jobs/
│   │	│   ├── cancelExpiredBooking.job.js
│   │	│   ├── sendReminderEmails.job.js
│   │	│   ├── generateReports.jbo.js
│   │   │   └── CleanupUploads.job.js
│   │  	├── docs/
│   │   │   └── swagger.yaml
│   │  	├── routes/
│   │   │   └── index.js
│   │  	├── app.js
│   │  	└── server.js
│   │        
│   ├── uploads/                                          
│   ├── tests/
│   │  	├── unit/
│   │  	├── integration/
│   │  	└── e2e/
│   └── server.js                                       
│   
├── .env
├── .env.example
├── .gitignore
├── package.json
├── docker-compose.yml
└── README.md
