// JsDOM in global environment

const {jsdom} = require('jsdom')

global.document = jsdom('')
global.window = document.defaultView
global.navigator = {userAgent: 'node.js'}

function copyProps(src, target)
{
  const props = Object.getOwnPropertyNames(src)
  .filter(prop => typeof target[prop] === 'undefined')
  .reduce((result, prop) => ({
    ...result,
    [prop]: Object.getOwnPropertyDescriptor(src, prop)
  }), {})

  Object.defineProperties(target, props)
}
copyProps(document.defaultView, global)


// React-Native-mock-render

if(typeof jest !== 'undefined')
  jest.mock('react-native', () => require('react-native-mock-render'),
            {virtual: true})
else
  require('react-native-mock-render/mock')


// Enzyme adapter

const Adapter     = require('enzyme-adapter-react-16')
const {configure} = require('enzyme')

configure({adapter: new Adapter()})
