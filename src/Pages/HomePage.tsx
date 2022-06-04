import Onboard from "../components/Onboard";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Category from "../components/Category";
import QuizSelect from "../components/QuizSelect";
import IncompleteQuiz from "../components/IncompleteQuiz";
import Search from "../components/Search";
import Announcer from "../components/Announcer";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-group">
        <Header />
        <main>
          <Announcer />
          <Search />
          <div className="content-container">
            <hr />
            <Category />
            <div className="card-group">
              <QuizSelect />
              <IncompleteQuiz />
            </div>
            <motion.button
              whileHover={{
                scale: "0.95",
              }}
              className="btn start"
            >
              start quiz
            </motion.button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
