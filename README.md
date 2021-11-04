# ESlint config - Ultimate Typescript

[![Build Status](https://travis-ci.org/q-nick/eslint-config-ultimate-typescript.svg)](https://travis-ci.org/q-nick/eslint-config-ultimate-typescript) <a href="https://www.npmjs.com/package/eslint-config-ultimate-typescript"><img src="https://img.shields.io/npm/dm/eslint-config-ultimate-typescript.svg" alt="Downloads"></a> <a href="https://www.npmjs.com/package/eslint-config-ultimate-typescript"><img src="https://img.shields.io/npm/v/eslint-config-ultimate-typescript.svg" alt="Version"></a> <a href="https://www.npmjs.com/package/npm-gui"><img src="https://img.shields.io/npm/l/npm-gui.svg" alt="License"></a>

## About
ESlint is the best tool in the world which improves your Javascript code. It acts as a guide showing you good practices and helping you to avoid unnedeed problems. 
It also allow you to keep your code style consistent between many environments and many projects.

The only disadvantage is that it's not very easy to be configurated, especially if you want to connect it with Typescript.

But its not the only one.... TODO

#
## Getting Started
The purpose of this config is to keep extremely easy to use ESlint+Typescript in your project. 

So the first thing you have to do is to **remove all eslint dependencies** (including plugins, almost everything that contains _eslint_ in name) from your package json.
And then you can install this package:
```
npm i --save-dev eslint-config-ultimate-typescript
```

### Configuration
This config contains a few presets for different kind of projects:

- react
- nodejs

Basic config for react project could look like this (.eslintrc.json):
```
{
    "extends": "ultimate-typescript/react"
}
```
or for nodejs:
```
{
    "extends": "ultimate-typescript/nodejs"
}
```

### Single repo, different presets
There is also a way to use different presets per folders in your proejct. Lets say that you have thsis tructure:

```
|-frontend
|-backend
```

In this situation the best approach is to avoid .eslintrc in root folder and define two configs per specific fodler:

```
|-frontend
     |- .eslintrc.json
|-backend
     |- .eslintrc.json
```

but they are a bit different from basic example, you will have to to put `"root": true` in them:
frontend:
```
{
    "root": true,
    "extends": "ultimate-typescript/react"
}
```
backend:
```
{
    "root": true,
    "extends": "ultimate-typescript/nodejs"
}
```

It's not necessary, but it makes you sure that the only config you are using is defined in that files.

#### What is inside
This project does not contain any new eslint-rules, it is just a set of correctly preconfigured rules of the modules that are listed below:

common:
- https://www.npmjs.com/package/eslint-plugin-import
- https://www.npmjs.com/package/eslint-plugin-unicorn

react:
- https://www.npmjs.com/package/eslint-plugin-jsx-a11y
- https://www.npmjs.com/package/eslint-plugin-react
- https://www.npmjs.com/package/eslint-plugin-react-hooks

nodejs:
- https://www.npmjs.com/package/eslint-plugin-node

## Authors and Contributors
@q-nick
