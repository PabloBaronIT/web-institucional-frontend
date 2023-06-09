export const metadata = {
  title: "Municipalidad de Sacanta",
  description: "Web Oficial de la Municipalidad de Sacanta, Córdoba",
};
import "../styles/globals.css";
import { Navigation } from "./components/Navigation/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer/Footer";
library.add(fas, faTwitter, faFontAwesome);

// funcionan como routes todas las carpetas que tengan
// el archivo page.jsx en su carpeta, sino no son routes, son componentes

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Web Institucional</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
