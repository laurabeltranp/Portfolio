import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import { FaDownload, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-end align-items-center py-3 px-4">
        <Button variant="outline-light" href="/LauraBeltran_CV.pdf" download className="d-flex align-items-center">
          <FaDownload className="mr-2" />
          Descargar CV
        </Button>
      </div>
      <section id="home" className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="font-weight-bold">Laura Beltrán Pulido</h1>
              <h2 className="font-weight-medium">Desarrolladora Web</h2>
              <p className="description">
                Con experiencia en tecnologías como <strong>Java</strong>, <strong>Nextjs</strong>, <strong>Nodejs</strong>, <strong>ReactJs</strong>, <strong>MySQL</strong> y <strong>Spring Boot</strong>. Descubre mis proyectos a través de mi portfolio.
              </p>
              <div className="d-flex justify-content-start buttonContainer">
                <Button variant="outline-light" href="https://github.com/laurabeltranp" target="_blank" className="d-flex align-items-center">
                  <Image src="/github.png" alt="GitHub" width={24} height={24} className="icon" />
                  <span>GitHub</span>
                </Button>
                <Button variant="outline-light" href="https://www.linkedin.com/in/laurabeltranp/" target="_blank" className="d-flex align-items-center">
                  <Image src="/in.png" alt="LinkedIn" width={24} height={24} className="icon" />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Image src="/foto2.png" alt="Laura Beltrán Pulido" width={500} height={500} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Proyectos</h2>
          <Row>
            <Col md={4} className="mb-4 text-center">
              <Image src="/adoptafur.jpeg" alt="AdoptaFur" width={500} height={300} className="img-fluid" />
              <h5 className="font-weight-medium mt-3">AdoptaFur</h5>
              <p className="description text-justify text-left">
                Este es un proyecto personal, una plataforma de adopción de animales, diseñada específicamente para adoptantes y protectoras. En esta plataforma, 
                los usuarios podrán explorar los animales disponibles así como los ya adoptados y gestionar sus solicitudes así como las protectoras publicar sus animales y gestionarlos.
              </p>
              <div className="d-flex justify-content-center mb-3">
                <Image src="/java.png" alt="Java" width={30} height={30} className="icon" />
                <Image src="/spring.png" alt="Spring Boot" width={30} height={30} className="icon" />
                <Image src="/mysql.png" alt="MySQL" width={30} height={30} className="icon" />
                <Image src="/react.png" alt="ReactJs" width={30} height={30} className="icon" />
                <Image src="/bootstrap.png" alt="Bootstrap" width={30} height={30} className="icon" />
                <Image src="/docker.png" alt="Docker" width={30} height={30} className="icon" />
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="outline-light" href="https://github.com/laurabeltranp/AdoptaFur" target="_blank" className="d-flex align-items-center mx-2">
                  <FaGithub className="mr-2" /> Ir al código
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-4 text-center">
              <Image src="/optimus.jpeg" alt="Optimus Educación" width={500} height={300} className="img-fluid" />
              <h5 className="font-weight-medium mt-3">Optimus Educación</h5>
              <p className="description text-justify text-left">
                Página web para una empresa de educación de robótica que ofrece tanto cursos a docentes como clases y campamentos para niños. Inclusión de un framework funcional para hacer web inmersiva con Virtway.
              </p>
              <div className="d-flex justify-content-center mb-3">
                <Image src="/wordpress.png" alt="WordPress" width={30} height={30} className="icon" />
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="outline-light" href="https://optimuseducacion.es" target="_blank" className="d-flex align-items-center mx-2">
                  <FaExternalLinkAlt className="mr-2" /> Ir a la web
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-4 text-center">
              <Image src="/belenjifit.jpeg" alt="Belenjifit" width={500} height={300} className="img-fluid" />
              <h5 className="font-weight-medium mt-3">Belenjifit</h5>
              <p className="description text-justify text-left">
                Página web personal para entrenadora personal, acercar los entrenamientos a todas las personas mediante clases online, aún en desarrollo.
              </p>
              <div className="d-flex justify-content-center mb-3">
                <Image src="/html.png" alt="HTML" width={30} height={30} className="icon" />
                <Image src="/bootstrap.png" alt="Bootstrap" width={30} height={30} className="icon" />
                <Image src="/js.png" alt="JavaScript" width={30} height={30} className="icon" />
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="outline-light" href="https://github.com/laurabeltranp/belenjifit-web" target="_blank" className="d-flex align-items-center mx-2">
                  <FaGithub className="mr-2" /> Ir al código
                </Button>
                <Button variant="outline-light" href="https://belenjifit.es" target="_blank" className="d-flex align-items-center mx-2">
                  <FaExternalLinkAlt className="mr-2" /> Ir a la web
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


     
      <section id="certificates" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Certificados y Títulos</h2>
          <Row>
            <Col md={4} className="text-left mb-4">
              <Image src="/cerrtificadoReact.jpg" alt="Certificate 1" width={300} height={400} className="img-fluid" />
              <h5 className="description font-weight-medium mt-2">React, Spring Boot y Java</h5>
              <p className="text-white"> Otorgado por: <strong>Udemy</strong></p>
              <p className="text-white">Nombre: React y Spring Boot</p>
            </Col>
            <Col md={4} className="text-left mb-4">
              <Image src="/certificadoCibersecurity.png" alt="Certificate 2" width={300} height={400} className="img-fluid" />
              <h5 className="description font-weight-medium mt-2">Introduction to Cybersecurity</h5>
              <p className="text-white"> Otorgado por: <strong>Cisco</strong></p>
              <p className="text-white">Nombre: Introduction to Cibersecurity</p>
            </Col>
            <Col md={4} className="text-left mb-4">
              <Image src="/certificadoPython.jpg" alt="Certificate 3" width={300} height={400} className="img-fluid" />
              <h5 className="description font-weight-medium mt-2">Python 3 Plus</h5>
              <p className="text-white"> Otorgado por: <strong>Udemy</strong></p>
              <p className="text-white">Nombre: Python 3 Plus</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-left mb-4">
              <Image src="/titulo.jpeg" alt="Certificate 4" width={300} height={400} className="img-fluid" />
              <h5 className="description font-weight-medium mt-2">CFGS Desarrollo Web Full Stack</h5>
              <p className="text-white"> Otorgado por: <strong>UNIR FP</strong></p>
              <p className="text-white">Nombre: Desarrollo de Aplicaciones Web con Especialidad en Mean y Full Stack</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Contacto</h2>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <form action="https://formspree.io/f/mldreqrp" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-2">Enviar</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;