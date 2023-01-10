import AdminDashoard from "./adminDashboard";
import AdminNavBar from "./adminNavBar";
import { Routes,Route } from "react-router-dom";

import '../styles/adminHome.css';
import BookList from "./bookList";
import UserList from "./userList";
import Adduser from "./addUser";
import AddBook from "./addBook";
import ReadBook from "./readBook";


const AdminHome =()=>{
    return(

        <div className="adminHome">

            <AdminNavBar/>
            <Routes>
                <Route path='/' element={<AdminDashoard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='/user-add' element={<Adduser/>}/>
                <Route path='/book-add' element={<AddBook/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
                
            </Routes>
            
        </div>
    )

}
export default AdminHome;