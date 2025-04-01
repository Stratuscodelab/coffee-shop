"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartContext } from '../../context/CartContext';

export default function Checkout() {
  const { order, total, clearCart } = useCartContext();
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const router = useRouter();

  const handleCheckout = () => {
    alert(`Order confirmed! Total: $${total.toFixed(2)}\nName: ${name}\nPayment: ${paymentMethod}`);
    clearCart();
    router.push("/");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Review Your Order</h2>
      <ul>
        <div className="cardcheckout">
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
        </div>
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash">Cash</option>
        </select>
      </div>

      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}