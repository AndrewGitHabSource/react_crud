import Layout from "../components/Layout";
import Edit from "../components/Edit";
import ErrorBoundary from "../errors/ErrorBoundary";

export default function AddUser() {
    return (
        <Layout>
            <h4>Add User Content</h4>

            <ErrorBoundary>
                <Edit type={'add'} />
            </ErrorBoundary>
        </Layout>
    );
}
