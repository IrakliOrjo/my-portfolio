// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          link:'https://64bad96b4b75fa04e76d705d--adorable-seahorse-4adca0.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link:'https://pizza-website-ehcl.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link:'https://redberry-bootcamp-irakli.netlify.app/info'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link:'https://stunning-chimera-4d5157.netlify.app/'
        },
      ],
    },
    
  ],
};
import Image from 'next/image';

import Link from 'next/link';




//swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


//required modules
import { Pagination } from 'swiper'

//icons
import { BsArrowRight } from 'react-icons/bs'



const WorkSlider = () => {
  return (
    <Swiper 
    
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={{Pagination}}
    className='h-[280px] sm:h-[480px]'
    >
      {
        workSlider.slides.map((slide,index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 
              cursor-pointer '>
                {slide.images.map((image, index) => {
                  return (
                  <div className='relative rounded-lg overflow-hidden 
                  flex items-center justify-center group' 
                  key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Link href={image.link} target='blank'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/*overlay gridient */}
                      <div className='absolute border  inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                        {/*title */}
                        <div className='absolute left-[30%] bottom-0 translate-y-full 
                        group-hover:translate-y-10 group-hover:xl:-translate-y-20 
                        transition-all duration-300 '>
                          <div className='flex items-center  gap-x-2 text-[13px] tracking-[0.2em] '>
                            {/*title part 1*/}
                            <div className='delay-100 '>LIVE</div>
                            {/*title part 2*/}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 '
                            >PROJECT</div>
                            {/*icon*/}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 
                            transition-all duration-300 delay-200'>
                              <BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>)
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
  )
}

export default WorkSlider