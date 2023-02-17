import "./SearchBar.scss";

import search from "../../Assets/Images/Svg/search.svg";

function SearchBar() {
  return (
    <div className="search__bar">
      <input placeholder="Enter your request" />
      <img src={search} alt="search" />
    </div>
  );
}
export default SearchBar;
