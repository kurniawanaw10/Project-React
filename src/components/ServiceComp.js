import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServiceComp = () => {
  return (
    <div className='service min-vh-100 d-flex align-items-center' id='service'>
        <Container>
            <Row className='mb-5'>
                <Col>
                    <h1 className='text-center fw-bold' data-aos="fade-out">Services</h1>
                    <p className='text-center' data-aos="fade-out" data-aos-delay="200">Keuntungan layanan yang diberikan kepada pelanggan.</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
                <Col className='text-center py-5 px-3' data-aos="zoom-in">
                    <i class="fa-solid fa-coins fs-2 mb-4"></i>
                    <h5 className='fw-bold'>Harga Terjangkau</h5>
                    <p>Menawarkan harga yang terjangkau untuk berbagai kalangan.</p>
                </Col>
                <Col className='text-center py-5 px-3' data-aos="zoom-in" data-aos-delay="200">
                    <i class="fa-regular fa-thumbs-up fs-2 mb-4"></i>
                    <h5 className='fw-bold'>Pelayanan Terbaik</h5>
                    <p>Melayani pelanggan dengan sepenuh hati.</p>
                </Col>
                <Col className='text-center py-5 px-3' data-aos="zoom-in" data-aos-delay="400">
                    <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
                    <h5 className='fw-bold'>Tersertifikasi</h5>
                    <p>Mendapatkan sertifikasi dari lembaga pemerintahan.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceComp