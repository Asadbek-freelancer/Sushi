import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  { id: 1, image: "../../images/ninja.png" },
  { id: 2, image: "../../images/sushiimg.avif" },
  { id: 3, image: "../../images/sushiroll.jpg" },
  { id: 4, image: "../../images/foursushi.jpg" }
];

export default function Slider() {
  return (
    <div className="w-full">
      <Slide
        duration={3000} // 3 секунды на каждый слайд
        transitionDuration={500} // анимация 0.5 сек
        autoplay={true}
        infinite={true}
        arrows={false}
        indicators={false} // если не нужны точки
      >
        {slideImages.map((slide) => (
          <div key={slide.id} className="each-slide-effect">
            <img
              src={slide.image}
              alt={`slide-${slide.id}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}
