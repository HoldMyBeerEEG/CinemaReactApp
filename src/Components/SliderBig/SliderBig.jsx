import "./SliderBig.scss";
import companyLogo from "../../Assets/Images/Svg/marvel-logo.svg";
import filmLogo from "../../Assets/Images/Svg/filmLogoWidow.svg";
import playBTN from "../../Assets/Images/Svg/playBTN.svg";
import plusBTN from "../../Assets/Images/Svg/plusBTN.svg";
import arrow from "../../Assets/Images/Svg/arrow-right.svg";

import { ReactComponent as Star } from "../../Assets/Images/Svg/star.svg";

function SliderBig() {
  return (
    <div className="slick__slider center">
      <div className="slick__slider_block-left">
        <div>
          <img
            src={arrow}
            alt="arrow-left"
            className="slick__slider_arrow-left"
          />
        </div>
        <div className="slic__slider_slick-list">
          <div>
            <img
              src={companyLogo}
              alt="company-logo"
              className="slic__slider_slick-list_company"
            />
          </div>
          <img
            src={filmLogo}
            alt="film-logo"
            className="slic__slider_slick-list_film"
          />
          <div className="slic__slider_slick-list_stars">
            <Star fill="#FFBC1F" className="star" />
            <Star fill="#FFBC1F" className="star" />
            <Star fill="#FFBC1F" className="star" />
            <Star fill="#FFBC1F" className="star" />
            <Star fill="none" className="empty-star" />
          </div>
          <div className="slic__slider_slick-list_genres">
            <p className="slic__slider_slick-list_genre">DRAMA</p>
            <p className="slic__slider_slick-list_genre">ACTION</p>
            <p className="slic__slider_slick-list_genre">SCI-FI</p>
          </div>
          <div className="slic__slider_slick-list_buttons">
            <img src={playBTN} alt="play-trailer" />
            <img src={plusBTN} alt="add-to-watch" />
          </div>
          <p className="slic__slider_slick-list-description">
            Natasha Romanoff, aka Black Widow, confronts the darker parts of her
            ledger when <br /> a dangerous conspiracy with ties to her past
            arises. Pursued by a force that will stop <br /> at nothing to bring
            her down, Natasha must deal with her history as a spy, and the{" "}
            <br /> broken relationships left in her wake long before she became
            an Avenger.
          </p>
        </div>
      </div>
      <div>
        <img src={arrow} alt="arrow-right" className="slick__slider_arrow" />
      </div>
    </div>
  );
}
export default SliderBig;
