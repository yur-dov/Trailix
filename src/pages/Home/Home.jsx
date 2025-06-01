import banner from "../../assets/banner.png";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.BannerWrapper}>
      <img src={banner} alt="banner" className={s.BannerImg} />
      <div className={s.BannerOverlay}>
        <p className={s.BannerText}>
          Світові новинки кіно на <br /> <span>TRAILIX</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
