/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "http.cat",
                port: "",
                pathname: "/images/**"
            }
        ]
    }
}
