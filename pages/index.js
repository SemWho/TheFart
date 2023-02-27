/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
// import { util } from "prettier";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    // song: You Know Me - 12AM fantasy Mix - Midnight lovers
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there, I'm Sem. Fulltime french fries professional and parttime
          coding amateur.
        </p>
        <p>
          Don't feel shy to ask me questions on{" "}
          <a href="https://twitter.com/shengweihu">Twitter</a>.{" "}
        </p>
        <p>
          <a href="../posts/satu">Or read my first blog here</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
