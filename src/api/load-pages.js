import { mapData } from '@/api/map-data';
import config from '../config/index';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug
    ? `?filters[slug]=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';
  const url = `${config.url}/pages/${cleanSlug}&populate=deep`;

  const raw = await fetch(`${url}`);
  const json = await raw.json();
  const data = mapData(json);

  return data;
};
