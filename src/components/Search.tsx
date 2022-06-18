import { RiArrowLeftRightLine, RiSearchLine } from "react-icons/ri";

const Search = ({ setSearchParams }: any) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search category"
        onChange={(e) => setSearchParams(e.target.value)}
      />
      <RiSearchLine className="search-icon" />
      <RiArrowLeftRightLine className="search-icon right" />
    </div>
  );
};

export default Search;
