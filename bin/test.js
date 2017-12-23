#!/usr/bin/env node

const join     = require('path').join
const readFile = require('fs').readFile

const coveralls = require('coveralls').handleInput
const runCLI    = require('jest/build/cli').runCLI


const CWD = process.cwd()


const args =
{
  collectCoverageOnlyFrom: ['*.js'],
  coverage: true,
  notify: true,
  preset: 'jest-react-native',
  setupTestFrameworkScriptFile: join(__dirname, 'setupTests.js'),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {'\\.js$': join(__dirname, 'transformer.js')},
  transformIgnorePatterns: ['node_modules/?!(tcomb-form-native)']
}
const projects = [CWD]


runCLI(args, projects)
.then(function({globalConfig, results})
{
  console.log(globalConfig, results)

  if(!process.env.CI) return

  // We are in an CI server, send the test coverage statistics to coveralls
  readFile(join(CWD, 'coverage', 'lcov.info'), 'utf8', function(err, data)
  {
    if(err) throw err

    coveralls(data, function(err)
    {
      if(err) throw err
    })
  })
})
