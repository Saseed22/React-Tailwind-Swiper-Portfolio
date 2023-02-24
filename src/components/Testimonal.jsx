import React from "react";
import TestimonalSlider from "./TestimonalSlider";

const Testimonal = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-testimonials relative
                  before:absolute before:opacity-40 before:-top-[2rem] before:-left-64
                  before:hidden before:lg:block"
          >
            What other people say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            commodi in nesciunt unde quasi ratione autem debitis aspernatur
            voluptates quo!
          </p>
        </div>
        <TestimonalSlider />
      </div>
    </section>
  );
};

export default Testimonal;
