const { App, Component } = require("../index");
const component = require("./TestComponent");

const app = new App({ title: "Molax", style: "./app.css", script: "./script.js" });
app.addComponent(component);
app.renderToFile("./tests/index.html");
