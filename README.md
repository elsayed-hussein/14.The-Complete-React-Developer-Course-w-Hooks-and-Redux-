# Read Me

..............................................

yarn install
..............................................

npm install
..............................................

live-server public
..............................................

babel ./src/app.js --out-file=./public/scripts/app.js --presets=env,react --watch

..............................................

npm list -g --depth=0
├── babel-cli@6.24.1
├── corepack@0.10.0
├── live-server@1.2.1
├── npm@8.1.0
└── yarn@1.22.17

..............................................

npm list -g --depth=0
├── corepack@0.10.0
├── npm@8.1.0
└── yarn@1.22.17

..............................................

npm install babel-cli@6.24.1 live-server webpack validator@8.0.0 react@15.6.1 react-dom@15.6.1 babel-core@6.25.0 babel-loader@7.1.1 webpack-dev-server@2.5.1 react-modal@2.2.2

..............................................

npm audit fix --force

..............................................

{
"name": "indecision-app",
"version": "1.0.0",
"main": "index.js",
"author": "Andrew Mead",
"license": "MIT",
"scripts": {
"serve": "live-server public/",
"build": "webpack",
"dev-server": "webpack-dev-server"
},
"dependencies": {
"babel-cli": "6.24.1",
"babel-core": "6.25.0",
"babel-loader": "7.1.1",
"babel-preset-env": "1.5.2",
"babel-preset-react": "6.24.1",
"live-server": "^1.2.0",
"react": "15.6.1",
"react-dom": "15.6.1",
"validator": "8.0.0",
"webpack": "3.1.0",
"webpack-dev-server": "2.5.1"
}
}

..............................................

const path = require('path');

module.exports = {
entry: './src/app.js',
output: {
path: path.join(**dirname, 'public'),
filename: 'bundle.js'
},
module: {
rules: [{
loader: 'babel-loader',
test: /\.js$/,
exclude: /node_modules/
}]
},
devtool: 'cheap-module-eval-source-map',
devServer: {
contentBase: path.join(**dirname, 'public')
}
};

..............................................

{
"presets": [
"env",
"react"
],
"plugins": [
"transform-class-properties"
]
}

..............................................

..............................................
