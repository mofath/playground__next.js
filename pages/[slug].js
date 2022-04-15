import axios from 'axios';
import Head from 'next/head';

export const Page = ({ data }) => {
  const sanitizedData = () => ({
    __html: data['gjs-html'],
  });

  return (
    <>
      <Head>
        <meta property="description" content="description" />
      </Head>
      <div className="page-container">
        <div dangerouslySetInnerHTML={sanitizedData()} />
        <style jsx global>
          {`
            ${data['gjs-css']}
          `}
        </style>
      </div>
    </>
  );
};

Page.getInitialProps = async ({ req, query, token }) => {
  try {
    // const slug = query.slug;
    const { data } = await axios.get(`http://localhost:3000/api/page`);
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export default Page;
