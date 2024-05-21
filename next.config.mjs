/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdnv2.moovin.com.br',
            }
        ]
    }
}

export default nextConfig;
