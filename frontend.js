module.exports = {
  "globals": {
    "analytics": false,
  },
  "rules": {
    "react/prop-types": [2, {ignore: ['dispatch', 'params', 'children', 'defaultValue']}],
    "react/no-console": 0,
    "react/no-did-update-set-state": 2,
    "react/jsx-no-bind": 0,
    "jsx-quotes": [2, "prefer-single"]
  },
  "plugins": ["react"],
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  }
};
