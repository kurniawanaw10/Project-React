import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Foto1 from '../assets/img/gallery/outdoor-gear.jpg';
import Foto2 from '../assets/img/gallery/outdoor-gear1.jpg';
import Foto3 from '../assets/img/gallery/outdoor-gear2.jpg';
import Foto4 from '../assets/img/gallery/outdoor-gear3.jpg';
import Foto5 from '../assets/img/gallery/outdoor-gear4.jpg';
import Foto6 from '../assets/img/gallery/outdoor-gear5.jpg';
import Foto7 from '../assets/img/gallery/outdoor-gear7.jpg';
import Foto8 from '../assets/img/gallery/outdoor-gear6.jpg';


const GalleryComp = () => {
  return (
    <div className='gallery min-vh-100 d-flex align-items-center' id='gallery'>
      <Container>
        <Row className='my-4'>
            <Col>
                <h1 className='text-center fw-bold' data-aos="fade-out" data-aos-delay="200">Gallery</h1>
            </Col>
        </Row>
        <Row className='row-cols-lg-4 row-cols-md-3 row-cols-2 g-4 mb-4'>
          <Col>
            <img src={Foto1} className='w-100 rounded-2' data-aos="zoom-in-up"/>
          </Col>
          <Col>
            <img src={Foto2} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='200'/>
          </Col>
          <Col>
            <img src={Foto5} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='400'/>
          </Col>
          <Col>
            <img src={Foto3} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='600'/>
          </Col>
          <Col>
            <img src={Foto4} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='800'/>
          </Col>
          <Col>
            <img src={Foto6} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='1000'/>
          </Col>
          <Col>
            <img src={Foto7} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='1000'/>
          </Col>
          <Col>
            <img src={Foto8} className='w-100 rounded-2' data-aos="zoom-in-up" data-aos-delay='1000'/>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}

export default GalleryComp