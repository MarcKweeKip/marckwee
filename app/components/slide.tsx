import React from 'react';

interface SlideProps {
  title: string;
  tools: string[];
  labels: string[];
  description: string;
  agency: string | boolean;
  colorClass: string;
  logo?: JSX.Element;
}

export default function Slide({
  title,
  tools,
  labels,
  description,
  agency,
  colorClass,
  logo,
}: SlideProps): JSX.Element {
  return (
    <div className={`relative grid h-full grid-cols-9 sm:gap-4 md:gap-5 lg:gap-6`}>
      {/* Left Section */}
      <div className='my-auto col-span-4 col-start-1 flex flex-col 2xl:pr-10'>
        {/* Vertical Labels */}
        <ul className='xl:mb-8'>
          {labels.map((label, index) => (
            <li
              key={index}
              className='inline-block rounded-full bg-white px-6 py-2 text-[13px] font-semibold uppercase tracking-wide text-black'
            >
              {label}
            </li>
          ))}
        </ul>

        {/* logo */}
        {<span className='xl:mb-8 xl:w-[21.25rem] '>{logo}</span>}

        {/* Description */}
        <p className='2xl:mb-16 xl:mb-12 2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white'>
          {description}
        </p>

        {/* Tools List */}
        <ul className='flex flex-wrap gap-4'>
          {tools.map((tool, index) => (
            <li
              key={index}
              className='bg-black px-6 py-4 text-xl font-semibold uppercase text-white'
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className='relative col-span-5 col-start-5 flex items-end justify-center flex-col'>
        {/* Background Image */}
        <img
          src='https://via.placeholder.com/900x800'
          alt='Marc Kwee'
          className='rounded-lg object-cover shadow-xl xl:mb-[2.375rem]'
        />

        {/* Agency Info */}
        {agency && (
          <span className='bottom-0 right-0 text-2xl font-extralight text-white'>
            work via <span className="border-b font-light">{agency}</span>
          </span>
        )}
      </div>
    </div>
  );
}
