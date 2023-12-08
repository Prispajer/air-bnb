import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
