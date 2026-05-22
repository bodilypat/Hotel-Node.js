Fullstack-Hotel-Management-System/
├── frontend: HTML, CSS, JavaScript, React                            
│   ├── public/   
│   │   └── index.html
│   ├── src/   
│   │   ├── app/ 
│   │	│   ├── App.jsx
│   │	│   ├── main.jsx
│   │	│   ├── routes/
│   │	│   │   ├── AppRoutes.jsx
│   │	│   │   ├── ProtectedRoute.jsx
│   │   │   │   └── RoleBaseRoutes.jsx
│   │	│   ├── store/
│   │   │   │   └── index.js
│   │	│   ├── providers/
│   │	│   │   ├── ThemProvider.jsx
│   │	│   │   ├── AuthProvider.jsx
│   │   │   │   └── QueryProvider.jsx
│   │   │   └── layouts/
│   │	│       ├── DashboardLayout.jsx
│   │	│       ├── AuthLayout.jsx
│   │   │       └── MainLayout.jsx
│   │   ├── assets/
│   │	│   ├── images/
│   │	│   ├── icons/
│   │	│   ├── fonts/
│   │   │   └── styles/
│   │	│       ├── globals.css
│   │	│       ├── variables.css
│   │	│       ├── themes.css
│   │   │       └── animations.css
│   │   ├── shared/ 
│   │	│   ├── components/
│   │	│   │   ├── ui/
│   │	│   │   │   ├── Button.jsx
│   │	│   │   │   ├── Input.jsx 
│   │	│   │   │   ├── Select.jsx 
│   │	│   │   │   ├── Modal.jsx 
│   │	│   │   │   ├── Table.jsx 
│   │	│   │   │   ├── Card.jsx 
│   │	│   │   │   ├── Badge.jsx 
│   │	│   │   │   ├── Tooltip.jsx 
│   │	│   │   │   ├── Pagination.jsx
│   │   │   │   │   └── Skeleton.jsx
│   │	│   │   ├── feedback/
│   │	│   │   │   ├── Loader.jsx 
│   │	│   │   │   ├── EmptyState.jsx 
│   │	│   │   │   ├── ErrorMessage.jsx
│   │   │   │   │   └── NoData.jsx
│   │   │   │   └── navigation/
│   │	│   │       ├── Navbar.jsx 
│   │	│   │       ├── Sidebar.jsx 
│   │	│   │       ├── Footer.jsx
│   │   │   │       └── Breadcrumb.jsx
│   │	│   ├── hooks/
│   │	│   │   ├── useAuth.js
│   │	│   │   ├── useDebounce.js
│   │	│   │   ├── usePagination.js
│   │	│   │   ├── useModal.js
│   │   │   │   └── useLocalStorage.js
│   │	│   ├── services/
│   │	│   │   ├── api.js
│   │	│   │   ├── axiosInterceptor.js
│   │   │   │   └── socker.js
│   │	│   ├── utils/
│   │	│   │   ├── formatDate.js
│   │	│   │   ├── currencyFormater.js
│   │	│   │   ├── validatiors.js
│   │	│   │   ├── storage.js
│   │   │   │   └── permissions.js 
│   │	│   ├── constants/
│   │	│   │   ├── apiEndpoint.js
│   │	│   │   ├── roles.js
│   │   │   │   └── appConstants.js
│   │   │   └── config/
│   │   │       └── env.js
│   │   ├── features/                                      # Feature-based modules 
│   │	│   ├── auth/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Login.jsx
│   │	│   │   │   ├── Register.jsx
│   │   │   │   │   └── ForgotPassword.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── LoginForm.jsx
│   │   │   │   │   └── RegisterForm.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── authService.js
│   │	│   │   ├── store/
│   │   │   │   │   └── authSlice.jsx
│   │   │   │   └── utils/
│   │   │   │       └── authHelpers.js
│   │	│   ├── hotels/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Hotels.jsx
│   │   │   │   │   └── HotelDetails.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── HotelCard.jsx
│   │	│   │   │   ├── HotelForm.jsx
│   │   │   │   │   └── HotelGallery.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── hotelService.js
│   │   │   │   └── store/
│   │   │   │       └── hotelSlice.js
│   │	│   ├── rooms/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Rooms.jsx
│   │   │   │   │   └── RoomDetails.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── RoomCard.jsx
│   │	│   │   │   ├── RoomForm.jsx
│   │   │   │   │   └── RoomTable.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── roomService.js
│   │   │   │   └── store/
│   │   │   │       └── roomSlice.js
│   │	│   ├── bookings/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Bookings.jsx
│   │	│   │   │   ├── BookingDetails.jsx
│   │   │   │   │   └── CreateBooking.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── BookingCard.jsx
│   │	│   │   │   ├── BookingForm.jsx
│   │   │   │   │   └── BookingStatusBadge.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── bookingService.js
│   │   │   │   └── store/
│   │   │   │       └── bookingSlice.js
│   │	│   ├── customers/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Customers.jsx
│   │   │   │   │   └── CustomerProfile.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── CustomerTable.jsx
│   │   │   │   │   └── CustomerCard.jsx
│   │   │   │   └── services/
│   │   │   │       └── customerService.js
│   │	│   ├── payments/
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Payments.jsx
│   │   │   │   │   └── Invoice.jsx
│   │	│   │   ├── components/
│   │	│   │   │   ├── PaymentCard.jsx
│   │   │   │   │   └── PaymentTable.jsx
│   │   │   │   └── services/
│   │   │   │       └── paymentService.js
│   │	│   ├── reviews/
│   │	│   │   ├── components/
│   │	│   │   │   ├── ReviewCard.jsx
│   │   │   │   │   └── ReviewForm.jsx
│   │   │   │   └── services/
│   │   │   │       └── paymentService.js
│   │   │   └── admin/
│   │	│       ├── pages/
│   │	│       │   ├── AdminDashboard.jsx
│   │	│       │   ├── UserManagement.jsx
│   │	│       │   ├── HetelManagement.jsx
│   │   │       │   └── Reports.jsx
│   │	│       ├── components/
│   │	│       │   ├── StateCard.jsx
│   │   │       │   └── RevenueChart.jsx
│   │   │       └── services/
│   │   │           └── adminService.js
│   │   └── tests/
│   │	    ├── unit/
│   │	    ├── integration/
│   │       └── e2e/
│   ├── .env
│   ├── .env.examle 
│   ├── package.json 
│   ├── vite.config.js
│   └── README.md
│
├── backend(Node.js + express)                           
│   │     
│   ├── src/  
│   │  	├── config/                                      
│   │	│   ├── env.js
│   │	│   ├── database.js
│   │	│   ├── redis.js
│   │	│   ├── logger.js
│   │	│   ├── swagger.js
│   │	│   ├── cloudinary.js
│   │   │   └── security.js
│   │  	├── core/     
│   │	│   ├── middleware/
│   │	│   │   ├── auth.middleware.js
│   │	│   │   ├── role.middleware.js
│   │	│   │   ├── permission.middleware.js
│   │	│   │   ├── validate.middleware.js
│   │	│   │   ├── error.middleware.js
│   │	│   │   ├── upload.middleware.js
│   │	│   │   ├── rateLimit.middleware.js
│   │	│   │   ├── audit.middleware.js
│   │	│   │   ├── csrf.middleware.js
│   │	│   │   ├── sanitize.middleware.js
│   │   │   │   └── securityHeaders.middleware.js
│   │	│   ├── error/
│   │	│   │   ├── ApiError.js
│   │	│   │   ├── NotFoundError.js
│   │	│   │   ├── UnauthorizedError.js
│   │	│   │   ├── ForbiddenError.js
│   │   │   │   └── ValidationError.js
│   │	│   ├── utils/
│   │	│   │   ├── asyncHandler.js
│   │	│   │   ├── response.js
│   │	│   │   ├── pagination.js
│   │	│   │   ├── generateToken.js
│   │	│   │   ├── password.js 
│   │	│   │   ├── encryption.js
│   │	│   │   ├── date.js
│   │	│   │   ├── validation.js
│   │   │   │   └── constants.js
│   │	│   ├── services/
│   │	│   │   ├── email.service.js
│   │	│   │   ├── sms.service.js
│   │	│   │   ├── cache.service.js
│   │	│   │   ├── upload.service.js
│   │	│   │   ├── queue.service.js
│   │   │   │   └── auditLog.service.js
│   │   │   └── security/
│   │	│       ├── jwt.js
│   │	│       ├── refreshToken.js
│   │	│       ├── tokenBlacklist.js
│   │	│       ├── sessionManager.js
│   │	│       ├── permissions.js
│   │   │       └── roles.js
│   │  	├── modules/                                     
│   │	│   ├── auth/
│   │	│   │   ├── auth.routes.js
│   │	│   │   ├── auth.controller.js
│   │	│   │   ├── auth.service.js
│   │	│   │   ├── auth.repository.js
│   │	│   │   ├── auth.validation.js
│   │	│   │   ├── auth.constants.js
│   │	│   │   ├── auth.token.js
│   │   │   │   └── auth.events.js
│   │	│   ├── users/
│   │	│   │   ├── user.model.js
│   │	│   │   ├── user.routes.js
│   │	│   │   ├── user.controller.js
│   │	│   │   ├── user.service.js
│   │	│   │   ├── user.repository.js
│   │	│   │   ├── user.validation.js
│   │	│   │   ├── user.constants.js
│   │   │   │   └── user.permission.js
│   │	│   ├── hotels/
│   │	│   │   ├── hotel.model.js
│   │	│   │   ├── hotel.routes.js
│   │	│   │   ├── hotel.controller.js
│   │	│   │   ├── hotel.service.js
│   │	│   │   ├── hotel.repository.js
│   │	│   │   ├── hotel.validation.js
│   │   │   │   └── hotel.constants.js
│   │	│   ├── rooms/
│   │	│   │   ├── room.model.js
│   │	│   │   ├── room.routes.js
│   │	│   │   ├── room.controller.js
│   │	│   │   ├── room.service.js
│   │	│   │   ├── room.repository.js
│   │	│   │   ├── room.validation.js
│   │	│   │   ├── room.constants.js
│   │   │   │   └── availability.service.js
│   │	│   ├── bookings/
│   │	│   │   ├── booking.model.js
│   │	│   │   ├── booking.routes.js
│   │	│   │   ├── booking.controller.js
│   │	│   │   ├── booking.service.js
│   │	│   │   ├── booking.repository.js
│   │	│   │   ├── booking.validation.js
│   │	│   │   ├── booking.constants.js
│   │	│   │   ├── booking.scheduler.js
│   │   │   │   └── invoice.service.js
│   │	│   ├── payments/
│   │	│   │   ├── payment.model.js
│   │	│   │   ├── payment.routes.js
│   │	│   │   ├── payment.controller.js
│   │	│   │   ├── payment.service.js
│   │	│   │   ├── payment.repository.js
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
│   │	│   │       ├── bookingConfirmation.template.js
│   │	│   │       ├── paymentSuccess.template.js
│   │	│   │       ├── bookingCancelled.template.js
│   │	│   │       ├── reminder.template.js
│   │   │   │       └── invoice.template.js 
│   │	│   ├── dashboard/
│   │	│   │   ├── dashboard.routes.js
│   │	│   │   ├── dashboard.controller.js
│   │   │   │   └── dashboard.service.js
│   │   │   └── analytics/
│   │	│       ├── 
│   │	│       ├── 
│   │   │       └── 
│   │  	├── database/
│   │	│   ├── migrations/
│   │	│   │   ├── 001-create-users.collection.js
│   │	│   │   ├── 002-create-hotels.collection.js
│   │	│   │   ├── 003-create-rooms.collection.js
│   │	│   │   ├── 004-create-bookings.collection.js
│   │	│   │   ├── 005-create-payments.collection.js
│   │   │   │   └── migrate.js 
│   │	│   ├── seeders/
│   │	│   │   ├── data/
│   │	│   │   │   ├── users.data.js
│   │	│   │   │   ├── hotels.data.js
│   │	│   │   │   ├── rooms.data.js
│   │   │   │   │   └── bookings.data.js
│   │	│   │   ├── helpers/
│   │	│   │   │   ├── clearCollections.js
│   │	│   │   │   ├── hashPasssword.js 
│   │	│   │   │   ├── random.js
│   │   │   │   │   └── logger.js
│   │	│   │   ├── users.seeder.js
│   │	│   │   ├── hotels.seeder.js
│   │	│   │   ├── rooms.seeder.js
│   │	│   │   ├── booking.seeder.js
│   │	│   │   ├── payment.seeder.js
│   │	│   │   ├── reviews.seeder.js
│   │	│   │   ├── runSeeders.js
│   │	│   │   ├── rollbackSeeders.js
│   │   │   │   └── seed.js 
│   │	│   ├── factories/
│   │	│   │   ├── user.factory.js
│   │	│   │   ├── hotel.factory.js
│   │	│   │   ├── room.factory.js
│   │   │   │   └── booking.factory.js 
│   │	│   ├── indexes/
│   │	│   │   ├── booking.index.js
│   │	│   │   ├── hotel.index.js
│   │	│   │   ├── payment.index.js
│   │   │   │   └── user.index.js 
│   │   │   └── transactions/
│   │	│       ├── booking.transaction.js
│   │	│       ├── payment.transaction.js
│   │   │       └── refund.transaction.js 
│   │  	├── jobs/
│   │	│   ├── cancelExpiredBooking.job.js
│   │	│   ├── sendReminderEmails.job.js
│   │	│   ├── generateReports.job.js
│   │	│   ├── cleanupUpload.job.js
│   │   │   └── paymentVerification.job.js
│   │  	├── websocket/
│   │	│   ├── socket.js
│   │   │   └── booking.socket.js
│   │  	├── docs/
│   │	│   ├── swagger.yaml
│   │   │   └── postman/
│   │  	├── routes/
│   │	│   ├── index.js
│   │   │   └── v1/
│   │  	├── app.js
│   │  	└── server.js
│   │        
│   ├── uploads/ 
│   ├── logs/                                         
│   ├── tests/
│   │  	├── unit/
│   │  	├── integration/
│   │  	├── e2e
│   │  	├── performance/
│   │  	└── security/
│   ├── .env 
│   ├── .env.example                                         
│   ├── .dockerignore
│   ├── gitignore 
│   ├── Dockerfile                                    
│   ├── docker-compose.yml
│   ├── package.json
│   └── README.md                                    
│  
├── infrastructure/ 
│   ├── nginx/ 
│   ├── github-actions                                
│   ├── kubernetes/
│   ├── terraform/
│   └── monitoring/              
├── scripts/                              
│   ├── setup.sh
│   ├── deplay.sh
│   └── backup.sh
├── .gitignore
├── docker-compose.yml
├── LICENS
└── README.md
