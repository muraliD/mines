
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

function getBasePath() {
  

  let basePath = '';

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith('/')) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = '/' + process.env.BASE_PATH;
    }
  }
  return basePath;
}
const assetPrefix = isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : undefined;


const nextConfig = {
  basePath: getBasePath(),
  assetPrefix: assetPrefix,
  async rewrites() {
    return [
      {
        source: getBasePath() + '/api/:path*',
        destination: `${
          process.env.NEXT_PUBLIC_BASE_URL ?? 'http://13.232.30.108:8000'
        }/api/:path*`,
        basePath: false
      }
    ];
  },
  
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
      })
        );
     return config;
    }
};


export default nextConfig;
