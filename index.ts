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
    if(this.props.style && this.props.script) {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${this.props.title}</title>
          <link rel="stylesheet" href="${this.props.style}">
          <script src="${this.props.script}" defer></script>
        </head>
        <body>
          ${this.components.map(component => component.render()).join("\n")}
        </body>
        </html>
      `;
    } else if(this.props.style) {
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
    } else if(this.props.script) {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${this.props.title}</title>
          <script src="${this.props.script}" defer></script>
        </head>
        <body>
          ${this.components.map(component => component.render()).join("\n")}
        </body>
        </html>
      `;
    } else {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${this.props.title}</title>
        </head>
        <body>
          ${this.components.map(component => component.render()).join("\n")}
        </body>
        </html>
      `;
    }
  }

  renderToFile(filePath) {
    fs.writeFileSync(filePath, this.render());
  }
}

module.exports = { App, Component };