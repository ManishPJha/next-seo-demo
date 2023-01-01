/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/",
  //       headers: [
  //         {
  //           key: "Referrer-Policy",
  //           value: "origin-when-cross-origin",
  //         },
  //       ]
  //     },
  //   ];
  // },
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "localhost"],
    remotePatterns: [
			{
				protocol: "https",
				hostname: "via.placeholder.com",
				port: "",
				pathname: "/150/*",
			},
		],
    // disableStaticImages: true,
  },
};

module.exports = nextConfig;
