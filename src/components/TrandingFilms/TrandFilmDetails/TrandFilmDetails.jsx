import s from "./TrandFilmDetails.module.css";
import Container from "../../Container/Container";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL } from "../../../services/ApiTMDB";
import { getFilmById } from "../../../services/ApiTMDB";
import { useEffect, useState } from "react";

function TrandFilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState({});

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
  }, []);

  const { title, poster_path, release_date, overview } = film;

  return (
    <Container>
      <div className={s.imgWrapper}>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt="" />
      </div>
      <h3>{title}</h3>
      <p>Date release: {release_date}</p>
      <p>{overview}</p>
    </Container>
  );
}
export default TrandFilmDetails;
