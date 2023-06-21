import { ToastContainer } from "react-toastify";
import { Logo, Navbar } from "./components";
import "./globals.css";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Mahyar | portfolio",
  description: "Web3 developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-primary text-primary-text h-full w-full overflow-x-hidden`}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Logo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
