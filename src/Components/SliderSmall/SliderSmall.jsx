import "./SliderSmall.scss";

import arrow from "../../Assets/Images/Svg/arrow-right.svg";
import avatar from "../../Assets/Images/Png/avatar.png";
import top from "../../Assets/Images/Png/topgun.png";
import blade from "../../Assets/Images/Png/bladerunner.png";
import spyder from "../../Assets/Images/Png/spyder.png";
import avengers from "../../Assets/Images/Png/avengers.png";
import werewolf from "../../Assets/Images/Png/werewolf.png";
import darling from "../../Assets/Images/Png/darling.png";
import hollywood from "../../Assets/Images/Png/holywood.png";
import guardian from "../../Assets/Images/Png/guardians.png";
import showman from "../../Assets/Images/Png/showman.png";
import boys from "../../Assets/Images/Png/boys.png";
import blackbird from "../../Assets/Images/Png/blackbird.png";

function SliderSmall() {
  return (
    <div className="slick__carousel">
      <img src={arrow} alt="arrow-left" className="slick__slider_arrow-left" />

      <div className="slick__carousel-card">
        <img src={avatar} alt="avatar" />
        <p>AVATAR</p>
      </div>
      <div className="slick__carousel-card">
        <img src={blade} alt="blade-runner-2049" />
        <p>BLADE RUNNER 2049</p>
      </div>
      <div className="slick__carousel-card">
        <img src={spyder} alt="spyder-man" />
        <p>
          SPIDER-MAN <br />
          NO WAY HOME
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={top} alt="top-gun" />
        <p>
          TOP GUN: <br />
          MAVERICK
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={avengers} alt="avengers" />
        <p>
          AVENGERS <br />
          INFINITY WAR
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={werewolf} alt="werewolf" />
        <p>
          WEREWOLF <br />
          BY NIGHT
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={darling} alt="dont-worry" />
        <p>
          DONT WORRY <br />
          DARLING
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={hollywood} alt="once-in-hollywood" />
        <p>
          ONCE UPON <br />
          A TIME IN <br />
          HOLLYWOOD
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={guardian} alt="guardian" />
        <p>
          GUARDIANS <br />
          OF THE <br />
          GALAXY
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={showman} alt="greatest-showman" />
        <p>
          THE GREATEST <br />
          SHOWMAN
        </p>
      </div>
      <div className="slick__carousel-card">
        <img src={boys} alt="boys" />
        <p>THE BOYS </p>
      </div>
      <div className="slick__carousel-card">
        <img src={blackbird} alt="black-bird" />
        <p>BLACK BIRD </p>
      </div>
      <div>
        <img src={arrow} alt="arrow-left" className="slick__slider_arrow" />
      </div>
    </div>
  );
}
export default SliderSmall;
