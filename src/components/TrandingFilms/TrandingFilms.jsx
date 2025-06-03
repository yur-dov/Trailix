import { useEffect, useState } from "react";
import { fetchTrendingMovies, BASE_IMG_URL } from "../../services/ApiTMDB";
import { Link} from "react-router-dom";
import Container from "../Container/Container";
import s from "./TrandingFilms.module.css";

function TrandingFilms() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrandFilms();
  }, []);
  return (
    <Container className={s.addDesc}>
      <div className={s.titleWrapper}>
      <h1 className={s.title}>TrandingFilms</h1>
      <Link className={s.linkViewAll}>View all</Link>
      </div>
      <ul className={s.trandList}>
        {films.map((film) => (
          <li key={film.id} className={s.trandItem}><img src={`${BASE_IMG_URL}${film.poster_path}`} alt="" /></li>
        ))}
      </ul>
    </Container>
  );
}
export default TrandingFilms;
