import P from 'prop-types';
import dados from '../../dados';
import { mapData } from '@/api/map-data';
import { Home } from '@/templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const data = mapData(dados);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
