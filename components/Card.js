import React from "react";

export default function Card() {
  return (
    <section className="activities">
      <figure>
        <img
          class="status-photo"
          src="../images/katie-zaferes.png"
          alt="first"
        />
        <span class="status">SOLD OUT</span>
        <span class="status-span">
          <img class="star" src="../images/star.png" /> 5.0{" "}
          <p>(6) &#8226; USA</p>
        </span>
        <span class="status-span">Life lessons with Katie Zafares</span>
        <span class="status-span">
          <b>From $136</b> / person
        </span>
      </figure>
    </section>
  );
}
