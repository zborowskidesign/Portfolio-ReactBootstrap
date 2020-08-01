import React from 'react';
import {Prompt} from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import cornerpage from '../images/corner-page.png';
import spot from '../images/spot.png';

class Kontakt extends React.Component {
  state = {  
    value: "",
    name: ""
  }

  handleSend = () =>
  {
    if(this.state.value.length < 1)
    {
      alert('Twoja wiadomość jest za krótka')
    }
  }

  TextChange = (e) =>
  {
    this.setState({
      value: e.target.value
    })
  }

  ResetMessageValue = () =>
  {
    this.setState({
      value: ""
    })
  }

  render() { 
    return ( 
      <>
      <Container style={{clear:'both'}}>
       <img className="corner-top"src={spot}></img>
        <Row className="text-center">
        <Col sm={12} style={{zIndex:"1"}}>
        <h1 className="contact-text-title">N<span className="circle"></span>apisz do mnie</h1>
       <form  onSubmit={this.handleSend} action={this.state.value.length < 1 ? "" : "mailto:michalzborowski@interia.pl"} method= {this.state.value.length < 1 ? "" : "post"} enctype="text/plain">
       <input type="text" name="Imie: " id="name" placeholder="Imie"></input>
       <br/>
       <input type="text" name="Email: " id="mail" placeholder="Email"></input>
       <br/>
       <input type="text" value={this.state.value} onChange={this.TextChange} name="Komentarz: " size="60" id="message" placeholder="Twoja wiadomość"></input>
       <br/>
       <input type="submit" value="Send" ></input>
       <input type="reset"  value="Reset" onClick={this.ResetMessageValue}></input>
       </form>
       <Prompt
       when={this.state.value.length > 0}
       message="Czy na pewno chcesz opuśić podstronę w trakcie wypełniania formularza?"
       />
       </Col>
       </Row>
      </Container>
     {/* <img className="corner-bottom"src={corner}></img> */}
     <img className="corner-bottom"src={cornerpage}></img>
      </>
     );
  }
}
 

export default Kontakt;
 
