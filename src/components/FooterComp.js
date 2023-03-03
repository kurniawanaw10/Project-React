import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const FooterComp = () => {
  return (
    <div className='footer pb-2 pt-5'>
        <Container>
            <Row className='mb-4'>
                <Col>
                    <h3 className='fw-bold text-white'>Cemerlang Indonesia.</h3>
                </Col>
                <Col className='text-end'>
                    <i class="fa-brands fa-instagram text-white fs-2 mx-lg-3 mx-2"></i>
                    <i class="fa-brands fa-square-facebook text-white fs-2 mx-lg-3 mx-2"></i>
                    <i class="fa-brands fa-twitter text-white fs-2 mx-lg-3 mx-2"></i>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col className='text-white-50 text-center'>&copy; Copyright by Cemerlang Indonesia.</Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComp