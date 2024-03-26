// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json')

module.exports = {
  publicRuntimeConfig: {
    version,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
