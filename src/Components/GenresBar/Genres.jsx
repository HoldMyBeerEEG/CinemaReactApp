import "./Genres.scss";

function GenresBar() {
  return (
    <div className="third__container_genres ">
      <ul>
        <li>ACTION</li>
        <li>ACTION</li>
        <li>ADVENTURE</li>
        <li>ANIMATION</li>
        <li>BIOGRAFY</li>
        <li>COMEDY</li>
        <li>CRIME</li>
        <li>DOCUMENTARY</li>
        <li>DRAMA</li>
        <li>FANTASY</li>
        <li>FAMILY</li>
        <li>HORROR</li>
        <li>HISTORY</li>
        <li>MUSIC</li>
        <li>NEWS</li>
        <li>POLITICS</li>
        <li>ROMANCE</li>
        <li>SERIES</li>
        <li>SCI-FI</li>
        <li>TALK</li>
        <li>TV MOVIE</li>
        <li>THRILLER</li>
        <li>WESTERN</li>
        <li>WAR</li>
      </ul>
      <select className="second__container_filter-bar_select">
        <option>text1</option>
        <option>text2</option>
        <option>text3</option>
        <option>text4</option>
      </select>
      <select className="second__container_filter-bar_select">
        <option>text1</option>
        <option>text2</option>
        <option>text3</option>
        <option>text4</option>
      </select>
    </div>
  );
}
export default GenresBar;
