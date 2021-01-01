import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import underConstructionJpg from '../assets/img/under_construction.svg';

export default function Maintenance() {
  const whatsapp = 'https://wa.me/+6285856083156';

  return (
    <Container>
      <Row>
        <Col>
          <h1>Under <br /> Construction</h1>
          <p>We need some time too build our website.</p>
          <Button href={whatsapp} variant="warning" size="lg">Contact Us</Button>
        </Col>
        <Col>
          <img src={underConstructionJpg} alt="Under Construction" />
        </Col>
      </Row>
    </Container>
  )
}
