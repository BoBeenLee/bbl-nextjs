
module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react", "jest"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jest/globals": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "import/no-extraneous-dependencies": 0,
        "no-underscore-dangle": 0,
        "no-unused-vars": ["warn"],
        "no-unused-expressions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
        "react/prefer-stateless-function": ["warn"],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};