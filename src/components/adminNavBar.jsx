import '../styles/adminNavBar.css';
import { Link } from "react-router-dom";

const AdminNavBar = () => {
    return (

        <div className="AdminNavBar">
            <h2>Admin Protal</h2>

            <div className="linkss">
                <Link to="/admin/">Dashboard</Link>
                <Link to="book-add">Add Book</Link>
                <Link to="user-add">Add User</Link>
                <Link to="book-list">Book List</Link>
                <Link to="user-list">User List</Link>
                <Link to="/">Logout</Link>
            </div>

        </div>
    );
}


export default AdminNavBar;