const { environment } = require('@rails/webpacker')

environment.loaders.append('expose', {
  test: require.resolve('../../app/javascript/map'),
  use: [
    {
      loader: 'expose-loader',
      options: 'loadMap'
    }
  ]
})

module.exports = environment
