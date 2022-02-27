import React from "react";
import "./app.css";
import ColorBlock from "./Components/ColorBlock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "grey"
    };
  }
  updateColor = (value) => {
    this.setState({
      color: value
    });
  };
  render() {
    return (
      <>
        <div className="color-container">
          <ColorBlock color="red" onclick={this.updateColor} />
          <ColorBlock color="green" onclick={this.updateColor} />
          <ColorBlock color="blue" onclick={this.updateColor} />
          <ColorBlock color="yellow" onclick={this.updateColor} />
          <ColorBlock color="pink" onclick={this.updateColor} />
        </div>
        <div
          className="targetDiv"
          style={{
            backgroundColor: this.state.color
          }}
        ></div>
      </>
    );
  }
}
export default App;
