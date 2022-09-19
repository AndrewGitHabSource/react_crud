import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { validate } from '../helpers/validate';
import { useSaveUserMutation, useUpdateUserMutation } from "../store/queries/apiUser";

const Edit = ({type, data}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [saveUser] = useSaveUserMutation();
    const [updateUser] = useUpdateUserMutation();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);

    const submitForm = async (e) => {
        e.preventDefault();

        if (!user.name) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect! name'
            })
        } else if (!user.email || !validate(user.email, 'email')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect email!'
            })
        } else if (!user.password || !validate(user.password, 'password')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect password!'
            })
        } else {
            if (type === 'add') {
                saveUser(user);
                navigate('/');
            } else {
                const id = data.id;
                updateUser({ ...user, id });
                navigate('/');
            }
        }
    }

    return (
        <form onSubmit={submitForm} className="edit-form">
            <div className="form-control">
                <label>User Name:</label>
                <input type="text" placeholder="Name User" value={user.name || ""} onChange={(e) => setUser({...user, 'name': e.target.value})} />
            </div>

            <div className="form-control">
                <label>User Email:</label>
                <input type="text" placeholder="Email User" value={user.email || ""} onChange={(e) => setUser({...user, 'email': e.target.value})} />
            </div>

            <div className="form-control">
                <label>User Password:</label>
                <input type="password" placeholder="Password User" value={user.password || ""} onChange={(e) => setUser({...user, 'password': e.target.value})} />
            </div>

            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}

export default Edit;
