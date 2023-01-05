const { App, Component } = require("../index");

class AppComponent extends Component {
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

const app = new App({ title: "Molax", style: "./app.css", script: "./script.js" });
const component = new AppComponent({ name: "Molax" });
component.setState({
  message: "Welcome To Molax. Edit App.js to get started.",
  test: "*passed from state*"
});
app.addComponent(component);
app.renderToFile("./tests/index.html");
