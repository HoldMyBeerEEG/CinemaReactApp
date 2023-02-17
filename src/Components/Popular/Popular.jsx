import "./Popular.scss";

import panther from "../../Assets/Images/Png/blackpanther.png";
import themenu from "../../Assets/Images/Png/menu.png";
import wednesday from "../../Assets/Images/Png/wednesday.png";
import adam from "../../Assets/Images/Png/blackadam.png";
import violent from "../../Assets/Images/Png//violentnight.png";
import shehulk from "../../Assets/Images/Png/shehulk.png";
import tar from "../../Assets/Images/Png/tar.png";
import spirited from "../../Assets/Images/Png/spirited.png";
import woman from "../../Assets/Images/Png/thewomanking.png";
import terrifier from "../../Assets/Images/Png/terrifier.png";

function Popular() {
  return (
    <div className="fifth__container">
      <div className="popular-tittle">
        <h2>POPULAR RIGHT NOW</h2>
        <h2>SEE ALL</h2>
      </div>
      <ul>
        <li>
          <img src={panther} alt="black panther" />
          <h2>BLACK PANTHER: WAKANDA FOREVER </h2>
          <p>Sci-Fi, Adventure, Drama</p>
        </li>
        <li>
          <img src={themenu} alt="the-menu" />
          <h2>THE MENU</h2>
          <p>Comedy, Horror, Thriller</p>
        </li>
        <li>
          <img src={wednesday} alt="wednesday" />
          <h2>
            WEDNESDAY <span>(SERIES)</span>
          </h2>
          <p>Comedy, Family, Mystery</p>
        </li>
        <li>
          <img src={adam} alt="black-adam" />
          <h2>BLACK ADAM</h2>
          <p>Action, Fantasy, Sci-Fi</p>
        </li>
        <li>
          <img src={violent} alt="violent-night" />
          <h2>VIOLENT NIGHT</h2>
          <p>Comedy, Crime</p>
        </li>
        <li>
          <img src={shehulk} alt="she-hulk" />
          <h2>SHE-HULK: ATTORNEY AT LAW</h2>
          <p>Comedy,Adventure, Drama</p>
        </li>
        <li>
          <img src={tar} alt="tar" />
          <h2>TAR</h2>
          <p>Drama, Music</p>
        </li>
        <li>
          <img src={spirited} alt="spirited" />
          <h2>SPIRITED</h2>
          <p>Comedy, Family, Musical</p>
        </li>
        <li>
          <img src={woman} alt="woman-king" />
          <h2>THE WOMAN KING</h2>
          <p>Action, Drama, History</p>
        </li>
        <li>
          <img src={terrifier} alt="terrifier2" />
          <h2>TERRIFIER 2</h2>
          <p>Horror</p>
        </li>
      </ul>
    </div>
  );
}
export default Popular;
