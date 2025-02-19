import P from 'prop-types';
import { Home } from '@/templates/Home';
import { loadPages } from '@/api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getServerSideProps = async () => {
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

Index.propTypes = {
  data: P.array,
};
