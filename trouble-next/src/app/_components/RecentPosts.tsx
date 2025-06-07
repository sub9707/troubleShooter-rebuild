"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function RecentPosts() {
    return (
        <div className="w-full relative py-6 px-20 mt-16">
            {/* 왼쪽 네비게이션 버튼 */}
            <div className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-indigo-200 rounded-full shadow-lg flex items-center justify-center select-none cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 group">
                <svg className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>

            {/* 오른쪽 네비게이션 버튼 */}
            <div className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-indigo-200 rounded-full shadow-lg flex items-center justify-center select-none cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 group">
                <svg className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 4000,
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
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {Array.from({ length: 9 }, (_, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white border border-indigo-100 rounded-2xl shadow-lg hover:shadow-xl p-8 h-64 flex flex-col justify-between text-left select-none cursor-pointer transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                            {/* 배경 그라데이션 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <h3 className='text-xl font-bold text-indigo-900 leading-tight mb-4 group-hover:text-indigo-700 transition-colors duration-300'>
                                    Lorem, ipsum dolor sit amet consectetur?
                                </h3>
                                <p className="text-indigo-600 text-sm line-clamp-3">
                                    이 문제를 해결하기 위해 다양한 방법을 시도해보았습니다...
                                </p>
                            </div>

                            <div className='w-full flex justify-between items-center mt-6 relative z-10'>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                    <p className='text-indigo-500 text-sm font-medium'>10분전</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 w-10 h-10 flex items-center justify-center text-white font-semibold text-sm shadow-md'>
                                        L
                                    </div>
                                    <Link
                                        href={'/user/123'}
                                        className='text-indigo-600 hover:text-indigo-800 font-medium hover:underline decoration-indigo-400 underline-offset-2 transition-colors duration-200'
                                    >
                                        @lorem
                                    </Link>
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