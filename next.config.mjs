import { withPayload } from '@payloadcms/next/withPayload'
import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beautypointcollege.vercel.app',
      },
    ],
  },
}

export default withPayload(nextConfig)
