
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './aboutus/AboutUs';
import { CareersPage } from './aboutus/CareersPage'



import Home from './pages/HomePage/Home';
function App() {
  return (
    <div className="App">
     <p className='text-center'> welcome to bizvision website</p>



 
<AboutUs/> 

{/* <CareersPage/> */}

    </div>
  )
}

export default App;
