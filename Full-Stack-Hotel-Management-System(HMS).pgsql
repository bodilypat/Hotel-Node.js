Fullstack-Hotel-Management-System/
├── frontend: HTML, CSS, JavaScript, React                            
│   ├── public/   (public pages: Home, About, Rooms, Room Details, Contact, Login, Register)
│   │   └── index.html
│   ├── src/   
│   │   ├── app/ 
│   │	│   ├── App.jsx
│   │	│   ├── main.jsx
│   │	│   ├── routes/
│   │	│   │   ├── Index.jsx
│   │	│   │   ├── AppRoutes.jsx
│   │	│   │   ├── routeConfig.js
│   │	│   │   ├── lazyRoutes.js
│   │	│   │   ├── guards/
│   │	│   │   │   ├── ProtectedRoute.jsx
│   │	│   │   │   ├── PublicRoute.jsx
│   │	│   │   │   ├── RoleBasedRoute.jsx
│   │	│   │   │   ├── PermissionRoute.jsx
│   │   │   │   │   └── GuestRoute.jsx
│   │	│   │   ├── groups/
│   │	│   │   │   ├── AuthRoutes.jsx
│   │	│   │   │   ├── DashbordRoutes.jsx
│   │	│   │   │   ├── AdminRoutes.jsx
│   │   │   │   │   └── PublicRoutes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── permissions.jsx
│   │	│   │   │   ├── Roles.jsx
│   │   │   │   │   └── RoutesPaths.jsx
│   │   │   │   └── utils/
│   │	│   │       ├── hasPermission.js
│   │	│   │       ├── hasrole.js
│   │	│   │       ├── generateBreadcrumbs.js
│   │   │   │       └── generateMenuItems.js
│   │	│   ├── providers/
│   │	│   │   ├── index.js
│   │	│   │   ├── AppProviders.jsx
│   │	│   │   ├── core/
│   │	│   │   │   ├── ThemeProvider.jsx
│   │	│   │   │   ├── QueryProvider.jsx
│   │	│   │   │   ├── ErrorBundaryProvider.jsx
│   │   │   │   │   └── RouterProvider.jsx
│   │	│   │   ├── Auth/
│   │	│   │   │   ├── AuthProvider.jsx
│   │	│   │   │   ├── authContext.js
│   │	│   │   │   ├── authReducer.js
│   │	│   │   │   ├── authSelectors.js
│   │   │   │   │   └── useAuthContext.js
│   │	│   │   ├── realtime/
│   │	│   │   │   ├── SocketProvider.jsx
│   │	│   │   │   ├── SocketContext.js
│   │	│   │   │   ├── SocketEvents.js
│   │   │   │   │   └── useSocket.js
│   │	│   │   ├── ui/
│   │	│   │   │   ├── NotificationProvider.jsx
│   │	│   │   │   ├── ModalProvider.jsx
│   │	│   │   │   ├── ToastProvider.jsx
│   │	│   │   │   ├── DrawerProvider.jsx
│   │   │   │   │   └── useNotification.js
│   │	│   │   ├── analytics/
│   │	│   │   │   ├── AnalyticsProvider.jsx
│   │   │   │   │   └── analyticsContext.js
│   │	│   │   ├── featureFlags/
│   │	│   │   │   ├── FeatureFlagProvider.jsx
│   │   │   │   │   └── useFeatureFlag.js
│   │   │   │   └── monitoring/
│   │	│   │       ├── MonitoringProvider.jsx
│   │   │   │       └── monitoringService.js
│   │	│   ├── store/
│   │	│   │   ├── index.js
│   │	│   │   ├── rootReducer.js
│   │	│   │   ├── middleware.js
│   │	│   │   ├── persistedReducer.js
│   │	│   │   ├── listeners.js
│   │   │   │   └── slices/
│   │	│   │       ├── appSlice.js
│   │	│   │       ├── uiSlice.js
│   │   │   │       └── authSlice.js
│   │	│   ├── boostrap/
│   │	│   │   ├── initializeApp.js
│   │	│   │   ├── initializeAuth.js
│   │	│   │   ├── initializeTheme.js
│   │	│   │   ├── initializeSocket.js
│   │   │   │   └── initializeAnalytics.js
│   │	│   ├── config/
│   │	│   │   ├── env.js
│   │	│   │   ├── appConfig.js
│   │	│   │   ├── apiConfig.js
│   │	│   │   ├── socketConfig.js
│   │	│   │   ├── queryConfig.js
│   │   │   │   └── themeConfig.js
│   │	│   ├── layouts/
│   │	│   │   ├── DashboardLayout.jsx
│   │	│   │   ├── AuthLayout.jsx
│   │	│   │   ├── MainLayout.jsx
│   │	│   │   ├── AdminLayout.jsx
│   │   │   │   └── EmptyLayout.jsx
│   │	│   ├── constants/
│   │	│   │   ├── appConstants.js
│   │	│   │   ├── storageKeys.js
│   │	│   │   ├── queryKeys.js
│   │   │   │   └── socketEvents.js
│   │	│   ├── hooks/
│   │	│   │   ├── useAppInit.js
│   │	│   │   ├── useRouteAccess.js
│   │   │   │   └── useNavigation.js
│   │	│   ├── services/
│   │	│   │   ├── analyticsService.js
│   │	│   │   ├── monitoringService.js
│   │   │   │   └── navigationService.js
│   │   │   └── errors/
│   │	│       ├── ErrorBoundary.jsx
│   │	│       ├── AppErrorFallback.jsx
│   │	│       ├── RouteErrorBoundary.jsx
│   │   │       └── NotFound.jsx
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
│   │	│   │   │   ├── Skeleton.jsx
│   │   │   │   │   └── index.js
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
│   │	│   │   ├── currencyFormatter.js
│   │	│   │   ├── validators.js
│   │	│   │   ├── storage.js
│   │   │   │   └── permissions.js 
│   │	│   ├── constants/
│   │	│   │   ├── apiEndpointsjs
│   │	│   │   ├── roles.js
│   │   │   │   └── appConstants.js
│   │	│   ├── config/
│   │	│   ├── validations/
│   │   │   └── types/
│   │   │      
│   │   ├── features/                                      # Feature-based modules 
│   │	│   ├── auth/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   │   ├── auth.api.js
│   │	│   │   │   ├── auth.queries.js
│   │	│   │   │   ├── auth.mutations.js
│   │   │   │   │   └── auth.mapper.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── LoginForm.jsx
│   │	│   │   │   │   ├── RegisterForm.jsx
│   │	│   │   │   │   ├── ForgotPasswordForm.jsx 
│   │	│   │   │   │   ├── ResetPasswordForm.jsx
│   │	│   │   │   │   ├── OTOverificationForm.jsx
│   │	│   │   │   │   ├── ChangePasswordForm.jsx
│   │	│   │   │   │   ├── SocialLoginButton.jsx
│   │   │   │   │   │   └── AuthFormWrapper.jsx
│   │	│   │   │   ├── fields/
│   │	│   │   │   │   ├── ForgotPasswordForm.jsx 
│   │	│   │   │   │   ├── ResetPasswordForm.jsx
│   │	│   │   │   │   ├── OTOverificationForm.jsx
│   │	│   │   │   │   ├── ChangePasswordForm.jsx
│   │	│   │   │   │   ├── SocialLoginButton.jsx
│   │   │   │   │   │   └── AuthFormWrapper.jsx
│   │	│   │   │   ├── hooks/
│   │	│   │   │   │   ├── useLoginForm.js
│   │	│   │   │   │   ├── useRegisterForm.js
│   │   │   │   │   │   └── useForgotPassword.js
│   │   │   │   │   └── styles/
│   │	│   │   │       ├── usForm.module.css
│   │   │   │   │       └── input.module.css
│   │	│   │   ├── pages/
│   │	│   │   │   ├── LoginPage.jsx
│   │	│   │   │   ├── RegisterPage.jsx
│   │   │   │   │   └── ForgotPasswordPage.jsx
│   │	│   │   ├── pages/
│   │	│   │   │   ├── useAuth.js
│   │   │   │   │   └── useLogin.js
│   │	│   │   ├── services/
│   │   │   │   │   └── tokenService.js
│   │	│   │   ├── layoutss/
│   │   │   │   │   └── AuthLayout.js
│   │	│   │   ├── context/
│   │   │   │   │   └── AuthContext.jsx
│   │	│   │   ├── store/
│   │	│   │   │   ├── authSlice.js
│   │	│   │   │   ├── authSelectors.js
│   │	│   │   │   ├── authListeners.js
│   │   │   │   │   └── authMiddleware.js
│   │	│   │   ├── routes/
│   │	│   │   │   ├── authRoutes.jsx
│   │   │   │   │   └── authRouteConfig.js
│   │	│   │   ├── permissions/
│   │   │   │   │   └── authPermissions.js
│   │	│   │   ├── validations/
│   │	│   │   │   ├── loginSchema.js
│   │   │   │   │   └── registerSchema.js
│   │	│   │   ├── constants/
│   │   │   │   │   └── authConstants.js
│   │	│   │   ├── types/
│   │	│   │   │   ├── auth.types.ts
│   │   │   │   │   └── auth.enums.ts
│   │   │   │   └── utils/
│   │   │   │       └── authHelpers.js
│   │	│   ├── dashboard/ (Dashboard page: Overview, Rooms, Reservation, Guests, Staff, Payments, Inventory, Reports, setting)
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │	│   ├── rooms/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   │   ├── rooms.api.js
│   │	│   │   │   ├── room.queries.js
│   │	│   │   │   ├── room.mutations.js
│   │	│   │   │   ├── room.endpoints.js
│   │	│   │   │   ├── room.mapper.js
│   │	│   │   │   ├── room.schema.js
│   │	│   │   │   ├── room.keys.js
│   │	│   │   │   ├── room.adapter.js
│   │   │   │   │   └── room.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── RoomCard.jsx
│   │	│   │   │   │   ├── RoomGridCard.jsx
│   │	│   │   │   │   ├── RoomListCard.jsx
│   │   │   │   │   │   └── room-card.css
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── RoomForm.jsx
│   │	│   │   │   │   ├── RoomPriceForm.jsx
│   │	│   │   │   │   ├── RoomAmenitiesForm.jsx
│   │   │   │   │   │   └── RoomImageForm.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── RoomTable.jsx
│   │	│   │   │   │   ├── RoomTableRow.jsx
│   │	│   │   │   │   ├── RoomTableHeader.jsx
│   │   │   │   │   │   └── RoomTableAction.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── RoomFilters.jsx
│   │	│   │   │   │   ├── RoomSearchFilter.jsx
│   │	│   │   │   │   ├── RoomStatusFilter.jsx
│   │	│   │   │   │   ├── RoomTypeFilter.jsx
│   │   │   │   │   │   └── RoomPriceFilter.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateRoomModal.jsx
│   │	│   │   │   │   ├── UpdateRoomStatusModal.jsx
│   │	│   │   │   │   ├── DeleteRoomModal.jsx
│   │	│   │   │   │   ├── RoomDetailsModal.jsx
│   │   │   │   │   │   └── RoomGalleryModal.jsx
│   │	│   │   │   ├── galleries/
│   │	│   │   │   │   ├── RoomGallery.jsx
│   │	│   │   │   │   ├── RoomImage.jsx
│   │	│   │   │   │   ├── RoomCarousel.jsx
│   │   │   │   │   │   └── RoomThumbnail.jsx
│   │	│   │   │   ├── status/
│   │	│   │   │   │   ├── RoomStatusBadge.jsx
│   │	│   │   │   │   ├── AvailabilityBadge.jsx
│   │   │   │   │   │   └── CleaningStatusBadge.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── RoomOccupancyChart.jsx
│   │	│   │   │   │   ├── RoomRevenueChart.jsx
│   │   │   │   │   │   └── RoomStatsChart.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── RoomHeader.jsx
│   │	│   │   │       ├── RoomActions.jsx
│   │	│   │   │       ├── RoomEmptyState.jsx
│   │	│   │   │       ├── RoomErrorState.jsx
│   │   │   │   │       └── RoomLoader.jsx
│   │	│   │   ├── pages/
│   │	│   │   │   ├── Rooms.jsx
│   │	│   │   │   ├── RoomDetails.jsx
│   │	│   │   │   ├── AddRoom.jsx
│   │	│   │   │   ├── EditRoom.jsx
│   │	│   │   │   ├── RoomAvailability.jsx
│   │	│   │   │   ├── RoomAnalytics.jsx
│   │   │   │   │   └── RoomCalendar.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useRooms.js
│   │	│   │   │   ├── useRoom.js
│   │	│   │   │   ├── useCreateRoom.js
│   │	│   │   │   ├── useUpdateRoom.js
│   │	│   │   │   ├── useDeleteRoom.js
│   │	│   │   │   ├── useRoomFilters.js
│   │	│   │   │   ├── useRoomSearch.js 
│   │	│   │   │   ├── useRoomPagination.js
│   │	│   │   │   ├── useRoomPagination.js 
│   │   │   │   │   └── useRoomAvailability.js
│   │	│   │   ├── routes/
│   │   │   │   │   └── room.routes.jsx
│   │	│   │   ├── store/
│   │	│   │   │   ├── room.store.js
│   │	│   │   │   ├── room.actions.js
│   │   │   │   │   └── room.selectors.js
│   │	│   │   ├── constants/
│   │	│   │   │   ├── room.constants.js
│   │	│   │   │   ├── room.status.js
│   │	│   │   │   ├── room.types.js
│   │   │   │   │   └── room.filters.js
│   │	│   │   ├── utils/
│   │	│   │   │   ├── room.helpers.js
│   │	│   │   │   ├── room.formatters.js
│   │	│   │   │   ├── room.calculations.js
│   │	│   │   │   ├── room.Permissions.js
│   │   │   │   │   └── room.transformers.js
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── roomForm.schema.js
│   │	│   │   │   ├── roomFilter.schema.js
│   │   │   │   │   └── roomPricing.schema.js 
│   │	│   │   ├── styles/
│   │	│   │   │   ├── rooms.css
│   │	│   │   │   ├── room-table.css
│   │	│   │   │   ├── room-card.css 
│   │   │   │   │   └── room-form.css  
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── room.mock.js
│   │   │   │   │   └── room.data.js
│   │   │   │   └── tests/
│   │	│   │       ├── RoomCard.test.jsx
│   │	│   │       ├── RoomTable.test.jsx 
│   │	│   │       ├── room.helpers.test.js
│   │   │   │       └── room.helpers.test.js
│   │   │   │
│   │	│   ├── reservations
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │   │   │
│   │	│   ├── guests/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │   │   │
│   │	│   ├── staffs/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │   │   │
│   │	│   ├── payments/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │   │   │
│   │	│   ├── inventory/
│   │	│   │   ├── index.js
│   │	│   │   ├── api/
│   │	│   │   ├── components/
│   │	│   │   ├── pages/
│   │	│   │   ├── hooks/
│   │	│   │   ├── store/
│   │	│   │   ├── utils/
│   │	│   │   ├── analytics/
│   │	│   │   ├── mocks/
│   │   │   │   └── tests/
│   │   │   │
│   │   │   └── reports/
│   │	│       ├── index.js
│   │	│       ├── api/
│   │	│       ├── components/
│   │	│       ├── pages/
│   │	│       ├── hooks/
│   │	│       ├── store/
│   │	│       ├── utils/
│   │	│       ├── analytics/
│   │	│       ├── mocks/
│   │   │       └── tests/
│   │   ├── main.jsx
│   │   └── App.jsx
│   │
│   ├── .env
│   ├── .env.example 
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
