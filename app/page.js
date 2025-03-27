"use client"; // This tells the server to send the client-side code to the browser
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import for routing
import "../styles/styles.css"; // Import your global CSS styles

export default function CoffeeShop() {
  const menu = [
    { name: "Espresso", price: 2.5 },
    { name: "Cappuccino", price: 3 },
    { name: "Latte", price: 3.5 },
    { name: "Mocha", price: 4 },
  ];

  const [order, setOrder] = useState([]);  // Order state to keep track of selected items
  const [total, setTotal] = useState(0);   // Total price state for the order
  const router = useRouter(); // For navigating to the checkout page

  const addToOrder = (item) => {
    setOrder([...order, item]);  // Add item to order array
    setTotal(total + item.price); // Update total price
  };

  const removeFromOrder = (index) => {
    const newOrder = [...order];
    const removedItem = newOrder.splice(index, 1); // Remove item from order
    setOrder(newOrder);
    setTotal(total - removedItem[0].price); // Adjust total price
  };

  const goToCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div>
      <h1>Welcome to the Stratus Coffee Shop!</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => addToOrder(item)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Cart:</h2>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={styles.orderList}>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromOrder(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={goToCheckout} disabled={order.length === 0}>
        Proceed to Checkout
      </button>
    </div>
  );
}

const styles = {
  orderList: { listStyle: "none", padding: 0 },
};
