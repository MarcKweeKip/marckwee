import Container from './container';
import Radboud from './logos/Radboud';
import Aedes from './logos/Aedes';
import Knmp from './logos/Knmp';
import Fitchef from './logos/Fitchef';
import Lv from './logos/Lv';
import Immer from './logos/Immer';
import Maastricht from './logos/Maastricht';
import Finalist from './logos/Finalist';
import Eindhoven from './logos/Eindhoven';
import Knmt from './logos/Knmt';
import Image from 'next/image';

export default function References() {
  return (
    <Container additionalClasses="lg:px-0 md:px-0 sm:px-12 relative text-white">
      {/* Sticky H2 on the left */}
      <div className="absolute w-0 top-0 md:left-[-1.5rem] left-5 md:col-start-2 sm:col-start-1 flex h-full flex-col justify-center">
        <h2 className="sticky 2xl:top-[45.5rem] xl:top-[30rem] sm:top-[22.5rem] lg:top-[25rem] top-[10rem] 2xl:mt-[45.5rem] mt-0 origin-left -rotate-90 transform 2xl:text-[7.5rem] xl:text-[6.25rem] lg:text-[5rem] sm:text-[4.5rem] text-[2rem] font-extrabold uppercase text-white opacity-10">
          References
        </h2>
      </div>

      {/* Vertical Dashed Line */}
      <div className="relative md:col-start-2 md:block hidden mx-auto h-full border-l-2 border-dashed border-white opacity-40"></div>

      {/* Expertise Content */}
      <div className="sm:col-span-5 sm:col-start-2 md:col-span-8 md:col-start-4 m-auto 2xl:py-[13.375rem] xl:py-[11.375rem] md:py-[9.375rem] sm:mx-0 ml-[3.375rem] sm:py-[6.25rem] overflow-hidden pt-16 mb-16">
        <ul className="xl:mb-[7.5rem]  mb-20">
            <li className="border-white flex border-t-[5px] relative 2xl:mb-[8.25rem] md:mb-[6.25rem] sm:pr-0 pt-8 pr-[3.375rem] mb-10">
                <div className="2xl:pt-[1.875rem] 2xl:pl-10 2xl:pr-[16.25rem] md:pt-[1.875rem] md:pl-10 md:pr-[13.25rem]  md:text-right text-left">
                    <span className="2xl:mb-6 mb-4 block text-lg leading-normal sm:text-xl sm:leading-7 md:text-base md:leading-6 lg:text-xl lg:leading-[30px] xl:text-2xl xl:leading-9 2xl:text-3xl 2xl:text-[2rem] 2xl:leading-normal">
                        “Wat een geweldig aardige vent om de werkvloer mee te delen te werken. Met Marc erbij is het een stuk leuker om de hele dag geen klap te doen te hebben.“
                    </span>
                    <span className="block text-[0.8125rem]">Flo / Happiness officer</span>
                    <span className="block text-[0.8125rem]">Highlo.nl</span>
                </div>
                <Image 
                className="right-4 md:right-0 border-white md:top-[-5.8125rem]  md:w-[10.75rem] w-[4.625rem] top-[-2.5rem] border-[5px] absolute rounded-full"
                src='/marc-small.png'
                width={186}
                height={186}
                alt='Marc Kwee' />

            </li>


            <li className="border-white flex border-t-[5px] relative 2xl:mb-[8.25rem] xl:mb-[6.25rem] sm:pr-0 pt-8 pr-[3.375rem]">
                <div className="2xl:pt-[1.875rem] 2xl:pr-10 2xl:pl-[16.25rem] md:pt-[1.875rem] md:pr-10 md:pl-[13.25rem] text-left">
                    <span className="2xl:mb-6 mb-4 block text-lg leading-normal sm:text-xl sm:leading-7 md:text-base md:leading-6 lg:text-xl lg:leading-[30px] xl:text-2xl xl:leading-9 2xl:text-3xl 2xl:text-[2rem] 2xl:leading-normal">
                        “Wat een geweldig aardige vent om de werkvloer mee te delen te werken. Met Marc erbij is het een stuk leuker om de hele dag geen klap te doen te hebben.“
                    </span>
                    <span className="block text-[0.8125rem]">Flo / Happiness officer</span>
                    <span className="block text-[0.8125rem]">Highlo.nl</span>
                </div>
                <Image 
                className="right-4 md:left-0 md:w-[10.75rem] border-white md:top-[-5.8125rem] w-[4.625rem] top-[-2.5rem] border-[5px] absolute rounded-full"
                src='/marc-small.png'
                width={186}
                height={186}
                alt='Marc Kwee' />
            </li>
        </ul>
        {/* Logos Section */}
        <div className="sm:pr-0 pr-[3.375rem] flex flex-wrap w-full items-center justify-between xl:py-[2.4375rem]">
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20 py-4"><Radboud /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20 py-4"><Aedes /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Knmp /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Fitchef /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Lv /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Immer /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Maastricht /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Finalist /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Eindhoven /></div>
  <div className="md:w-auto w-1/2 flex-1 md:flex-[1_1_0] flex justify-center p-5 border-t-[0.1875rem] border-white border-opacity-10 items-center sm:h-40 h-20"><Knmt /></div>
</div>

      </div>
    </Container>
  );
}
