import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../helpers/http";
import Pagination from "@mui/material/Pagination";

export default function Home() {
    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        getUsers(page).then((response) => {
            const {data} = response;
            setUsers(data);
        }).catch((error) => {
            console.log(error);
        });

    }, [page]);

    const handleChange = (e, p) => {
        setPage(p);
    };

    return <Layout>
        <h4>Home Content</h4>

        <UserList users={users}/>

        <Pagination onChange={handleChange} count={3} page={page} variant="outlined" color="primary" />
    </Layout>;
}
