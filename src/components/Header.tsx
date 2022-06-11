import { RiArrowLeftLine, RiTimeLine } from "react-icons/ri";
import { IRenderedPage } from "../interfaces/Index";

const Header = ({ page }: IRenderedPage) => {
  return (
    <header
      className={`header-container ${page === "detailspage" && "details"}`}
    >
      {/* add details to class name on details page  */}
      <nav>
        {/* dynamically render the Header  */}
        {page === "homepage" && (
          <div className="menu-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {page === "detailspage" && (
          <div className="menu-button details">
            <RiArrowLeftLine className="left-arrow" />
            <p>detail quiz</p>
          </div>
        )}
        {page === "quizpage" && (
          <div className="menu-button details">
            <RiArrowLeftLine className="left-arrow" />
            <p>#Selected Quiz</p>
          </div>
        )}

        <div
          className={`${
            page === "detailspage" || page === "homepage"
              ? "portfolio"
              : "timer"
          }`}
        >
          {page === "detailspage" || page === "homepage" ? (
            ""
          ) : (
            <div>
              <RiTimeLine />
              <span>15:00</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
