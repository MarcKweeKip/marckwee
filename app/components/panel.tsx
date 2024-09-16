// export panel component that renders children and has a prop for color.

export default function Panel({
  children,
  color,
}: Readonly<{
  children: React.ReactNode;
  color: string;
}>) {
  return (
    <div className='lg:min-h-screen' data-color={color}>
      {children}
    </div>
  );
}
