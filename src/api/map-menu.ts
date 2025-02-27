/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

export const mapMenu = (
  menu = { logo: { data: null } } as any,
): PageData['menu'] => {
  const {
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  const srcImg =
    menu.logo.data && menu.logo.data.attributes.url
      ? menu.logo.data.attributes.url
      : '';

  return {
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map((item): MenuLinkProps => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
