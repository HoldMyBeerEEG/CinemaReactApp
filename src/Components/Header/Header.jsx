import burger from "../../Assets/Images/Svg/burger.svg";
import logo from "../../Assets/Images/Svg/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header center">
      <img src={burger} alt="burger-menu" className="burger" />
      <nav className="header__main">
        <ul>
          <li className="header__main_nav">
            <a href="#">ABOUT</a>
          </li>
          <li className="header__main_nav">
            <a href="#">MOVIES</a>
          </li>
          <li className="header__main_nav">
            <a href="#">SERIES</a>
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>

          <li className="header__main_nav">
            <a href="#">UPCOMING</a>
          </li>
          <li className="header__main_nav">
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
      {/* <div class="container">
            <div class="icon">
              <div>https://codepen.io/apchnk/pen/YzvQPbm это нужный код сюда</div>
              <div id="svg-animation"></div>
            </div>
          </div> */}
      <div className="header__registation">
        <div className="header__registation_btn">SIGN IN</div>
        <div className="header__registation_btn">SIGN UP</div>
      </div>
    </header>
  );
}
export default Header;
