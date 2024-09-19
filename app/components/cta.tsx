import Container from './container';
import { usePage } from '../context/PageContext';

export default function Cta() {
  const { showOverlay } = usePage();

  return (
    <Container additionalClasses="lg:px-0 md:px-0 sm:px-12 relative text-white 2xl:px-[14rem] min-height-screen flex-col text-center sm:px-0 px-[3.375rem] items-center min-h-screen">
     <div className="col-span-12 w-full flex flex-col items-center">
        <h3 className="2xl:text-[5rem] 2xl:leading-[6.25rem] text-[2.625rem] font-medium leading-[2.625rem] text-ggreen-light mb-6">How ‘bout that coffee? </h3>
        <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-bblack-light mb-10">
            Based in Rotterdam, I’m excited to work with clients around the globe to turn their Drupal visions into reality. Let’s connect and discuss how we can work together.</p>
            <button
                onClick={showOverlay}
                className='relative bg-white px-6 py-3 text-lg font-medium text-black shadow-[8px_8px_0px_rgba(50,175,127,0.38)] hover:bg-ggreen-light hover:text-white hover:shadow-none focus:outline-none lg:text-2xl xl:px-8 xl:py-4 xl:font-bold mb-6'
              >
                let’s connect
              </button>
        <a href="/files/CV-MarcKwee-Freelance-Drupal-Developer-Consultant-2024.pdf" className="border-b border-black 2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-black mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-[7.5rem]">
          download cv
        </a>

        <span className="text-center w-full md:border-t-[0.1875rem] md:border-b-[0.1875rem] text-ggreen-light 2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light block py-4 border-opacity-20 border-t border-dashed border-b border-ggreen-light">
          Available for projects from January 2025
        </span>
      </div>
      <div className="xl:text-2xl pt-8 col-span-12 w-full flex text-black text-[0.8125rem]">
        © Marc Kwee 2024 / KVK: 63274272
      </div>
     
      
    </Container>
  );
}
