import s from "./TrandFilmDetails.module.css";
import Container from "../../../Container/Container";
import { BASE_IMG_URL } from "../../../services/ApiTMDB";

function TrandFilmDetails({ film }) {
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
