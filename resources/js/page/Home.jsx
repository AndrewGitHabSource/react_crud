import Header from "../components/Header";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../helpers/http";

export default function Home() {
    let [users, setUsers] = useState([]);

    useEffect(async () => {
        const {data} = await getUsers();
        setUsers(data);
    }, []);

    return <Layout>
        <h4>Home Content</h4>

        <UserList users={users}/>
    </Layout>;
}
