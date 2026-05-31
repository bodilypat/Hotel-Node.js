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
│   │   ├── pages/ 
│   │	│   ├── Dashboard.jsx
│   │	│   ├── Rooms.jsx
│   │	│   ├── RoomDetails.jsx
│   │	│   ├── Reservations.jsx
│   │	│   ├── Rooms.jsx
│   │	│   ├── Guests.jsx
│   │	│   ├── Billing.jsx
│   │	│   ├── Employees.jsx
│   │	│   ├── Reports.jsx
│   │	│   ├── Settings.jsx 
│   │	│   ├── Login.jsx
│   │	│   ├── Register.jsx
│   │	│   ├── Unauthorized.jsx
│   │   │   └── NotFound.jsx
│   │   │      
│   │   ├── features/                                      # Feature-based modules 
│   │	│   ├── auth/
│   │	│   │   ├── api/
│   │	│   │   │   ├── auth.api.js
│   │	│   │   │   ├── auth.queries.js
│   │	│   │   │   ├── auth.mutations.js
│   │	│   │   │   ├── auth.endpoints.js
│   │	│   │   │   ├── auth.mapper.js
│   │	│   │   │   ├── auth.adapter.js
│   │	│   │   │   ├── auth.schema.js
│   │	│   │   │   ├── auth.keys.js
│   │   │   │   │   └── auth.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── LoginForm.jsx
│   │	│   │   │   │   ├── RegisterForm.jsx
│   │	│   │   │   │   ├── ForgotPasswordForm.jsx
│   │	│   │   │   │   ├── ResetPasswordForm.jsx
│   │   │   │   │   │   └── ChangePasswordForm.jsx
│   │	│   │   │   ├── guard/
│   │	│   │   │   │   ├── ProtectedRoute.jsx
│   │	│   │   │   │   ├── PublicRoute.jsx
│   │	│   │   │   │   ├── RoleGuard.jsx
│   │   │   │   │   │   └── PermissionGuard.jsx
│   │	│   │   │   ├── Profile/
│   │	│   │   │   │   ├── UserProfile.jsx
│   │	│   │   │   │   ├── UserAvator.jsx
│   │	│   │   │   │   ├── UserDetails.jsx
│   │   │   │   │   │   └── UserPreferences.jsx
│   │	│   │   │   ├── sessions/
│   │	│   │   │   │   ├── SessionList.jsx
│   │	│   │   │   │   ├── SessionCard.jsx
│   │   │   │   │   │   └── ActiveSessionBadge.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── AuthHeader.jsx
│   │	│   │   │       ├── AuthLayout.jsx
│   │	│   │   │       ├── AuthLaoding.jsx
│   │	│   │   │       ├── AuthError.jsx
│   │   │   │   │       └── Unauthorized.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useAuth.js
│   │	│   │   │   ├── useLogin.js
│   │	│   │   │   ├── useLogout.js
│   │	│   │   │   ├── useRegister.js
│   │	│   │   │   ├── useCurrentUser.js
│   │	│   │   │   ├── usePermissions.js
│   │	│   │   │   ├── useRoles.js 
│   │	│   │   │   ├── useForgotPassword.js
│   │	│   │   │   ├── useResetPassword.js
│   │   │   │   │   └── useSession.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── LoginPage.jsx
│   │	│   │   │   ├── RegisterPage.jsx
│   │	│   │   │   ├── ForgotPasswordPage.jsx
│   │	│   │   │   ├── ResetPasswordPage.jsx
│   │	│   │   │   ├── ProfilePage.jsx
│   │   │   │   │   └── UnauthorizedPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── auth.routes.jsx
│   │	│   │   ├── store/
│   │	│   │   │   ├── auth.store.js
│   │	│   │   │   ├── auth.actions.js
│   │   │   │   │   └── auth.selectors.js 
│   │	│   │   ├── constants/
│   │	│   │   │   ├── auth.constants.js
│   │	│   │   │   ├── roles.js 
│   │	│   │   │   ├── permissions.js
│   │   │   │   │   └── auth.storage.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── login.schema.js 
│   │	│   │   │   ├── register.schema.js
│   │	│   │   │   ├── resetPassword.schema.js
│   │   │   │   │   └── profile.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── auth.helpers.js
│   │	│   │   │   ├── auth.tokens.js
│   │	│   │   │   ├── auth.permissions.js 
│   │	│   │   │   ├── auth.redirects.js
│   │   │   │   │   └── auth.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── LoginForm.test.jsx
│   │	│   │   │   ├── ProtectedRoute.test.jsx
│   │   │   │   │   └── auth.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── auth.mock.js
│   │   │   │   │   └── auth.data.js
│   │   │   │   └── index.js
│   │	│   ├── dashboard/ (Dashboard page: Overview, Rooms, Reservation, Guests, Staff, Payments, Inventory, Reports, setting)
│   │	│   │   ├── api/
│   │	│   │   │   ├── dashboard.api.js
│   │	│   │   │   ├── dashboard.queries.js
│   │	│   │   │   ├── dashboard.endpoints.js
│   │	│   │   │   ├── dashboard.mapper.js
│   │	│   │   │   ├── dashboard.adapter.js
│   │	│   │   │   ├── dashboard.schema.js
│   │	│   │   │   ├── dashboard.keys.js
│   │   │   │   │   └── dashboard.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── RevenueCard.jsx 
│   │	│   │   │   │   ├── OccupancyCard.jsx
│   │	│   │   │   │   ├── ReservationCard.jsx
│   │	│   │   │   │   ├── GuestCard.jsx
│   │	│   │   │   │   ├── EmployeeCard.jsx
│   │	│   │   │   │   ├── AvailableRoomCard.jsx
│   │	│   │   │   │   ├── CheckInCard.jsx
│   │   │   │   │   │   └── CheckOutCard.jsx
│   │	│   │   │   ├── charts/
│   │	│   │   │   │   ├── RevenueChart.jsx
│   │	│   │   │   │   ├── OccupancyChart.jsx
│   │	│   │   │   │   ├── ReservationTrendChart.jsx
│   │	│   │   │   │   ├── GuestGrowthChart.jsx
│   │	│   │   │   │   ├── PaymenChart.jsx
│   │   │   │   │   │   └── RoomPerformanceChart.jsx
│   │	│   │   │   ├── widgets/
│   │	│   │   │   │   ├── UpcomingCheckIns.jsx
│   │	│   │   │   │   ├── UpcomingCheckOuts.jsx
│   │	│   │   │   │   ├── RecentReservations.jsx
│   │	│   │   │   │   ├── RoomAvailabilityWidget.jsx
│   │	│   │   │   │   ├── HouseKeepingWidget.jsx
│   │	│   │   │   │   ├── MaintenanceWidget.jsx
│   │   │   │   │   │   └── NotificationsWidget.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── RevenueAnalytics.jsx
│   │	│   │   │   │   ├── OccupancyAnalytics.jsx
│   │	│   │   │   │   ├── ReservationAnalytics.jsx
│   │   │   │   │   │   └── GuestAnalytics.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── DashboardHeader.jsx
│   │	│   │   │       ├── DashboardActions.jsx
│   │	│   │   │       ├── DashboardSkeleton.jsx
│   │	│   │   │       ├── DashboardEmptyState.jsx
│   │   │   │   │       └── DashboardErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useDashboard.js
│   │	│   │   │   ├── useDashboardMetics.js
│   │	│   │   │   ├── useRevenueMetrics.js
│   │	│   │   │   ├── useOccupancyMetriics.js
│   │	│   │   │   ├── useReservationMetrics.js 
│   │	│   │   │   ├── useGuestMetrics.js
│   │	│   │   │   ├── useDashboardFilters.js
│   │   │   │   │   └── useRealtimeDashboard.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── DashboardPage.jsx
│   │	│   │   │   ├── ExcutiveDashboardPage.jsx
│   │	│   │   │   ├── ManagerDashboardPage.jsx
│   │   │   │   │   └── ReceptionDashboardPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── dashboard.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── dashboard.constants.js
│   │	│   │   │   ├── dashboard.widgets.js
│   │   │   │   │   └── dashboard.roles.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── dashboardFilter.schema.js
│   │   │   │   │   └── dashboardWidget.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── dashboard.helpers.js
│   │	│   │   │   ├── dashboard.formatters.js 
│   │	│   │   │   ├── dashboard.calculations.js
│   │   │   │   │   └── dashboard.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── RevenueCard.test.jsx
│   │	│   │   │   ├── DashboardPage.test.jsx
│   │   │   │   │   └── dashboard.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── dashboard.mock.js
│   │   │   │   │   └── dashboard.data.js
│   │   │   │   └── index.js
│   │	│   ├── rooms/
│   │	│   │   │
│   │	│   │   ├── api/
│   │	│   │   │   ├── room.api.js
│   │	│   │   │   ├── room.queries.js
│   │	│   │   │   ├── room.mutations.js
│   │	│   │   │   ├── room.endpoints.js
│   │	│   │   │   ├── room.keys.js
│   │	│   │   │   ├── room.mapper.js
│   │	│   │   │   ├── room.adapter.js
│   │	│   │   │   ├── room.schema.js
│   │   │   │   │   └── room.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── RoomCard.jsx
│   │	│   │   │   │   ├── RoomGridCard.jsx
│   │   │   │   │   │   └── RoomListCard.jsx
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
│   │	│   │   │   ├── details/
│   │	│   │   │   │   ├── RoomDetailsHeader.jsx
│   │	│   │   │   │   ├── RoomDetailsInfo.jsx
│   │	│   │   │   │   ├── RoomAmenitiesList.jsx
│   │	│   │   │   │   ├── RoomPricingDetails.jsx
│   │   │   │   │   │   └── RoomAvailabilityCalendar.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateRoomModal.jsx
│   │	│   │   │   │   ├── UpdateRoomStatusModal.jsx
│   │	│   │   │   │   ├── DeleteRoomModal.jsx
│   │	│   │   │   │   ├── RoomDetailsModal.jsx
│   │   │   │   │   │   └── RoomGalleryModal.jsx
│   │	│   │   │   ├── gallery/
│   │	│   │   │   │   ├── RoomGallery.jsx
│   │	│   │   │   │   ├── RoomImage.jsx
│   │	│   │   │   │   ├── RoomCarousel.jsx
│   │	│   │   │   │   ├── RoomThumbnail.jsx
│   │   │   │   │   │   └── RoomLightbox
│   │	│   │   │   ├── skeletons/
│   │	│   │   │   │   ├── RoomCardSkeleton.jsx
│   │	│   │   │   │   ├── RoomTableSkeleton.jsx
│   │	│   │   │   │   ├── RoomDetailsSkeleton.jsx
│   │	│   │   │   │   ├── RoomGallerySkeleton.jsx
│   │   │   │   │   │   └── RoomAnalyticsSkeleton.jsx
│   │	│   │   │   ├── status/
│   │	│   │   │   │   ├── RoomStatusBadge.jsx
│   │	│   │   │   │   ├── RoomAvailabilityBadge.jsx
│   │	│   │   │   │   ├── RoomCleaningStatus.jsx
│   │	│   │   │   │   ├── RoomMaintenanceStatus.jsx
│   │   │   │   │   │   └── RoomOccupancyIndicator.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── RoomOccupancyChart.jsx
│   │	│   │   │   │   ├── RoomRevenueChart.jsx
│   │	│   │   │   │   ├── RoomBookingStats.jsx
│   │   │   │   │   │   └── RoomPerformanceCard.jsx
│   │	│   │   │   ├── staletons/
│   │	│   │   │   │   ├── RoomCardSkeleton.jsx
│   │	│   │   │   │   ├── RoomTableSkeleton.jsx
│   │   │   │   │   │   └── RoomDetailsSkeleton.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── RoomHeader.jsx
│   │	│   │   │       ├── RoomActions.jsx
│   │	│   │   │       ├── RoomMeta.jsx
│   │	│   │   │       ├── RoomTags.jsx
│   │	│   │   │       ├── RoomEmptyState.jsx
│   │   │   │   │       └── RoomErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useRooms.js
│   │	│   │   │   ├── useRoom.js
│   │	│   │   │   ├── useCreateRoom.js
│   │	│   │   │   ├── useUpdateRoom.js
│   │	│   │   │   ├── useDeleteRoom.js
│   │	│   │   │   ├── useRoomFilters.js
│   │	│   │   │   ├── useRoomSearch.js 
│   │	│   │   │   ├── useRoomPagination.js
│   │	│   │   │   ├── useRoomAvailability.js
│   │   │   │   │   └── useAnalytics.js
│   │	│   │   ├── pages/
│   │	│   │   │   ├── RoomsPage.jsx
│   │	│   │   │   ├── RoomDetailspage.jsx
│   │	│   │   │   ├── AddRoomPage.jsx
│   │	│   │   │   ├── EditRoomPage.jsx
│   │	│   │   │   ├── RoomAvailabilityPage.jsx
│   │	│   │   │   ├── RoomAnalyticsPage.jsx
│   │   │   │   │   └── RoomCalendarPage.jsx
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
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── roomForm.schema.js
│   │	│   │   │   ├── roomFilter.schema.js
│   │   │   │   │   └── roomPricing.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── room.helpers.js
│   │	│   │   │   ├── room.formatters.js
│   │	│   │   │   ├── room.calculations.js
│   │	│   │   │   ├── room.permissions.js
│   │   │   │   │   └── room.transformers.js
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── room.mock.js
│   │   │   │   │   └── room.data.js
│   │	│   │   ├── tests/
│   │	│   │   │   ├── RoomCard.test.jsx
│   │	│   │   │   ├── RoomTable.test.jsx 
│   │   │   │   │   └── room.helpers.test.js
│   │	│   │   ├── styles/
│   │	│   │   │   ├── rooms.css
│   │	│   │   │   ├── room-card.css
│   │	│   │   │   ├── room-table.css
│   │   │   │   │   └── room-form.css
│   │   │   │   └── index.js
│   │   │   │
│   │	│   ├── reservations
│   │	│   │   ├── api/
│   │	│   │   │   ├── reservation.api.js
│   │	│   │   │   ├── reservation.queries.js
│   │	│   │   │   ├── reservation.mutations.js
│   │	│   │   │   ├── reservation.endpoints.js
│   │	│   │   │   ├── reservation.mapper.js
│   │	│   │   │   ├── reservation.adapter.js
│   │	│   │   │   ├── reservation.schema.js 
│   │	│   │   │   ├── reservation.keys.js
│   │   │   │   │   └── reservation.validator.js 
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── ReservationCard.jsx
│   │	│   │   │   │   ├── ReservationGridCard.jsx
│   │	│   │   │   │   ├── ReservationListCard.jsx
│   │   │   │   │   │   └── ReservationSummary.jsx
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── ReservationForm.jsx
│   │	│   │   │   │   ├── ReservationGuestForm.jsx
│   │	│   │   │   │   ├── ReservationRoomForm.jsx
│   │	│   │   │   │   ├── ReservationPaymentForm.jsx
│   │   │   │   │   │   └── ReservationDatesForm.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── ReservationTable.jsx
│   │	│   │   │   │   ├── ReservationTableRow.jsx
│   │	│   │   │   │   ├── ReservationTableHeader.jsx
│   │	│   │   │   │   ├── ReservationTableActions.jsx
│   │   │   │   │   │   └── ReservationTablePagination.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── ReservationFilter.jsx
│   │	│   │   │   │   ├── ReservationSearchFilter.jsx
│   │	│   │   │   │   ├── ReservationStatusFilter.jsx
│   │	│   │   │   │   ├── ReservationDateFilter.jsx
│   │   │   │   │   │   └── ReservationGuestFilter.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateReservationModal.jsx
│   │	│   │   │   │   ├── EditReservationModal.jsx
│   │	│   │   │   │   ├── CancelReservationModal.jsx
│   │	│   │   │   │   ├── CheckInModal.jsx
│   │   │   │   │   │   └── CheckOutModal.jsx
│   │	│   │   │   ├── details/
│   │	│   │   │   │   ├── ReservationDetailsHeader.jsx
│   │	│   │   │   │   ├── ReservationDetailsInfo.jsx
│   │	│   │   │   │   ├── ReservationGuestInfo.jsx
│   │	│   │   │   │   ├── ReservationRoomInfo.jsx
│   │	│   │   │   │   ├── ReservationPaymentInfo.jsx
│   │   │   │   │   │   └── ReservationTimeline.jsx
│   │	│   │   │   ├── status/
│   │	│   │   │   │   ├── ReservationStatusBadge.jsx
│   │	│   │   │   │   ├── CheckInStatusBadge.jsx
│   │	│   │   │   │   ├── CheckOutStatusBadge.jsx
│   │   │   │   │   │   └── PaymentStatusBadge.jsx
│   │	│   │   │   ├── calendar/
│   │	│   │   │   │   ├── ReservationCalendar.jsx
│   │	│   │   │   │   ├── ReservationCalendarDay.jsx
│   │	│   │   │   │   ├── ReservationCalendarWeek.jsx
│   │   │   │   │   │   └── ReservationCalendarMonth.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── ReservationRevenueChart.jsx
│   │	│   │   │   │   ├── ReservationOccupancyChart.jsx
│   │	│   │   │   │   ├── ReservationStats.jsx
│   │   │   │   │   │   └── ReservationPerformanceCard.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── ReservationHeader.jsx
│   │	│   │   │       ├── ReservationActionss.jsx
│   │	│   │   │       ├── ReservationMeta.jsx
│   │	│   │   │       ├── ReservationTags.jsx
│   │	│   │   │       ├── ReservationEmptyState.jsx
│   │   │   │   │       └── ReservationErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useReservations.js
│   │	│   │   │   ├── useReservation.js
│   │	│   │   │   ├── useCreateReservation.js
│   │	│   │   │   ├── useUpdateReservation.js
│   │	│   │   │   ├── useCancelReservation.js
│   │	│   │   │   ├── useCheckIn.js
│   │	│   │   │   ├── useCheckOut.js 
│   │	│   │   │   ├── useReservationFilters.js
│   │	│   │   │   ├── useReservationSearch.js
│   │	│   │   │   ├── useReservationPagination.js
│   │   │   │   │   └── useReservationCalendar.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── reservationsPage.jsx
│   │	│   │   │   ├── ReservationDetailsPage.jsx
│   │	│   │   │   ├── CreateReservationPage.jsx
│   │	│   │   │   ├── EditReservationPage.jsx
│   │	│   │   │   ├── ReservationCalendarPage.jsx
│   │   │   │   │   └── ReeservationAnalyticsPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── reservation.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── reservation.constants.js
│   │	│   │   │   ├── reservation.status.js 
│   │	│   │   │   ├── reservation.types.js
│   │   │   │   │   └── reservation.filters.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── reservationForm.schema.js 
│   │	│   │   │   ├── reservationFilter.schema.js
│   │   │   │   │   └── reservationPayment.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── reservation.helpers.js
│   │	│   │   │   ├── reservation.formatters.js
│   │	│   │   │   ├── reservation.calculations.js 
│   │	│   │   │   ├── reservation.permissions.js
│   │   │   │   │   └── reservation.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── ReservationCard.test.jsx 
│   │	│   │   │   ├── ReservationTable.test.jsx
│   │   │   │   │   └── reservation.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── reservation.mock.js
│   │   │   │   │   └── reservation.data.js
│   │   │   │   └── index.js
│   │   │   │
│   │	│   ├── guests/
│   │	│   │   ├── api/
│   │	│   │   │   ├── guest.api.js
│   │	│   │   │   ├── guest.queries.js
│   │	│   │   │   ├── guest.mutations.js
│   │	│   │   │   ├── guest.endpoints.js
│   │	│   │   │   ├── guest.mapper.js
│   │	│   │   │   ├── guest.adapter.js
│   │	│   │   │   ├── guest.schema.js
│   │	│   │   │   ├── guest.keys.js
│   │   │   │   │   └── guest.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── GuestCard.jsx
│   │	│   │   │   │   ├── GuestGridCard.jsx
│   │	│   │   │   │   ├── GuestListCard.jsx
│   │   │   │   │   │   └── GuestSummaryCard.jsx
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── GuestForm.jsx
│   │	│   │   │   │   ├── GuestContactForm.jsx
│   │	│   │   │   │   ├── GuestAddressForm.jsx
│   │	│   │   │   │   ├── GuestDocumentForm.jsx
│   │   │   │   │   │   └── GuestPreferencesForm.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── GuestTable.jsx
│   │	│   │   │   │   ├── GuestTableRow.jsx
│   │	│   │   │   │   ├── GuestTableHeader.jsx
│   │	│   │   │   │   ├── GuestTableActions.jsx
│   │   │   │   │   │   └── GuestTablePagination.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── GuestFilter.jsx
│   │	│   │   │   │   ├── GuestSearchFilter.jsx
│   │	│   │   │   │   ├── GuestStatusFilter.jsx
│   │	│   │   │   │   ├── GuestCountryFilter.jsx
│   │   │   │   │   │   └── GuestLoyaltyFilter.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateGuestModal.jsx
│   │	│   │   │   │   ├── EditGuestModal.jsx
│   │	│   │   │   │   ├── DeleteGuestModal.jsx
│   │	│   │   │   │   ├── GuestDetailsModal.jsx
│   │   │   │   │   │   └── GuestDocumentsModal.jsx
│   │	│   │   │   ├── details/
│   │	│   │   │   │   ├── GuestDetailsHeader.jsx
│   │	│   │   │   │   ├── GuestDetailsInfo.jsx
│   │	│   │   │   │   ├── GuestContactInfo.jsx
│   │	│   │   │   │   ├── GuestAddressInfo.jsx
│   │	│   │   │   │   ├── GuestStayHistory.jsx
│   │	│   │   │   │   ├── GuestPreferences.jsx
│   │   │   │   │   │   └── GuestDocuments.jsx
│   │	│   │   │   ├── loyalty/
│   │	│   │   │   │   ├── LoyaltyBadge.jsx
│   │	│   │   │   │   ├── LoyaltyPointsCard.jsx
│   │	│   │   │   │   ├── LoyaltyHistory.jsx
│   │   │   │   │   │   └── LoyaltyTierBadge.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── GuestDemographicsChart.jsx
│   │	│   │   │   │   ├── GuestRetentionChartChart.jsx
│   │	│   │   │   │   ├── GuestStats.jsx
│   │   │   │   │   │   └── GuestLifetimeValueCard.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── GuestHeader.jsx
│   │	│   │   │       ├── GuestActions.jsx
│   │	│   │   │       ├── GuestMeta.jsx
│   │	│   │   │       ├── GuestTags.jsx
│   │	│   │   │       ├── GuestEmptyState.jsx
│   │   │   │   │       └── GuestErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useGuests.js
│   │	│   │   │   ├── useGuest.js
│   │	│   │   │   ├── useCreateGuest.js
│   │	│   │   │   ├── useUpdateGuest.js
│   │	│   │   │   ├── useDeleteGuest.js
│   │	│   │   │   ├── useGuestFilters.js
│   │	│   │   │   ├── useGuestSearch.js 
│   │	│   │   │   ├── useGuestPagination.js
│   │	│   │   │   ├── useGuestDocument.js
│   │   │   │   │   └── useGuestLoyalty.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── GuestsPage.jsx
│   │	│   │   │   ├── GuestDetailsPage.jsx
│   │	│   │   │   ├── CreateGuestPage.jsx
│   │	│   │   │   ├── EditGuestPage.jsx
│   │	│   │   │   ├── GuestAnalyticsPage.jsx
│   │   │   │   │   └── GuestLoyaltyPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── guest.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── guest.constants.js
│   │	│   │   │   ├── guest.status.js 
│   │	│   │   │   ├── guest.types.js
│   │   │   │   │   └── guest.filters.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── guestForm.schema.js 
│   │	│   │   │   ├── guestFilter.schema.js
│   │   │   │   │   └── guestDocument.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── guest.helpers.js
│   │	│   │   │   ├── guest.formatters.js
│   │	│   │   │   ├── guest.calculations.js 
│   │	│   │   │   ├── guest.permissions.js
│   │   │   │   │   └── guest.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── GuestCard.test.jsx
│   │	│   │   │   ├── GuestTable.test.jsx
│   │   │   │   │   └── guest.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── guest.mock.js
│   │   │   │   │   └── guest.data.js
│   │   │   │   └── index.js
│   │   │   │
│   │	│   ├── employees/
│   │	│   │   ├── api/
│   │	│   │   │   ├── employee.api.js
│   │	│   │   │   ├── employee.queries.js
│   │	│   │   │   ├── employee.mutations.js
│   │	│   │   │   ├── employee.endpoints.js
│   │	│   │   │   ├── employee.mapper.js
│   │	│   │   │   ├── employee.adapter.js
│   │	│   │   │   ├── employee.schema.js
│   │	│   │   │   ├── employee.keys.js
│   │   │   │   │   └── employee.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── EmployeeCard.jsx
│   │	│   │   │   │   ├── EmployeeGridCard.jsx
│   │	│   │   │   │   ├── EmployeeListCard.jsx
│   │   │   │   │   │   └── EmployeeSummaryCard.jsx
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── EmployeeForm.jsx
│   │	│   │   │   │   ├── EmployeePersonForm.jsx
│   │	│   │   │   │   ├── EmployeeContactForm.jsx
│   │	│   │   │   │   ├── EmployeeRoleForm.jsx
│   │   │   │   │   │   └── EmployeeDocumentForm.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── EmployeeTable.jsx
│   │	│   │   │   │   ├── EmployeeTableRow.jsx
│   │	│   │   │   │   ├── EmployeeTableHeader.jsx
│   │	│   │   │   │   ├── EmployeeTableActions.jsx
│   │   │   │   │   │   └── EmployeeTablePagination.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── EmployeeFilters.jsx
│   │	│   │   │   │   ├── EmployeeSearchFilter.jsx
│   │	│   │   │   │   ├── EmployeeRoleFilter.jsx
│   │	│   │   │   │   ├── EmployeeDepartmentFilter.jsx
│   │   │   │   │   │   └── EmployeeStatusFilter.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateEmployeeModal.jsx
│   │	│   │   │   │   ├── EditEmployeeModal.jsx
│   │	│   │   │   │   ├── DeleteEmployeeModal.jsx
│   │	│   │   │   │   ├── EmployeeDetailsModal.jsx
│   │   │   │   │   │   └── EmployeeDocumentsModal.jsx
│   │	│   │   │   ├── details/
│   │	│   │   │   │   ├── EmployeeDetailsHeader.jsx
│   │	│   │   │   │   ├── EmployeeDetailsInfo.jsx
│   │	│   │   │   │   ├── EmployeeContactInfo.jsx
│   │	│   │   │   │   ├── EmployeeRoleInfo.jsx
│   │	│   │   │   │   ├── EmployeeDocuments.jsx
│   │   │   │   │   │   └── EmployeeActivityLog.jsx
│   │	│   │   │   ├── attendance/
│   │	│   │   │   │   ├── AttendanceTable.jsx
│   │	│   │   │   │   ├── AttendanceBadge.jsx
│   │	│   │   │   │   ├── CheckInButton.jsx
│   │   │   │   │   │   └── CheckOutButton.jsx
│   │	│   │   │   ├── schedules/
│   │	│   │   │   │   ├── ShiftCalendar.jsx
│   │	│   │   │   │   ├── ShiftCard.jsx
│   │	│   │   │   │   ├── ShiftAssignmentForm.jsx
│   │   │   │   │   │   └── ScheduleOverview.jsx
│   │	│   │   │   ├── payroll/
│   │	│   │   │   │   ├── PayrollCard.jsx
│   │	│   │   │   │   ├── SalarySummary.jsx
│   │	│   │   │   │   ├── PayrollHistory.jsx
│   │   │   │   │   │   └── PayrollStatusBadge.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── EmployeePerformanceChart.jsx
│   │	│   │   │   │   ├── AttendanceChart.jsx
│   │	│   │   │   │   ├── EmployeeStats.jsx
│   │   │   │   │   │   └── WorkforceSummaryCard.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── EmployeeHeader.jsx
│   │	│   │   │       ├── EmployeeActions.jsx
│   │	│   │   │       ├── EmployeeMeta.jsx
│   │	│   │   │       ├── EmployeeTags.jsx
│   │	│   │   │       ├── EmployeeEmptyState.jsx
│   │   │   │   │       └── EmployeeErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useEmployees.js
│   │	│   │   │   ├── useEmployee.js
│   │	│   │   │   ├── useCreateEmployee.js
│   │	│   │   │   ├── useUpdateEmployee.js
│   │	│   │   │   ├── useDeleteEmployee.js
│   │	│   │   │   ├── useEmployeeFilters.js
│   │	│   │   │   ├── useEmployeeSearch.js 
│   │	│   │   │   ├── useEmployeePagination.js
│   │	│   │   │   ├── useAttendance.js
│   │	│   │   │   ├── useShiftSchedule.js
│   │   │   │   │   └── usePayroll.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── EmployeePage.jsx
│   │	│   │   │   ├── EmployeeDetailsPage.jsx
│   │	│   │   │   ├── CreateEmployeePage.jsx
│   │	│   │   │   ├── EditEmployeePage.jsx
│   │	│   │   │   ├── ShiftSchedulePage.jsx
│   │	│   │   │   ├── PayrollPage.jsx
│   │   │   │   │   └── EmployeeAnalyticsPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── employee.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── employee.constants.js
│   │	│   │   │   ├── employee.roles.js 
│   │	│   │   │   ├── employee.status.js
│   │   │   │   │   └── employee.departments.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── employeeForm.schema.js 
│   │	│   │   │   ├── employeeFilter.schema.js
│   │	│   │   │   ├── attendance.schema.js
│   │   │   │   │   └── payroll.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── employee.helpers.js
│   │	│   │   │   ├── employee.formatters.js
│   │	│   │   │   ├── employee.permissions.js 
│   │	│   │   │   ├── employee.Calculations.js
│   │   │   │   │   └── employee.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── EmployeeCard.test.jsx
│   │	│   │   │   ├── EmployeeTable.test.jsx
│   │   │   │   │   └── employee.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── employee.mock.js
│   │   │   │   │   └── employee.data.js
│   │   │   │   └── index.js
│   │   │   │
│   │	│   ├── billings/
│   │	│   │   ├── api/
│   │	│   │   │   ├── billing.api.js
│   │	│   │   │   ├── billing.queries.js
│   │	│   │   │   ├── billing.mutations.js
│   │	│   │   │   ├── billing.endpoints.js
│   │	│   │   │   ├── billing.mapper.js
│   │	│   │   │   ├── billing.adapter.js
│   │	│   │   │   ├── billing.schema.js
│   │	│   │   │   ├── billing.keys.js
│   │   │   │   │   └── billing.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── InvoiceCard.jsx
│   │	│   │   │   │   ├── PaymentCard.jsx
│   │	│   │   │   │   ├── RevenueCard.jsx
│   │   │   │   │   │   └── BillingSummaryCard.jsx
│   │	│   │   │   ├── forms/
│   │	│   │   │   │   ├── InvoiceForm.jsx
│   │	│   │   │   │   ├── PaymentForm.jsx
│   │	│   │   │   │   ├── RefundForm.jsx
│   │	│   │   │   │   ├── DiscountForm.jsx
│   │   │   │   │   │   └── TaxForm.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── InvoiceTable.jsx
│   │	│   │   │   │   ├── InvoiceTableRow.jsx
│   │	│   │   │   │   ├── InvoiceTableHeader.jsx
│   │	│   │   │   │   ├── InvoiceTableActions.jsx
│   │	│   │   │   │   ├── PaymentTable.jsx
│   │   │   │   │   │   └── PaymentTablePagination.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── BillingFilters.jsx
│   │	│   │   │   │   ├── PaymentStatusFilter.jsx
│   │	│   │   │   │   ├── InvoiceStatusFilter.jsx
│   │	│   │   │   │   ├── DateRangeFilter.jsx
│   │   │   │   │   │   └── PaymentMethodFilter.jsx
│   │	│   │   │   ├── modals/
│   │	│   │   │   │   ├── CreateInvoiceModal.jsx
│   │	│   │   │   │   ├── RecordPaymentModal.jsx
│   │	│   │   │   │   ├── RefundPaymentModal.jsx
│   │	│   │   │   │   ├── InvoiceDetailsModal.jsx
│   │   │   │   │   │   └── PaymentDetailsModal.jsx
│   │	│   │   │   ├── details/
│   │	│   │   │   │   ├── InvoiceDetails.jsx
│   │	│   │   │   │   ├── InvoiceLineItems.jsx
│   │	│   │   │   │   ├── PaymentDetails.jsx
│   │	│   │   │   │   ├── RefundDetails.jsx
│   │   │   │   │   │   └── TaxBreakdown.jsx
│   │	│   │   │   ├── status/
│   │	│   │   │   │   ├── InvoiceStatusBadge.jsx
│   │	│   │   │   │   ├── PaymentStatusBadge.jsx
│   │	│   │   │   │   ├── RefundStatusBadge.jsx
│   │   │   │   │   │   └── PaymentMethodBadge.jsx
│   │	│   │   │   ├── analytics/
│   │	│   │   │   │   ├── RevenueChart.jsx
│   │	│   │   │   │   ├── PaymentMethodChart.jsx
│   │	│   │   │   │   ├── BillingStats.jsx
│   │   │   │   │   │   └── RevenueSummaryCard.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── BillingHeader.jsx
│   │	│   │   │       ├── BillingActions.jsx
│   │	│   │   │       ├── BillingMeta.jsx
│   │	│   │   │       ├── BillingTags.jsx
│   │	│   │   │       ├── BillingEmptyState.jsx
│   │   │   │   │       └── BillingErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useInvoices.js
│   │	│   │   │   ├── useInvoice.js
│   │	│   │   │   ├── useCreateInvoice.js
│   │	│   │   │   ├── useUpdateInvoice.js
│   │	│   │   │   ├── useDeleteInvoice.js
│   │	│   │   │   ├── usePayments.js
│   │	│   │   │   ├── usePayment.js 
│   │	│   │   │   ├── useRecordPayment.js
│   │	│   │   │   ├── useRefundPayment.js
│   │	│   │   │   ├── useBillingFilters.js
│   │   │   │   │   └── useRevenueAnalytics.js 
│   │	│   │   ├── pages/
│   │	│   │   │   ├── BillingPage.jsx
│   │	│   │   │   ├── invoiceDetailsPage.jsx
│   │	│   │   │   ├── CreateInvoicePage.jsx
│   │	│   │   │   ├── PaymentsPage.jsx
│   │	│   │   │   ├── RefundsPage.jsx
│   │   │   │   │   └── BillingAnalyticsPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── billing.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── billing.constants.js
│   │	│   │   │   ├── invoice.status.js 
│   │	│   │   │   ├── payment.status.js
│   │   │   │   │   └── payment.methods.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── InvoiceForm.schema.js 
│   │	│   │   │   ├── paymentForm.schema.js
│   │	│   │   │   ├── refundForm.schema.js
│   │   │   │   │   └── billingFilter.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── billing.helpers.js
│   │	│   │   │   ├── billing.formatters.js
│   │	│   │   │   ├── billing.calculations.js 
│   │	│   │   │   ├── billing.permissions.js
│   │   │   │   │   └── billing.transformers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── InvoiceCard.test.jsx
│   │	│   │   │   ├── InvoiceTable.test.jsx
│   │   │   │   │   └── billing.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── billing.mock.js
│   │   │   │   │   └── billing.data.js
│   │   │   │   └── index.js
│   │   │   │
│   │	│   ├── reports/
│   │	│   │   ├── api/
│   │	│   │   │   ├── report.api.js
│   │	│   │   │   ├── report.queries.js
│   │	│   │   │   ├── report.endpoints.js
│   │	│   │   │   ├── report.mapper.js
│   │	│   │   │   ├── report.adapter.js
│   │	│   │   │   ├── report.schema.js
│   │	│   │   │   ├── report.keys.js
│   │   │   │   │   └── report.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── cards/
│   │	│   │   │   │   ├── KPIRevenueCard.jsx
│   │	│   │   │   │   ├── KPIOccupancyCard.jsx
│   │	│   │   │   │   ├── KPIBookingCard.jsx
│   │	│   │   │   │   ├── KPIGuestCard.jsx
│   │   │   │   │   │   └── KPIEmployeeCard.jsx
│   │	│   │   │   ├── charts/
│   │	│   │   │   │   ├── RevenueChart.jsx
│   │	│   │   │   │   ├── OccupancyReportChart.jsx
│   │	│   │   │   │   ├── BookinTrendChart.jsx
│   │	│   │   │   │   ├── GuestDemographicChart.jsx
│   │	│   │   │   │   ├── RoomPerformanceChart.jsx
│   │	│   │   │   │   ├── PaymentMethodChart.jsx
│   │   │   │   │   │   └── EmployeePerformanceChart.jsx
│   │	│   │   │   ├── tables/
│   │	│   │   │   │   ├── RevenueReportTable.jsx
│   │	│   │   │   │   ├── ReservationReportTable.jsx
│   │	│   │   │   │   ├── GuestReportTable.jsx
│   │	│   │   │   │   ├── EmployeeReportTable.jsx
│   │   │   │   │   │   └── FinancialReportTable.jsx
│   │	│   │   │   ├── filters/
│   │	│   │   │   │   ├── ReportFilters.jsx
│   │	│   │   │   │   ├── DateRangeFilter.jsx
│   │	│   │   │   │   ├── ReportTypeFilter.jsx
│   │	│   │   │   │   ├── DepartmentFilter.jsx
│   │   │   │   │   │   └── ExportFilter.jsx
│   │	│   │   │   ├── exports/
│   │	│   │   │   │   ├── ExportCSVButton.jsx
│   │	│   │   │   │   ├── ExportExcelButton.jsx
│   │	│   │   │   │   ├── ExportPDFButton.jsx
│   │   │   │   │   │   └── PrintReportButton.jsx
│   │	│   │   │   ├── dashboards/
│   │	│   │   │   │   ├── RevenueDashboard.jsx
│   │	│   │   │   │   ├── OccupancyDashboard.jsx
│   │	│   │   │   │   ├── ReservationDashboard.jsx
│   │	│   │   │   │   ├── GuestDashboard.jsx
│   │   │   │   │   │   └── ExecutiveDashboard.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── ReportHeader.jsx
│   │	│   │   │       ├── ReportActions.jsx
│   │	│   │   │       ├── ReportMeta.jsx
│   │	│   │   │       ├── ReportEmptyState.jsx
│   │   │   │   │       └── ReportErrorState.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useRevenueReport.js
│   │	│   │   │   ├── useOccupancyReport.js
│   │	│   │   │   ├── useReservationReport.js
│   │	│   │   │   ├── useGuestReport.js
│   │	│   │   │   ├── useEmployeeReport.js
│   │	│   │   │   ├── useFinancialReport.js
│   │	│   │   │   ├── useReportFilter.js 
│   │	│   │   │   ├── useExportReport.js
│   │   │   │   │   └── useDashboardMetrics.js
│   │	│   │   ├── pages/
│   │	│   │   │   ├── ReportsPage.jsx
│   │	│   │   │   ├── RevenueReportPage.jsx
│   │	│   │   │   ├── OccupancyReportPage.jsx
│   │	│   │   │   ├── ReservationReportPage.jsx
│   │	│   │   │   ├── GuestReportPage.jsx
│   │	│   │   │   ├── EmployeeReportPage.jsx
│   │	│   │   │   ├── FinancialReportPage.jsx
│   │   │   │   │   └── ExecutiveDashboardPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── report.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── report.constants.js
│   │	│   │   │   ├── report.status.js 
│   │	│   │   │   ├── export.types.js
│   │   │   │   │   └── dashboard.types.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── reportFilter.schema.js
│   │	│   │   │   ├── export.schema.js
│   │   │   │   │   └── dashboard.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── report.helpers.js
│   │	│   │   │   ├── report.formatters.js
│   │	│   │   │   ├── report.calculations.js 
│   │	│   │   │   ├── report.transformers.js
│   │   │   │   │   └── report.exporters.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── RevenueChart.test.jsx
│   │	│   │   │   ├── ReportFilter.test.jsx
│   │   │   │   │   └── report.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── report.mock.js
│   │   │   │   │   └── report.data.js
│   │   │   │   └── index.js
│   │   │   │
│   │   │   └── settings/
│   │	│   │   ├── api/
│   │	│   │   │   ├── settings.api.js
│   │	│   │   │   ├── settings.queries.js
│   │	│   │   │   ├── settings.mutations.js
│   │	│   │   │   ├── settings.endpoints.js
│   │	│   │   │   ├── settings.mapper.js
│   │	│   │   │   ├── settings.adapter.js
│   │	│   │   │   ├── settings.schema.js
│   │	│   │   │   ├── settings.keys.js
│   │   │   │   │   └── settings.validator.js
│   │	│   │   ├── components/
│   │	│   │   │   ├── hotel/
│   │	│   │   │   │   ├── HotelProfileForm.jsx
│   │	│   │   │   │   ├── HotelLogoUploader.jsx
│   │	│   │   │   │   ├── HotelAddressForm.jsx
│   │   │   │   │   │   └── HotelContactForm.jsx
│   │	│   │   │   ├── reservations/
│   │	│   │   │   │   ├── ReservationPolicyForm.jsx
│   │	│   │   │   │   ├── CheckInSettings.jsx
│   │	│   │   │   │   ├── CheckOutSettings.jsx
│   │   │   │   │   │   └── CancellationPolicyForm.jsx
│   │	│   │   │   ├── rooms/
│   │	│   │   │   │   ├── RoomTypeSettings.jsx
│   │	│   │   │   │   ├── AmenitiesSettings.jsx
│   │	│   │   │   │   ├── PricingSettings.jsx
│   │   │   │   │   │   └── RoomStatusSetting.jsx
│   │	│   │   │   ├── billing/
│   │	│   │   │   │   ├── TaxSettings.jsx
│   │	│   │   │   │   ├── CurrencySettings.jsx
│   │	│   │   │   │   ├── InvoiceSettings.jsx
│   │   │   │   │   │   └── PaymentGatewaySettings.jsx
│   │	│   │   │   ├── notifications/
│   │	│   │   │   │   ├── EmailSettings.jsx
│   │	│   │   │   │   ├── SmsSettings.jsx
│   │	│   │   │   │   ├── PushNotificationSettings.jsx
│   │   │   │   │   │   └── NotificationTemplates.jsx
│   │	│   │   │   ├── security/
│   │	│   │   │   │   ├── PasswordPolicySettings.jsx
│   │	│   │   │   │   ├── SessionSettings.jsx
│   │	│   │   │   │   ├── TwoFactorSettings.jsx
│   │   │   │   │   │   └── AccessControlSettings.jsx
│   │	│   │   │   ├── integrations/
│   │	│   │   │   │   ├── PaymentProviderSettings.jsx
│   │	│   │   │   │   ├── EmailProviderSettings.jsx
│   │	│   │   │   │   ├── SmsProviderSettings.jsx
│   │   │   │   │   │   └── ThirdPartyIntegration.jsx
│   │   │   │   │   └── shared/
│   │	│   │   │       ├── SettingsHeader.jsx
│   │	│   │   │       ├── SettingsSidebar.jsx
│   │	│   │   │       ├── SettingSection.jsx
│   │	│   │   │       ├── SettingsLoading.jsx
│   │   │   │   │       └── SettingsError.jsx
│   │	│   │   ├── hooks/
│   │	│   │   │   ├── useSettings.js
│   │	│   │   │   ├── useHotelSettings.js
│   │	│   │   │   ├── useRoomSettings.js
│   │	│   │   │   ├── useReservationSettings.js
│   │	│   │   │   ├── useBillingSettings.js
│   │	│   │   │   ├── useNotificationSettings.js 
│   │	│   │   │   ├── useSecuritySettings.js
│   │   │   │   │   └── useIntegrationSetting.js
│   │	│   │   ├── pages/
│   │	│   │   │   ├── SettingsPage.jsx
│   │	│   │   │   ├── HotelSettingsPage.jsx
│   │	│   │   │   ├── ReservationSettingsPage.jsx
│   │	│   │   │   ├── RoomSettingsPage.jsx
│   │	│   │   │   ├── BillingSettingPage.jsx
│   │	│   │   │   ├── NotificationSettingPage.jsx
│   │	│   │   │   ├── SecuritySettingsPage.jsx
│   │   │   │   │   └── IntegrationSettingsPage.jsx 
│   │	│   │   ├── routes/
│   │   │   │   │   └── settings.routes.jsx
│   │	│   │   ├── constants/
│   │	│   │   │   ├── settings.constants.js
│   │	│   │   │   ├── currencies.js 
│   │	│   │   │   ├── timezones.js
│   │   │   │   │   └── languages.js 
│   │	│   │   ├── schemas/
│   │	│   │   │   ├── hotelSettings.schema.js
│   │	│   │   │   ├── billingSettings.schema.js
│   │	│   │   │   ├── securitySettings.schema.js
│   │   │   │   │   └── notificationSettings.schema.js 
│   │	│   │   ├── utils/
│   │	│   │   │   ├── settings.helpersjs
│   │	│   │   │   ├── settings.formatters.js 
│   │	│   │   │   ├── settings.permissions.js
│   │   │   │   │   └── settings.transfermers.js 
│   │	│   │   ├── tests/
│   │	│   │   │   ├── SettingsPage.test.jsx
│   │	│   │   │   ├── HotelSettingsForm.test.jsx
│   │   │   │   │   └── settings.helpers.test.js 
│   │	│   │   ├── mocks/
│   │	│   │   │   ├── settings.mock.js
│   │   │   │   │   └── settings.data.js
│   │   │   │   └── index.js
│   │   ├── components/
│   │	│   ├── ui/
│   │	│   │   ├── Button/
│   │	│   │   ├── Input/
│   │	│   │   ├── Select/
│   │	│   │   ├── Textarea/
│   │	│   │   ├── Checkbox/
│   │	│   │   ├── Radio/
│   │	│   │   ├── Switch/
│   │	│   │   ├── Badge/
│   │	│   │   ├── Avatar/
│   │	│   │   ├── Spinner/
│   │	│   │   ├── Skeleton/
│   │	│   │   ├── Alert/
│   │	│   │   ├── Modal/
│   │	│   │   ├── Drawer/
│   │	│   │   ├── Accordion/
│   │	│   │   ├── Pagination/
│   │	│   │   ├── Table/
│   │	│   │   ├── Card/
│   │   │   │   └── index.js
│   │	│   ├── forms/
│   │	│   │   ├── FormField.jsx
│   │	│   │   ├── FormLabel.jsx
│   │	│   │   ├── FormError.jsx
│   │	│   │   ├── FormAction.jsx
│   │   │   │   └── index.js
│   │	│   ├── data-display/
│   │	│   │   ├── DataTable.jsx
│   │	│   │   ├── DataGrid.jsx
│   │	│   │   ├── EmptyState.jsx
│   │	│   │   ├── ErrorState.jsx
│   │	│   │   ├── LoadingState.jsx
│   │   │   │   └── index.js
│   │	│   ├── navigation/
│   │	│   │   ├── Sidebar.jsx
│   │	│   │   ├── Navbar.jsx
│   │	│   │   ├── Breadcrumb.jsx 
│   │	│   │   ├── Menu.jsx
│   │   │   │   └── index.js
│   │	│   ├── feedback/
│   │	│   │   ├── Toast.jsx 
│   │	│   │   ├── ConfirmationDialog.jsx 
│   │	│   │   ├── SuccessMessage.jsx 
│   │   │   │   └── index.js
│   │	│   ├── charts/
│   │	│   │   ├── LineChart.jsx
│   │	│   │   ├── BarChart.jsx 
│   │	│   │   ├── PieChart.jsx
│   │   │   │   └── index.js
│   │	│   ├── layout/
│   │	│   │   ├── PageHeader.jsx 
│   │	│   │   ├── PageContainer.jsx
│   │	│   │   ├── Section.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── services/
│   │	│   ├── api/
│   │	│   │   ├── axiosClient.js
│   │	│   │   ├── apiClient.js
│   │	│   │   ├── request.js
│   │	│   │   ├── response.js
│   │   │   │   └── interceptor.js
│   │	│   ├── auth/
│   │	│   │   ├── authServce.js
│   │	│   │   ├── tokenService.js
│   │   │   │   └── permissionService.js
│   │	│   ├── storage/
│   │	│   │   ├── localStorage.js
│   │	│   │   ├── sessionStorage.js
│   │   │   │   └── cookieStorage.js
│   │	│   ├── notifications/
│   │	│   │   ├── toastService.js
│   │	│   │   ├── emailService.js
│   │   │   │   └── smsService.js
│   │	│   ├── upload/
│   │	│   │   ├── imageUploadService.js
│   │	│   │   ├── fileUploadService.js
│   │   │   │   └── cloudinaryService.js
│   │	│   ├── analytics/
│   │	│   │   ├── analyticsService.js
│   │	│   │   ├── trackingService.js
│   │   │   │   └── eventService.js
│   │	│   ├── websocket/
│   │	│   │   ├── socketClient.js
│   │   │   │   └── realtimeService.js
│   │	│   ├── pringting/
│   │	│   │   ├── request.js
│   │	│   │   ├── rsponse.js
│   │   │   │   └── interceptor.js
│   │	│   ├── export/
│   │	│   │   ├── request.js
│   │	│   │   ├── rsponse.js
│   │   │   │   └── interceptor.js
│   │   │   └── index.js
│   │   ├── hooks/
│   │	│   ├── useDebounce.js
│   │	│   ├── usePagination.js
│   │	│   ├── useSearch.js
│   │	│   ├── useFilter.js 
│   │	│   ├── useSort.js 
│   │	│   ├── useModal.js 
│   │	│   ├── useLocalStorage.js 
│   │	│   ├── useSessionStorage.js 
│   │	│   ├── usePermissions.js
│   │	│   ├── useCurrentUser.js 
│   │	│   ├── useNotification.js 
│   │	│   ├── usePageTitle.js 
│   │	│   ├── useExport.js 
│   │	│   ├── usePrint.js
│   │   │   └── useRealtime.js
│   │   ├── utils/
│   │   ├── constants/
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
