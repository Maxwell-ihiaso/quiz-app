import React from "react";
import { IRenderedPage } from "../interfaces/Index";
import { RiStarSFill } from "react-icons/ri";

interface IAnnouncer {
  currentPage: IRenderedPage;
  category?: string;
}

const Announcer: React.FC<IAnnouncer> = ({ currentPage, category }) => {
  return (
    <>
      {/* dynamically render the announcer*/}
      {currentPage.toString() === "homepage" && (
        <React.Fragment>
          <h1>quiz it</h1>
          <h3>Hello, James</h3>
          <p>Let's test your knowledge</p>
        </React.Fragment>
      )}
      {currentPage.toString() === "detailspage" && (
        <section className="announce-in-detail">
          <div>
            <h1>quiz it</h1>
            <p>{`${category} quiz`}</p>
            <h3>GET 100 points</h3>
          </div>
          <div className="rating">
            <RiStarSFill className="star" /> 4.8
          </div>
        </section>
      )}
      {currentPage.toString() === "quizpage" && (
        <section className="announce-in-detail">
          <div>
            <h1>quiz it</h1>
          </div>
        </section>
      )}
    </>
  );
};

export default Announcer;
