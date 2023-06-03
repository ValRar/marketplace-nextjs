import { useRouter } from "next/router";
import styles from "../src/styles/Filter.module.css";
import DoubleRange from "./doubleRange";
import { useEffect, useState } from "react";

const Filter = () => {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState();
  let priceMinInput;
  let priceMaxInput;

  function handleRangeInput({ min, max }) {
    setPriceRange({ min: min, max: max });
    priceMinInput.value = min;
    priceMaxInput.value = max;
  }

  useEffect(() => {
    priceMinInput = document.getElementById("min-price");
    priceMaxInput = document.getElementById("max-price");
  });

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Категория</h2>
      <ul className={styles.categoryList}>
        <li>
          <input type="radio" name="category" id="cat-1"></input>
          <label htmlFor="cat-1" className={styles.textLabel}>
            Категория 1
          </label>
        </li>
        <li>
          <input type="radio" name="category" id="cat-2"></input>
          <label htmlFor="cat-2" className={styles.textLabel}>
            Категория 2
          </label>
        </li>
        <li>
          <input type="radio" name="category" id="cat-3"></input>
          <label htmlFor="cat-3" className={styles.textLabel}>
            Категория 3
          </label>
        </li>
      </ul>
      <h2 className={styles.title}>Наличие</h2>
      <div className={styles.availabilityRow}>
        <input
          type="checkbox"
          id="availability"
          style={{ display: "none" }}
          className={styles.checkbox}
        ></input>
        <label htmlFor="availability" className={styles.checkboxLabel}></label>
        <label htmlFor="availability" className={styles.textLabel}>
          Есть в наличии
        </label>
      </div>
      <h2 className={styles.title}>Цена</h2>
      <div>
        <input
          type="number"
          placeholder="От"
          id="min-price"
          className={styles.priceInput}
        ></input>
        <input
          type="number"
          placeholder="До"
          id="max-price"
          className={styles.priceInput}
        ></input>
        <DoubleRange
          onChange={handleRangeInput}
          min={0}
          max={10000}
        ></DoubleRange>
      </div>
      <button
        className={styles.confirmButton}
        onClick={() => {
          const radioButtons = document.querySelectorAll(
            "input[type='radio']:checked"
          );
          const availability = document.querySelector(
            "input#availability:checked"
          );
          let link = "/catalog?";
          if (radioButtons.length > 0) {
            link += `category=${radioButtons[0].id}&`;
          }
          if (priceRange) {
            link += `minPrice=${priceRange.min}&maxPrice=${priceRange.max}&`;
          }
          if (availability) {
            link += "availability=true";
          }
          router.push(link);
        }}
      >
        Применить
      </button>
    </section>
  );
};

export default Filter;
