import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Question from "../components/Question";
import { IRenderedPage, ILocalQuestion } from "../interfaces/Index";
import Header from "../components/Header";
import { generateRandomNumber } from "../utils/generateRandomNumber";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "./homepage.css";
import "./quizDetailsPage.css";
import "./quizPage.css";

const QuizPage = () => {
  const [LocalQuestions, setLocalQuestions] = useState<ILocalQuestion[]>([]);
  const [questions, setQuestions] = useState<ILocalQuestion[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState(65);
  const [timerId, setTimerId] = useState<NodeJS.Timer>();
  const [isPaused, setIsPaused] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const submitRef = useRef<HTMLDivElement>(null);
  const currentPage = "quizpage" as unknown as IRenderedPage;
  const { category } = useParams();

  // transcribe the category to have & instead of _and_ in the url
  let categoryReview: string;

  if (category?.includes("_")) {
    const temp = category.split("_and_");
    categoryReview = `${temp[0]} & ${temp[1]}`;
  } else {
    categoryReview = category!;
  }

  /**
   * questionData is created to allow us use
   * spread operator in Question component Props
   */
  const questionData = {
    question: questions[index],
    LocalQuestions: LocalQuestions[index],
    timerId,
    setIsPaused,
    setScoreCount,
  };

  useEffect(() => {
    // get original questions from localStorage
    const localQuestions: ILocalQuestion[] = JSON.parse(
      localStorage.getItem("questions")!
    );

    setLocalQuestions(localQuestions);

    if (
      categoryReview.toLowerCase() === localQuestions[0].category.toLowerCase()
    ) {
      setQuestions(
        localQuestions.map((question) => {
          // A temporary option is made to prepare for rearranging the options
          // in a random manner
          const tempOptions = [...question.options];

          const temp: ILocalQuestion = {
            category: question.category,
            id: question.id,
            options: [],
            question: question.question,
            difficulty: question.difficulty,
          };

          // for loop to populate the options value in temp
          // generate a random Number,
          // use the number as index for selection of items in tempOptions,
          // use the enerated number to remevoe item that has been selected from tempOptions
          for (let i = 0, cycle = tempOptions.length; i < cycle; i++) {
            const randomIndex: number = generateRandomNumber(
              0,
              tempOptions.length
            );
            temp.options.push(tempOptions[randomIndex]);
            tempOptions.splice(randomIndex, 1);
          }

          return temp;
        })
      );
    }
  }, [category, categoryReview]);

  useEffect(() => {
    if (secondsLeft >= 1) {
      !isPaused && setTimerId(setTimeout(countdownSeconds, 1000));
    }

    if (secondsLeft === 0) {
      document.querySelectorAll(".option").forEach((elem) => {
        elem.classList.add("disable-sibling");
      });
    }

    return () => clearTimeout(timerId);
  }, [secondsLeft]);

  const handleNext = (e: React.MouseEvent<HTMLSpanElement>) => {
    // refresh the timer on next question
    setIsPaused(false);
    setSecondsLeft(65);
    // display the next question once next is clicked
    // check that the question displayed is not the last one
    if (index <= questions.length - 2) {
      setIndex((index) => index + 1);
    }

    // make the next button blur (reduced opacity) ones last qustion is reached
    // make submit button active on answer last question
    if (index === questions.length - 2) {
      e.currentTarget.classList.add("disable-sibling");
      if (submitRef.current) {
        submitRef.current.style.opacity = "1";
        submitRef.current.style.pointerEvents = "auto";
      }
    }

    document.querySelectorAll(".option").forEach((elem) => {
      if (
        elem.classList.contains("active") ||
        elem.classList.contains("disable-sibling") ||
        elem.classList.contains("correct")
      ) {
        elem.classList.remove("active", "disable-sibling", "correct");
      }
    });
  };

  const countdownSeconds = () => {
    setSecondsLeft((prev) => prev - 1);
  };

  return (
    <div className="homepage">
      <div className="home-group">
        <Header
          page={currentPage}
          category={categoryReview}
          secondsLeft={secondsLeft}
        />
        <main className="main-content">
          {/*
           * add details to class name on details page
           * inherited from quiz details page
           */}

          <div className="content-container details quiz">
            <hr />
            <div className="quiz-content">
              <div className="quiz-number">
                {/* dynamically show number and assign active  */}
                {Array.from(Array(10).keys()).map((num, i) => (
                  <div key={i} className={`${num === index && "active"}`}>
                    {num + 1}
                  </div>
                ))}
              </div>

              {/* quizQuestion  */}
              <Question {...questionData} />

              <div className="control-buttons">
                {/* <motion.span className="prev" whileTap={{ scale: "0.9" }}>
                  <RiArrowLeftSLine />
                </motion.span> */}
                <motion.div
                  ref={submitRef}
                  className="submit"
                  whileTap={{ scale: "0.9" }}
                  onClick={() => alert(`You scored ${scoreCount}/ 10`)}
                >
                  submit quiz
                </motion.div>
                <motion.span
                  className="next"
                  whileTap={{ scale: "0.9" }}
                  onClick={(e) => handleNext(e)}
                >
                  <RiArrowRightSLine />
                </motion.span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuizPage;
