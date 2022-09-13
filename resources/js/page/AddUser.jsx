import Layout from "../components/Layout";
const Edit = React.lazy(() => import('../components/Edit'));
import ErrorBoundary from "../errors/ErrorBoundary";
import React from "react";

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
