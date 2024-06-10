import { withPayload } from '@payloadcms/next/withPayload'
import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nblprebjyfpqphoxnufp.supabase.co',
      },
    ],
  },
}

export default withPayload(nextConfig)
