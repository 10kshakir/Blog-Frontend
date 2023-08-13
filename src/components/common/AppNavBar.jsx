import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ReadByTitle} from "../../apiServices/CrudServices";
import {successText,errorText} from "../../helpers/validationHelper"


const AppNavBar = () => {
  const searchSuccess=(id)=>{
    window.location.href = (`/post/${id}`);
  }
  const [searchTitle,setSearchTitle]=useState("");
  const searchButton=()=>{
    ReadByTitle(searchTitle).then((res)=>{
      if(res){
        // successText(res.data.Title)
        searchSuccess(res.data._id);
      }else{
        errorText("NO Blogs Goes By This Title")
        
      }
    }).catch((error)=>{
      errorText("NO Blogs Goes By This Title")
    })
    // alert(searchTitle);
  }
  return (
    <>
      <Navbar style={{paddingLeft:"200px",paddingRight:"200px"}} expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">List Blog</Nav.Link>
            <Nav.Link href="/create">Create Blog</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=" Title (exact Words)"
              className="me-3 "
              aria-label="Search"
              onChange={(e)=>setSearchTitle(e.target.value)}
            />
            <Button onClick={()=>{searchButton()}} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default AppNavBar;
