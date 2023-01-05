"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(props) {
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
exports.default = Component;
