# renate

[![Greenkeeper badge](https://badges.greenkeeper.io/QuantumBA/renate.svg)](https://greenkeeper.io/)
React Native Tester

`renate` is a heavily opiniated set of tools already configured to test React
Native applications and components in an *almost real* environment without
needing to have dozens of dependencies nor need to configure all them yourself.

The environment provided allow to do a real `mount()` of your components using
[react-native-mock-render](https://github.com/Root-App/react-native-mock-render)
and [jsdom](https://github.com/tmpvar/jsdom), so React Native components
lifecycle will behave as in a real environment. It has also already configured
[enzyme](http://airbnb.io/enzyme/) to easily test your components with
[jest](https://facebook.github.io/jest/) and take
[snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html) of
their current state using, lint your code using [eslint](https://eslint.org/)
with support for latest EcmaScript features, and automatically upload code
coverage statistics to [coveralls](https://coveralls.io/). What a piece of cake,
isn't it? :-D

## Installation

Install `renate` as a devDependency by executing in your shell

```sh
npm install --save-dev renate
```

After that, add the next scripts configuration to your project `package.json`

```json
{
  "scripts": {
    "lint": "renate-lint",
    "pretest": "npm run lint",
    "test": "renate-test"
  }
}
```

This way code linting will be executed automatically before running your tests.
Upload of code coverage statistics will be done automatically if tests are being
executed in a CI server and they are passing.

## P.D.:

![The cake is a lie](https://ih0.redbubble.net/image.190054181.4037/flat,800x800,075,f.jpg)
