// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './components/adminHome';
import AdminLogin from './components/adminLogin';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import UserHome from './components/userHome';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminHome/>}/>
          <Route path='/user/*' element={<UserHome/>}/>
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
