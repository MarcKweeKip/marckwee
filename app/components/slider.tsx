import React, { useState, useEffect, useRef } from 'react';
import Slide from './slide';
import { slides as slidesData } from '../constants/content';
import Container from './container';

export default function Slider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear the timeout if it exists
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Automatically move to the next slide every 10 seconds
  useEffect(() => {
    resetTimeout();
    if (currentIndex === null) {
      setCurrentIndex(0);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          // Ensure prevIndex is treated as number, defaulting to 0 if null
          const numericIndex = (prevIndex !== null ? prevIndex : 0) + 1;
          return numericIndex % slidesData.length;
        });
      }, 8000);
    }

    return () => resetTimeout();
  }, [currentIndex]);

  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    resetTimeout(); // Clear the current timeout
    setCurrentIndex(index); // Update the current index
  };

  return (
    <Container additionalClasses='relative min-h-[100vh]'>
      {/* Sticky H2 on the left */}
      <div className="absolute w-0 top-0 md:left-[-1.5rem] left-5 md:col-start-2 sm:col-start-1 flex h-full flex-col justify-center">
        <h2 className="sticky 2xl:top-[36rem] xl:top-[30rem] sm:top-[22.5rem] lg:top-[25rem] top-[10rem] 2xl:mt-[9.375rem] mt-0 origin-left -rotate-90 transform 2xl:text-[7.5rem] xl:text-[6.25rem] lg:text-[5rem] sm:text-[4.5rem] text-[2rem] font-extrabold uppercase text-white opacity-10">
          Work
        </h2>
      </div>

      {/* Vertical Dashed Line */}
      <div className="relative md:col-start-2 md:block hidden mx-auto h-full border-l-2 border-dashed border-gray-600 opacity-50"></div>

      <div className='col-span-9 col-start-4 my-auto'>
        <ul className='no-scrollbar flex w-full snap-x overflow-x-scroll'>
        {/* <li
              key={1}
              className={`absolute left-0 top-0 my-auto h-full w-full transition-opacity duration-500 opacity-100`}
            >
              <Slide
                title={slidesData[0].title}
                tools={slidesData[0].tools}
                labels={slidesData[0].labels}
                description={slidesData[0].description}
                agency={slidesData[0].agency}
                colorClass={slidesData[0].colorClass}
                logo={slidesData[0].logo}
              />
            </li> */}
          {slidesData.map((slide, index) => (
            <li
              key={index}
              className={`my-auto h-full w-full transition-opacity duration-500 ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
            >
              <Slide
                title={slide.title}
                tools={slide.tools}
                labels={slide.labels}
                description={slide.description}
                agency={slide.agency}
                colorClass={slide.colorClass}
                logo={slide.logo}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='absolute top-4 left-1/2 z-10 flex w-full -translate-x-1/2 transform space-x-2'>
        {slidesData.map((_, index) => (
          <div
            key={index}
            className='relative h-6 flex-1 cursor-pointer overflow-hidden bg-gray-300'
            onClick={() => handleSlideChange(index)}
          >
            <div
              className={`absolute left-0 top-0 h-full bg-gray-800 ${
                index === currentIndex ? 'animate-progress' : ''
              }`}
              style={{
                transition: index === currentIndex ? 'width 8s linear' : 'none',
                width: index === currentIndex ? '100%' : '0%',
                animationDuration: index === currentIndex ? '8s' : '0s',
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
  // return (
  //   <div className='relative w-full'>
  //     {/* Navigation Lines */}
  // <div className='absolute left-1/2 top-4 z-10 flex w-full max-w-md -translate-x-1/2 transform space-x-2'>
  //   {slidesData.map((_, index) => (
  //     <div
  //       key={index}
  //       className='relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-gray-300'
  //       onClick={() => handleSlideChange(index)}
  //     >
  //       <div
  //         className={`absolute left-0 top-0 h-full bg-gray-800 ${
  //           index === currentIndex ? 'animate-progress' : ''
  //         }`}
  //         style={{
  //           transition: index === currentIndex ? 'width 5s linear' : 'none',
  //           width: index === currentIndex ? '100%' : '0%',
  //           animationDuration: index === currentIndex ? '5s' : '0s',
  //         }}
  //       />
  //     </div>
  //   ))}
  // </div>
  //     <ul className='no-scrollbar relative flex h-[75vh] w-full snap-x overflow-x-scroll'>
  // {slidesData.map((slide, index) => (
  //   <li
  //     key={index}
  //     className={`absolute left-0 top-0 w-full transition-opacity duration-500 ${
  //       index === currentIndex ? 'opacity-100' : 'opacity-0'
  //     }`}
  //   >
  //     <Slide
  //       title={slide.title}
  //       tools={slide.tools}
  //       labels={slide.labels}
  //       description={slide.description}
  //       agency={slide.agency}
  //       colorClass={slide.colorClass}
  //     />
  //   </li>
  // ))}
  //     </ul>
  //   </div>
  // );
}
