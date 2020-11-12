//import for Class Component
import { Component } from "react";
//image imports
import stuck from "./elephants/stuck.jpg";
import stick from "./elephants/stick.jpg";
import suck from "./elephants/suck.jpg";

//component imports
import EleForm from "./EleForm";
import ElePhoto from "./ElePhoto";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elePhoto: "",
      setElePhoto: this.setElePhoto,
      pics: [
        { name: "Stuck", url: stuck },
        { name: "Stick", url: stick },
        { name: "Suck", url: suck },
      ],
    };
  }

  //Method to set elePhoto
  setElePhoto = (elePhoto) => {
    this.setState({ elePhoto });
  };

  render() {
    return (
      <div className="app">
        <EleForm pics={this.state.pics} setElePhoto={this.state.setElePhoto} />
        <ElePhoto elePhoto={this.state.elePhoto} />
      </div>
    );
  }
}

export default App;
