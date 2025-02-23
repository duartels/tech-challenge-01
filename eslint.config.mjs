import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/.husky",
        "**/.next",
        "**/package.json",
        "**/package-lock.json",
        "**/dist",
    ],
}, ...compat.extends(
    "plugin:storybook/recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        "simple-import-sort": simpleImportSort,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },

    rules: {
        "simple-import-sort/imports": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",

        "@typescript-eslint/explicit-member-accessibility": ["off", {
            accessibility: "explicit",
        }],

        "@typescript-eslint/member-delimiter-style": ["off", {
            multiline: {
                delimiter: "none",
                requireLast: true,
            },

            singleline: {
                delimiter: "semi",
                requireLast: false,
            },
        }],

        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/semi": ["off", null],
        "@typescript-eslint/type-annotation-spacing": "off",
        "arrow-parens": ["off", "always"],
        "brace-style": ["off", "off"],
        curly: ["error", "multi-line"],
        "eol-last": "off",
        "id-blacklist": "off",
        "id-match": "off",
        "import/order": "off",
        "linebreak-style": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-extra-semi": "off",
        "no-irregular-whitespace": "off",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-wrap-multilines": "off",
        "space-before-function-paren": "off",
        "space-in-parens": ["off", "never"],

        "@typescript-eslint/naming-convention": ["warn", {
            selector: "enumMember",
            format: ["UPPER_CASE"],
        }],

        "@typescript-eslint/member-ordering": ["error", {
            default: ["public-decorated-method", "public-instance-method", "public-method"],
        }],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        radix: "off",

        "space-unary-ops": [2, {
            words: true,
            nonwords: false,

            overrides: {
                new: false,
                "++": false,
                "--": false,
            },
        }],

        "object-curly-spacing": ["error", "always"],

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
            caughtErrors: "all",
        }],

        "no-prototype-builtins": "off",

        "keyword-spacing": ["error", {
            before: true,
            after: true,
        }],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
            mode: "strict",
        }],

        "space-before-blocks": ["error", "always"],
        "no-console": "error",
        "no-debugger": "error",
    },
}];