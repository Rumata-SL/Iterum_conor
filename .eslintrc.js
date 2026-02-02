module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true,
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/src/**/*.{test,stories}.{ts,tsx}",
                "config/storybook/**/*.js",

            ],
            rules: {
                "i18next/no-literal-string": "off",
            },
            "parserOptions": {
                "sourceType": "script",
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
        "react-hooks",
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension": [
            2,
            {extensions: [".js", ".jsx", ".tsx"]},
        ],
        "no-tabs": 0,
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "always",
        ],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/no-deprecated": "off",
        "i18next/no-literal-string": ["error", {"markupOnly": true, "ignoreAttribute": ["data-testid"]}],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "max-len": ["error", {ignoreComments: true, code: 300}],
    }
};
