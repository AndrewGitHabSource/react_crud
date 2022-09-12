import {useEffect} from "react";
import { useState } from 'react';
import Swal from "sweetalert2";
import { saveUser } from "../helpers/http";

const Edit = ({type, data}) => {
    console.log(data);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (data.name) {
            setName(data.name);
        }
        if (data.email) {
            setEmail(data.email);
        }
    });

    const submitForm = async (e) => {
        e.preventDefault();

        if (!name) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect!'
            })
        } else if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect!'
            })
        } else if (!password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect!'
            })
        } else {
            await saveUser({ name, email, password });
        }
    }

    return (
        <form onSubmit={submitForm} className="edit-form">
            <div className="form-control">
                <label>User Name:</label>
                <input type="text" placeholder="Name User" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-control">
                <label>User Email:</label>
                <input type="text" placeholder="Email User" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-control">
                <label>User Password:</label>
                <input type="password" placeholder="Password User" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}
export default Edit
