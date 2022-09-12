import Header from "../components/Header";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";

export default function Home() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://crud-react.loc/api/').then((response) => {
            setUsers(response.data);
        });
    }, []);

    return <Layout>
        <h4>Home Content</h4>

        <UserList users={users}/>
    </Layout>;
}
