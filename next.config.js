// next.config.js
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? `https://junnei.github.io` : '',
  
  images: {
    loader: 'cloudinary',
  }

}
