import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
import "./styles.css";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Banner() {
  return (
    <>
      <Swiper
      style={{"--swiper-navigation-color": "#1E99F5",
      "--swiper-navigation-size": "35px", // Adjust navigation size
    
      }}
      
        navigation={{
      
          clickable: true,
        
         
        }}
        pagination={{
          clickable: true,
          bulletClass:"swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className=" w-full"
      >
        <SwiperSlide className="">
          <div className=" slide slide1  min-h-screen    ">
            <div className="w-full bg-black/45   min-h-screen flex items-center justify-center ">
              <div className="text-white space-y-4">
              <Fade direction="up" delay={200} triggerOnce={true} cascade={false} >
              <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
              Discover the 
                  <span className="text-[#1E99F5]"> Latest Trends!</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center px-2 ">
                Explore our exclusive collection of modern furniture and decor. Stay ahead of trends and transform your space with our curated selection.
                </p>
              </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2   min-h-screen       ">
            <div className="w-full bg-black/55  min-h-screen flex items-center justify-center ">
            <div className="text-white space-y-4">
               <Fade direction="up" delay={200} cascade={false} triggerOnce={true} >
               <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
               Elevate Your 
                  <span className="text-[#1E99F5]"> Home Experience</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                Upgrade your living space with stylish, high-quality furniture. Find the perfect pieces to enhance your comfort and add a touch of elegance to your home. 
                </p>
               </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3    min-h-screen    ">
            <div className="w-full bg-black/55   min-h-screen flex items-center justify-center ">
            <div className="text-white space-y-4">
               <Fade  direction="up" delay={200} cascade={false} triggerOnce={true} >
               <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
               Shop with 
                  <span className="text-[#1E99F5]">  Confidence!</span>
                </h1>
                <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                Enjoy a seamless shopping experience with our user-friendly platform. From browsing to checkout, discover an effortless way to shop for all your home essentials. 
                </p>
               </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}