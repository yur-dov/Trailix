import banner from "../../assets/Banner-home.avif";
import Container from "../../components/Container/Container";
import TrandingFilms from "../../components/TrandingFilms/TrandFilmSlider/TrandingFilms";
import AllDevices from "../../components/AllDevices/AllDevices";
import BannerTV from "../../components/BannerTV/BannerTV";

import s from "./Home.module.css";

function Home() {
  return (
    <Container>
      <figure className={s.BannerOverlay}>
        <img src={banner} alt="banner" className={s.BannerImg} />
        <figcaption className={s.BannerText}>
          Світові новинки кіно на <br /> <span>TRAILIX</span>
        </figcaption>
      </figure>
      <AllDevices />
      <BannerTV />
      <TrandingFilms />
    </Container>
  );
}

export default Home;
