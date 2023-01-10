import { Link } from "react-router-dom";
import '../styles/landingPage.css';
const LandingPage = () => {

    return (

        <div className="LandingPage">
            <div className="selectLoginType" >
                <h2>Library Management System</h2>
                <img src="/images/img1.png" alt="" />
                <img src="/images/images.jfif" alt="" /><br /><br />
                <Link to='/admin-login'>Admin Login</Link>
                <Link to='/user-login'>User Link</Link>
            </div>

        </div>
    );
}
export default LandingPage;