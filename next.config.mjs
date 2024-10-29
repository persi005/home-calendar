import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join('./', 'styles')],
    },
}

export default nextConfig
