import { RiArrowLeftLine, RiTimeLine } from "react-icons/ri";
import { IRenderedPage } from "../interfaces/Index";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  page: IRenderedPage;
  category?: string;
  secondsLeft?: number;
}
const Header = ({ page, category, secondsLeft }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className={`header-container ${
        page.toString() === "detailspage" && "details"
      }`}
    >
      {/* add details to class name on details page  */}
      <nav>
        {/* dynamically render the Header  */}
        {page.toString() === "homepage" && (
          <div className="menu-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {page.toString() === "detailspage" && (
          <div className="menu-button details">
            <RiArrowLeftLine
              className="left-arrow"
              onClick={() => navigate(-1)}
            />
            <p>detail quiz</p>
          </div>
        )}

        {page.toString() === "quizpage" && (
          <div className="menu-button details">
            <RiArrowLeftLine
              className="left-arrow"
              onClick={() => navigate(-1)}
            />
            <p>{`${category} quiz`}</p>
          </div>
        )}

        {page.toString() === "quizresultpage" && (
          <div className="menu-button details">
            <RiArrowLeftLine
              className="left-arrow"
              onClick={() => navigate(-1)}
            />
            <p>{`${category} quiz`}</p>
          </div>
        )}

        <div
          className={`${
            page.toString() === "detailspage" ||
            page.toString() === "homepage" ||
            page.toString() === "quizresultpage"
              ? "portfolio"
              : "timer"
          }`}
        >
          {page.toString() === "detailspage" ||
          page.toString() === "homepage" ||
          page.toString() === "quizresultpage" ? (
            ""
          ) : (
            <div>
              <RiTimeLine />
              {secondsLeft && (
                <span>
                  {`${
                    secondsLeft < 1
                      ? "00:00"
                      : `0${Math.floor(secondsLeft / 60)}:${
                          (secondsLeft % 60).toString().length === 2
                            ? secondsLeft % 60
                            : `0${secondsLeft % 60}`
                        }`
                  }`}
                </span>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
