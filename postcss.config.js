module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'defaults',
      importFrom: ['./src/theme/variables.css'],
      preserve: true,
    },
  },
};
