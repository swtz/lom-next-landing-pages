import { Home, HomeProps } from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;

  try {
    data = await loadPages('look-my-page');
  } catch (e) {
    console.log('getStaticProps error:', e);
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
