import s from "./TrandFilmDetails.module.css";
import Container from "../../Container/Container";
import CastSlider from "./CastSlider";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { BASE_IMG_URL } from "../../../services/ApiTMDB";
import { getFilmById } from "../../../services/ApiTMDB";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import {
  FaYoutube,
  FaBookmark,
  FaRegBookmark,
  FaArrowLeft,
} from "react-icons/fa";

function TrandFilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const films = await getFilmById(id);
        setFilm(films);
      } catch (error) {
        console.error("Error fetching film details:", error);
      }
    };
    fetchData();
  }, [id]);

  const {
    title,
    poster_path,
    genres,
    release_date,
    runtime,
    vote_average,
    overview,
  } = film;

  return (
    <Container>
      <div className={s.imgWrapper}>
        <Link to="/tranding" className={s.btnGoBack}>
          <FaArrowLeft />
        </Link>
        <img
          src={`${BASE_IMG_URL}${poster_path}`}
          alt={title}
          className={s.imgBanner}
        />

        <Link to="#" className={s.trailerBtn}>
          <FaYoutube className={s.trailerBtnIcon} />
          Trailer
        </Link>

        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={s.btnBookmark}
        >
          {isBookmarked ? (
            <FaBookmark className={s.iconBookmark} />
          ) : (
            <FaRegBookmark className={s.iconBookmark} />
          )}
        </button>
      </div>

      <h3 className={s.title}>{title}</h3>

      <ul className={s.descriptionlist}>
        <li className={s.descriptionItem}>
          <p className={s.descriptionTitle}>
            Genres:
            <span className={s.descriptionText}>
              {" "}
              {Array.isArray(genres) && genres.length > 0
                ? genres.map((g) => g.name).join(", ")
                : "-"}
            </span>
          </p>
        </li>

        <li>
          <p className={s.descriptionTitle}>
            Release data:
            <span className={s.releaseDate}>{release_date}</span>
          </p>
        </li>

        <li>
          <p className={s.descriptionTitle}>
            Raiting:
            <span className={s.raiting}>
              <span className={s.tmdbFlag}>TMDB</span>
              {vote_average}
            </span>
          </p>
        </li>

        <li>
          <p className={s.descriptionTitle}>
            Runtime:
            <span className={s.runtime}>
              <CiClock2 className={s.iconClock} />
              {runtime} min
            </span>
          </p>
        </li>
      </ul>

      <div className={s.overviewWrapper}>
        <h4 className={s.overviewTitle}>Overview:</h4>
        <p className={s.overviewText}>{overview}</p>
      </div>
      <CastSlider />
    </Container>
  );
}
export default TrandFilmDetails;
