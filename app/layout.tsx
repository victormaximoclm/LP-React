import "react-slidedown/lib/slidedown.css";
import "../styles/index.sass";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Landing Page - Portfólio",
    description: "Landing page moderna desenvolvida com Next.js e React",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Landing Page - Portfólio | Next.js & React</title>
                <meta
                    name="description"
                    content="Landing page moderna desenvolvida com Next.js, React e TypeScript"
                />
                <meta
                    property="og:url"
                    content="https://seu-site-portfolio.com/"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Landing Page - Portfólio | Next.js & React"
                />
                <meta
                    property="og:description"
                    content="Landing page moderna desenvolvida com Next.js, React e TypeScript"
                />
                <meta
                    property="og:image"
                    content="https://seu-site-portfolio.com/og-image.png"
                />

            </head>
            <body className={cn(inter.variable, poppins.variable)}>
                {children}
            </body>
        </html>
    );
}
