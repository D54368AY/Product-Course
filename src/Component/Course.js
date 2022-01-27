import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import CourseList from "./CourseList";
import UserList from "./UserList";
export default function Course() {
  return (
    <div>
      <Router>
        <br />
        <Navbar bg="secondary" variant="secondary" className="pt-5 ">
           <Container className="justify-content-center">
            <Nav className="me-auto ">
              <Nav.Link>
                <NavLink to="/Course">
                  <label className="text">
                    <Button variant="primary" size="lg">
                      Courses
                    </Button>{" "}
                  </label>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/UserList">
                  <label className="text">
                    <Button variant="primary" size="lg">
                      Enquired
                    </Button>{" "}
                  </label>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Course" exact component={CourseList} />
          <Route path="/UserList" exact component={UserList} />
        </Switch>
      </Router>
    </div>
  );
}
