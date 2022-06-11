import React, { useState } from "react";
import { IRenderedPage } from "../interfaces/Index";
import { RiStarSFill } from "react-icons/ri";

const Announcer = ({ page }: IRenderedPage) => {
  return (
    <>
      {/* dynamically render the announcer*/}
      {page === "homepage" && (
        <React.Fragment>
          <h1>quiz it</h1>
          <h3>Hello, James</h3>
          <p>Let's test your knowledge</p>
        </React.Fragment>
      )}
      {page === "detailspage" && (
        <section className="announce-in-detail">
          <div>
            <h1>quiz it</h1>
            <p>clicked test quiz</p>
            <h3>GET 100 points</h3>
          </div>
          <div className="rating">
            <RiStarSFill className="star" /> 4.8
          </div>
        </section>
      )}
    </>
  );
};

export default Announcer;
