module.exports = {
  env: {
    browser: true, // Browser environment
    es2021: true, // ECMAScript 2021 features
    node: true, // Node.js environment
  },
  extends: [
    "eslint:recommended", // ESLint recommended rules
    "plugin:react/recommended", // React recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "prettier", // Disable rules conflicting with Prettier
  ],
  parser: "@typescript-eslint/parser", // Parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX support
    },
    ecmaVersion: 12, // ECMAScript version
    sourceType: "module", // Use ES6 module syntax
  },
  plugins: [
    "react", // React plugin
    "@typescript-eslint", // TypeScript plugin
    "prettier", // Prettier plugin
    "import", // Ensure to include "import" plugin
  ],
  rules: {
    "prettier/prettier": "error", // Format errors are reported as errors
    "react/react-in-jsx-scope": "off", // Not require 'React' in scope with JSX
    "react/prop-types": "off", // Disable propTypes checking in React
    "@typescript-eslint/explicit-module-boundary-types": "off", // Allow TypeScript to infer return types

    // eslint-plugin-import rules
    "import/first": "error", // Ensure all imports appear at the top of the file
    "import/no-duplicates": "error", // Disallow duplicate imports
    "import/order": [
      // Enforce a convention in module import order
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always", // New line between groups
        alphabetize: {
          order: "asc", // Alphabetical order
          caseInsensitive: true, // Case insensitive
        },
      },
    ],
    "import/no-default-export": "off", // Allow default exports
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
