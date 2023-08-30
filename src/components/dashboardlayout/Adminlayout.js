import React from 'react'
import { DashboardHeader } from './DashboardHeader'
import { AdminNavbar } from '../../pages/admindashboard/AdminNavbar'
import { Col, Container, Row } from 'react-bootstrap'

export const Adminlayout = ({children}) => {
  return (
    <div>
        <DashboardHeader/>

        <main >
  
    <Row>
      <Col xs="1">
      
       <AdminNavbar/>
         </Col>
      <Col>{children}</Col>
    </Row>
 
   
</main>
      
   



    </div>
  )
}
