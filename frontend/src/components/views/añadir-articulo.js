import { Component } from "react";
import Form from "../formSubmit";
import Nav from "../nav";
export default class Añadir extends Component {
 
  async componentDidMount() {
    console.log(this.props.match.params.id);
   

 
  }

  render(){
  return (
    <div>
      <Nav />
      <Form />
    </div>
  );
}
}
