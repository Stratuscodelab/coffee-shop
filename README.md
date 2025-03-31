```
      )  (
     (   ) )
      ) ( (
    {_______)_
 .-'---------|  
( C|/\/\/\/\/|
 '-./\/\/\/\/|
   '_________'
    '-------'

```

# Coffee Shop Web App
Java script coffee shop website, built with Next.js 

The website has a simple order screen with buttons to add coffee to a basket, it also contains a checkout button that will tally up the cost of the coffee and provide you with a total cost. There is a dropdown feature that you can select the type of payment for the order, this is not cofigured for a real world scenario but the options are there to amend as apropriate.

The whole meaning of this repo is to demonstrate a simple understanding of particular concepts within Java script for "my" learning. The following coding principles are demonstrated. 


## Overview
Welcome to the **Coffee Shop Web App**, a modern web-based ordering system built with **JavaScript, React, and Next.js**. This application allows users to browse coffee products, add them to a cart, and proceed to checkout.

## Features
✅ Dynamic product listing  
✅ Add/remove items from the cart  
✅ Checkout functionality  
✅ Modern UI with responsive design  
✅ Fast client-side navigation with Next.js  
✅ API integration for fetching product data  

## JavaScript Principles Demonstrated
This project applies several core JavaScript and React development principles:

### 1. **Modularization & Component-Based Architecture**
- The app is structured into reusable components like `ProductCard.js`, `Cart.js`, and `Checkout.js`.
- **Separation of concerns** ensures better maintainability.

### 2. **State Management**
- Uses **React `useState`** to manage cart items.
- Implements **Context API** for global state management.

```jsx
const [cart, setCart] = useState([]);
```

### 3. **Event Handling**
- Uses event listeners like `onClick` for handling cart updates.

```jsx
const addToCart = (item) => {
    setCart([...cart, item]);
};
```

### 4. **Routing & Navigation**
- Utilizes Next.js client-side routing with `useRouter()`.

```jsx
import { useRouter } from 'next/navigation';
const goToCheckout = () => {
    router.push('/checkout');
};
```

### 5. **Asynchronous Programming (API Calls)**
- Fetches product data from an API using `useEffect()` and `fetch()`.

```jsx
useEffect(() => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
}, []);
```

### 6. **Higher-Order Functions (HOFs)**
- Uses `.map()`, `.filter()`, and `.reduce()` for data manipulation.

```jsx
const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
```

### 7. **Global State Management (Context API)**
- Shares cart state across components.

```jsx
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
```

### 8. **Conditional Rendering**
- Displays different UI based on state.

```jsx
{cart.length === 0 ? <p>Your cart is empty</p> : <CartItems />}
```

### 9. **Error Handling**
- Implements `try...catch` blocks for API calls.

```jsx
try {
    const response = await fetch('/api/checkout');
} catch (error) {
    console.error('Checkout failed:', error);
}
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/coffee-shop.git
   ```
2. Navigate into the project directory:
   ```sh
   cd coffee-shop
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Contribution
Feel free to fork this repository and submit a pull request if you'd like to contribute!

## License
This project is licensed under the MIT License.

