import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="hero h-[750px] rounded-lg overflow-hidden bg-heroBg mt-6 md:mt-8 lg:mt-12">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
                <div className="hero-content text-center lg:text-left text-white lg:w-1/2">
                    <div className="md:max-w-lg">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to Your Digital <span className="text-[#8DECB4]">Library</span></h1>
                        <p className="mb-5 opacity-80">Streamline your library experience with our intuitive system. Access, organize, and explore vast collections effortlessly. Welcome to seamless reading and learning.</p>
                        <button className="btn bg-[#41B06E] border-none text-white text-lg">Explore</button>
                    </div>
                </div>
                <div className="px-5 md:w-[75%] mx-auto lg:w-1/2 lg:mr-12">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/slide1.jpg" alt="slide img" className='w-full h-[400px] object-cover rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide className='h-1/2'>
                            <img src="/slide2.jpg" alt="slide img" className='w-full h-[400px] object-cover rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide className='h-1/2'>
                            <img src="/slide3.jpg" alt="slide img" className='w-full h-[400px] object-cover rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide className='h-1/2'>
                            <img src="/slide4.jpg" alt="slide img" className='w-full h-[400px] object-cover rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide className='h-1/2'>
                            <img src="/slide5.jpg" alt="slide img" className='w-full h-[400px] object-cover rounded-lg' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default Banner;