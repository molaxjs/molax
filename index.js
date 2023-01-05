"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Component_1 = __importDefault(require("./Classes/Component"));
const App_1 = __importDefault(require("./Classes/App"));
module.exports = { App: App_1.default, Component: Component_1.default };
