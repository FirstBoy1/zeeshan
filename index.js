#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
  title: pkgJSON.name,
  tagLine: 'Howdy, nice to meet ya!',
  description: pkgJSON.description,
  version: pkgJSON.version,
  clear: true,
});

console.log('Zeehan Ahmad - Software Engineer');
