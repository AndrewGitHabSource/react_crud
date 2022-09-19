import Layout from "../components/Layout";
import Edit from "../components/Edit";
import { useParams } from "react-router";
import ErrorBoundary from "../errors/ErrorBoundary";
import { useGetUserQuery } from "../store/queries/apiUser";

export default function EditUser() {
    const {id} = useParams();
    const { data, error, isLoading } = useGetUserQuery(id);

    return (
        <Layout>
            <h4>Edit User Content</h4>

            <ErrorBoundary>
                <Edit type={'edit'} data={data} />
            </ErrorBoundary>
        </Layout>
    );
}
