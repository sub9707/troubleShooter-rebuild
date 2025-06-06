"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

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
                        <div className="bg-white rounded-2xl shadow-md p-8 h-60 flex flex-col items-center justify-center text-center select-none cursor-pointer">
                            <h3 className='text-xl font-bold text-start'>Lorem, ipsum dolor sit amet afase consectetur?</h3>
                            <div className='w-full flex justify-between items-center mt-10'>
                                <p className=''>10초전</p>
                                <div className='flex gap-3 items-center'>
                                    <div className='rounded-full bg-amber-600 w-10 h-10'></div>
                                    <Link href={'/user/123'} className='hover:underline'>@lorem</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default RecentPosts;
