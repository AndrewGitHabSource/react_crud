import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/add-user">Add User</Link>
    </nav>;
}
