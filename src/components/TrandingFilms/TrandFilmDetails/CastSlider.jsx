import Container from "../../Container/Container";
import s from "./CastSlider.module.css";
import { fetchMovieCredits } from "../../../services/ApiTMDB";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL_CAST } from "../../../services/ApiTMDB";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CastSlider() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const castData = await fetchMovieCredits(id);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };
    fetchCredits();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const toLeft = () => {
    scrollSlider(-300);
  };

  const toRight = () => {
    scrollSlider(300);
  };

  function scrollSlider(offset) {
    const slider = document.querySelector(`.${s.slider}`);
    if (slider) slider.scrollBy({ left: offset, behavior: "smooth" });
  }

  return (
    <Container>
      <div className={s.castWrapper}>
        <h3>Cast</h3>
        <p>view all</p>
      </div>
      <div className={s.sliderWrapper}>
        <button
          className={`${s.scrollBtn} ${s.scrollBtnLeft}`}
          type="button"
          aria-label="Scroll left"
          onClick={toLeft}
        >
          <FaArrowLeft />
        </button>
        <ul className={s.slider}>
          {cast.map((actor) => (
            <li key={actor.id} className={s.card}>
              <figure>
                <img
                  src={`${BASE_IMG_URL_CAST}${actor.profile_path}`}
                  alt={actor.name}
                  className={s.cardImg}
                />
                <figcaption className={s.cardName}>
                  {actor.name}
                  <br />
                  <span className={s.cardCharacter}>{actor.character}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <button
          className={`${s.scrollBtn} ${s.scrollBtnRight}`}
          type="button"
          aria-label="Scroll right"
          onClick={toRight}
        >
          <FaArrowRight />
        </button>
      </div>
    </Container>
  );
}

export default CastSlider;
