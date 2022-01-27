import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
const client = axios.create({
  baseURL: "http://localhost:3001/user",
});
export default function UserList() {
  const [UserData, setUserData] = useState({ Data: [] });
  useEffect(() => {
    client.get().then((res) => {
      console.log(res.data);
      setUserData({ ...UserData, Data: res.data });
    });
  }, []);
  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col lg={12}>
            <Row>
              <Table bordered hover variant="dark">
                <thead>
                  <tr className="bg-light">
                    {/*   <th className="black">#</th> */}
                    <th className="black">Course Name</th>
                    <th className="black">Name</th>
                    <th className="black">Email</th>
                    <th className="black">Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {UserData.Data.map((user) => (
                    <tr key={user.id}>
                      {/*  <td>{user.id}</td> */}
                      <td>{user.CourseName}</td>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.MobileNumber}</td>
                     
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
