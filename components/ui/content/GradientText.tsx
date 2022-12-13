import { ReactNode } from 'react';

// all possible directions:
// bg-none	background-image: none;
// bg-gradient-to-t	background-image: linear-gradient(to top, var(--tw-gradient-stops));
// bg-gradient-to-tr	background-image: linear-gradient(to top right, var(--tw-gradient-stops));
// bg-gradient-to-r	background-image: linear-gradient(to right, var(--tw-gradient-stops));
// bg-gradient-to-br	background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
// bg-gradient-to-b	background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
// bg-gradient-to-bl	background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
// bg-gradient-to-l	background-image: linear-gradient(to left, var(--tw-gradient-stops));
// bg-gradient-to-tl	background-image: linear-gradient(to top left, var(--tw-gradient-stops));

interface props {
  type: string;
  colorFrom: string;
  colorTo: string;
  colorVia?:string;
  direction: string;
  weight?: string;
  extraClasses?: string;
  children: ReactNode;
}
const GradientText = ({
  type,
  colorFrom,
  colorTo,
  colorVia,
  direction,
  extraClasses,
  children,
}: props) => {
  const renderText = () => {
    switch (type) {
      case 'h1':
        return (
          <h1
            className={`font-montserrat font-extrabold uppercase text-transparent text-5xl sm:text-6xl leading-relaxed mb-5 bg-clip-text bg-gradient-to-${direction} ${colorFrom} ${colorTo} ${colorVia} ${extraClasses}`}
          >
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2
            className={`font-montserrat font-extrabold uppercase text-transparent text-4xl sm:text-5xl leading-relaxed mb-5 bg-clip-text bg-gradient-to-${direction} ${colorFrom} ${colorTo} ${colorVia} ${extraClasses} `}
          >
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3
            className={`font-montserrat font-extrabold uppercase text-transparent text-3xl sm:text-4xl leading-relaxed mb-5 bg-clip-text bg-gradient-to-${direction} ${colorFrom} ${colorTo} ${colorVia} ${extraClasses}`}
          >
            {children}
          </h3>
        );
    }
  };
  return <>{renderText()}</>;
};

export default GradientText;
