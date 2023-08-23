import react, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './adminbar.css'

export const AdminNavbar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    
    {
        path:"/addblog",
        name:"AddBlog",
        icon:<FaUserAlt/>
    },
    {
        path:"/blog",
        name:"Blog",
        icon:<FaRegChartBar/>
    },
    {
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
        path:"/product",
        name:"Product",
        icon:<FaShoppingBag/>
    },
    {
        path:"/productList",
        name:"Product List",
        icon:<FaThList/>
    }
]
  return (
    <div className="">
    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars ">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="Link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text ">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    {/* <main>{children}</main>  */}
 </div>
  )
}
