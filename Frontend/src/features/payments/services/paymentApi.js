//src/features/payments/paymentApi.js 
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../services/axios";

export const paymentApi = createApi({
    reducerPath: "paymentpi",

    baseQuery: axiosBaseQuery(),

    tagTypes: ["Payments"],

    endpoints: (builder) => ({
        getPayments: builder.query({
            query: () => ({
                url: "/payments",
                method: "GET",
            }),

            providesTags: ["Payemnts"],
        }),

        getPayment: builder.query({
            query: (id) => ({
                url: `/payments/${id}`,
                method: "GET",
            }),
        }),

        createPayment: builder.mutation({
            query: (date) => ({
                url: "/payments",
                method: "POST",
                data,
            }),

            invalidatesTags: ["Payments"],
        }),

        updatePayment: builder.mutation({
            query: ({ id, ...date }) => ({
                url: `/payments/${id}`,
                method: "PUT",
                data,
            }),
            invalidatesTags: ["Payments"],
        }),

        deletePayment: builder.mutation({
            query: (id) => ({
                url: `'payments/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Payments"],
        }),
    }),
});

export const {
    useGetPaymentsQuery,
    useGetPaymentQuery,
    useCreatePaymentMutation,
    useUpdatePaymentMutation,
} = paymentApi;

