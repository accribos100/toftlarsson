module.exports = {


  // deifne entry point
  entry:'./public/assets/js/app.js',

  //define output point
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          preset:['es2015']
        }
      }
    ]
  }

};
