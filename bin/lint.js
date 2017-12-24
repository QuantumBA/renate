#!/usr/bin/env node

const join = require('path').join

const cli = require('eslint/lib/cli')


const args =
{
  _: [process.cwd()],
  config: join(__dirname, '..', 'resources', 'eslint.json'),
  env: ['browser', 'es6', 'jest', 'node'],
  ignorePattern: ['coverage/'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  }
}


process.exit(cli.execute(args))
