interface WhitelabelProps {
    label: string;
    additionalClasses?: string;
  }

  export default function Whitelabel({
    label,
    additionalClasses,
  }: WhitelabelProps): JSX.Element {
    return (
      <span  className={`inline-block rounded-full bg-white xl:px-6 sm:px-4 px-3 xl:py-2 py-[6px] 2xl:text-[0.8125rem] xl:text-[0.75rem] xl:leading-[0.9375rem] lg:text-[0.6875rem] lg:leading-[0.86625rem] sm:text-[0.625rem] text-[0.4375rem] font-semibold uppercase tracking-wide text-black ${additionalClasses}`}>
        {label}
      </span>
    );
  }
  