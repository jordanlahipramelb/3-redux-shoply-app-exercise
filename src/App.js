import "./App.css";
import React from "react";
import ProductList from "./ProductList";
import Routes from "./Routes";
import Navbar from "./Navbar";

/** Shoply App
 *
 * Components: ProductList -> ProductDetails -> Cart -> CartIcons
 */

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <h1 className="pb-4 pt-2 text-center">Welcome to Shoply!</h1>
        <Routes />
      </div>
    </main>
  );
}

export default App;
