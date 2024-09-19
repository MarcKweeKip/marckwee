import { header as content } from '../constants/content';
import { usePage } from '../context/PageContext';
import Container from './container';
import Menu from './menu';
// import Menu from './components/menu';

export default function Header(): JSX.Element {
  const { showOverlay } = usePage();

  return (
    <header className='2xl:border[40px] h-screen w-full border-[12px] border-white bg-custom-grad sm:border-[16px] lg:border-[24px] xl:border-[32px]'>
      <Container additionalClasses='relative'>
        <Menu />
        <div className='absolute bottom-9 right-9 mx-auto opacity-60 sm:relative sm:bottom-0 sm:right-0 sm:col-start-1 sm:ml-24 sm:h-full sm:border-l-2 sm:border-dashed sm:border-white md:col-start-2 md:mx-auto'>
          <span className='bottom-32 left-8 -translate-x-full -rotate-90 transform whitespace-nowrap text-sm font-light tracking-wide text-white sm:absolute'>
            scroll for more
          </span>
        </div>
        <div className='col-span-4 col-start-1 my-auto px-[42px] py-[54] sm:col-span-5 sm:col-start-2 md:col-span-8 md:col-start-4 md:p-0 xl:col-start-4'>
          <span className='mb-3 inline-block text-xl font-normal leading-normal text-white sm:mb-4 sm:text-2xl lg:text-[1.75rems] xl:text-4xl xl:leading-normal 2xl:text-6xl'>
            {content.title}
          </span>

          <h1 className='mb-3 text-2xl font-medium leading-normal text-bblack sm:mb-4 sm:text-[2rem] sm:leading-10 md:pr-7 md:text-[1.625rem] md:leading-8 lg:pr-20 lg:text-[2rem] lg:leading-10 xl:pr-[8.75rem] xl:text-[2.5rem] xl:leading-[3rem] 2xl:pr-10 2xl:text-6xl 2xl:leading-normal'>
          I help organizations successfully execute large-scale <span className="text-[#019CDE]">Drupal</span> projects.
          </h1>

          <p className='mb-8 text-lg leading-normal text-bblack sm:text-xl sm:leading-7 md:mb-6 md:text-base md:leading-6 lg:text-xl lg:leading-[30px] xl:mb-10 xl:pr-[8.75rem] xl:text-2xl xl:leading-9 2xl:text-3xl 2xl:text-[2rem] 2xl:leading-normal'>
            {content.description}
          </p>
          <ul>
            <li>
              <button
                onClick={showOverlay}
                className='relative bg-ppurple-dark px-6 py-3 text-lg font-medium text-white shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:bg-white hover:text-ppurple-dark hover:shadow-none focus:outline-none lg:text-2xl xl:px-8 xl:py-4 xl:font-bold'
              >
                let’s connect
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
