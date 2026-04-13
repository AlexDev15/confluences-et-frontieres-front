import createNextIntlPlugin from "next-intl/plugin";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(process.cwd(), "../.env"),
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "./dist",
	env: {
		GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
	},
};

export default withNextIntl(nextConfig);
