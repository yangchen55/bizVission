
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage'



import Home from './pages/HomePage/Home';
import Acquiring from './pages/platform/Acquiring/Acquiring';
import Selling from './pages/platform/selling&Raising/Selling';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/whoweare' element={<AboutUs />} />
          <Route path='/whoweare/careetAtBizvision' element={<CareersPage />} />
          <Route path='selling-raising' element={<Selling />} />
          <Route path='/buying-investing' element={<Acquiring />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
