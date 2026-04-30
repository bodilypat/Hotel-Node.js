Full-Stack-Medical-Management System-Directory-Structure
├── frontend(HTML, CSS, JavaScript, React)    
│   ├── public 
│   │   ├── index.html
│   │   └── styles/   
│   │       └── global.css            
│   ├── src/       
│   │   ├── app/                
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   │   ├── routes.jsx
│   │   │   └── providers/
│   │   │       ├── AuthProvider.jsx
│   │   │       └── ThemeProvider.jsx          
│   │   ├── assets/                
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── styles/
│   │   │       ├── global.css
│   │   │       ├── variables.css
│   │   │       ├── utilities.css
│   │   │       └── theme.css
│   │   ├── components/                                    # Shared reuable components
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Table.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── feedback/
│   │   │       ├── Alert.jsx
│   │   │       ├── Toast.jsx
│   │   │       └── StatusBadge.jsx                       # Feature - based modules
│   │   ├── features/      
│   │   │   ├── auth/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │   │   │   ├── api.js
│   │   │   │   ├── slice.js
│   │   │   │   ├── hooks.js
│   │   │   │   └── validation.js
│   │   │   ├── patients/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── PatientList.jsx
│   │   │   │   │   ├── PatientDetail.jsx
│   │   │   │   │   └── AddPatient.jsx
│   │   │   │   ├── components/
│   │   │   │   │   └── PatientCard.jsx
│   │   │   │   ├── api.js
│   │   │   │   ├── hooks.js
│   │   │   │   └── schema.js
│   │   │   ├── doctors/   
│   │   │   │   ├── pages/
│   │   │   │   │   ├── DoctorList.jsx
│   │   │   │   │   ├── DoctorDetail.jsx
│   │   │   │   │   └── AddDoctor.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── DoctorCard.jsx
│   │   │   │   │   ├── DoctorForm.jsx
│   │   │   │   │   ├── DoctorTable.jsx
│   │   │   │   │   └── AvailabilityForm.jsx
│   │   │   │   ├── api.js
│   │   │   │   ├── hooks.js
│   │   │   │   └── schema.js
│   │   │   ├── appointments/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── AppointmentList.jsx
│   │   │   │   │   └── CreateAppointment.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── AppointmentTable.jsx
│   │   │   │   │   ├── AppointmentForm.jsx
│   │   │   │   │   ├── Calendar.jsx
│   │   │   │   │   └── TimeSlotPicker.jsx
│   │   │   │   ├── api.js
│   │   │   │   ├── hooks.js
│   │   │   │   ├── schema.js
│   │   │   │   └── utils.js
│   │   │   ├── billing/   
│   │   │   │   ├── pages/
│   │   │   │   │   ├── InvoiceList.jsx
│   │   │   │   │   └── CreateInvoice.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── InvoiceTable.jsx
│   │   │   │   │   ├── InvoiceForm.jsx
│   │   │   │   │   ├── PaymentForm.jsx
│   │   │   │   │   └── BillingSummaryCard.jsx
│   │   │   │   ├── api.js
│   │   │   │   ├── hooks.js
│   │   │   │   ├── schema.js
│   │   │   │   └── utils.js
│   │   │   ├── dashboard/
│   │   │   │   ├── AdminDashbord.jsx
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   ├── PatientDashboard.jsx
│   │   │   │   └── PharmacistDashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── services/                                     # Global services
│   │   │   ├── apiClient.js         
│   │   │   └── interceptors.js
│   │   ├── store/                                        # Redux / Zustand /
│   │   │   ├── store.js
│   │   │   └── rootReducer.js
│   │   ├── hooks/                                        # Global reusable hooks
│   │   │   ├── useAuth.js        
│   │   │   ├── useDebounce.js       
│   │   │   └── useFetch.js
│   │   ├── utils/                                    
│   │   │   ├── constants.js       
│   │   │   ├── helpers.js
│   │   │   ├── formatDate.js
│   │   │   └── storage.js
│   │   ├── config/                                   
│   │   │   ├── env.js
│   │   │   └── appConfig.js
│   │   ├── tests/                                   
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   ├── App.jsx                                   
│   │   ├── main.jsx                                  
│   │   └── config.js                                 
│   │ 
│   │                   
├── backend/ (PHP)          
│   ├── src/
│   │  	├── config/
│   │   │   ├── database.js                           # DB connection(PDO)
│   │   │   └── env.js
│   │  	├── controllers/                              # Request handlers
│   │   │   ├── AuthController.php
│   │   │   ├── PatientController.php
│   │   │   ├── DoctorController.php
│   │   │   ├── appointmentController.js
│   │   │   └── billingController.js
│   │  	├── models/                                   # Database Models
│   │   │   ├── User.php
│   │   │   ├── Patient.php
│   │   │   ├── Doctor.php
│   │   │   ├── Appointment.php
│   │   │   └── Invoice.php
│   │  	├── routes/                                                # API routes
│   │   │   ├── api.php
│   │   │   ├── patientRoutes.php
│   │   │   ├── doctorRoutes.php
│   │   │   ├── appointmentRoutes.php
│   │   │   └── billingRoutes.php
│   │  	├── middleware/                                            # Custom middleware
│   │   │   ├── AuthMiddleware.php
│   │   │   ├── patientService.php
│   │   │   └── appointmentService.php
│   │  	├── services/                                              # Business logic
│   │   │   ├── authMiddleware.php
│   │   │   ├── patientService.php
│   │   │   └── appointmentService.php
│   │  	├── utils/                                                 # Helpers
│   │   │   ├── response.php
│   │   │   └── 
│   │   ├── public/  
│   │   │   └── index.php                                          # Entry point
│   │   └── 
│   ├── .env
│   ├── package.json
│   └── README.md                                             
│
└── database/                                                     # DB scripts / schema
