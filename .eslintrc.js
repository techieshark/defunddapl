module.exports = {
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:flowtype/recommended"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "flowtype",
        "react",
        "react-native",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "react/display-name": 0,
        "no-console": 0,
        "quotes": 0,
        "react/sort-comp": [1, {
            order: [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ],
        }],
        // "react-native/no-unused-styles": 1,
        // "react-native/no-inline-styles": 1,
        // "react-native/no-color-literals": 1
    }
};
