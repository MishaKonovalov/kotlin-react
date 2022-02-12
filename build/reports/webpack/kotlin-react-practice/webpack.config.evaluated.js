{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/polzovatel/Documents/kotlin-react-practice/build/js/packages/kotlin-react-practice/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/polzovatel/Documents/kotlin-react-practice/build/js/packages/kotlin-react-practice/kotlin-dce-dev/kotlin-react-practice.js'
    ]
  },
  output: {
    path: '/Users/polzovatel/Documents/kotlin-react-practice/build/distributions',
    filename: [Function: filename],
    library: 'kotlin-react-practice',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/polzovatel/Documents/kotlin-react-practice/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}