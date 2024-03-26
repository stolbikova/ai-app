/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Override the default webpack configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },
};

module.exports = nextConfig;
