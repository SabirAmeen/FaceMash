module.exports = {
    entry: "./public/scripts/app.jsx",
    output: {
        path: __dirname + '/public/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: ['style', 'css']
            },
            {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};