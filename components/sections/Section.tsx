import CurveDivider from 'components/ui/dividers/CurveDivider';
import WaveDivider from 'components/ui/dividers/WaveDivider';

import { ReactNode } from 'react';

interface props {
  dividerPosition?: string,
  dividerType?: string;
  dividerColor?: string,
  bgColor: string;
  hasBg?: boolean;
  bgUrl?: string;
  children: ReactNode;
}
const Section = ({
  dividerPosition = 'top',
  dividerType,
  dividerColor = 'bg-white',
  bgColor,
  hasBg = false,
  bgUrl,
  children,
}: props) => {
  return (
    <section className={`pt-20 pb-20 relative ${bgColor}`}>
      {dividerPosition && dividerType === 'curve' && <CurveDivider color={dividerColor} position={dividerPosition}/>}
      {dividerPosition && dividerType === 'wave' && <WaveDivider color={dividerColor} position={dividerPosition} />}
      {children}
    </section>
  );
};
export default Section;
