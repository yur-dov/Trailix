import s from "./TrandFilmDetails.module.css";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL } from "../../../services/ApiTMDB";
import { getFilmById } from "../../../services/ApiTMDB";
import { useEffect, useState } from "react";
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
        const film = await getFilmById(id);
        console.log(film);
        setFilm(film);
      } catch (error) {
        console.error("Error fetching film details:", error);
      }
    };
    fetchData();
  }, [id]);

  const { title, poster_path, genres, release_date, runtime, vote_average } =
    film;

  return (
    <Container>
      <Link to="/tranding" className={s.btnGoBack}>
        <FaArrowLeft />
      </Link>
      <div className={s.imgWrapper}>
        <img
          src={`${BASE_IMG_URL}${poster_path}`}
          alt={title}
          className={s.imgBanner}
        />
        <Link to="#" className={s.trailerBtn}>
          <FaYoutube className={s.icon} />
          Trailer
        </Link>
      </div>
      <div className={s.titleWrapper}>
        <h3 className={s.title}>{title}</h3>
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
      <ul>
        <li>
          <span>Release date:</span>
          <span>{release_date}</span>
        </li>
        <li>
          <span>Genres</span>
          <span>
            {Array.isArray(genres) && genres.length > 0
              ? genres.map((g) => g.name).join(", ")
              : "-"}
          </span>
        </li>
        <li>
          <span>Raiting</span>
          <span>{vote_average}</span>
        </li>
        <li>
          <span>Runtime</span>
          <span>{runtime}</span>
        </li>
      </ul>
    </Container>
  );
}
export default TrandFilmDetails;
