import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content"></div>
      <Footer />
    </div>
  );
}

export default App;
