import React, { useEffect } from "react";
import { IMetadata } from "../interfaces/Index";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import { RiQuestionnaireLine, RiTimeLine, RiStarSFill } from "react-icons/ri";
import logo1 from "../assets/quiz_1.png";
import logo2 from "../assets/quiz_2.png";
import logo3 from "../assets/quiz_3.png";
import logo4 from "../assets/quiz_4.png";
import logo5 from "../assets/quiz_5.png";

const logo = () => {
  // return (import )
};

const QuizSelect = ({
  categories,
  loading,
  searchParams,
  setSelectedCategory,
}: {
  categories: IMetadata;
  loading: boolean;
  searchParams: string;
  setSelectedCategory: any;
}) => {
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll(".card").forEach((card: Element) => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      }
    });

    e.currentTarget.classList.add("active");
    window.scrollTo(0, document.body.scrollHeight);
    setSelectedCategory(
      e.currentTarget.querySelector(".card-body  h2")?.textContent
    );
  };

  if (loading)
    return (
      <div style={{ color: "rgb(0, 78, 234" }}>Loading Categories ...</div>
    );

  return (
    <section className="new-quiz">
      {Object.keys(categories.byCategory)
        .filter((category: string) =>
          category.toLowerCase().includes(searchParams.toLowerCase())
        )
        .map((data: string, index: number) => (
          <div className="card" key={index} onClick={(e) => handleCardClick(e)}>
            <div className="card-image">
              <img
                // src={`../assets/quiz_${generateRandomNumber(1, 5)}.png`}
                src={logo2}
                alt="quiz-category-name"
              />
            </div>
            <div className="card-body">
              <h2>{data}</h2>
              <span>
                <RiQuestionnaireLine />
                {`${categories.byCategory[data]} Questions`}
              </span>
              <span>
                <RiTimeLine />{" "}
                {`${Math.floor(
                  (categories.byCategory[data] * 90) / 3600
                )} hour ${Math.floor(
                  ((categories.byCategory[data] * 90) % 3600) / 60
                )} min`}
              </span>
            </div>
            <div className="card-rating">
              <RiStarSFill className="star" /> 4.8
            </div>
          </div>
        ))}
    </section>
  );
};

export default QuizSelect;
