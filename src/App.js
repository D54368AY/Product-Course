import logo from "./logo.svg";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Product from "./Component/Product";
import Course from "./Component/Course";
import FootSocial from "./Component/FootSocial";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" className="fixed-top">
          <Container>
            <Nav className="ml-auto">
              <Nav.Link>
                <NavLink to="/">
                  <label className="text">Products</label>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Course">
                  <label className="text">Courses</label>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/Course" exact component={Course} />
        </Switch>
      </Router>

      <FootSocial />
    </div>
  );
}

export default App;
