import { motion } from "framer-motion";
import {
  RiQuestionnaireLine,
  RiTimeLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import logo3 from "../assets/quiz_3.png";

const IncompleteQuiz = () => {
  return (
    <section className="ongoing-quiz">
      <h2>contiue quiz</h2>

      <div className="card-group">
        <div className="card continue">
          <div className="card-image continue">
            <img src={logo3} alt="quiz-category-name" />
          </div>
          <div className="card-body continue">
            <h2>Graphics Design</h2>
            <span>
              <RiQuestionnaireLine />
              <span>
                <span className="num-count">8</span>/10 Question
              </span>
            </span>
            <span>
              <RiTimeLine />
              <span className="num-count">35 min</span>
            </span>
            <motion.button
              whileHover={{
                scale: "0.95",
              }}
              className="btn continue"
            >
              continue quiz
            </motion.button>
            <RiDeleteBin6Line className="btn-del" />
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card continue">
          <div className="card-image continue">
            <img src={logo3} alt="quiz-category-name" />
          </div>
          <div className="card-body continue">
            <h2>Graphics Design</h2>
            <span>
              <RiQuestionnaireLine />
              <span>
                <span className="num-count">8</span>/10 Question
              </span>
            </span>
            <span>
              <RiTimeLine />
              <span className="num-count">35 min</span>
            </span>
            <motion.button
              whileHover={{
                scale: "0.95",
              }}
              className="btn continue"
            >
              continue quiz
            </motion.button>
            <RiDeleteBin6Line className="btn-del" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncompleteQuiz;
