import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

export default function App() {
  const mappedElements = Data.map((element) => {
    return (
      <Card
        id={element.id}
        {...element}
        // title={element.title}
        // description={element.description}
        // price={element.price}
        // coverImg={element.coverImg}
        // stats={{
        //   rating: element.rating,
        //   reviewCount: element.reviewCount,
        // }}
        // location={element.location}
        // openSpots={element.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{mappedElements}</section>
    </div>
  );
}
