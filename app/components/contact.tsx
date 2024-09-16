import { usePage } from '../context/PageContext';
import Image from 'next/image';

export default function Contact(): JSX.Element {
  const { hideOverlay, isOverlayVisible } = usePage();

  return (
    <div
      className={`z-[200] bg-gradient-to-b border-[32px] border-white from-[#EBF3E0] to-[#32AF7F] h-screen w-screen ${isOverlayVisible ? 'fixed' : 'hidden'}`}
    >
      <button onClick={hideOverlay} className='fixed md:right-20 md:top-20 top-16 right-16'>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41421 10.8284L16.9706 18.3848L18.3848 16.9706L10.8284 9.41421L18.799 1.44365L17.3848 0.0294375L9.41421 8L1.41421 0L0 1.41421L8 9.41421L0.414214 17L1.82843 18.4142L9.41421 10.8284Z" fill="white"/>
      </svg>
      </button>
      <div className='container mx-auto h-full'>

        <div className="flex flex-col align-middle items-center justify-center h-full">
          <span className="md:mb-6 mb-4">
            <svg width="163" height="50" viewBox="0 0 163 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M76.2021 49.5155V10.4974L85.9789 0.387573V39.4057L76.2021 49.5155Z" fill="#32AF7F"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M129.076 29.9949C129.187 30.4447 129.346 30.8629 129.551 31.2503C129.99 32.0547 130.613 32.6838 131.427 33.1422C132.241 33.5772 133.183 33.7998 134.265 33.7998C135.167 33.7998 135.981 33.6434 136.711 33.3365L136.715 33.335C137.465 33.0288 138.104 32.5708 138.634 31.9581L138.895 31.6553L141.473 34.2534L141.254 34.5085C140.411 35.4913 139.37 36.2399 138.135 36.7538C136.928 37.2663 135.637 37.5214 134.265 37.5214C132.527 37.5214 130.95 37.1328 129.541 36.3491L129.537 36.3467C128.134 35.5419 127.023 34.4536 126.21 33.0856C125.392 31.7111 124.987 30.1569 124.987 28.433C124.987 26.7336 125.38 25.1929 126.172 23.8199L126.174 23.8157C126.986 22.4501 128.072 21.3731 129.429 20.5906C130.814 19.782 132.358 19.3798 134.052 19.3798C135.671 19.3798 137.11 19.745 138.357 20.4863C139.622 21.2241 140.604 22.2465 141.298 23.5467C142.016 24.8484 142.371 26.3161 142.371 27.9407C142.371 28.1871 142.359 28.4553 142.334 28.7448L142.334 28.7475C142.309 29.0223 142.259 29.3406 142.186 29.7006L142.127 29.9949H129.076ZM129.086 26.625H138.456C138.362 26.1402 138.215 25.7093 138.018 25.3298L138.016 25.3259C137.644 24.5885 137.124 24.0338 136.457 23.6499L136.45 23.6455C135.785 23.242 134.968 23.0311 133.981 23.0311C132.948 23.0311 132.054 23.2532 131.289 23.6863C130.523 24.1204 129.933 24.7256 129.516 25.5089C129.334 25.8511 129.19 26.2228 129.086 26.625Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M149.518 29.9949C149.629 30.4447 149.788 30.8629 149.993 31.2503C150.433 32.0547 151.056 32.6838 151.87 33.1422C152.683 33.5772 153.626 33.7998 154.707 33.7998C155.61 33.7998 156.424 33.6434 157.154 33.3365L157.157 33.335C157.908 33.0288 158.546 32.5708 159.076 31.9581L159.338 31.6553L161.915 34.2534L161.696 34.5085C160.853 35.4913 159.812 36.2399 158.578 36.7538C157.371 37.2663 156.079 37.5214 154.707 37.5214C152.97 37.5214 151.392 37.1328 149.984 36.3491L149.979 36.3467C148.576 35.5419 147.466 34.4536 146.652 33.0856C145.835 31.7111 145.43 30.1569 145.43 28.433C145.43 26.7336 145.822 25.1929 146.614 23.8199L146.616 23.8157C147.429 22.4501 148.514 21.3731 149.871 20.5906C151.256 19.782 152.8 19.3798 154.494 19.3798C156.113 19.3798 157.552 19.745 158.8 20.4863C160.065 21.2241 161.046 22.2465 161.74 23.5467C162.458 24.8484 162.813 26.3161 162.813 27.9407C162.813 28.1871 162.801 28.4553 162.777 28.7448L162.776 28.7475C162.751 29.0223 162.701 29.3406 162.629 29.7006L162.569 29.9949H149.518ZM149.529 26.625H158.899C158.805 26.1402 158.657 25.7093 158.46 25.3298L158.458 25.3259C158.086 24.5885 157.567 24.0338 156.899 23.6499L156.892 23.6455C156.228 23.242 155.41 23.0311 154.423 23.0311C153.39 23.0311 152.497 23.2532 151.732 23.6863C150.965 24.1204 150.376 24.7256 149.959 25.5089C149.776 25.8511 149.633 26.2228 149.529 26.625Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M90.3914 19.6705H95.1518L87.0378 28.0724L95.4497 37.1087H90.3266L83.264 29.4476V37.1087H79.3311V31.1532L90.3914 19.6705Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M96.9316 19.6706H101.069L105.102 30.5447L109.106 19.6706H111.468L115.472 30.5447L119.505 19.6706H123.641L116.714 37.1088H114.327L110.301 26.655L106.247 37.1088H103.896L96.9316 19.6706Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.265 35.5219V37.1697H45.2334V19.7315H41.265V21.4089C40.7835 20.9407 40.2304 20.548 39.6069 20.2313C38.5532 19.6605 37.3567 19.3798 36.027 19.3798C34.4005 19.3798 32.9244 19.7838 31.6084 20.5958L31.6057 20.5974C30.321 21.4054 29.2969 22.4949 28.5347 23.8594L28.5323 23.8638C27.7909 25.2353 27.4238 26.7729 27.4238 28.4682C27.4238 30.1636 27.7909 31.7011 28.5323 33.0726L28.5347 33.077C29.2979 34.4432 30.3351 35.5331 31.6439 36.3407L31.6482 36.3433C32.9627 37.1298 34.4253 37.5214 36.027 37.5214C37.3784 37.5214 38.5864 37.2533 39.6409 36.7059L39.6437 36.7044C40.2561 36.3798 40.7969 35.9855 41.265 35.5219ZM33.8767 23.7867C33.1316 24.2432 32.5376 24.8736 32.094 25.6863C31.6771 26.4698 31.4632 27.382 31.4632 28.433C31.4632 29.507 31.6769 30.4429 32.094 31.25C32.5357 32.036 33.1398 32.6554 33.9101 33.1134C34.6751 33.5682 35.5545 33.7998 36.5593 33.7998C38.0515 33.7998 39.2254 33.308 40.1178 32.3381C41.0176 31.337 41.478 30.0569 41.478 28.4682C41.478 27.3668 41.2627 26.4313 40.8464 25.6496L40.8435 25.6443L40.8409 25.6388C40.4454 24.8331 39.8792 24.2203 39.1403 23.7895L39.1334 23.7855C38.3944 23.3332 37.5288 23.1015 36.5238 23.1015C35.5199 23.1015 34.6411 23.3326 33.8767 23.7867Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 37.1087H4.13733L8.17063 26.2346L12.1743 37.1087H14.5366L18.5403 26.2346L22.5736 37.1087H26.7099L19.7823 19.6705H17.3954L13.3698 30.1242L9.31488 19.6705H6.96457L0 37.1087Z" fill="black"/>
              <path d="M61.8947 21.2602C61.3087 20.6215 60.668 20.1517 59.9701 19.8653C59.232 19.5393 58.4125 19.3798 57.5178 19.3798C55.7741 19.3798 54.3583 19.9076 53.3104 20.9831V19.7304H49.3789V37.1124H53.3104V27.247C53.3104 25.7822 53.6754 24.7588 54.3376 24.1044C55.0176 23.4325 55.8897 23.0895 56.9857 23.0895C57.5183 23.0895 57.9678 23.1663 58.3419 23.3101C58.7096 23.4514 59.055 23.6863 59.3771 24.0259L59.5109 24.1669L61.8947 21.2602Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M78.5167 22.4954L78.3548 22.3121C77.5134 21.3596 76.5089 20.6368 75.3441 20.1471C74.1803 19.6344 72.9207 19.3798 71.5699 19.3798C69.8503 19.3798 68.281 19.7805 66.8703 20.5863C65.4871 21.3666 64.3863 22.4413 63.5719 23.8052L63.5694 23.8094C63.1284 24.5713 62.8109 25.3848 62.616 26.2486C62.5544 26.4733 62.5015 26.701 62.4574 26.9318C62.1526 28.4799 62.2571 30.0077 62.7698 31.5089L62.7714 31.5135C63.3024 33.0025 64.2221 34.3002 65.5193 35.4055C66.7994 36.4963 68.2312 37.2018 69.8113 37.5141L69.819 37.5154C70.2759 37.5959 70.7307 37.643 71.1832 37.6567V33.7258C71.0173 33.7083 70.8506 33.6827 70.6832 33.6488C69.7994 33.47 68.9579 33.0471 68.1574 32.365C67.8375 32.0925 67.558 31.8073 67.3178 31.5096C67.239 31.3928 67.1644 31.2718 67.0939 31.1466C66.6545 30.366 66.4294 29.4579 66.4294 28.4117C66.4294 27.3655 66.6545 26.4573 67.0939 25.6768C67.2011 25.4863 67.3179 25.3063 67.4442 25.1368C67.4602 25.1179 67.4764 25.0991 67.4927 25.0803C68.0497 24.4383 68.6671 23.9647 69.3438 23.6506L69.3503 23.6476L69.3566 23.6444C69.531 23.5553 69.7076 23.4779 69.8864 23.4122C70.4037 23.2466 70.964 23.1629 71.5699 23.1629C72.4242 23.1629 73.1891 23.3179 73.8707 23.6217L73.8771 23.6246L73.8837 23.6272C74.5875 23.9094 75.1781 24.3307 75.6603 24.8932L75.9066 25.1805L78.5167 22.4954Z" fill="black"/>
            </svg>
          </span>


          <Image
            src="/marc-small.png"
            alt="Marc Kwee"
            width={175}
            height={175}
            className="border-white border-[5px] rounded-full md:mb-6 mb-4"
          />


          <h2 className='md:text-6xl text-2xl font-semibold md:mb-8 mb-6'>Let&apos;s talk!</h2>

          <ul className="flex flex-col justify-center md:gap-4 gap-10 md:mb-8 mb-12">
            <li className='text-2xl flex items-center gap-3'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_352_946)">
              <path d="M19 4.5H5C4.20435 4.5 3.44129 4.81607 2.87868 5.37868C2.31607 5.94129 2 6.70435 2 7.5V17.5C2 18.2956 2.31607 19.0587 2.87868 19.6213C3.44129 20.1839 4.20435 20.5 5 20.5H19C19.7956 20.5 20.5587 20.1839 21.1213 19.6213C21.6839 19.0587 22 18.2956 22 17.5V7.5C22 6.70435 21.6839 5.94129 21.1213 5.37868C20.5587 4.81607 19.7956 4.5 19 4.5ZM18.33 6.5L12 11.25L5.67 6.5H18.33ZM19 18.5H5C4.73478 18.5 4.48043 18.3946 4.29289 18.2071C4.10536 18.0196 4 17.7652 4 17.5V7.75L11.4 13.3C11.5731 13.4298 11.7836 13.5 12 13.5C12.2164 13.5 12.4269 13.4298 12.6 13.3L20 7.75V17.5C20 17.7652 19.8946 18.0196 19.7071 18.2071C19.5196 18.3946 19.2652 18.5 19 18.5Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_352_946">
              <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
            </svg>


              <a className="font-[0.9375rem] leading-[1.3125rem]" href='mailto:mail@marckwee.nl'>mail@marckwee.nl</a>
            </li>
            <li className='text-2xl flex items-center  gap-3'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_352_949)">
              <path d="M13 8.5C13.7956 8.5 14.5587 8.81607 15.1213 9.37868C15.6839 9.94129 16 10.7044 16 11.5C16 11.7652 16.1054 12.0196 16.2929 12.2071C16.4804 12.3946 16.7348 12.5 17 12.5C17.2652 12.5 17.5196 12.3946 17.7071 12.2071C17.8946 12.0196 18 11.7652 18 11.5C18 10.1739 17.4732 8.90215 16.5355 7.96447C15.5979 7.02678 14.3261 6.5 13 6.5C12.7348 6.5 12.4804 6.60536 12.2929 6.79289C12.1054 6.98043 12 7.23478 12 7.5C12 7.76522 12.1054 8.01957 12.2929 8.20711C12.4804 8.39464 12.7348 8.5 13 8.5Z" fill="black"/>
              <path d="M13 4.5C14.8565 4.5 16.637 5.2375 17.9497 6.55025C19.2625 7.86301 20 9.64348 20 11.5C20 11.7652 20.1054 12.0196 20.2929 12.2071C20.4804 12.3946 20.7348 12.5 21 12.5C21.2652 12.5 21.5196 12.3946 21.7071 12.2071C21.8946 12.0196 22 11.7652 22 11.5C22 9.11305 21.0518 6.82387 19.364 5.13604C17.6761 3.44821 15.3869 2.5 13 2.5C12.7348 2.5 12.4804 2.60536 12.2929 2.79289C12.1054 2.98043 12 3.23478 12 3.5C12 3.76522 12.1054 4.01957 12.2929 4.20711C12.4804 4.39464 12.7348 4.5 13 4.5Z" fill="black"/>
              <path d="M21.75 16.41C21.695 16.2495 21.6 16.1056 21.4741 15.9919C21.3481 15.8781 21.1953 15.7984 21.03 15.76L15.03 14.39C14.8671 14.3531 14.6976 14.3575 14.5369 14.4029C14.3762 14.4484 14.2294 14.5333 14.11 14.65C13.97 14.78 13.96 14.79 13.31 16.03C11.1532 15.0362 9.42499 13.3009 8.44 11.14C9.71 10.5 9.72 10.5 9.85 10.35C9.96671 10.2306 10.0516 10.0838 10.0971 9.92308C10.1425 9.76238 10.1469 9.59286 10.11 9.43L8.74 3.5C8.70165 3.3347 8.62186 3.18187 8.50814 3.05591C8.39443 2.92995 8.25053 2.835 8.09 2.78C7.85647 2.69659 7.61531 2.6363 7.37 2.6C7.11725 2.5414 6.85933 2.5079 6.6 2.5C5.38 2.5 4.20998 2.98464 3.34731 3.84731C2.48464 4.70998 2 5.88 2 7.1C2.00529 11.1827 3.62949 15.0967 6.5164 17.9836C9.40331 20.8705 13.3173 22.4947 17.4 22.5C18.0041 22.5 18.6022 22.381 19.1603 22.1498C19.7184 21.9187 20.2255 21.5798 20.6527 21.1527C21.0798 20.7255 21.4187 20.2184 21.6498 19.6603C21.881 19.1022 22 18.5041 22 17.9C22.0003 17.6455 21.9802 17.3913 21.94 17.14C21.898 16.8916 21.8344 16.6474 21.75 16.41ZM17.4 20.5C13.8469 20.4974 10.4401 19.0847 7.92769 16.5723C5.41528 14.0599 4.00265 10.6531 4 7.1C4.00263 6.41125 4.27741 5.75146 4.76443 5.26443C5.25146 4.77741 5.91125 4.50263 6.6 4.5H6.93L8 9.14L7.46 9.42C6.6 9.87 5.92 10.23 6.28 11.01C6.86622 12.6696 7.81477 14.1777 9.05674 15.4249C10.2987 16.672 11.8029 17.6269 13.46 18.22C14.3 18.56 14.63 17.93 15.08 17.06L15.37 16.51L20 17.57V17.9C19.9974 18.5888 19.7226 19.2485 19.2356 19.7356C18.7485 20.2226 18.0888 20.4974 17.4 20.5Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_352_949">
              <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
            </svg>


              <a className="font-[0.9375rem] leading-[1.3125rem]" href="tel:+31638031420">(+31)6 - 38 031 420</a>
            </li>
          </ul>
          <div className="flex gap-6">

            <a href="https://www.linkedin.com/in/marc-kwee-2894603a">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="white"/>
                <g clip-path="url(#clip0_352_951)">
                <path d="M40.6667 43.3333H38.44C37.7328 43.3333 37.0545 43.0524 36.5544 42.5523C36.0543 42.0522 35.7733 41.3739 35.7733 40.6667V33.5067C35.7852 33.2259 35.7004 32.9495 35.5329 32.7238C35.3654 32.498 35.1255 32.3367 34.8533 32.2667C34.695 32.2426 34.5333 32.2527 34.3792 32.2964C34.2251 32.3401 34.0821 32.4163 33.96 32.52C33.8343 32.6267 33.7334 32.7595 33.6643 32.9092C33.5952 33.0589 33.5596 33.2218 33.56 33.3867V40.6667C33.56 41.3739 33.279 42.0522 32.779 42.5523C32.2789 43.0524 31.6006 43.3333 30.8933 43.3333H28.6667C27.9594 43.3333 27.2811 43.0524 26.781 42.5523C26.281 42.0522 26 41.3739 26 40.6667V33.3867C26 31.0881 26.9131 28.8837 28.5384 27.2584C30.1637 25.6331 32.3681 24.72 34.6667 24.72C36.9652 24.72 39.1696 25.6331 40.7949 27.2584C42.4202 28.8837 43.3333 31.0881 43.3333 33.3867V40.6667C43.3333 41.3739 43.0524 42.0522 42.5523 42.5523C42.0522 43.0524 41.3739 43.3333 40.6667 43.3333ZM34.6667 29.5867C34.8753 29.5735 35.0847 29.5735 35.2933 29.5867C36.1885 29.7589 36.9944 30.2407 37.5698 30.9478C38.1452 31.6548 38.4533 32.5419 38.44 33.4533V40.6667H40.6667V33.3867C40.6667 31.7954 40.0345 30.2692 38.9093 29.144C37.7841 28.0188 36.258 27.3867 34.6667 27.3867C33.0754 27.3867 31.5492 28.0188 30.424 29.144C29.2988 30.2692 28.6667 31.7954 28.6667 33.3867V40.6667H30.8933V33.3867C30.8933 32.3834 31.29 31.4209 31.9969 30.709C32.7038 29.9972 33.6635 29.5937 34.6667 29.5867Z" fill="#0478BE"/>
                <path d="M22.0003 43.3333H19.3337C18.6264 43.3333 17.9481 43.0524 17.448 42.5523C16.9479 42.0522 16.667 41.3739 16.667 40.6667V27.3333C16.667 26.6261 16.9479 25.9478 17.448 25.4477C17.9481 24.9476 18.6264 24.6667 19.3337 24.6667H22.0003C22.7076 24.6667 23.3858 24.9476 23.8859 25.4477C24.386 25.9478 24.667 26.6261 24.667 27.3333V40.6667C24.667 41.3739 24.386 42.0522 23.8859 42.5523C23.3858 43.0524 22.7076 43.3333 22.0003 43.3333ZM19.3337 27.3333V40.6667H22.0003V27.3333H19.3337Z" fill="#0478BE"/>
                <path d="M20.667 23.3333C19.8759 23.3333 19.1025 23.0987 18.4447 22.6592C17.7869 22.2197 17.2742 21.595 16.9715 20.8641C16.6687 20.1332 16.5895 19.3289 16.7439 18.553C16.8982 17.777 17.2792 17.0643 17.8386 16.5049C18.398 15.9455 19.1107 15.5645 19.8866 15.4102C20.6626 15.2558 21.4668 15.3351 22.1977 15.6378C22.9286 15.9406 23.5533 16.4533 23.9929 17.111C24.4324 17.7688 24.667 18.5422 24.667 19.3333C24.667 20.3942 24.2456 21.4116 23.4954 22.1618C22.7453 22.9119 21.7279 23.3333 20.667 23.3333ZM20.667 18C20.4033 18 20.1455 18.0782 19.9262 18.2247C19.707 18.3712 19.5361 18.5795 19.4352 18.8231C19.3342 19.0667 19.3078 19.3348 19.3593 19.5935C19.4107 19.8521 19.5377 20.0897 19.7242 20.2761C19.9107 20.4626 20.1482 20.5896 20.4069 20.641C20.6655 20.6925 20.9336 20.6661 21.1772 20.5652C21.4209 20.4643 21.6291 20.2934 21.7756 20.0741C21.9221 19.8548 22.0003 19.597 22.0003 19.3333C22.0003 18.9797 21.8599 18.6406 21.6098 18.3905C21.3598 18.1405 21.0206 18 20.667 18Z" fill="#0478BE"/>
                </g>
                <defs>
                <clipPath id="clip0_352_951">
                <rect width="32" height="32" fill="white" transform="translate(14 14)"/>
                </clipPath>
                </defs>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/marc-kwee-2894603a">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="white"/>
                <path d="M24.157 37.709C23.1563 37.709 22.2253 37.538 21.364 37.196C20.5153 36.8413 19.768 36.3473 19.122 35.714C18.4887 35.0807 17.9947 34.346 17.64 33.51C17.2853 32.6613 17.108 31.7493 17.108 30.774C17.108 29.7987 17.2853 28.893 17.64 28.057C17.9947 27.2083 18.4887 26.4737 19.122 25.853C19.7553 25.2323 20.4963 24.751 21.345 24.409C22.2063 24.0543 23.1373 23.877 24.138 23.877C25.202 23.877 26.1457 24.048 26.969 24.39C27.805 24.732 28.5333 25.2007 29.154 25.796L27.159 27.81C26.8043 27.43 26.3737 27.1323 25.867 26.917C25.373 26.7017 24.7967 26.594 24.138 26.594C23.5553 26.594 23.017 26.6953 22.523 26.898C22.0417 27.088 21.6237 27.3667 21.269 27.734C20.927 28.1013 20.6547 28.5447 20.452 29.064C20.262 29.5833 20.167 30.1533 20.167 30.774C20.167 31.4073 20.262 31.9837 20.452 32.503C20.6547 33.0223 20.927 33.4657 21.269 33.833C21.6237 34.2003 22.0417 34.4853 22.523 34.688C23.017 34.8907 23.5553 34.992 24.138 34.992C24.822 34.992 25.4173 34.8843 25.924 34.669C26.4307 34.4537 26.8677 34.156 27.235 33.776L29.249 35.79C28.603 36.3853 27.862 36.854 27.026 37.196C26.2027 37.538 25.2463 37.709 24.157 37.709ZM35.0716 37.5L29.9036 24.086H33.0956L37.0286 34.935H35.7176L39.7076 24.086H42.8616L37.6366 37.5H35.0716Z" fill="#0478BE"/>
              </svg>
            </a>


          </div>
        </div>
      </div>
    </div>
  );
}
