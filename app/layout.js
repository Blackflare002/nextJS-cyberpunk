import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { AppContextProvider } from "./components/AppContext";
import { CartProvider } from "./components/CartContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hackerman Premium Cyber Gear",
	description:
		"Cutting edge tech, cutting edge prices!",
	openGraph: {
		title: "Hackerman",
		description: "A Cyberpunk E-Commerce Website",
		siteName: "Hackerman",
		images: [
			{
				url: "./opengraph-image.png",
				width: 800,
				height: 600,
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AppContextProvider>
				<CartProvider>
					<body className={inter.className}>
						<Head>
							<meta
								property="title"
								content="Hackerman"
							/>
							<meta
								property="og:title"
								content="Hackerman"
							/>
							<meta
								property="description"
								content="Cutting edge tech, cutting edge prices!"
							/>
							<meta
								property="og:description"
								content="Cutting edge tech, cutting edge prices!"
							/>
							<meta
								property="og:url"
								content="https://next-js-13-blue.vercel.app/"
							/>
							<meta
								property="og:site_name"
								content="Hackerman"
							/>
							<meta
								property="og:locale"
								content="en_US"
							/>
							<meta
								property="og:image"
								content="<generated>"
							/>
							<meta
								property="og:image:type"
								content="<generated>"
							/>
							<meta
								property="og:image:width"
								content="<generated>"
							/>
							<meta
								property="og:image:height"
								content="<generated>"
							/>
							<meta
								property="og:type"
								content="website"
							/>
						</Head>

						<Header />
						{children}
					</body>
				</CartProvider>
			</AppContextProvider>
		</html>
	);
}
