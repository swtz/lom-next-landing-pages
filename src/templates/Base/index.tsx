import * as Styled from './styles';
import { Menu, MenuProps } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseProps = MenuProps & {
  children: React.ReactNode;
  footerHtml: string;
};

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
