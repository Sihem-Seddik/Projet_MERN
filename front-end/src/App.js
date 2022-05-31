import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import {Nav,Navbar,Form,FormControl,Container,NavDropdown}from 'react-bootstrap';
import ListeForum from "./Forum/ListeForum";
import AjoutForum from "./Forum/AjoutForum.js";
import ModifierForum from "./Forum/ModifierForum";
import ListParticipant from "./Participant/ListeParticipant";
import AjoutParticipant from "./Participant/AjoutParticipant";
import ModifierParticipant from "./Participant/ModifierParticipant";
import ListeFormateur from "./Formateur/ListeFormateur";
import ModifierFormateur from "./Formateur/ModifierFormateur";
import AjoutFormateur from "./Formateur/AjoutFormateur";
import AjoutFormation from "./Formation/AjoutFormation";
import ModifierFormation from "./Formation/ModifierFormation";
import ListeFormation from "./Formation/ListeFormation";
import Login from './Authentification/Login';
import Logout from "./Authentification/Logout";

function App() {
  return (
    <Router>
      
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Menu </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link}to="Participant/ListeParticipant">Liste Participants</Nav.Link>
        <Nav.Link as ={Link}to="Forum/listeForum">Liste Forums</Nav.Link>
        <Nav.Link as ={Link}to="./Formateur/listeFormateur">Liste Formateurs</Nav.Link>
        <Nav.Link as ={Link}to="./Formation/ListeFormation">Liste Formations</Nav.Link>
        <Nav.Link as ={Link}to="/logout">Logout</Nav.Link>



        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <Routes>
    <Route path="/" element={<Login/>}></Route>

            <Route exact path="Forum/listeForum" element={<ListeForum/>}/>
            <Route exact path="Participant/listeParticipant" element={<ListParticipant/>}/>
            <Route exact path="Formateur/listeFormateur" element={<ListeFormateur/>}/>
            <Route exact path="Formation/listeFormation" element={<ListeFormation/>}/>

            <Route exact path="Participant/AjoutParticipant"  element={<AjoutParticipant/>}/>
            <Route exact path="Formateur/AjoutFormateur"  element={<AjoutFormateur/>}/>
            <Route exact path="Forum/AjoutForum"  element={<AjoutForum/>}/>
            <Route exact path="Formation/AjoutFormation"  element={<AjoutFormation/>}/>

            <Route exact path="/ModifierForum/:id" element={<ModifierForum/>}/>
            <Route exact path="/ModifierParticipant/:id" element={<ModifierParticipant/>}/>
            <Route exact path="/ModifierFormateur/:id" element={<ModifierFormateur/>}/>
            <Route exact path="/ModifierFormation/:id" element={<ModifierFormation/>}/>
            <Route extact path="/logout" element={<Logout/>} />





    </Routes>
    </Router>
  );
}

export default App;