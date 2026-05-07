import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Cheese", category: "Dairy" },
    { id: 3, name: "Apple", category: "Fruit" },
    { id: 4, name: "Bread", category: "Bakery" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // Toggle dark mode
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Add item to cart
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Filter products
  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruit">Fruit</option>
        <option value="Bakery">Bakery</option>

        {/* Extra option for testing */}
        <option value="Vegetables">Vegetables</option>
      </select>

      {/* Product List */}
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;