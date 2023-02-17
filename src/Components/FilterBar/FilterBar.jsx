import "./FilterBar.scss";

import menu from "../../Assets/Images/Svg/menu.svg";
import filter from "../../Assets/Images/Svg/filter.svg";

function FilterBar() {
  return (
    <div className="second__container_filter-bar">
      <select className="second__container_filter-bar_select">
        <option>text1</option>
        <option>text2</option>
        <option>text3</option>
        <option>text4</option>
      </select>
      <div className="second__container_filter-bar_filter">
        <img src={menu} alt="menu" />
        <img src={filter} alt="filter" />
      </div>
    </div>
  );
}
export default FilterBar;
