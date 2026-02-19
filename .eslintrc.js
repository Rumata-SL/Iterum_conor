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
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
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
        "react/no-deprecated": "off",
        "i18next/no-literal-string": ["error", {"markupOnly": true, "ignoreAttribute": ["data-testid"]}],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "max-len": ["error", {ignoreComments: true, code: 300}],
        "@typescript-eslint/no-require-imports": "warn",
        "react/display-name": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],
        "no-undef": "off",
    }
};
