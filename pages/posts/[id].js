import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
// import ReactPlayer from "react-player";
// import Index from "../../components/music";

export default function Post({ postData }) {
  return (
    <Layout>
      {/* <ReactPlayer 
                url={"https://www.youtube.com/embed/Q__EH8O0SdQ"}
                playing={true}
                width={560}
                height={315} 
            /> */}
      <index></index>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {postData.url}
      <br />
      {/* {postData.id} */}
      {/* <br />
            <Date dateString={postData.date} />
            <br /> */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
