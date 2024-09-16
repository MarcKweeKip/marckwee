import { usePage } from '../context/PageContext';
import Container from './container';
import Hamburger from './hamburger';
import Logo from './logo';

export default function Menu() {
  const { showOverlay, showMobileMenu, hideMobileMenu, isMobileMenuVisible } =
    usePage();

  return (
    <div className='absolute right-0 top-[2rem] flex w-full items-center justify-center lg:top-[3rem]'>
      <div
        className={`mx-auto flex min-h-full w-full grid-cols-4 items-center justify-between gap-4 px-8 sm:container sm:grid sm:grid-cols-6 sm:px-0 md:grid-cols-12 md:gap-5 lg:gap-6`}
      >
        <div className='col-start-1 flex items-center justify-center sm:col-span-2 md:col-span-3'>
          <Logo />
        </div>
        <div
          className={`text left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-ppurple-dark text-center text-xl font-medium text-white md:static md:col-span-9 md:col-start-4 md:flex md:h-auto md:w-auto md:flex-row md:justify-end md:bg-transparent md:pr-8 md:text-[0.75rem] md:text-black lg:text-[0.875rem] xl:text-[1.1875rem] 2xl:text-2xl ${isMobileMenuVisible ? 'fixed' : 'hidden'}`}
        >
          <button
            onClick={hideMobileMenu}
            className={`right-12 top-12 md:hidden ${isMobileMenuVisible ? 'absolute' : 'hidden'}`}
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M9.41421 10.8284L16.9706 18.3848L18.3848 16.9706L10.8284 9.41421L18.799 1.44365L17.3848 0.0294375L9.41421 8L1.41421 0L0 1.41421L8 9.41421L0.414214 17L1.82843 18.4142L9.41421 10.8284Z'
                fill='white'
              />
            </svg>
          </button>
          <ul className='mb-4 flex w-full flex-col items-center justify-center px-14 md:mb-0 md:w-auto md:flex-row md:gap-0 md:space-x-6 md:space-y-0 md:px-0'>
            <li className='w-full border-b border-white border-opacity-10 py-4 md:w-auto md:py-0'>
              <a href='#' className='md:hover:text-ppurple-dark'>
                expertise
              </a>
            </li>
            <li className='w-full border-b border-white border-opacity-10 py-4 md:w-auto md:py-0'>
              <a href='#' className='md:hover:text-ppurple-dark'>
                work
              </a>
            </li>
            <li className='w-full py-4 md:w-auto md:py-0'>
              <a href='#' className='md:hover:text-ppurple-dark'>
                about
              </a>
            </li>
          </ul>
          <button
            onClick={showOverlay}
            className='mx-14 w-[calc(100%-112px)] bg-white bg-opacity-20 py-4 hover:bg-opacity-100 hover:text-ppurple-dark md:mx-0 md:ml-5 md:w-auto md:px-4 md:py-[0.625rem] md:leading-normal xl:px-6 xl:py-3 2xl:px-[2rem] 2xl:py-4'
          >
            Contact
          </button>
        </div>
        <button
          onClick={showMobileMenu}
          className='col-start-6 sm:ml-auto sm:mr-8 md:hidden'
        >
          <Hamburger />
        </button>
      </div>
    </div>
  );
}
