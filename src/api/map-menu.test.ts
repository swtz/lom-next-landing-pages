import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu(undefined);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu_links: [
        {
          open_in_new_tab: false,
          link_text: 'intro',
          url: '#intro',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid-one',
          url: '#grid-one',
        },
      ],
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
