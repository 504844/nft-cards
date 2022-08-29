import React from "react";

function Hero(props) {
  return (
    <section className="hero mt-5">
      <h1 className="hero--headline">{props.item.headline}</h1>
      <p className="hero--paragraph">{props.item.paragraph}</p>
    </section>
  );
}

export default Hero;
