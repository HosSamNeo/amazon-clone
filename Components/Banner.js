import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <Image src='/carousel-one.jpg' alt="carouselOne" loading="lazy" />
        </div>

        <div>
          <Image src='/carousel-two.jpg' alt="carouselTwo" loading="lazy" />
        </div>

        <div>
          <Image src='/carousel-three.jpg' alt="carouselThree" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
