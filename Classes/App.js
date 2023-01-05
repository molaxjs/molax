"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const fs = require("fs");
const Component_1 = __importDefault(require("./Component"));
class App extends Component_1.default {
    constructor(props) {
        super(props);
        this.components = [];
    }
    addComponent(component) {
        this.components.push(component);
    }
    render() {
        if (this.props.style && this.props.script) {
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
        }
        else if (this.props.style) {
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
        else if (this.props.script) {
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
        }
        else {
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
exports.default = App;
