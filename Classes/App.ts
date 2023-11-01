// @ts-nocheck
const fs = require("fs");
import Component from "./Component";

class App extends Component {
    components: Array<any>;
    constructor(props: object) {
      super(props);
      this.props.script2 = this.props.script.slice(1);
      this.props.style2 = this.props.style.slice(1);
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
      
      if(this.props.script && this.props.style) {
        const script = fs.readFileSync(`./tests${this.props.script2}`, "utf-8");
        const style = fs.readFileSync(`./tests${this.props.style2}`, "utf-8");
        fs.writeFileSync(`./tests/build${this.props.script2}`, script);
        fs.writeFileSync(`./tests/build${this.props.styl2e}`, style);
      } else if(this.props.script2 && !this.props.style2) {
        const script = fs.readFileSync(`./tests${this.props.script2}`, "utf-8");
        fs.writeFileSync(`./tests/build${this.props.script2}`, script);
      } else if(this.props.style2 && !this.props.script2) {
        const style = fs.readFileSync(`./tests${this.props.style2}`, "utf-8");
        fs.writeFileSync(`./tests/build${this.props.style2}`, style);
      } 
    }
}

export default App;