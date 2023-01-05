# Molax
Molax is a new fast framework, that compiles to a pure HTML file.

Example App.js: 
```js
const { App, Component } = require("molax");

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

const app = new App({ title: "Molax", style: "./app.css" });
const component = new AppComponent({ name: "Molax" });
component.setState({
  message: "Welcome To Molax. Edit App.js to get started.",
  test: "*passed from state*"
});
app.addComponent(component);
app.renderToFile("./index.html");
```

*including a CSS file is required.*
<br>
*javascript features coming soon*