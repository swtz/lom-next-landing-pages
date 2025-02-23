import { useRouter } from 'next/router';
import { loadPages } from '../api/load-pages';
import { Home, HomeProps } from '../templates/Home';
import { Loading } from '../templates/Loading';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Page({ data }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const runtime = 'edge';

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug as string);
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
