# React Count Down

使用 ReactJS 编写的倒计时应用

## Memo

### 脚手架

由于从头写一个 webpack.config.js 是一件略麻烦，且对初学者极其不友好的一件事，因此，在对 Webpack 有了基本的认识后，使用其他人的预先写好的 webpack.config.js 是一个比较实际的做法。

项目使用了 [这个脚手架](https://github.com/ruanyf/react-babel-webpack-boilerplate)

### 关于 PropTypes

从 React v15.5 开始，React.PropTypes 弃用，需要另外安装 prop-types

```shell
npm install -S prop-types
```

```js
import PropTypes from 'prop-types';
```

### 关于样式的编写

不同于 React Native 的样式编写，浏览器本身支持样式的解释，因此最好还是使用 .css 文件的形式编写样式。不过可以使用按模块分类的那种 css，而不是全部编写在同一个文件中的 css

[CSS Modules 用法](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

需要注意的一个细节是，使用模块化的 CSS 的时候，需要修改 webpack.config.js 中 module 中关于 css 转译的 loader 为 

```js
style-loader!css-loader?modules
```

即添加 `?modules` 来指示开启 CSS 的模块

### Todo

- [ ] 添加自定义计时器
- [ ] 使用 redux 进行管理

# README

This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Lint with ESlint and Airbnb's style sheet.
- Build with Webpack
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code
- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- Support git hook `pre-commit` used to lint and test your code
- Support git hook `commit-msg` used to lint your [commit message](https://github.com/kentcdodds/validate-commit-msg)
- Use [conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`

## How to use

First, clone the repo.

```bash
$ git clone git@github.com:ruanyf/react-babel-webpack-boilerplate.git <yourAppName>
$ cd <yourAppName>
```

Second, delete the old `.git` history and initialize new history.

```bash
$ rm -rf .git
$ git init
```

Third, install the dependencies.

```bash
$ npm install
```

Next, launch the boilerplate app.

```bash
$ npm start
```

Now you should see a new browser window/tab opening and a title of "Hello World" in http://127.0.0.1:8080.

Last, you need update `package.json` and modify fields like `name`, `version`, `description`, `keywords`, `author`, `license` and so on to fit your project.

From there, you start to develop your own code in the `app` directory. When you finish coding, use `npm run build` or `npm run deploy` to build the static files.

Attention, when committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## License

MIT


