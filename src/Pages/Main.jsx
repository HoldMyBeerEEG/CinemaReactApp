import CarouselBig from "../Components/CarouselBig/CarouselBig";
import FilterBar from "../Components/FilterBar/FilterBar";
import Footer from "../Components/Footer/Footer";
import GenresBar from "../Components/GenresBar/Genres";
import Header from "../Components/Header/Header";
import Popular from "../Components/Popular/Popular";
import SearchBar from "../Components/SearchBar/SearchBar";
import SliderBig from "../Components/SliderBig/SliderBig";
import SliderSmall from "../Components/SliderSmall/SliderSmall";

function Main() {
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div className="second-container">
        <SliderBig />
      </div>
      <div className="third-container">
        <SliderSmall />
      </div>
      <div className="fouth-container">
        <SearchBar />
      </div>
      <div className="fifth-container">
        <CarouselBig />
        <FilterBar />
        <GenresBar />
        <Popular />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Main;
