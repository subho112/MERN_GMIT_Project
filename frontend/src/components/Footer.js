import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const styles = {
    backgroundColor: '#072a48',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: 'white',
    textAlign: 'left'
} 
const Footer = () => (
  <div style={styles}>
    <footer>
    <Container>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingBottom:'30px'}}><b>GET TO KNOW US</b></Col>
      </Row> 
      <Row>
        <Col md='3'>Contact Us</Col>
        <Col md='3'>Your Account</Col>
        <Col md='3'>Facebook</Col>
        <Col md='3'> Registered Admin Address :</Col>     
      </Row>
      <Row>
        <Col md='3'>About Us</Col>
        <Col md='3'>Your Orders</Col>
        <Col md='3'>Instagram</Col>
        <Col md='3'>Sonarpur,Kolkata-700150,India</Col>
      </Row>     
      <Row>
        <Col md='3'>Career</Col>
        <Col md='3'>Your Addresses</Col>
        <Col md='3'>Github</Col>
        <Col md='3'>Email id & phone no. :</Col>
      </Row>
      <Row>
        <Col md='3'>COVID-19</Col>
        <Col md='3'>Your Product Lists</Col>
        <Col md='3'>Linkedin</Col>
        <Col md='3'>swattik.official99@yahoo.com </Col>
      </Row>
      <Row>
        <Col md='3'> </Col>
        <Col md='3'>Shipping & Delivery </Col>
        <Col md='3'>Twitter</Col>
        <Col md='3'>+91 8910996395</Col>
      </Row>
      <Row>
        <Col md='3'> </Col>
        <Col md='3'>Payments</Col>
        <Col md='3'>Pinterest</Col>
      </Row>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>Indian website, created in 2020</Col>
      </Row>
    </Container>
    </footer>   
  </div>    
)

export default Footer