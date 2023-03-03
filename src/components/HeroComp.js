import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100' id='home'>
        <Container>
            <Row>
                <Col className='text-white text-center'>
                    <h1 className='fs-1 animate__animated animate__fadeInUp'>Mari Berbagi Cerita Dengan Alam</h1>
                    <p className='text-white-75  animate__animated animate__fadeInUp animate__delay-1s'>Cemerlang menyediakan kebutuhan outdoor kamu. Sewa sekarang juga!</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
