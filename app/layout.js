import { CartProvider } from '../context/CartContext'; // Import CartProvider
import "../styles/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Stratus Coffee Shop</title>
      </head>
      <body>
        <CartProvider>
          <div>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
