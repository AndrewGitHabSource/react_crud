import Layout from "../components/Layout";
import ErrorBoundary from "../errors/ErrorBoundary";
import React from "react";
const Edit = React.lazy(() => import('../components/Edit'));

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
