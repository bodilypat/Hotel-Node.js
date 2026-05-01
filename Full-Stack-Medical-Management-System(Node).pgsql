Full-Stack-Medical-Management System-Directory-Structure
├── frontend(HTML, CSS, JavaScript, React)    
│   ├── public 
│   │   ├── index.html
│   │   ├── favicon.icon
│   │   └── manifest.json    
│   ├── src/       
│   │   ├── app/                
│   │   │   ├── routes/
│   │   │   │   └── index.jsx
│   │   │   ├── providers/
│   │   │   │   ├── AuthProvider.jsx
│   │   │   │   ├── ThemeProvider.jsx       
│   │   │   │   └── QueryProvider.jsx                           # caching (React Query)
│   │   │   └── store/
│   │   │       ├── index.js
│   │   │       └── rootReducer.js 
│   │   ├── assets/                                              # Static assets
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── styles/
│   │   │       ├── global.css
│   │   │       ├── variables.css
│   │   │       ├── utilities.css
│   │   │       └── theme.css
│   │   ├── components/                                          # Shared reuable components
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Table.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx                                   
│   │   │   │   └── ProtectedRoute.jsx                         # auth security
│   │   │   └── feedback/
│   │   │       ├── Alert.jsx
│   │   │       ├── Toast.jsx
│   │   │       └── StatusBadge.jsx                              
│   │   ├── features/                                          # Feature-based modules (domain-driven)
│   │   │   ├── auth/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── Register.jsx
│   │   │   │   ├── services/
│   │   │   │   ├── store/
│   │   │   │   ├── hooks/
│   │   │   │   └── validation/
│   │   │   ├── patients/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── PatientList.jsx
│   │   │   │   │   ├── PatientDetail.jsx
│   │   │   │   │   └── AddPatient.jsx
│   │   │   │   ├── components/
│   │   │   │   │   └── PatientCard.jsx
│   │   │   │   ├── services/
│   │   │   │   ├── hooks/
│   │   │   │   └── schema/
│   │   │   ├── doctors/   
│   │   │   │   ├── pages/
│   │   │   │   │   ├── DoctorList.jsx
│   │   │   │   │   ├── DoctorDetail.jsx
│   │   │   │   │   └── AddDoctor.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── DoctorCard.jsx
│   │   │   │   │   ├── DoctorForm.jsx
│   │   │   │   │   ├── ScheduleCalendar.jsx
│   │   │   │   │   └── AvailabilityForm.jsx
│   │   │   │   ├── services/
│   │   │   │   ├── hooks/
│   │   │   │   └── schema/
│   │   │   ├── appointments/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── AppointmentList.jsx
│   │   │   │   │   └── CreateAppointment.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── AppointmentTable.jsx
│   │   │   │   │   ├── AppointmentForm.jsx
│   │   │   │   │   ├── Calendar.jsx
│   │   │   │   │   └── TimeSlotPicker.jsx
│   │   │   │   ├── services/
│   │   │   │   ├── hooks/
│   │   │   │   ├── schema/
│   │   │   │   └── utils/
│   │   │   ├── billing/   
│   │   │   │   ├── pages/
│   │   │   │   │   ├── InvoiceList.jsx
│   │   │   │   │   └── CreateInvoice.jsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── InvoiceTable.jsx
│   │   │   │   │   ├── InvoiceForm.jsx
│   │   │   │   │   ├── PaymentForm.jsx
│   │   │   │   │   └── BillingSummaryCard.jsx
│   │   │   │   ├── services/
│   │   │   │   ├── hooks/
│   │   │   │   ├── schema/
│   │   │   │   └── utils/
│   │   │   ├── dashboard/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── AdminDashbord.jsx
│   │   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   │   ├── PatientDashboard.jsx
│   │   │   │   │   └── PharmacistDashboard.jsx
│   │   │   │   ├── components/
│   │   │   │   ├── sercices/
│   │   │   │   ├── hooks/
│   │   │   │   └── 
│   │   │   └── not-found/
│   │   │       └── NotFound.jsx
│   │   ├── services/                                     # Global services       
│   │   │   ├── apiClient.js 
│   │   │   ├── interceptors.js                           # token handling
│   │   │   └── endpoints.js  
│   │   ├── hooks/                                        # Global reusable hooks
│   │   │   ├── useAuth.js        
│   │   │   ├── useDebounce.js       
│   │   │   └── useFetch.js
│   │   ├── utils/                                    
│   │   │   ├── constants.js       
│   │   │   ├── helpers.js
│   │   │   ├── formatDate.js
│   │   │   └── storage.js
│   │   ├── config/                                       # App configuration                          
│   │   │   ├── env.js
│   │   │   └── appConfig.js
│   │   ├── tests/                                        # Testing
│   │   │   ├── unit/
│   │   │   ├── integration/
│   │   │   └── e2e/                                      # real-world test
│   │   ├── App.jsx                                                               
│   │   └── main.jsx                                 
│   │ 
│   │                   
├── backend         
│   ├── src/       
│   │  	├── config/
│   │   │   ├── db.js                           
│   │   │   └── env.js
│   │   ├── modules/                
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.validation.js 
│   │   │   ├── users/
│   │   │   │   ├── user.model.js
│   │   │   │   ├── user.controller.js
│   │   │   │   ├── user.service.js
│   │   │   │   └── user.routes.js
│   │   │   ├── patients/
│   │   │   │   ├── patient.model.js
│   │   │   │   ├── patient.controller.js
│   │   │   │   ├── patient.service.js
│   │   │   │   └── patient.routes.js
│   │   │   ├── doctors/
│   │   │   │   ├── doctor.model.js
│   │   │   │   ├── doctor.controller.js
│   │   │   │   ├── doctor.service.js
│   │   │   │   └── doctor.routes.js
│   │   │   ├── appointments/
│   │   │   │   ├── appointment.model.js
│   │   │   │   ├── appointment.controller.js
│   │   │   │   ├── appointment.service.js
│   │   │   │   └── appointment.routes.js
│   │   │   └── billing/
│   │   │       ├── billing.model.js
│   │   │       ├── billing.controller.js
│   │   │       ├── billing.service.js
│   │   │       └── billing.routes.jsx
│   │  	├── middleware/                                
│   │   │   ├── auth.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │  	├── utils/                                                 
│   │   │   ├── generateToken.js
│   │   │   └── logger.js
│   │   ├── app.js                                        
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md                                             
│
└── database/                                                     # DB scripts / schema
