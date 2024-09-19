import Container from './container';
import Whitelabel from './whitelabel';

export default function Expertise() {
  return (
  <Container additionalClasses="lg:px-0 md:px-0 sm:px-12 relative text-white">
      {/* Sticky H2 on the left */}
      <div className="absolute w-0 top-0 md:left-[-1.5rem] left-5 md:col-start-2 sm:col-start-1 flex h-full flex-col justify-center">
        <h2 className="sticky 2xl:top-[36rem] xl:top-[30rem] sm:top-[22.5rem] lg:top-[25rem] top-[10rem] 2xl:mt-[9.375rem] mt-0 origin-left -rotate-90 transform 2xl:text-[7.5rem] xl:text-[6.25rem] lg:text-[5rem] sm:text-[4.5rem] text-[2rem] font-extrabold uppercase text-white opacity-10">
          Expertise
        </h2>
      </div>

      {/* Vertical Dashed Line */}
      <div className="relative md:col-start-2 md:block hidden mx-auto h-full border-l-2 border-dashed border-white opacity-40"></div>

      {/* Expertise Content */}
      <div id="expertise" className="sm:col-span-5 sm:col-start-2 md:col-span-8 md:col-start-4 m-auto 2xl:my-[12rem] sm:mx-0 mx-[3.375rem] sm:my-[6.25rem] my-16">
        {/* First Section */}
        <div className="border-b-2 border-dashed border-gray-500 border-opacity-50 2xl:pb-10 2xl:mb-10 pb-6 mb-6 lg:pb-8 lg:mb-8 xl:pb-10 xl:mb-10">
          <Whitelabel label="Development" additionalClasses="2xl:mb-4 xl:mb-4 sm:mb-2 mb-[6px]" />
          <h3 className="2xl:text-5xl 2xl:leading-[3.75rem] xl:text-5xl xl:leading-[3.75rem] lg:text-4xl lg:leading-[2.835rem] sm:leading-10 sm:text-[2rem] text-[1.3125rem] leading-6 font-semibold text-ppurple-dark 2xl:mb-8 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Drupal Developer
          </h3>
          <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white 2xl:pr-4">
            With over <b className="font-bold">12 years of hands-on experience</b>, I specialize in developing scalable and high-performance Drupal solutions. From <b className="font-bold">custom module development</b> to complex migrations, I bring a deep understanding of Drupal’s ecosystem, ensuring that every project is both technically robust and aligned with business goals.
          </p>
        </div>

        {/* Second Section */}
        <div className="border-b-2 border-dashed border-gray-500 border-opacity-50 2xl:pb-10 2xl:mb-10 pb-6 mb-6 lg:pb-8 lg:mb-8 xl:pb-10 xl:mb-10">
        <Whitelabel label="System Integration" additionalClasses="2xl:mb-4 xl:mb-4 sm:mb-2 mb-[6px]" />
          <h3 className="2xl:text-5xl 2xl:leading-[3.75rem] xl:text-5xl xl:leading-[3.75rem] lg:text-4xl lg:leading-[2.835rem] sm:leading-10 sm:text-[2rem] text-[1.3125rem] leading-6 font-semibold text-white 2xl:mb-8 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Integration Specialist
          </h3>
          <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white 2xl:pr-4">
            I excel at integrating Drupal into broader application landscapes, connecting it seamlessly with other platforms via <b className="font-bold">bespoke API solutions</b>. Whether it’s synchronizing data with legacy systems or building integrations with modern SaaS tools, I create streamlined, resilient workflows that allow applications to function as a unified ecosystem.
          </p>
        </div>

        {/* Third Section */}
        <div className="">
        <Whitelabel label="Consultancy" additionalClasses="2xl:mb-4 xl:mb-4 sm:mb-2 mb-[6px]" />
        <h3 className="2xl:text-5xl 2xl:leading-[3.75rem] xl:text-5xl xl:leading-[3.75rem] lg:text-4xl lg:leading-[2.835rem] sm:leading-10 sm:text-[2rem] text-[1.3125rem] leading-6 font-semibold text-ggreen-light 2xl:mb-8 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Technical Consultant
          </h3>
          <p className="2xl:text-[1.75rem] 2xl:leading-10 xl:text-2xl xl:leading-[2.125rem] lg:text-xl lg:leading-[1.875rem] md:text-base md:leading-6 sm:text-[0.9375rem] sm:leading-[1.4375rem] text-[0.8125rem] leading-[1.1875rem] font-light text-white 2xl:pr-4">
            I engage early in the project lifecycle, guiding data architecture and defining how the application aligns with the broader IT landscape. By advising on system design, data flows, and the overall role of the application, I help organizations set the foundation for long-term scalability, adaptability, and success.
          </p>
        </div>
      </div>
    </Container>
  );
}