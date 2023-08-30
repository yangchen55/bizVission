import React from 'react'
import logo2 from '../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { requestSuccess } from '../../pages/authRedux/authSlice'
import { useDispatch } from 'react-redux'

export const DashboardHeader = () => {
    const dispatch = useDispatch()

    const handleOnLogOut = e =>{
        sessionStorage.removeItem('accessJWT')
        localStorage.removeItem("refreshJWT")
      dispatch(requestSuccess({}));
      
      }
  return (
    <div>
        <div>
    <Navbar bg='sucess' expand="md">
<Container>
  <Navbar.Brand href="/"><img style={{width:"14vh"}} src={logo2}/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
  
    
   <Link to="/dashboard" className='nav-link'><i class="fa-solid fa-chess-board" title="Dashboard"></i> </Link>
   <Link to="/sign-in" className='nav-link'>   <i className="fa-solid fa-house " title='Sign In Page'></i></Link>
   <Link to="/" className="nav-link" onClick={handleOnLogOut}><i class="fa-solid fa-right-to-bracket" title="Log out"></i> </Link>
  

    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>
    </div>
  )
}
