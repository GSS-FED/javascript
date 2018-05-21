module.exports = {
  extends: [
    '@gssfed/base',
    '@gssfed/base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
