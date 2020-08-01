import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import imgMe from '../images/me.jpg';
import dotesimg from '../images/dotes.gif';
import waveimg from '../images/waves.svg';


const Home = () => {
    return (
      <>
    <Container style={{clear:'both'}}>
  <Row>
    <Col sm={12} lg={6} className="text-right mt-5"  style={{height:'500px'}}><h1 className="text-title-home">F<span className="circle"></span>rontend Developer</h1></Col>
    <Col sm={6}><img className= "myphoto "  style={{height:'500px'}} src= {imgMe}></img>  <img className="wave" src={waveimg}></img></Col>  
    <div className="shape-text"><h3 className="text-in-shape">Zapraszam do rewizji projektów!</h3></div>
    <img className="dotes1" src={dotesimg}></img>
    <img className="dotes2" src={dotesimg}></img>
  </Row>
  </Container>
</>
      );
}
 
export default Home;