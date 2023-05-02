import { useState } from "react";
import styles from "../src/styles/Slider.module.css";

function renderRadio(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  return arr;
}

const Slider = ({ images }) => {
  const [curImg, setCurImg] = useState(0);
  if (typeof images === "object") {
    const imagesCount = images.length;

    return (
      <div className={styles.container}>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => {
              if (curImg - 1 < 0) {
                setCurImg(imagesCount - 1);
              } else {
                setCurImg((curImg - 1) % imagesCount);
              }
            }}
          ></button>
          <div className={styles.imgWrapper}>
            <img src={images[curImg]}></img>
          </div>
          <button
            className={styles.button + " " + styles.rightBtn}
            onClick={() => {
              setCurImg((curImg + 1) % imagesCount);
            }}
          ></button>
        </div>
        <div className={styles.radioContainer}>
          {renderRadio(imagesCount).map((i) => (
            <div key={i}>
              <input
                key={`${i}-input`}
                type="radio"
                id={"slider-" + i}
                style={{ display: "none" }}
                className={styles.radio}
                name="slider"
                checked={curImg === i}
                readOnly={true}
              ></input>
              <label
                key={`${i}-label`}
                htmlFor={"slider-" + i}
                className={styles.imgLabel}
                onClick={() => setCurImg(i)}
              ></label>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
        <div className={styles.imgWrapper}>
            <img src={images}></img>
          </div>
    )
  }
};

export default Slider;
