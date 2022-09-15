import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL
    }),
    tagTypes: ['User'],
    entityTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page = 1) => `api?page=${page}`,
            providesTags: ['Users'],
        }),
        getUser: builder.query({
            query: (id) => `api/get-user?id=${id}`,
        }),
        saveUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/save`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Users"],
        }),
        updateUser: builder.mutation({
            query: ({...data }) => ({
                url: `api/edit`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Users"]
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery, useSaveUserMutation, useUpdateUserMutation, onQueryStarted } = apiUser;
