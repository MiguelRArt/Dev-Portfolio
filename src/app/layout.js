import "./globals.css";

export const metadata = {
  title: "Lorem Ipsum | Portfolio",
  description: "Portfolio profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}