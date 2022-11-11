import { ReactNode } from 'react';

interface props {
  color: string;
  size?: string;
  children: ReactNode;
  extraClasses?: string;
}

const Button = ({ color, size = 'lg', extraClasses, children }: props) => {
  const setSize = (size: string) => {
    const types: any = {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-2xl',
      default: 'text-lg',
    };
    return types[size] || types['default'];
  };

  const setColor = (color: string) => {
    const colors: any = {
      purple: 'bg-blue-violet-500 hover:bg-blue-violet-400',
      orange: 'bg-saffron-500 hover:bg-saffron-400',
      kombu: 'bg-kombu-500 hover:bg-kombu-400',
      ebony: 'bg-ebony-500 hover:bg-ebony-400',
      default: color,
    };
    return colors[color] || colors['default'];
  };
  return (
    <button
      className={`inline-flex items-center justify-center text-center py-4 px-10 lg:px-8 xl:px-10 font-bold ${setSize(size)} rounded-xl ${setColor(color)} text-white transition-colors ease-in ${extraClasses}`}
    >
      {children}
    </button>
  );
};
export default Button;
