import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// State Management Components
import { StateProvider } from "./context/stateProvider";
import reducer from "./context/reducer";
import initialState from "./context/initialState";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Wastify Management Portal",
  description: "A more refined way of managing your wastes with estafettes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ToastContainer />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
