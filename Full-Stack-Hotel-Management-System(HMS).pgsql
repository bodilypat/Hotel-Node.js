Full-stack-Hotel-Management-System/
├── backend/   (Node.js + Express.js)                           
│   │      
│   ├── src/    
│   │   ├── app.js                                    # Express app setup
│   │   ├── server.js                                 # Entry point
│   │   ├── config/                                        
│   │   │  	├── db.js
│   │   │  	└── env.js
│   │   │ 
│   │   ├── routes/                                   # API routes
│   │   │	├── index.js
│   │   │	├── auth.routes.js   
│   │   │	├── room.routes.js  
│   │   │   ├── booking.routes.js
│   │   │   └── guest.routes.js
│   │   │ 
│   │   ├── controllers/  
│   │   │	├── auth.controller.js 
│   │   │	├── room.controller.js   
│   │   │   ├── booking.controller.js
│   │   │   └── guest.controller.js
│   │   │
│   │   ├── services/                                # Business logic
│   │   │	├── auth.service.js
│   │   │	├── room.service.js   
│   │   │	├── booking.service.js  
│   │   │   └── guest.service.js
│   │   │
│   │   ├── models/  
│   │   │	├── User.js
│   │   │	├── Room.js   
│   │   │	├── Booking.js
│   │   │   └── Guestuest.js
│   │   │
│   │   ├── middleware/  
│   │   │	├── auth.middleware.js
│   │   │	├── error.Middleware.js
│   │   │   └── validate.middleware.js
│   │   │  
│   │   ├── utils/  
│   │   │   └── logger.js
│   │   │ 
│   │   └── constants/
│   │   	└── roles.js
│   ├── tests/
│   ├── .env
│   ├── package.json
│   └── README.md           
│  
├── frontend/                             
│   ├── public/                                              # Use for Static files, images that don't change SEO/meta setup
│   │   ├── index.html                                       # Main Entry
│   │   ├── manifest.json                                    # Used for PWA(Progressive Web App) support
│   │   ├── robots.txt                                       # Control search engine crawing
│   │   ├── favicon.ico                                      # Browser tab icon
│   │   └── assets/                                          # ONLY static, non-imported assets
│   │   	├── images/                                      # Branding & UI
│   │	    │   ├── hotel.jpg      
│   │	    │   ├── room1.jpg
│   │       │   └── room2.jpg  
│   │   	└── icons/                                       # Used for sidebar/navigation
│   │	        ├── dashboard.svg        
│   │	        ├── room.svg
│   │           └── booking.svg   
│   ├── src/    
│   │	├── app/                                             # App-level setup
│   │   │	├── App.jsx                                      # Branding & UI
│   │   │	├── main.jsx    
│   │   │	└── providers/                                   # Global providers   
│   │	│       ├── AuthProvider.jsx
│   │   │       └── QueryProvider.jsx  
│   │	├── routes/                                         
│   │   │	├── AppRoutes.jsx                                      
│   │   │	├── ProtectedRoute.jsx    
│   │   │	└── routeConfig.js                               # Centralized route definitions 
│   │   │
│   │	├── features  /                                      # Feature-based architecture 
│   │	│   ├── auth/     
│   │	│   │   ├── pages/
│   │   │   │   │   └── Login.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── authService.js
│   │	│   │   ├── hooks/
│   │   │   │   │   └── useAuth.js
│   │   │   │   └── context/
│   │   │   │       └── AuthContext.jsx   
│   │	│   ├── rooms/
│   │	│   │   ├── components/
│   │   │   │   │   └── RoomCard.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── RoomService.js
│   │   │   │   └── pages/
│   │   │   │       └── Rooms.jsx 
│   │	│   ├── bookings/
│   │	│   │   ├── components/
│   │   │   │   │   └── BookingForm.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── reservationService.js
│   │   │   │   └── pages/
│   │   │   │       └── Reservations.jsx   
│   │	│   ├── guests/
│   │	│   │   ├── components/
│   │   │   │   │   └── CustomerCard.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── guestService.js
│   │   │   │   └── pages/ 
│   │   │   │       └── Guests.jsx 
│   │	│   ├── payments/      
│   │   │   │   └── pages/  
│   │   │   │       └── Payments.jsx 
│   │   │   └── dashboard/  
│   │   │       └── context/
│   │   │           └── Dashboard.jsx
│   │   │ 
│   │	├── shared/                                          # Reusable acros features
│   │	│   ├── components/    
│   │	│   │   ├── ui/
│   │	│   │   │   ├── Loader.jsx
│   │   │   │   │   └── Modal.jsx
│   │   │   │   └── layout/
│   │	│   │       ├── Navbar.jsx
│   │   │   │       └── Sidebar.jsx
│   │	│   ├── hooks/
│   │	│   │   ├── useDebounce.js
│   │   │   │   └── useFetch.js
│   │	│   ├── utils/
│   │   │   │   └── helpers.js
│   │   │   └── constants/
│   │   │       └── helpers.js
│   │   │ 
│   │	├── services/                                       # Global API config 
│   │   │   └── api.js
│   │	├── assets/                                         # Imported assets ONLY
│   │   │	├── images/                                     
│   │   │	└── styles/                                       
│   │	│       ├── globals.css
│   │   │       └── variables.css
│   │   │
│   │	├── config/                                         # Environment & config
│   │   │	├── env.js                                    
│   │   │	└── axiosConfig.js                                    
│   │  	└── index.css
│   ├── .env
│   ├── .gitignore 
│   └── package.json
└── README.md
