module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    'transform-export-extensions',
    [
      '@babel/plugin-transform-typescript',
      {
        test: /\.ts$/,
      },
      'plugin-transform-ts',
    ],
    [
      '@babel/plugin-transform-typescript',
      {
        isTSX: true,
        test: /\.tsx$/,
      },
      'plugin-transform-tsx',
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: [__dirname],
        alias: {
          '@pages': './src/pages',
          '@code': './src/code',
          '@templates': './src/templates',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@queries': './src/queries',
          '@data': './src/data',
          '@images': './src/images',
          '@util': './src/util',
          '@styles': './src/styles',
          '@interfaces': './src/interfaces',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
