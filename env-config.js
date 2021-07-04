// env-config.js
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  'process.env.BACKEND_URL': !debug ? 'https://junnei.github.io/' : '',
}