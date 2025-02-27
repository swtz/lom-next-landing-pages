/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent';
import { GridImageProps, GridImageElementProps } from '../components/GridImage';
import { GridTextElementProps, GridTextProps } from '../components/GridText';
import { GridTwoColumnsProps } from '../components/GridTwoColumns';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: {
      data: {
        attributes: { url: srcImg = '' },
      },
    } = { data: { attributes: {} } },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: [
      {
        children: [{ text: html = '' }],
      },
    ] = [{ children: [{}] }],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
    background,
    sectionId,
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    grid: grid.map((img: any): GridImageElementProps => {
      const {
        image: {
          data: [
            {
              attributes: { url: srcImg = '', alternativeText },
            },
          ],
        },
      } = img;
      return {
        srcImg,
        altText: alternativeText ? alternativeText : '',
      };
    }),
    background,
    sectionId,
  };
};
