import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page = 1) => `api?page=${page}`,
        }),
        getUser: builder.query({
            query: (id) => `api?id=${id}`,
        }),
        saveUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/save`,
                method: 'POST',
                body: data,
            }),
            transformResponse: (response, meta, arg) => response.data,
        }),
        updateUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/edit`,
                method: 'POST',
                body: data,
            }),
            transformResponse: (response, meta, arg) => response.data,
        }),
    }),
})

export const { useGetUsersQuery, useGetUserQuery, useSaveUserMutation, useUpdateUserMutation } = apiUser;