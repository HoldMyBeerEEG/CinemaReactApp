import "./Footer.scss";
import footerlogo from "../../Assets/Images/Svg/logo.svg";
function Footer() {
  return (
    <footer>
      <p>
        M CINEMA &#169;2021-2022
        <span> Blog Contact Browse Movies Requests Login Language</span>
      </p>
      <div>
        <img src={footerlogo} alt="logo" />
      </div>
    </footer>
  );
}
export default Footer;
