module.exports = {
    entry:  "./src/server/index.js",
    target: 'node',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true
                  }
                }
              ],
              "@babel/preset-react"
            ]
          }

        },
        
        {
          test: /\.css$/,
          use: [ 'css-loader']
      },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
  }