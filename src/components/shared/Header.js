import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {ListItem, Navstyled,Nav} from "../../styles/style"


const Header = () => {
  return (
    <>
       <Navstyled>
            <Nav className="navbar">

              <div className="nav">
                <ul className=" nav-links">
                  <ListItem>
                    <Link to="/">Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/signin">signin</Link>
                  </ListItem>
                </ul>
              </div>
            </Nav>
          </Navstyled>
    </>
  )
}

export default Header
