import React from "react";
import fa from "../../../public/build/assets/Home.f7085b35";

const ErrorComponent = () => {
    return <h1>Something went wrong. Error!</h1>;
};

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null,
        };
    }

    static getDerivedStateFromError = error => {
        return { hasError: true };
    };

    componentDidCatch = (error, info) => {
        this.setState({
            error,
            info
        });
    };

    render() {
        const {hasError, error, info} = this.state;
        const {children} = this.props;

        return hasError ? <ErrorComponent /> : children;
    }
}
