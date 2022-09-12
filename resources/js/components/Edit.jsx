import { useState, useEffect } from 'react';
import { saveUser, editUser } from "../helpers/http";
import Swal from "sweetalert2";

const Edit = ({type, data}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(data);
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
        } else if (!user.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect email!'
            })
        } else if (!user.password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect password!'
            })
        } else {
            if (type === 'add'){
                await saveUser(user);
            } else {
                const id = data.id;
                await editUser({ ...user, id });
            }
        }
    }

    return (
        <form onSubmit={submitForm} className="edit-form">
            <div className="form-control">
                <label>User Name:</label>
                <input type="text" placeholder="Name User" value={user.name} onChange={(e) => setUser({...user, 'name': e.target.value})} />
            </div>

            <div className="form-control">
                <label>User Email:</label>
                <input type="text" placeholder="Email User" value={user.email} onChange={(e) => setUser({...user, 'email': e.target.value})} />
            </div>

            <div className="form-control">
                <label>User Password:</label>
                <input type="password" placeholder="Password User" value={user.password} onChange={(e) => setUser({...user, 'password': e.target.value})} />
            </div>

            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}
export default Edit
