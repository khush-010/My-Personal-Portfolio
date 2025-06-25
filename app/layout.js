import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add desired weights
  display: "swap",
});

export const metadata = {
  title: "Khush Dhameliya | Full Stack Developer",
  description:
    "Portfolio of Khush Dhameliya – a passionate full stack developer showcasing projects, skills, and experience with modern web technologies.",
  keywords: [
    "Khush Dhameliya",
    "Full Stack Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Web Developer",
    "React Developer",
    "Node.js",
  ],
  authors: [{ name: "Khush Dhameliya", url: "https://yourdomain.com" }],
  creator: "Khush Dhameliya",
  metadataBase: new URL("https://my-personal-portfolio-khush.vercel.app/"), // change to your actual domain
  icons: {
    icon: "/favicon.svg", // must be placed in /public directory
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Khush Dhameliya | Full Stack Developer",
    description:
      "Explore the portfolio of Khush Dhameliya – full stack web developer skilled in React, Next.js, Node.js, and more.",
    url: "https://my-personal-portfolio-khush.vercel.app/",
    siteName: "Khush Dhameliya Portfolio",
    images: [
      {
        url: "/og-image.png", // Optional: social media preview image
        width: 1200,
        height: 630,
        alt: "Khush Dhameliya Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
