"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function RecentPosts() {
    return (
        <div className="w-full relative py-4 px-20 mt-20">
            {/* 왼쪽 네비게이션 버튼 */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center select-none  cursor-pointer">
                &#10094;
            </div>
            {/* 오른쪽 네비게이션 버튼 */}
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center select-none  cursor-pointer">
                &#10095;
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[ Navigation, Autoplay]}
                className="mySwiper"
            >
                {Array.from({ length: 9 }, (_, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white rounded-2xl shadow-md p-6 h-60 flex items-center justify-center text-center select-none cursor-pointer">
                            Slide {i + 1}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default RecentPosts;
