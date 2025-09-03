import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./app/styles'],
    prependData: '@use "_variables" as *;',
  },
};

export default nextConfig;
