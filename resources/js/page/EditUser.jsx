import Layout from "../components/Layout";
import Edit from "../components/Edit";
import { getUser } from "../helpers/http";
import { useEffect, useState } from "react";
import {useParams, Route} from "react-router";

export default function EditUser() {
    let [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getUser(id).then((response) => {
            const {data} = response;
            setUser(data);
        });
    }, []);

    return <Layout>
        <h4>Edit User Content</h4>

        <Edit type={'Edit'} data={user} />
    </Layout>;
}
