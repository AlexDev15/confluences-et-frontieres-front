import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	env: {
		GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
	},
};

export default withNextIntl(nextConfig);
