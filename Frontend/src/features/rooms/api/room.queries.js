//src/features/rooms/api/room.queries.js 

import { useQuery } from "@tanstack/react-query";

import {
    getRooms,
    getRoomById,
    getRoomAvailability,
    getFeaturedRooms,
    getRoomAnalytics,
} from "./room.api";

import { ROOM_QUERY_KEYS } from "../constants/roomQueryKeys";

/* -----------------------------
**      Rooms Query Hooks       **
**      React Query hooks for:  **
**      Rooms                   **
**      Room details            **
**      Availability            **
**      Analytics               **
**      Featured Rooms          **
-------------------------------- */

/* GET ALL ROOMS */
export const useRoomsQuery = (
    params = {},
    options = {}
) => {
    return useQuery({
        queryKey: [
            ROOM_QUERY_KEYS.ROOMS,
            params,
        ],

        queryFn: () => 
            getRooms(params),

        keepPreviousData: true,

        staleTime: 
            1000 * 60 * 5,

            ...options,
    });
};

/* GET ROOM BY ID */
export const useRoomQuery = (
    roomId,
    options = {}
) => {
    return useQuery({
        queryKey: [
            ROOM_QUERY_KEYS.ROOM,
            roomId,
        ],

        queryFn: () =>
            getRoomById(roomId),
        
        enabled: Boolean(RoomId),

        staleTime: 
            1000 * 60 * 5,

        ...options,
    });
};

/* GET ROOM AVAIABILITY */
export const useRoomAvailabilityQuery = 
    (
        filters = {},
        options = {}
    ) => {
        return useQuery({
            queryKey: [
                ROOM_QUERY_KEYS.ROOM_AVAILABILITY,
                filters,
            ],

            queryFn: () => 
                getRoomAvailability(
                    filters 
                ),
            
            enabled:
                Boolean(
                    filters?.checkIn
                ) &&
                Boolean(
                    filers?.checkOut 
                ),
            
                keepPreviousData: true,

            staleTime:
                1000 * 60,

                ...options,
        });
    };

/* GET FEATURED ROOMS */
export const useFeaturedRoomsQuery = 
    (options = {}) => {
        return useQuery({
            queryKey: [
                ROOM_QUERY_KEYS.FEATURED_ROOMS,
            ],

            queryFn:
                getFeaturedRooms,

            staleTime: 
                1000 * 60 * 10,

            ...options,
        });
    };

/* GET ROOM ANALYTICS */
export const useRoomAnalyticsQuery = 
(
    params = {},
    options = {}
) => {
    return useQuery({
        queryKey: [
            ROOM_QUERY_KEYS.ROOM_ANALYTICS,
            params,
        ],

        queryFn: () => 
            getRoomAnalytics(
                params 
            ),

        staleTime: 
            1000 * 60 * 10,

        ...options,
    });
};

/* PREFETCH ROOM */
export const prefetchRoomQuery = 
    async ({
        queryClient,
        roomId 
    }) => {
        return queryClient.prefetchQuery({
            queryKey: [
                ROOM_QUERY_KEYS.ROOM,
                roomId,
            ],

            queryFn: () => 
                getRoomById(roomId),
        });
    };

