<div align="center">
  <h1>ESLint Config Turbocharge</h1>
  <p>The purpose of this config is to keep extremely easy to use <b>ESLint</b>, <b>Typescript</b>, and <b>Prettier</b> in any project.</p>

<a href="https://www.npmjs.com/package/eslint-config-turbocharge"><img src="https://img.shields.io/npm/dm/eslint-config-turbocharge.svg" alt="Downloads"></a> <a href="https://www.npmjs.com/package/eslint-config-turbocharge"><img src="https://img.shields.io/npm/v/eslint-config-turbocharge.svg" alt="Version"></a> <a href="https://www.npmjs.com/package/turbocharge"><img src="https://img.shields.io/npm/l/turbocharge.svg" alt="License"></a>

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
5. [Setting up a project with Node and React](#setting-up-a-project-with-node-and-react)
6. [What's inside](#whats-inside)

## Install

The first thing you have to do is to **remove all eslint dependencies** (including plugins, almost everything that contains _eslint_ in the name) from your _package.json_.
Now, you can install this package:

```
npm i --save-dev eslint-config-turbocharge
```

## Configuration

This config contains a few presets for different kinds of projects:

- react
- nodejs
- react-native (TODO)

## Setting up a basic project

Let's say that you have a project structure like this and already installed _eslint-config-turbocharge_:

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
{ "extends": "turbocharge", "root": true }
```

**.tsconfig.json**

```
{  "extends": "eslint-config-turbocharge/node/tsconfig.json" }
```

**.prettierrc**

```
"eslint-config-turbocharge/prettier"
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

## Setting up a React project

We are going to use a project structure the same as for Basic setup. But now _src_ folder will contain React components.

```
your-project
├── package.json
├── .eslintrc
├── .prettierrc
├── .tsconfig.json
├── config.js
├── src
│ ├── .tsconfig.json     <== new
│ ├── .eslintrc          <== new
│ ├── App.tsx
│ └── Navbar.tsx
└── node_modules
```

**.eslintrc**

```
{ "extends": "turbocharge/react", "root": true }
```

**.tsconfig.json**

```
{  "extends": "eslint-config-turbocharge/react/tsconfig.json" }
```

First we are going to put additional **.tsconfig.json** and **.eslintrc** files inside src folder, also with **"root": true** property - this is crucial.

This way we change eslint/typescript behavior only for **src** files. Top-level files like config.js (i.e. webpack.config.js) will not report any problems related to React rules.

## Setting up a Node project

We are going to use a project structure the same as for Basic setup. But now _src_ folder will contain Node files.

```
your-project
├── package.json
├── .eslintrc
├── .prettierrc
├── .tsconfig.json
├── config.js
├── src
│ ├── .eslintrc          <== new
│ ├── service.ts
│ ├── server.ts
│ └── controller.ts
└── node_modules
```

**.eslintrc**

```
{ "extends": "turbocharge/node", "root": true }
```

We just need to put **.eslintrc** file inside src folder, with **"root": true** property - this is crucial.

This way we change eslint behavior only for **src** files. Top-level files like config.js (i.e. webpack.config.js) will not report any problems related to Node rules.

## Setting up a project with Node and React

Looking at React and Node examples, we can try to mix them up in project which contain both React and Node code.

Example project structure based on Basic project:

```
your-project
├── package.json
├── .eslintrc
├── .prettierrc
├── .tsconfig.json
├── config.js
├── src-backend
│ ├── .eslintrc          <==
│ ├── service.ts
│ ├── server.ts
│ └── controller.ts
├── src-frontend
│ ├── .tsconfig.json     <==
│ ├── .eslintrc          <==
│ ├── service.ts
│ ├── server.ts
│ └── controller.ts
└── node_modules
```

**.eslintrc**

```
{ "extends": "turbocharge/node", "root": true }
```

**.eslintrc**

```
{ "extends": "turbocharge/react", "root": true }
```

**.tsconfig.json**

```
{  "extends": "eslint-config-turbocharge/react/tsconfig.json" }
```

Simple as that.

## Explanations

- **"root": true** - makes you sure that the only config you are using is defined in that file.

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
