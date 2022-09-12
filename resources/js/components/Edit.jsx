const Edit = ({onSave}) => {

    return (
        <form className="edit-form">
            <div className="form-control">
                <label>User Name:</label>
                <input type="text" placeholder="Name User" />
            </div>

            <div className="form-control">
                <label>User Email:</label>
                <input type="text" placeholder="Email User" />
            </div>

            <div className="form-control">
                <label>User Password:</label>
                <input type="text" placeholder="Password User" />
            </div>

            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}
export default Edit
