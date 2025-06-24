import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchTrendingMovies,
  getGenres,
  BASE_IMG_URL,
} from "../../services/ApiTMDB";
import s from "./TrandingMovie.module.css";
import Container from "../../components/Container/Container";
import Pagination from "../../components/Pagination/Pagination";

function TrandingMovie() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, genres] = await Promise.all([
          fetchTrendingMovies(page),
          getGenres(),
        ]);

        setFilms(data.results || data);
        setGenres(genres);
        setTotalPages(data.total_pages || 500);
      } catch (error) {
        console.error("Error fetching genres/trending movies:", error);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Container>
      <h2 className={s.TrandingMovieTitle}> Зараз у кіно</h2>
      <ul className={s.movieList}>
        {films.map((film) => (
          <Link to={`${film.id}`} key={film.id}>
            <li className={s.movieItem}>
              <img
                src={`${BASE_IMG_URL}${film.poster_path}`}
                alt=""
                className={s.moviePoster}
              />
              <h3 className={s.MovieTitle}>{film.title}</h3>
              <p className={s.MovieGenres}>
                {film.genre_ids
                  .map((id) => {
                    const genre = genres.find((g) => g.id === id);
                    return genre ? genre.name : null;
                  })
                  .filter(Boolean)
                  .join(", ")}
              </p>
            </li>
          </Link>
        ))}
        \
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Container>
  );
}
export default TrandingMovie;
