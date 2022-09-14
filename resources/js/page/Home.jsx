import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../helpers/http";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from "../store/reducers/reduser";

export default function Home() {
    const count = 5;
    const dispatch = useDispatch();
    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1);
    let [total, setTotal] = useState(0);
    let usersStore = useSelector((state) => state.user.users);


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

    const addUserInStorage = () => {
        dispatch(addUser({
            "name": "Lola",
        }));
    }

    console.log(usersStore);

    return (
        <Layout>
            <h4>Home Content</h4>

            <UserList users={users}/>

            <Pagination onChange={handleChange} count={total} page={page} variant="outlined" color="primary" />

            <button onClick={addUserInStorage}>Add User to Storage</button>

            <h4>Users from stores:</h4>
            {
                usersStore.map((element) => {
                    return <div>{element.payload.name}</div>
                })
            }
        </Layout>
    );
}
