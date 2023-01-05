// @ts-nocheck
const fs = require("fs");
import Component from "./Component";

class App extends Component {
    components: Array<any>;
    constructor(props: object) {
      super(props);
      this.components = [];
    }
  
    addComponent(component: Component) {
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
  
    renderToFile(filePath: string) {
      fs.writeFileSync(filePath, this.render());
    }
}

export default App;