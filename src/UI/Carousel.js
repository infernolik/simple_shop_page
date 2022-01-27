import React, {
  Fragment,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import itemContext from "../context/image/itemContext.js";
import arrowRight from "../images/icon-next.svg";
import arrowLeft from "../images/icon-previous.svg";
import hamburgerContext from "../context/windowRezAndHamburger/hamburgerContext.js";

export default function Carousel() {
  const [sum, setSum] = useState(0);
  const sumRef = useRef(0);
  // let sum = sumRef.current;

  const widthRef = useRef(0);
  let width = widthRef.current;

  const countRef = useRef(0);
  let count = countRef.current;

  const itmContext = useContext(itemContext);
  const hamContext = useContext(hamburgerContext);
  const { images } = itmContext;
  const list = useRef();

  const handleResize = useCallback(() => {
    if (list.current) {
      // eslint-disable-next-line
      widthRef.current = list.current.children[0].firstChild.clientWidth; // the width of the image in the list. We cannot use a useRef directly on the <img> because it sets a ref={} on every image in the list that makes React go crazy
      sumRef.current = -(countRef.current * widthRef.current);
      setSum(sumRef.current);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    widthRef.current = list.current.children[0].firstChild.clientWidth;

    if (hamContext.media || window.matchMedia("(max-width: 768px)").matches) {
      window.addEventListener("resize", handleResize);
    }
  });

  const handleLeft = () => {
    if (countRef.current === 0) {
      countRef.current = images.length - 1;
      sumRef.current = -(countRef.current * widthRef.current);
      setSum(sumRef.current);

      list.current.style.transform = `translateX(${sumRef.current}px)`;
    } else {
      countRef.current = countRef.current - 1;
      sumRef.current = -(countRef.current * widthRef.current);
      setSum(sumRef.current);

      // sumRef.current += widthRef.current;
      list.current.style.transform = `translateX(${sumRef.current}px)`;
    }
  };
  const handleRight = () => {
    if (countRef.current === images.length - 1) {
      countRef.current = 0;
      sumRef.current = 0;
      setSum(sumRef.current);

      list.current.style.transform = `translateX(${0}px)`;
    } else {
      countRef.current = countRef.current + 1;
      sumRef.current = -(countRef.current * widthRef.current);
      setSum(sumRef.current);

      // sumRef.current -= widthRef.current;

      list.current.style.transform = `translateX(${sumRef.current}px)`;
    }
  };
  return (
    <Fragment>
      <div className="gallery">
        <div className="arrow-wrapper-right" onClick={handleRight}></div>

        <img
          src={arrowRight}
          className="arrowRight"
          // onClick={handleRight}
          alt="arrow_right"
        />
        <span></span>
        <div className="arrow-wrapper-left" onClick={handleLeft}></div>

        <img
          src={arrowLeft}
          className="arrowLeft"
          // onClick={handleLeft}
          alt="arrow_left"
        />
        <span></span>
        <ul
          className="carousel-list"
          ref={list}
          style={{ transform: `translateX(${sum}px)` }}
          data-count={sum}
        >
          {images.map((img, index) => {
            return (
              <li key={index} className="carousel-item">
                <img key={index} src={img} alt="item_image" />
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

Carousel.offset = 0;
