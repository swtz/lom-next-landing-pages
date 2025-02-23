import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  return (
    <Styled.Container id={sectionId} background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
