module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'off',
    'quote-props': 'off',
    quotes: 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'switch-colon-spacing': 'off',
    'template-tag-spacing': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'constructor-super': 'off',
    'generator-star-spacing': 'off',
    'no-class-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'off',
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'require-yield': 'off',
    'rest-spread-spacing': 'off',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'off',
    'yield-star-spacing': 'off',
    // disable es6 rules -- end

    // Possible Errors -- start
    'for-direction': 'off',
    'getter-return': 'off',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'off',
    'no-cond-assign': 'off',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'off',
    'no-dupe-args': 'off',
    'no-dupe-else-if': 'off',
    'no-dupe-keys': 'off',
    'no-duplicate-case': 'off',
    'no-empty': 'off',
    'no-empty-character-class': 'off',
    'no-ex-assign': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
};
