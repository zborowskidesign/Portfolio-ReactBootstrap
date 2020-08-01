import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import gthlogo from '../images/gth-logo.png';
import splashimg from '../images/splash.png';

const Projekty = () => {
    return (  
        
        <Container style={{clear:'both'}}>
            <Row>
            <Col sm={6}>
            <div className="project1"><h3 className="text-in-shape-projects">Projekt #1</h3>< a href="https://zborowskidesign.github.io/Currency-Converter/#/" target="_blank"><img className="github-logo"src={gthlogo} alt="github-logo" data-value="github1"></img></a><img className="splashlogo" data-value="splash1" src={splashimg}></img></div>
            </Col>

            <Col sm={6}>
            <div className="project2"><h3 className="text-in-shape-projects">Projekt #2</h3>< a href="https://zborowskidesign.github.io/ProjectRockeAalfa.github.io/" target="_blank"><img className="github-logo"src={gthlogo} alt="github-logo" data-value="github2"></img></a><img className="splashlogo" data-value="splash2" src={splashimg}></img></div>
            </Col>

            <Col sm={6}>
            <div className="project3"><h3 className="text-in-shape-projects">Projekt #3</h3>< a href ="https://zborowskidesign.github.io/speech-recognition/" target="_blank"><img className="github-logo"src={gthlogo} alt="github-logo" data-value="github3"></img></a><img className="splashlogo" data-value="splash3" src={splashimg}></img></div>
       
                 </Col>

                 <Col sm={6}>
                 <div className="project4"><h3 className="text-in-shape-projects">Projekt #4</h3>< a href="http://mowiacwprost.pl/" target="_blank"><img className="github-logo"src={gthlogo} alt="github-logo" data-value="github4"></img></a><img className="splashlogo" data-value="splash4" src={splashimg}></img></div>
      
                 </Col>
            </Row>
        </Container>
        
    );
}
 
export default Projekty;