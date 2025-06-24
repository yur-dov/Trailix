import Container from "../../Container/Container";
import s from "./CastSlider.module.css";
import { fetchMovieCredits } from "../../../services/ApiTMDB";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL_CAST } from "../../../services/ApiTMDB";

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

  return (
    <Container>
      <div className={s.castWrapper}>
        <h3>Cast</h3>
        <p>view all</p>
      </div>
      <div className={s.sliderWrapper}>
        <div className={s.slider}>
          {cast.map((actor) => (
            <div key={actor.id} className={s.card}>
              <img
                src={`${BASE_IMG_URL_CAST}${actor.profile_path}`}
                alt={actor.name}
                className={s.cardImg}
              />
              <p className={s.cardName}>{actor.name}</p>
              <p className={s.cardCharacter}>{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CastSlider;
