import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add desired weights
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "My personal portfolio showcasing my skills, projects, and experiences.",
  icons:{
    icon: "favico.svg",
    // apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
