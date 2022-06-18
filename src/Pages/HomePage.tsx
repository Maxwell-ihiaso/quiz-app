import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Category from "../components/Category";
import QuizSelect from "../components/QuizSelect";
import IncompleteQuiz from "../components/IncompleteQuiz";
import Search from "../components/Search";
import Announcer from "../components/Announcer";
import { IMetadata, IRenderedPage } from "../interfaces/Index";

import "./homepage.css";

const url =
  "https://the-trivia-api.com/api/questions?categories=geography&limit=20&difficulty=easy";

const HomePage = () => {
  const [categories, setCategories] = useState<IMetadata>({} as IMetadata);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const navigate = useNavigate();
  const currentPage = "homepage" as unknown as IRenderedPage;

  useEffect(() => {
    axios
      .get<IMetadata>("https://the-trivia-api.com/api/metadata")
      .then(({ data }) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err: any) => {
        alert(err.message);
        console.log(err);
      });
  }, []);

  const handleStartQuiz = () => {
    // check if a category has been selected
    if (!selectedCategory) {
      return alert("Make a selection");
    }

    if (selectedCategory.includes("&")) {
      const temp = selectedCategory.split(" & ");
      let transcribeCategory = `${temp[0]}_and_${temp[1]}`;
      navigate(`/quiz/${transcribeCategory.toLocaleLowerCase()}/details`);
    } else {
      navigate(`/quiz/${selectedCategory.toLocaleLowerCase()}/details`);
    }
    // not selected && aleart advise to make a category selection
    // redirect to details and display the selected category
  };

  return (
    <div className="homepage">
      <div className="home-group">
        <Header page={currentPage} />
        <main>
          <Announcer currentPage={currentPage} />
          <Search setSearchParams={setSearchParams} />
          <div className="content-container">
            <hr />
            <Category />
            {/* add details to class name on details page  */}

            <div className="card-group">
              <QuizSelect
                categories={categories}
                loading={loading}
                searchParams={searchParams}
                setSelectedCategory={setSelectedCategory}
              />
              <IncompleteQuiz />
            </div>
            <motion.button
              whileHover={{
                scale: "0.95",
              }}
              className="btn start"
              onClick={handleStartQuiz}
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
