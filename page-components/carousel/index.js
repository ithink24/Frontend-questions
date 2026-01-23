import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const items = ["Slide 1", "Slide 2", "Slide 3"];

const Carousel = ({ autoPlay = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, length]);

  const next = () => setCurrent((current + 1) % length);
  const prev = () => setCurrent((current - 1 + length) % length);

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className={styles.slide} key={index}>
              {item}
            </div>
          ))}
        </div>

        <button className={`${styles.nav} ${styles.prev}`} onClick={prev}>
          ‹
        </button>
        <button className={`${styles.nav} ${styles.next}`} onClick={next}>
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
