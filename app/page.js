"use client";
import { useRouter } from 'next/navigation';
import { useCartContext } from '../context/CartContext';
import "../styles/styles.css";

export default function CoffeeShop() {
  const menu = [
    { name: "Espresso", price: 2.5 },
    { name: "Cappuccino", price: 3 },
    { name: "Latte", price: 3.5 },
    { name: "Mocha", price: 4 },
  ];

  const { order, total, addToCart, removeFromCart } = useCartContext();
  const router = useRouter();

  const goToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div>
      <h1>Welcome to the Stratus Coffee Shop!</h1>
      <h4>Menu</h4>
      <ul className="menuleft">
        {menu.map((item, index) => (
          <li key={index}>
            <div className="card">
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Your Cart:</h2>
      <div className="checkout-right">
        {order.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="checkout-right">
            {order.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h3>Total: ${total.toFixed(2)}</h3>
      <div className="button-container">
        <button onClick={goToCheckout} disabled={order.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}