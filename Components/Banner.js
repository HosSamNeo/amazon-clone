import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselOne from "./carousel-one.jpg";
import carouselTwo from "./carousel-two.jpg";
import carouselThree from "./carousel-three.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t h-32 from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src={carouselOne} alt="carouselOne" loading="lazy" />
        </div>

        <div>
          <Image src={carouselTwo} alt="carouselTwo" loading="lazy" />
        </div>

        <div>
          <Image src={carouselThree} alt="carouselThree" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
