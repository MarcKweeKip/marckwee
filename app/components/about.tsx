import Container from './container';
import Image from 'next/image';

export default function About() {
  return (
    <Container additionalClasses="lg:px-0 md:px-0 sm:px-12 relative text-white flex-col h-full">
      {/* Sticky H2 on the left */}
      <div className="absolute w-0 top-0 md:left-[-1.5rem] left-5 md:col-start-2 sm:col-start-1 flex h-full flex-col justify-center">
        <h2 className="sticky 2xl:top-[36rem] xl:top-[30rem] sm:top-[22.5rem] lg:top-[25rem] top-[10rem] 2xl:mt-[9.375rem] mt-0 origin-left -rotate-90 transform 2xl:text-[7.5rem] xl:text-[6.25rem] lg:text-[5rem] sm:text-[4.5rem] text-[2rem] font-extrabold uppercase text-white opacity-10">
          About
        </h2>
      </div>

      {/* Vertical Dashed Line */}
      <div className="relative md:col-start-2 md:block hidden mx-auto h-full border-l-2 border-dashed border-white opacity-40"></div>

      {/* Expertise Content */}
      <div className="lg:py-[10.9375rem] md:py-[5rem] sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-3 flex h-full sm:w-auto items-center w-svw">
        <Image 
        src='/marc.jpg'
        width={556}
        height={646}
        alt='Marc Kwee'
        className='sm:h-max'
        />
      </div>
      <div className="xl:py-[10.9375rem] sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-8 flex flex-col h-full justify-center sm:mx-0 mx-[3.375rem] mt-10 mb-10">
        <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white 2xl:pr-4 mb-4">
          So I’m Marc, a freelance drupal god with an amazing story about how i came to the point where im at now, but also with inspiring content on what i do in my spare time.
        </p>
        <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white 2xl:pr-4">
          Finish it up with a cool lifestyle defining wisdom sentence and everyone is hooked instantly.
        </p>
      </div>
      
    </Container>
  );
}
