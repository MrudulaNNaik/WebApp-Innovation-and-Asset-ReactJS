import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./Contact";
import Nav from "./Nav";
import NewLogin from "./NewLogin";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProductList from "./products_list";
import QrCodeScanner from "./QrScanner";

function App() {
  return (
    <div className="po">
      <div className="">
        <Routes>
          <Route path="/" element={<NewLogin />} />
          <Route path="/profile" element={<Contacts />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/scanner" element={<QrCodeScanner />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
