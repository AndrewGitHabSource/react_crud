import Layout from "../components/Layout";
import Edit from "../components/Edit";
import { getUser } from "../helpers/http";
import { useEffect, useState } from "react";
import { useParams, Route } from "react-router";
import ErrorBoundary from "../errors/ErrorBoundary";

export default function EditUser() {
    let [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getUser(id).then((response) => {
            const {data} = response;
            setUser(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <Layout>
            <h4>Edit User Content</h4>

            <ErrorBoundary>
                <Edit type={'edit'} data={user} />
            </ErrorBoundary>
        </Layout>
    );
}
