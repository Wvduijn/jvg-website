import { ReactNode } from 'react';
interface props {
  type: string;
  color: string;
  weight?: string;
  extraClasses?: string;
  children: ReactNode;
}

const Heading = ({ type, color, weight, extraClasses, children }: props) => {
  // set some default names for colors
  const setColor = (color: string) => {
    switch (color) {
      case 'purple':
        return 'text-blue-violet-500';
      case 'orange':
        return 'text-saffron-500';
      case 'kombu':
        return 'text-kombu-500';
      case 'ivory':
        return 'text-ivory-500';
      case 'ebony':
        return 'text-ebony-500';
      case 'white':
        return 'text-white';
      default:
        return color;
    }
  };
  const renderHeading = () => {
    switch (type) {
      case 'h1':
        return (
          <h1
            className={`font-robotoslab text-5xl sm:text-6xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2
            className={`font-robotoslab text-4xl sm:text-5xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3
            className={`font-robotoslab text-3xl sm:text-4xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4
            className={`font-robotoslab text-2xl sm:text-3xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h4>
        );
      case 'h5':
        return (
          <h5
            className={`font-robotoslab text-xl sm:text-2xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h5>
        );
      case 'h6':
        return (
          <h6
            className={`font-robotoslab text-lg sm:text-xl leading-relaxed mb-5 ${setColor(color)} ${weight} ${extraClasses}`}
          >
            {children}
          </h6>
        );
    }
  };
  return <>{renderHeading()}</>;
};
export default Heading;
