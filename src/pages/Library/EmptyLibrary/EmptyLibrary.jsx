import s from "./EmptyLibrary.module.css";
import banner from "../../../assets/EmptyLib.avif";

function EmptyLibrary() {
  return (
    <figure className={s.BannerOverlay}>
      <img src={banner} alt="banner" className={s.BannerImg} />
      <figcaption className={s.BannerText}>
        Вы ещё ничего не добавили в библиотеку. <br />
        Добавьте фильмы, чтобы начать собирать свою коллекцию.
      </figcaption>
    </figure>
  );
}

export default EmptyLibrary;
