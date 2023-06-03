import { useEffect, useState } from "react";
import styles from "../src/styles/DoubleRange.module.css";

const DoubleRange = ({ onChange, min, max }) => {
  let firstSlider;
  let secondSlider;
  const minGap = 20;
  const defaultMin = min * 0.3;
  const defaultMax = max * 0.7;

  useEffect(() => {
    firstSlider = document.getElementById("slider-1");
    secondSlider = document.getElementById("slider-2");
  });

  const [positions, setPositions] = useState({
    min: defaultMin,
    max: defaultMax,
  });

  function slideFirst() {
    if (+secondSlider.value - +firstSlider.value <= minGap) {
      firstSlider.value = +secondSlider.value - minGap;
    }
    setPositions({ min: +firstSlider.value, max: +secondSlider.value });
    onChange(positions);
  }
  function slideSecond() {
    if (+secondSlider.value - +firstSlider.value <= minGap) {
      secondSlider.value = +firstSlider.value + minGap;
    }
    setPositions({ min: +firstSlider.value, max: +secondSlider.value });
    onChange(positions);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderTrack}></div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultMin}
        id="slider-1"
        className={styles.range}
        onChange={slideFirst}
      ></input>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultMax}
        id="slider-2"
        className={styles.range}
        onChange={slideSecond}
      ></input>
    </div>
  );
};

export default DoubleRange;
