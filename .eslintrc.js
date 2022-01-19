module.exports = {
  extends: ['@mi/eslint-config-cloudfe-react-ts', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'prettier/prettier': 'warn',
    'no-empty': 'warn',
    'no-useless-escape': 'warn',
    'react/sort-comp': 'warn',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
