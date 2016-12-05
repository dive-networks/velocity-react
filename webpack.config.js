const webpack = require('webpack');

module.exports = {
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    'react/lib/ReactTransitionGroup': 'React.addons.TransitionGroup'
  },
  module: {
    noParse: [ "react", "react-dom" ]
  }
};
