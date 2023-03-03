import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FaqComp = () => {
  return (
    <div className='faq' id='faq'>
        <Container>
            <Row>
                <Col className='mb-5'>
                <h1 className='text-center fw-bold' data-aos="fade-out">FAQ</h1>
                <p className='text-center'  data-aos="fade-out" data-aos-delay="200">Pertanyaan yang sering ditanyakan pelanggan.</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-2 row-cols-1 g-4'>
                <Col data-aos="zoom-out-down"  data-aos-delay="200">
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Bagaimana Cara Order?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
                <Col data-aos="zoom-out-down"  data-aos-delay="400">
                <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Pembayaran bisa dilakukan dengan apa saja?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
                <Col data-aos="zoom-out-down"  data-aos-delay="600">
                <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Apakah barang dapat dikirim kerumah</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
                <Col data-aos="zoom-out-down"  data-aos-delay="800">
                <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Jaminan apa saja yang dapat diberikan?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
                <Col data-aos="zoom-out-down"  data-aos-delay="1000">
                <Accordion>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Apakah memiliki sosial media lain?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
                <Col data-aos="zoom-out-down"  data-aos-delay="1200">
                <Accordion>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Bagaimana sistem untuk penggantian barang apabila terjadi kerusakan?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default FaqComp