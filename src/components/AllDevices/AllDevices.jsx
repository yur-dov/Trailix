import { FaMobileAlt, FaTabletAlt, FaLaptop, FaTv } from "react-icons/fa";
import s from "./AllDevices.module.css";

function AllDevices() {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Дивись на будь-якому пристрої</h3>
      <p className={s.text}>
        Дивіться фільми й мультфільми без обмежень на смартфоні, планшеті,
        ноутбуці й телевізорі.
      </p>
      <ul className={s.deviceList}>
        <li className={s.deviceItem}>
          <figure>
            <FaMobileAlt />
            <figcaption>Smartphone</figcaption>
          </figure>
        </li>
        <li className={s.deviceItem}>
          <figure>
            <FaTabletAlt />
            <figcaption>Tablet</figcaption>
          </figure>
        </li>
        <li className={s.deviceItem}>
          <figure>
            <FaLaptop />
            <figcaption>Laptop</figcaption>
          </figure>
        </li>
        <li className={s.deviceItem}>
          <figure>
            <FaTv />
            <figcaption>TV</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
}
export default AllDevices;
