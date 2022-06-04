import { RiArrowLeftRightLine, RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="search" />
      <RiSearchLine className="search-icon" />
      <RiArrowLeftRightLine className="search-icon right" />
    </div>
  );
};

export default Search;
