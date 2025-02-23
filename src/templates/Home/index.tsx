import Head from 'next/head';
import { Base } from '../Base';
import { theme } from '../../styles/theme';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { MenuProps } from '../../components/Menu';
import { LogoLinkProps } from '../../components/LogoLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & MenuProps;
  sections: SectionProps[];
};

export type SectionProps = (
  | GridImageProps
  | GridTextProps
  | GridContentProps
  | GridTwoColumnsProps
) & { component: string };

export type HomeProps = {
  data: PageData[];
};

export const Home = ({ data }: HomeProps) => {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta name="description" content="beautiful site built with Next.js" />
      </Head>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
            );
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...(section as GridTextProps)} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }
        })}
      </Base>
    </>
  );
};
