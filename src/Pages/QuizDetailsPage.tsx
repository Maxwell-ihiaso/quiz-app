import axios from "axios";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { RiQuestionnaireLine, RiTimeLine, RiStarSFill } from "react-icons/ri";
import Announcer from "../components/Announcer";
import { IRenderedPage, ILocalQuestion } from "../interfaces/Index";
import "./homepage.css";
import "./quizDetailsPage.css";

/**
 * IQuestions
 * ----------------
 * This is a structure of the data received from the API
 * https://the-trivia-api.com/api/questions?categories=science&limit=10
 */
import { IQuestions } from "../interfaces/Index";

const QuizDetailsPage = () => {
  const { category } = useParams<string>();
  const navigate = useNavigate();

  // currentPage when passed as props give an error of not been able
  // to overlap
  // I have used type assertion to bypass the error
  const currentPage = "detailspage" as unknown as IRenderedPage;
  let categoryReview: string;

  if (category?.includes("_")) {
    const temp = category.split("_and_");
    categoryReview = `${temp[0]} & ${temp[1]}`;
  } else {
    categoryReview = category!;
  }

  /**
   * HANDLE-BUTTON-CLICK
   * ----------------------
   * The goal is to fetch questions by category
   * the question is limited to 10 (at the moment)
   * The question retrieved has the correctanswer which user should not know about
   * We create an object and dress it in a way to store in localStorage
   * then, navigate users to the quiz page
   */
  const handleButtonClick = () => {
    axios
      .get<IQuestions[]>(
        `https://the-trivia-api.com/api/questions?categories=${category}&limit=10`
      )
      .then((response) => response.data)
      .then((data) => {
        const questions = data.map((question) => {
          // options needs to be randomized so user does not figure out the option
          //  that is always correct - This is handled in the quizPage

          // create a structure for the data ro be save in memory
          // options will be populated by the preceeding for loop
          const temp: ILocalQuestion = {
            category: question.category,
            id: question.id,
            options: [...question.incorrectAnswers, question.correctAnswer],
            question: question.question,
            difficulty: question.difficulty,
          };

          return temp;
        });
        // save the dressed questions in localStorage
        localStorage.setItem("questions", JSON.stringify(questions));
        // redirect users to the quiz page
        navigate(`/quiz/${category}`, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="homepage">
      <div className="home-group">
        <Header page={currentPage} />
        <main>
          <Announcer currentPage={currentPage} category={categoryReview} />
          {/* add details to class name on details page  */}

          <div className="content-container details">
            <hr />

            <div className="quiz-details">
              <p>{`Brief explantion about the ${categoryReview} quiz`}</p>
              <div className="quiz-summary">
                <div className="summary">
                  <div className="icon-holder">
                    <RiQuestionnaireLine />
                  </div>
                  <div className="summary-text">
                    <h2>10 questions</h2>
                    <h3>10 point for a correct answer</h3>
                  </div>
                </div>

                <div className="summary">
                  <div className="icon-holder">
                    <RiTimeLine />
                  </div>
                  <div className="summary-text">
                    <h2>1 hour 15 min</h2>
                    <h3>total duration of the quiz</h3>
                  </div>
                </div>
                <div className="summary">
                  <div className="icon-holder">
                    <RiStarSFill />
                  </div>
                  <div className="summary-text">
                    <h2>Win 10 star</h2>
                    <h3>Answer all questions correctly</h3>
                  </div>
                </div>
              </div>

              <h4>
                Please read the text below carefully so you can understand it.
              </h4>

              <ul>
                <li>
                  10 point awarded for a correct answer and no mark for an
                  incorrect answer
                </li>
                <li>Tap on options to select the correct answer</li>
                <li>Tap on the bookmark icon to save interesting questions</li>
                <li>
                  Click submit if you are sure you want to complete all the
                  quizzes
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{
                scale: "0.95",
              }}
              className="btn start"
              onClick={handleButtonClick}
            >
              continue
            </motion.button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuizDetailsPage;
