import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}: GridContentProps) => {
  return (
    <SectionBackground sectionId={sectionId} background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
