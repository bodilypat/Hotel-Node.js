//src/features/rooms/api/room.mutations.js
import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    createRoom,
    updateRoom,
    deleteRoom,
    updateRoomStatus,
    uploadRoomImages,
    deleteRoomImage,
    bookRoom,
    bulkUpdateRoomStatus,
    duplicateRoom,
} from  "./rooms.api";

import { ROOM_QUERY_KEYS } from "../roomQueryKeys";

/* ---------------------------
**    Room Mutation Hooks
** ---------------------------
** Handles:
** create
** update 
** delete 
** booking 
** images 
** status updates 
** ---------------------------
*/

/* CREATE ROOM */
export const useCreateRoomMutation = (
    options = {}
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoom,

        onSuccess: (data, variables, context) => { 
            queryClient.invalidateQueries({
                querykey: [ROOM_QUERY_KEYS.ROOMS],
            });

            options?.onSuccess?.(
                data,
                variables,
                context 
            );
        },

        ...options,
    });
};

/* UPDATE ROOM */
export const useUpdateRoomMutation = (
    options = {}
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateRoom,

        onSuccess: (data, variables, context) => { 
            const roomId = variables?.roomId;

            queryClient: invalidateQueries({
                queryKey: [ROOM_QUERY_KEYS.ROOMS],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOM,
                    roomId,
                ],
            });

            options?.onSuccess?.(
                data,
                variables,
                context 
            );
        },

        ...options,
    });
};

/* DELETE ROOM */

export const useDeleteRoomMutation = (
    options = {} 
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteRoom,

        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: [ROOM_QUERY_KEYS, ROOMS],
            });

            options?.onSuccess?.(
                data,
                variables,
                context
            );
        },

        ...options,
    });
};

/* UPDATE ROOM STATUS MUTATION */
export const useUpdateRoomStatusMutation = (
    options = {}
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateRoomStatus,

        onSuccess: (
            data, 
            variables, 
            context
        ) => {
            const roomId = variables?.roomId;

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOMS
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOM,
                    roomId,
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOM_AVAILABILITY,
                ],
            }),

            options.onSuccess?.(
                data,
                variable,
                contex 
            );
        },

        ...options,
    });
};

/* UPDATE ROOM IMAGES */
export const useUploadRoomImagesMutation = (
    options = {}
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: uploadRoomImages,

        onSuccess: (
            data, 
            variables, 
            context
        ) => {
            const roomId = variables?.roomId;

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOM,
                    roomId,
                ],
            });

            option?.onSuccess?.(
                data, 
                variables,
                context 
            ); 
        },

        ...options,
    });
};

/* DELETE ROOM IMAGE */
export const useDeleteRoomImageMutation = 
    (options = {}) => {
        const queryClient = 
            useQueryClient();

        return useMutation({
            mutationfn:
                deleteRoomImage,

            onSuccess: (
                data,
                variable,
                context
            ) => {
                const roomId = 
                    variables?.roomId

                queryClient.invalidateQueries({
                    queryKey: [
                        ROOM_QUERY_KEYS.ROOM,
                        roomId, 
                    ],
                });

                options?.onSucess?.(
                    data,
                    variables,
                    context 
                );
            },

            ...options, 
        }); 
    };

/* BOOK ROOM */
export const useBookRoomMutation = (
    options = {}
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: bookRoom,

        onSuccess: (
            data,
            variables,
            context 
        ) => {
            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOMS,
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.ROOM_AVAILABILITY,
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    ROOM_QUERY_KEYS.BOOKINGS,
                ],
            });

            options?.onSuccess?.(
                data,
                variables,
                context 
            );
        },

        ... options,
    })
};

/* BULK UPDATE ROOM STATUS */
export const useBulkUpdateRoomStatusMutation = 
    (options = {}) => {
        const queryClient = 
            useQueryClient();

        return useMutation({
            mutationFn:
                bulkUpdateRoomStatus,

            onSuccess: (
                data,
                variables,
                context 
            ) => {
                queryClient.invalidateQueries({
                    queryKey: [
                        ROOM_QUERY_KEYS.ROOMS,
                    ],
                });

                options?.onSuccess?.(
                    data,
                    variables,
                    context 
                );
            },

            ...options, 
        });
    };

/* DUPLICATE ROOM  */
export const useDuplicateRoomMutation = 
    (options = []) => {
        const queryClient = 
            useQueryClient();

        return useMutation({
            mutationFn:
                duplicateRoom,
            onSuccess: (
                data,
                variables,
                context 
            ) => {
                queryClient.invalidateQueries({
                    queryKey: [
                        ROOM_QUERY_KEYS.ROOMS,
                    ],
                });

                options.onSuccess?.(
                    data,
                    variables,
                    context 
                );
            },

            ...options,
        });
    };




