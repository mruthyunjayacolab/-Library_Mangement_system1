import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserDashBoard from "./userDashboard";
import UserNavbar from "./userNavbar";
import ReadBook from "./readBook";


const UserHome = () => {
    return ( 

        <div className="userHome">
            <UserNavbar/>
            <Routes>
                <Route path='/'element={<UserDashBoard/>}/>
                <Route path='/book-list/' element={<BookList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
               
            </Routes>


        </div>


     );
}
 
export default UserHome;