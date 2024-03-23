import { montserrat } from "./fonts";
import "./globals.css";
import "./main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./components/NavBar";
import Background from "./components/BackgroundImage";

config.autoAddCss = false;

export const metadata = {
  title: "Beatrice Bonhomme",
  description: "Programming Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>
          <NavBar />
          <Background />
          {children}
          </main>
      </body>
    </html>
  );
}
