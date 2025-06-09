import { useState, useEffect } from "react";
import { getSeries } from "../../services/ApiTMDB";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../services/ApiTMDB";
import Container from "../../components/Container/Container";
import s from "./Series.module.css";

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSeries();
        setSeries(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    fetchData();
  }, []);

  // const { title, poster_path, release_date, overview } = series;

  return (
    <Container>
      <h2>Series</h2>
      <ul className={s.seriesList}>
        {series.map((item) => (
          <Link to="/series" key={item.id}>
            <li className={s.seriesItem}>
              <img
                src={`${BASE_IMG_URL}${item.poster_path}`}
                alt={item.name}
                className={s.seriesPoster}
              />
              <h3 className={s.seriesTitle}>{item.name}</h3>
              <p>{item.overview}</p>
            </li>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
export default Series;
