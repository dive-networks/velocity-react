const webpack = require('webpack');

module.exports = {
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    'react/lib/ReactTransitionGroup': 'React.addons.TransitionGroup'
  },
  module: {
    noParse: [ "react", "react-dom" ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      "react": "dummyReact.js",
      "react-dom": "dummyReactDOM.js"
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
