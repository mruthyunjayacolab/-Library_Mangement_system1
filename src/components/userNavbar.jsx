import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        
        <div className="UserNavBar">
            <h2>User Protal</h2>

            <div className="linkss">
                <Link to="/user/">Home</Link>
                
                <Link to="/user/book-list" >Book List</Link>
                
                <Link to="/">Logout</Link>
            </div>

        </div>
     );
}
 
export default UserNavbar;