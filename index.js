var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fs = require("fs");
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
        this.state = {};
    }
    Component.prototype.setState = function (state) {
        this.state = Object.assign({}, this.state, state);
    };
    Component.prototype.render = function () {
        return "";
    };
    return Component;
}());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.components = [];
        return _this;
    }
    App.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    App.prototype.render = function () {
        if (this.props.style && this.props.script) {
            return "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>".concat(this.props.title, "</title>\n          <link rel=\"stylesheet\" href=\"").concat(this.props.style, "\">\n          <script src=\"").concat(this.props.script, "\" defer></script>\n        </head>\n        <body>\n          ").concat(this.components.map(function (component) { return component.render(); }).join("\n"), "\n        </body>\n        </html>\n      ");
        }
        else if (this.props.style) {
            return "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>".concat(this.props.title, "</title>\n          <link rel=\"stylesheet\" href=\"").concat(this.props.style, "\">\n        </head>\n        <body>\n          ").concat(this.components.map(function (component) { return component.render(); }).join("\n"), "\n        </body>\n        </html>\n      ");
        }
        else if (this.props.script) {
            return "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>".concat(this.props.title, "</title>\n          <script src=\"").concat(this.props.script, "\" defer></script>\n        </head>\n        <body>\n          ").concat(this.components.map(function (component) { return component.render(); }).join("\n"), "\n        </body>\n        </html>\n      ");
        }
        else {
            return "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>".concat(this.props.title, "</title>\n        </head>\n        <body>\n          ").concat(this.components.map(function (component) { return component.render(); }).join("\n"), "\n        </body>\n        </html>\n      ");
        }
    };
    App.prototype.renderToFile = function (filePath) {
        fs.writeFileSync(filePath, this.render());
    };
    return App;
}(Component));
module.exports = { App: App, Component: Component };
