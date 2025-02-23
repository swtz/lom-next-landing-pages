import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = '', link }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref legacyBehavior>
          <Styled.Container>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
