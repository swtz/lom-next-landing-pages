import P from 'prop-types';
import { useRouter } from 'next/router';
import { loadPages } from '@/api/load-pages';
import { Home } from '@/templates/Home';
import { Loading } from '@/templates/Loading';

export default function Page({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: { slug: page.slug },
  //   };
  // });

  return {
    paths: [{ params: { slug: 'another-landing-page' } }],
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (e) {
    console.log('getStaticProps from [slug].jsx error:', e);
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
    revalidate: 600, // 10min
  };
};
