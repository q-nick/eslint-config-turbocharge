<div align="center">
  <h1>ESLint Config Supercharge</h1>
  <p>The purpose of this config is to keep extremely easy to use <b>ESLint</b>, <b>Typescript</b>, and <b>Prettier</b> in any project.</p>

<a href="https://www.npmjs.com/package/eslint-config-supercharge"><img src="https://img.shields.io/npm/dm/eslint-config-supercharge.svg" alt="Downloads"></a> <a href="https://www.npmjs.com/package/eslint-config-supercharge"><img src="https://img.shields.io/npm/v/eslint-config-supercharge.svg" alt="Version"></a> <a href="https://www.npmjs.com/package/supercharge"><img src="https://img.shields.io/npm/l/supercharge.svg" alt="License"></a>
</div>

## About

**ESLint** - this is the best tool in the world that improves your Javascript code. It acts as a guide showing you good practices and helping you to avoid unnecessary issues.

**Prettier** - allows you to keep your code style consistent between many environments and many projects.

**Typescript** - is another excellent tool that could be helpful in our daily work - this one is bringing to us static typings.

The only disadvantage of them is that they are not very easy to configure, especially if you want to connect them with React or some other framework. This project tries to solve this problem. 

## Table of Contents

1. [Install](#install)
2. [Setting up a basic project](#setting-up-a-basic-project)
3. [Setting up a React project](#setting-up-a-react-project)
4. [Setting up a Node project](#setting-up-a-node-project)
4. [Setting up a project with Node and React](#setting-up-a-project-with-node-and-react)
5. [What's inside](#whats-inside)

## Install

The first thing you have to do is to **remove all eslint dependencies** (including plugins, almost everything that contains _eslint_ in the name) from your _package.json_.
Now, you can install this package:

```
npm i --save-dev eslint-config-supercharge
```

## Configuration

This config contains a few presets for different kinds of projects:

- react
- nodejs
- react-native (TODO)

### Setting up a basic project

Let's say that you have a project structure like this and already installed _eslint-config-supercharger_:

```
your-project
├── package.json
├── config.js
├── src
│ ├── A.ts
│ └── B.ts
└── node_modules
```

To enable eslint - you will need proper **.eslintrc**, for typescript - **tsconfig.json** and for prettier - **.prettierrc**

**.eslintrc**
```
{ "extends": "supercharge", "root": true }
```
**.tsconfig.json**
```
{  "extends": "eslint-config-supercharge/tsconfig.json" }
```
**.prettierrc**
```
{  "prettier": "eslint-config-supercharge/prettier"  }
```

Our example project should look like this:

```
your-project
├── package.json
├── .eslintrc          <== new
├── .prettierrc        <== new
├── .tsconfig.json     <== new
├── config.js
├── src
│ ├── A.ts
│ └── B.ts
└── node_modules
```

Now everything is set up.


### Setting up a React project

---

Basic config for react project could look like this (.eslintrc.json):

```
{
    "extends": "supercharge/react",
    "root": true
}
```

### Setting up a Node project

or for nodejs:

```
{
    "extends": "supercharge/nodejs",
    "root": true
}
```

### Setting up a project with Node and React

There is also a way to use different presets per folder in your project. Let's say that you have this structure:

```
your-project
├── package.json
├── frontend
│ └── frontend.js
└─┬ backend
  └── backend.js
```

In this situation the best approach is to avoid .eslintrc in the root folder and define two configs per specific folder:

```
your-project
├── package.json
├── frontend
│ ├── eslintrc.json
│ └── frontend.js
└─┬ backend
  ├── eslintrc.json
  └── backend.js
```

But they are a bit different from basic example, you will have to put `"root": true` in them:
frontend:

```
{
    "root": true,
    "extends": "supercharge/react"
}
```

backend:

```
{
    "root": true,
    "extends": "supercharge/nodejs"
}
```

It's not necessary, but it makes you sure that the only config you are using is defined in that files.

## What's inside

This project does not contain any new eslint-rules, it is just a set of correctly preconfigured rules of the modules that are listed below:

**Common:**

- https://www.npmjs.com/package/eslint-config-prettier
- https://www.npmjs.com/package/eslint-plugin-import
- https://www.npmjs.com/package/eslint-plugin-simple-import-sort
- https://www.npmjs.com/package/eslint-plugin-unicorn
- https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
- https://www.npmjs.com/package/@typescript-eslint/parser

**React:**

- https://www.npmjs.com/package/eslint-plugin-react
- https://www.npmjs.com/package/eslint-plugin-react-hooks
- https://www.npmjs.com/package/eslint-plugin-jsx-a11y
- https://www.npmjs.com/package/eslint-plugin-styled-components-a11y
- https://www.npmjs.com/package/eslint-plugin-testing-library

**NodeJS:**

- https://www.npmjs.com/package/eslint-plugin-node

## Authors and Contributors

@q-nick
