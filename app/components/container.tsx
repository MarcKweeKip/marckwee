// export panel component that renders children and has a prop for color.

export default function Container({
  children,
  additionalClasses,
}: Readonly<{
  children: React.ReactNode;
  additionalClasses?: string;
}>) {
  return (
    <div
      className={`sm:container flex mx-auto sm:grid min-h-dvh grid-cols-4 sm:grid-cols-6 md:grid-cols-12 sm:gap-4 md:gap-5 lg:gap-6 ${additionalClasses}`}
    >
      {children}
    </div>
  );
}
