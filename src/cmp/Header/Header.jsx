import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";

import { Link } from "react-router-dom";
import Menu from "../../json-api/Menu";
import Brand from "../../json-api/Brand";

const NormalMenu = (data)=>{
  const textColor = {
    color:data.color
  }
  return (
    <>
      <Link style={textColor} className={data.menuInfo.button ? "nav-link btn btn-primary text-white px-3" : "nav-link"} to={data.menuInfo.url}>{data.menuInfo.label}</Link>
    </>
  );
  
}

const DropdownMenu = (data)=>{

   return  (
    <>
      <NavDropdown s title={data.menuInfo.label} id="dropdown-container">
      <i className="fa fa-caret-up arrow-up"></i>
        {
          data.menuInfo.dropdownMenu.map((item)=>{
            return <NormalMenu color="red" menuInfo={item} key={item.id} />
          })
        }
      </NavDropdown>
    </>
  );
 
}

const Header = ()=>{
    return (
      <>
        <Navbar expand="lg" className="py-2 border-bottom fixed-top">
          <Container>
            <Link className="navbar-brand" to="/">{Brand.name}</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end w-100">
                {
                  Menu.map((data)=>{
                    if(data.dropdown==true)
                    {
                      return <DropdownMenu menuInfo={data} key={data.id} />
                    }
                    return <NormalMenu color="white" menuInfo={data} key={data.id}/>
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
   
}

export default Header;
