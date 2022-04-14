import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const Page = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="description" content="description" />
      </Head>
      <div className="page-container"></div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const slug = pageContext.query.slug;
  const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/todos/1`);

  return {
    props: {
      data,
    },
  };
};

export default Page;
