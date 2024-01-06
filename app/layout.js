import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "./context/stateProvider";
import reducer from "./context/reducer";
import initialState from "./context/InitialState";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Insurewise",
  description: "Discover a world of fortune for uncertainties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ToastContainer />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
