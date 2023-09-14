import React, { useState } from 'react'

import Link from "next/link"


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Languages',
    info: [
      {
        title: 'English -',
        stage: 'C1',
      },
      {
        title: 'Russian -',
        stage: 'C1',
      },
      {
        title: 'Georgian -',
        stage: 'Native',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Elisha.ge | Freelance as a Frontend Developer for Realty Estate Company',
        stage: '2023 - 2023',
      },
      {
        title: 'Webuild.ge | Freelance as a Frontend Developer for construction "Webuild Company',
        stage: '2022 - 2023',
      },
      {
        title: 'Real Estate Agent',
        stage: '2019 - 2021',
      },
      {
        title: 'Reception Administrator, Hotel Rooms Kazbegi',
        stage: '2018 - 2019',
      },
      {
        title: 'Reception Administrator, Hotel City Center ',
        stage: '2017 - 2018',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'Scrimba Frontend Developer Career Path',
        stage: '2022',
        link:'https://scrimba.com/certificate/ugrGk6tW/gfrontend'
      },
      {
        title: 'FreeCodeCamp JavaScript Data Structures And Algorithms',
        stage: '2023',
        link: 'https://www.freecodecamp.org/certification/irakliorjo/javascript-algorithms-and-data-structures'
      },
      {
        title: 'FreeCodeCamp Responsive Web Design',
        stage: '2023',
        link: 'https://www.freecodecamp.org/certification/irakliorjo/responsive-web-design'
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

//counter
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)

  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left '>
    <Circles />
    <motion.div 
      className='hidden xl:flex absolute bottom-0 -left-[370px]'
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
        {/*text */}
      <div className='flex-1 flex xl:mb-[5.5em] flex-col justify-center'>
      <motion.h2 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 '>
         <span className='text-accent'>Front</span>end Developer.</motion.h2>
      <motion.p 
      variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
        Frontend Developer oriented on quality with a year of experience. Creating fully responsive web
pages/applications. Have strong knowledge of HTML/CSS JavaScript & problem solving skills. Good understanding of DOM and layout mechanics. Adaptable fast learner, aiming to master the
skill by reaching 10 000 hours in practicing.
        </motion.p>
        {/*counters */}
        <motion.div 
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '>
          <div className='flex flex-1 xl:gap-x-6'>
            {/*experience*/}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={1} duration={2} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
            </div>
            {/*clients */}
            {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Satisfied clients
              </div>
  </div> */}
            {/*projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={3} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Finished projects
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
      {/*info */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:max-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className={`${index === itemIndex && 
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 
                after:h-[2px] after:bg-white after:absolute 
                after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}</div>
            )
          })}
        </div>
        <div className='py-2 mx-auto xl:py-6  flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index]?.info.map((item,itemIndex) => {
            return (
              <div 
              key={itemIndex}
               className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                {/*title */}
                {item.link ? <Link href={item.link} target='blank'
                className='font-light mb-2 md:mb-0 hover:text-accent'>
                  {item.title}</Link> : 
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>}
                <div>{item.stage}</div>
                <div className='flex gap-x-4 '>
                {/*icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div className='text-2xl text-white'>{icon}</div>
                })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>);
};

export default About;