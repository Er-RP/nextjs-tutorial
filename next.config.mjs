/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"img.freepik.com",
                protocol:"https"
            }
        ]
    }
};

export default nextConfig;
