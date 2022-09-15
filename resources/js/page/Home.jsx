import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import Pagination from "@mui/material/Pagination";
import { apiUser, useGetUsersQuery } from "../store/queries/apiUser";

export default function Home() {
    const count = 5;
    let [page, setPage] = useState(1);
    const { data, error, isLoading, refetch, currentData } = useGetUsersQuery(page);

    const handleChange = (e, p) => {
        setPage(p);
    };

    return (
        <Layout>
            <h4>Home Content</h4>

            { !isLoading ? <UserList users={data.users}/> : '' }
            { !isLoading ? <Pagination onChange={handleChange} count={Math.ceil(data.total / count)} page={page} variant="outlined" color="primary" /> : '' }
        </Layout>
    );
}
