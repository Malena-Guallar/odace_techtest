import "./Caroussel.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Caroussel() {
  const logos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={10}
        isPlaying={true}
        interval={4000}
        infinite={true}
        visibleSlides={8}
        className="caroussel"
      >
        <Slider>
          {logos.map((logo) => {
            return (
              <Slide key={logo} className="slide">
                LOGO
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </>
  );
}
export default Caroussel;
