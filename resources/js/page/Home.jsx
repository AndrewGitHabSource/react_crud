import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../helpers/http";

export default function Home() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            const {data} = response;
            setUsers(data);
        });

    }, []);

    return <Layout>
        <h4>Home Content</h4>

        <UserList users={users}/>
    </Layout>;
}
