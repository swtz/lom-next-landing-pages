import P from 'prop-types';
import { loadPages } from '@/api/load-pages';
import { Home } from '@/templates/Home';

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: { slug: page.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const runtime = 'experimental-edge';

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (e) {
    console.log('getStaticProps from [slug].jsx error:', e);
  }

  if (!data) {
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
