const fs = require("fs");
const sass = require('sass');
const version = require("./package.json").version;

const srcPath = "./src/scss";
const baseName = "bestagon";
const srcFile = `${srcPath}/${baseName}.scss`;
const distPath = "./dist";
const examplesPath = "./examples/resources"

function build() {
    buildExpanded();
    buildCompressed();
}

function buildExpanded() {
    const result = sass.compile(srcFile);
    fs.writeFileSync(`${distPath}/${baseName}-${version}.css`, result.css);
    fs.writeFileSync(`${examplesPath}/${baseName}.css`, result.css);
}

function buildCompressed() {
    const result = sass.compile(srcFile, { style: "compressed" });
    fs.writeFileSync(`${distPath}/${baseName}-${version}.min.css`, result.css);
}

build();