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
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h2 className={s.seriesTitle}>Нові серіали</h2>
      <ul className={s.seriesList}>
        {series.map((item) => (
          <li className={s.seriesItem} key={item.id}>
            <Link to="/series">
              <img
                src={`${BASE_IMG_URL}${item.poster_path}`}
                alt={item.name}
                className={s.seriesPoster}
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
export default Series;

// ___________________________ data from series
// adult: false;
// backdrop_path: "/oRdc2nn7jLOYy4fBdvmFKPsKzZE.jpg";
// first_air_date: "1999-09-20";
// genre_ids: (3)[(80, 18, 9648)];
// id: 2734;
// name: "Law & Order: Special Victims Unit";
// origin_country: ["US"];
// original_language: "en";
// original_name: "Law & Order: Special Victims Unit";
// overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.";
// popularity: 934.4763;
// poster_path: "/abWOCrIo7bbAORxcQyOFNJdnnmR.jpg";
// vote_average: 7.937;
// vote_count: 3963;
