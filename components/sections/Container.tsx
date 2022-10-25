import { ReactNode } from 'react';

interface props {
  extraClasses?: string;
  children: ReactNode;
}
const Container = ({ extraClasses, children }: props) => {
  return (
    <div className={`container mx-auto px-8 ${extraClasses}`}>{children}</div>
  );
};
export default Container;
