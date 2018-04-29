//ts-check
import '../css/style.css';

var template = require("pug-loader!../index.pug");
var locals = { /* ... */ };
var html = template(locals);
document.body.innerHTML = html;
