import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Section = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Section;
