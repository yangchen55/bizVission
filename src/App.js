
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage'
import { HireAdvisor } from './pages/forbusinessBuyers/hireadvisor/HireAdvisor';
import { ExitBusiness } from './pages/forbusinessBuyers/exitbusiness/ExitBusiness';
import { JoinBizvision } from './pages/joinbizvision/JoinBizvision';
import Acquiring from './pages/platform/Acquiring/Acquiring';
import Selling from './pages/platform/selling&Raising/Selling';
import ClosedDeals from './pages/ClosedDeals/ClosedDeals';
import Blog from './pages/Blog/Blog';
import BlogCard from './pages/Blog/BlogCard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/whoweare' element={<AboutUs />} />
          <Route path='/whoweare/careetAtBizvision' element={<CareersPage />} />
          <Route path='/howitworks/hiringanadvisor/concealed/' element={<HireAdvisor />} />
          <Route path='/howitworks/sellingandbuyingforowners/' element={<ExitBusiness />} />
          <Route path='/request-information' element={<JoinBizvision />} />
          <Route path='/closedDeals' element={<ClosedDeals />} />
          <Route path='selling-raising' element={<Selling />} />
          <Route path='/buying-investing' element={<Acquiring />} />
          <Route path="/forum/:tag" element={<Blog />} />
          <Route path="/forum/" element={<Blog />} />
          <Route path='/forum_blog/:title' element={<BlogCard />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
