import banner from "../../assets/banner-home.avif";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.BannerWrapper}>
      <figure className={s.BannerOverlay}>
        <img src={banner} alt="banner" className={s.BannerImg} />
        <figcaption className={s.BannerText}>
          Світові новинки кіно на <br /> <span>TRAILIX</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Home;
