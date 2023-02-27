// @refresh reset

import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import Navbar from "./navbar";

const name = "Sem Who";
export const siteTitle = "Sem Who Online";

// eslint-disable-next-line react/prop-types
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Sem's Blog" content="Heart and Brain puffs" />
        <meta
          property="og:image"
          content={
            "https:og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
          }
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/hu.jpg"
              className={utilStyles.borderCircle}
              height={87}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/hu.jpg"
                  className={utilStyles.borderCircle}
                  height={87}
                  width={144}
                  alt=""
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <h2>
            <Link href="/">
              <a>h🏡</a>
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
}
