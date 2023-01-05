const fs = require("fs");

class Component {
  props: object;
  state: object;
  constructor(props: object) {
    this.props = props;
    this.state = {};
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
  }

  render() {
    return "";
  }
}

class App extends Component {
  components: Array<any>;
  constructor(props) {
    super(props);
    this.components = [];
  }

  addComponent(component) {
    this.components.push(component);
  }

  render() {
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${this.props.title}</title>
        <link rel="stylesheet" href="${this.props.style}">
      </head>
      <body>
        ${this.components.map(component => component.render()).join("\n")}
      </body>
      </html>
    `;
  }

  renderToFile(filePath) {
    fs.writeFileSync(filePath, this.render());
  }
}

module.exports = { App, Component };