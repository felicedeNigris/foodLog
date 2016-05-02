module.exports = {
  "plugins": [
      "react"
    ],
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
      "module": true,
      "__dirname": true,
      "require": true
    },
    "rules": {
        "indent": [
            0,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
          "warn", {
            "vars": "local",
            "args": "all"
          }
        ]
    }
};
