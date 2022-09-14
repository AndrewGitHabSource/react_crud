import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../helpers/http";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Home() {
    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1);
    let [total, setTotal] = useState(0);
    const count = 5;

    useEffect(() => {
        getUsers(page).then((response) => {
            const {data} = response;
            setUsers(data.users);
            setTotal(Math.ceil(data.total / count));
        }).catch((error) => {
            console.log(error);
        });
    }, [page]);

    const handleChange = (e, p) => {
        setPage(p);
    };

    const usersStore = useSelector((state) => state.user.users);
    console.log(usersStore);

    return (
        <Layout>
            <h4>Home Content</h4>

            <UserList users={users}/>

            <Pagination onChange={handleChange} count={total} page={page} variant="outlined" color="primary" />

            <h4>Users from stores:</h4>
            {
                usersStore.map((element) => {
                    return <div>{element.name}</div>
                })
            }
        </Layout>
    );
}
