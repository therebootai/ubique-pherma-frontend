import Image from 'next/image'
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  const slides = [
    {
      slide : "/images/slide-1.jpg",
    },
    {
      slide : "/images/slide-2.jpg",
    },
    {
      slide : "/images/slide-3.jpg",
    }
  ]

  return (
   <section>
    <div className='w-full h-auto'>
       {Slider && (
        <Slider {...settings}>
          {slides.map((slide, index) => (
              <Image
                src={slide.slide}
                alt="slider"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            ))}
          </Slider>
       )}
    </div>
   </section>
  )
}

export default HomeSlider