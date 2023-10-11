module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    ".pnpm-lock.yaml",
    "node_modules/*",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  plugins: ["react-refresh", "prettier", "@tanstack/query"],
  settings: { react: { version: "18.2" } },
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      plugins: ["yaml"],
      extends: ["plugin:yaml/recommended"],
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/prefer-query-object-syntax": "error",
        "@tanstack/query/stable-query-client": "error",
        "react/prop-types": "off",
        "linebreak-style": "off",
      },
    },
  ],
};
