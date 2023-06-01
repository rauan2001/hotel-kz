import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
const NavbarBar = () => {
  
  const navigate = useNavigate();
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/logout");
      navigate("/homepage/register")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="navbar1">
       <div className="wrapper1">
       <div className="search1">
       <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
       </div>
       <div className="item1">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item1">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item1">
            <ListOutlinedIcon className="icon" />
          </div>
       </div>
    </div>
  );

  // return (
  //   <Navbar bg="light" expand="lg" className="navbar">
  //     <Container>
  //       <Navbar.Brand href="#">Brand Name</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="navbarScroll" />
  //       <Navbar.Collapse id="navbarScroll">
  //         <Nav
  //           className="me-auto my-2 my-lg-0"
  //           style={{ maxHeight: '100px' }}
  //           navbarScroll
  //         >
  //           <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#link">Link</Nav.Link>
  //           <Nav.Link href="#" disabled>
  //             Disabled
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
};

export default NavbarBar;