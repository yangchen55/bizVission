import './App.css';
<<<<<<< HEAD
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage';
import { Footer } from './footer/Footer';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalLayout from './pages/globalLayout/GlobalLayout';
import Home from './pages/HomePage/Home';

>>>>>>> 0a342fa (landing page)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <p className='text-center'> welcome to biz vision website</p>


{/* <Footer/> */}
{/* 
<AboutUs/> */}

<CareersPage/>

=======
      <GlobalLayout content={<Home />} />
>>>>>>> 0a342fa (landing page)
    </div>
  );
}

export default App;
