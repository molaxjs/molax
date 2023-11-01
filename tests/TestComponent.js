const { App, Component } = require("../index");

class TestComponent extends Component {
  render() {
    return `
      <div class="App">
        <h1>Hello, ${this.props.name}.</h1>
        <br/>
        <p>${this.state.message}</p>
        <br/>
        <i>${this.state.test}</i>
      </div>
    `;
  }
}

const component = new TestComponent({ name: "Molax" });
component.setState({
  message: "Welcome To Molax. Edit App.js to get started.",
  test: "*this is a test of the state functionality*"
});

module.exports = component;