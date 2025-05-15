/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ['api.hydottech.com', 'hydottech.com', 'mainapi.hydottech.com','localhost:3000'], // Allowed image domains
      unoptimized: true, // Disable image optimization for static export
    },
    output: 'export', // Enables static export
  };