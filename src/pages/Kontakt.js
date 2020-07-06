import React from 'react';
import {Prompt} from 'react-router-dom';

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
       <h1><strong>Napisz</strong> do mnie</h1>
       <form  onSubmit={this.handleSend} action={this.state.value.length < 1 ? "" : "mailto:michalzborowski@interia.pl"} method= {this.state.value.length < 1 ? "" : "post"} enctype="text/plain">
       <input type="text" name="Imie: " id="name" placeholder="Imie"></input>
       <br/>
       <input type="text" name="Email: " id="mail" placeholder="Email"></input>
       <br/>
       <input type="text" value={this.state.value} onChange={this.TextChange} name="Komentarz: " size="60" id="message" placeholder="Twoja wiadomość"></input>
       <br/>
       <input type="submit" value="Send"></input>
       <input type="reset"  value="Reset" onClick={this.ResetMessageValue}></input>
       </form>
       <Prompt
       when={this.state.value.length > 0}
       message="Czy na pewno chcesz opuśić podstronę w trakcie wypełniania formularza?"
       />
       </>
     );
  }
}
 

export default Kontakt;
 
