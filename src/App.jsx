import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <ProductDetail />
      <Reviews />
    </>
  );
}

export default App;
