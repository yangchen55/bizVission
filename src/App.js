
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage'



import Home from './pages/HomePage/Home';
import { HireAdvisor } from './pages/forbusinessBuyers/HireAdvisor';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/whoweare' element={<AboutUs />} />
          <Route path='/whoweare/careetAtBizvision' element={<CareersPage />} />
          <Route path='//howitworks/hiringanadvisor/concealed' element={<HireAdvisor/>} />
        </Routes>
      </BrowserRouter>

     




    </div>
  )
}

export default App;
