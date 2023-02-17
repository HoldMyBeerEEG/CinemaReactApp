import "./CarouselBig.scss";

import arrow from "../../Assets/Images/Svg/arrow-left.svg";

import inter from "../../Assets/Images/Png/interstellar.png";
import lala from "../../Assets/Images/Png/lalalend.png";
import joker from "../../Assets/Images/Png/joker.png";

function CarouselBig() {
  return (
    <div className="carousel__bar">
      <div>
        <img
          src={arrow}
          alt="arrow-left"
          className="slick__slider_arrow-left"
        />
      </div>
      <img src={inter} alt="interstellar" className="card" />
      <img src={lala} alt="lalaland" className="activ_card" />
      <img src={joker} alt="joker" className="card" />
      <div>
        <img src={arrow} alt="arrow-left" className="slick__slider_arrow" />
      </div>
    </div>
  );
}
export default CarouselBig;
