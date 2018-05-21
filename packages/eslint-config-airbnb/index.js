module.exports = {
  extends: [
    '@gssfed/eslint-config-base',
    '@gssfed/eslint-config-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
