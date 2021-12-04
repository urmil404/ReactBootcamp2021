import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container">
        <h2 className="text-white text-center">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card title="Web Development Course" subText="Web Development Course for Beginners with build some real projects" btnText="Lets Do"/>
          </div>
          <div className="col-4">
          <Card title="App Development Course"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
