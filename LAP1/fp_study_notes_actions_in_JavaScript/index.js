#! /usr/bin/env node

const meow = require("meow");
const translate = require("./src/pigLatin").translate;

const cli = meow(`
    Usage
      $ pigLatinise <input>
    Examples
      $ pigLatinise 'nix on the stupid'
      In Pig Latin that's: "ixnay on the upidstay"
`);

console.log(translate(cli.input[0]))