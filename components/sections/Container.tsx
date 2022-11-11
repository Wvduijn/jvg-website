import { ReactNode } from 'react';

interface props {
  extraClasses?: string;
  children: ReactNode;
}
const Container = ({ extraClasses, children }: props) => {
  return (
    <div className={`container max-w-5xl mx-auto px-8 ${extraClasses}`}>{children}</div>
  );
};
export default Container;
