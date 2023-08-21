
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage'
import './App.css'



import Home from './pages/HomePage/Home';
import { HireAdvisor } from './pages/forbusinessBuyers/hireadvisor/HireAdvisor';
import { ExitBusiness } from './pages/forbusinessBuyers/exitbusiness/ExitBusiness';
import { JoinBizvision } from './pages/joinbizvision/JoinBizvision';
import { SignPage } from './pages/signpage/SignPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ToastContainer } from 'react-toastify';
import { Dashboard } from './pages/admindashboard/Dashboard';
import { NewAccVerify } from './pages/NewAccVerify/NewAccVerify';
import { ResetPassword } from './pages/resetpassword/ResetPassword';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/whoweare' element={<AboutUs />} />
          <Route path='/whoweare/careetAtBizvision' element={<CareersPage />} />
          <Route path='//howitworks/hiringanadvisor/concealed' element={<HireAdvisor/>} />
          <Route path='//howitworks/sellingandbuyingforowners/' element={<ExitBusiness/>} />
          <Route path='/request-information' element={<JoinBizvision/>} />
          <Route path='/sign-in' element={<SignPage/>} />
          <Route path='/register-page' element={<RegisterPage/>} />
          
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/verify' element={<NewAccVerify/>} />
          <Route path='/resetpassword' element={<ResetPassword/>} />




        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    

     




    </div>
  )
}

export default App;
