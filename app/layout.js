
import "./globals.css";


export const metadata = {
  title: "Randa Cakes",
  description: "Mall for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
