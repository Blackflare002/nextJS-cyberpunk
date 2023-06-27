import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { AppContextProvider } from "./components/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hackerman Premium Cyber Gear",
	description:
		"Cutting edge tech, cutting edge prices!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AppContextProvider>
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</AppContextProvider>
		</html>
	);
}
