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
## Classes
### App Class:
Methods: `addComponent(component: Component)`, `renderToFile(path: String)`, `render()`
<br>
#### <b>Constructor Requirements:</b>
```
Props {
    title: String, 
    style?: Path, // as string
    script?: Path // as string 
}
```
Usage: `new App(Props)`

### Component Class:
Methods: `setState(state: object)`, `render()`
<br>
**NOTE:** *Render method requires being extended with*
```js
class ComponentName extends Component {
```
#### <b>Constructor Requirements:</b>
`Props { /** as required by component */ }`
<br>
Usage: `new ComponentName(Props)`