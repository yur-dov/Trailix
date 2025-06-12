import Container from "../../Container/Container";
import s from "./CastSlider.module.css";

function CastSlider() {
  return (
    <Container>
      <div className={s.castWrapper}>
        <h3>Cast</h3>
        <p>view all</p>
      </div>
    </Container>
  );
}

export default CastSlider;
