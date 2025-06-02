import Image from 'next/image';
import Link from 'next/link';

import CardLayout from '../_components/CardLayout';

import Setting from 'assets/icons/setting.svg';
import Checked from 'assets/icons/checked.svg';
import Answer from 'assets/icons/answer.svg';
import PostIcon from 'assets/icons/posts.svg';
import FollowerIcon from 'assets/icons/follower.svg';
import FollowingIcon from 'assets/icons/following.svg';
import GithubIcon from 'assets/icons/github.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import LinkedInIcon from 'assets/icons/linkedIn.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import Location from 'assets/icons/location.svg';
import School from 'assets/icons/school.svg';
import Work from 'assets/icons/work.svg';


export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-100">
      {/** 상단 프로필 사진 및 배경 사진 영역 */}
      <div className="w-full h-100 border-b-2 border-gray-300">
        {/** 배경사진 */}
        <div className="w-full h-60 bg-amber-700 rounded-b-3xl relative z-20">
          <Image src={'https://cdn.pixabay.com/photo/2025/05/14/16/21/city-9599967_1280.jpg'} alt='' className='object-cover rounded-b-3xl' fill/>
          {/** 프로필 사진 */}
          <div className="w-30 h-30 rounded-full bg-blue-300 border-6 shadow-lg border-white absolute -bottom-15 left-1/2 -translate-x-1/2">
            {/** 수정버튼 */}
            <div className="w-full h-full relative">
              <Link href={'/'} className="absolute -right-2 -bottom-1 rounded-full w-10 h-10 bg-white shadow-md transition-transform duration-300 hover:rotate-90 z-10">
                <Image src={Setting} alt="setting" />
              </Link>
            </div>
          </div>
        </div>
        {/** 아래 흰 배경 */}
        <div className='relative h-40 z-10 flex justify-between items-center px-10'>

          {/** 프로필 정보 */}
          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-center'>
            <p className='text-4xl my-1'>@ Kim Test</p>
            <p className='text-gray-400'>web developer</p>
          </div>
          {/** 활동 정보 */}
          <div className='flex justify-start items-center gap-4'>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={PostIcon} className='w-6' alt="" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>게시글</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={Answer} className='w-6' alt="" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>답변</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={Checked} className='w-6' alt="" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>채택</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={FollowerIcon} className='w-6' alt="" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>팔로워</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={FollowingIcon} className='w-6' alt="" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>팔로잉</p>
            </div>
          </div>
          {/** 링크 정보 */}
          <div className='h-full flex justify-center items-end pb-10 gap-4'>
            <Link href={'/'}><Image src={GithubIcon} alt='' className='w-6' /></Link>
            <Link href={'/'}><Image src={YoutubeIcon} alt='' className='w-6' /></Link>
            <Link href={'/'}><Image src={LinkedInIcon} alt='' className='w-6' /></Link>
            <Link href={'/'}><Image src={FacebookIcon} alt='' className='w-6' /></Link>
          </div>
        </div>
      </div>
      {/** 하단 영역 */}
      <div className='w-full flex gap-8 my-5 flex-1'>
        {/** 좌측 프로필 정보 */}
        <div className='w-90'>
          <CardLayout heightMode='auto'>
            <div className='flex flex-col justify-start items-center'>
              <div className='w-full mb-4'>
                <h2 className='mb-4 text-2xl font-bold'>소개말</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla maiores consequuntur omnis magnam?</p>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={Location} alt="" className='w-5 h-5'/>
                <span className='text-md font-bold text-gray-600'>서울특별시, 대한민국 거주</span>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={School} alt="" className='w-5 h-5'/>
                <span className='text-md font-bold text-gray-600'>대한대학교 졸업</span>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={Work} alt="" className='w-5 h-5'/>
                <span className='text-md font-bold text-gray-600'>대한회사 재직 중</span>
              </div>
            </div>
          </CardLayout>
        </div>
        {/** 우측 게시글 정보 */}
        <div className='flex-1'>
          <CardLayout heightMode='full'>
            1
          </CardLayout>
        </div>
      </div>
    </div>
  )
}