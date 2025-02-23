/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';
import { PageData } from '../templates/Home';

export const mapData = (pagesData = { data: [] } as any): PageData[] => {
  return pagesData.data.map((data: any): PageData => {
    const {
      footer_text: footerHtml = [{ children: [{}] }],
      slug = '',
      title = '',
      sections = [],
      menu = { logo: { data: null } },
    } = data.attributes;

    return {
      footerHtml: String(
        footerHtml.map((item) => {
          const {
            children: [{ text = '' }],
          } = item;
          return text;
        }),
      ),
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

// Inspect the return of 'mapData' with 'node.js':
// const { inspect } = require('util');
// const dados = require('./dados.json');
// console.log(inspect(mapData(dados), null, null, true));
