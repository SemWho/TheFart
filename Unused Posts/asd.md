/* eslint-disable prettier/prettier */
import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
import Layout from "../../components/layout";


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        {" "}
        {/* dit klopt voor geen bal, moet vervangen worden met onderstaand */}
        <title>A boy can dream. </title>
        <script src="https:connect.facebook.net/en_US/sdk.js" />
      </Head>
      <script
        src="https:connect.facebook.net/en_US/en_US/sdk.js"
        // eslint-disable-next-line react/no-unknown-property
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>25.10.22 // A boy can dream. </h1>
      <p>Hey, jongeman!</p>
      <p>
        Sometimes I think back about the time I just started playing football. I
        wasn't really good and honestly. I was never able to learn the technical
        abilities, but I could run. My memories take me back to moments wherein
        I made the first positive impact on a match "(I can do it!)". During my
        football highlight years my playing range would expand the whole
        defence/midfield from left to right. I would run my lungs out of my
        body, because I worked hard to get better at what I could only do best:
        run.
      </p>
      <p>
        The kids started calling me Kamikaze, because I would head in recklessly
        and at full speed. My younger years forced me to do so, because it was
        filled with beatdowns, so I had to fight hard to not lose. I ran to not
        be beaten again. My pride until this day was wherein I was the last man
        that could prevent a goal and I was able to. The emotion of all those
        loses and all the injuries fades compared to that I was able to so.
      </p>
      <p>
        Until this day I am working hard, or at least I tend to think so. Trying
        to keep in mind that all the losses will wither compared to those
        moments wherein I at least worked hard. You have to keep trying to
        create opportunities to win/to be proud/to be excited/to be loved. It's
        okay if you lose yourself from time to time, but remember that each
        step, no matter how hard, is a step closer. One day you might remember
        the days that it was tough, but you can find pride that you fought for
        it.
      </p>
      <p>
        Don't be afraid start doing something you secretlty love to do. Just
        image if you do get good in something you love? Can you imagine the
        excitement? Some patches might be rough and maybe even painful, but keep
        this thought in mind: you need to make steps, so the 1-, 5-, 10-year
        older version be proud of the steps you take now? I was a small, scrawny
        kid when I started to play football and I had to work hard to keep up.
        One of my proudest moments was when I wasn't picked as last. Deep inside
        a fire started to burn. I can do it! I need to try harder, but there is
        still a distance until I get as good as the best in the team.
      </p>
      <p></p>
      <p>
        With that being said. It is time to get the grind going and to keep the
        heart and mind flowing. I have realized I am a purist, but I was raised
        to be materialistic and to be greedy for money. Although it does not
        match well with who I am, I will become greedy for money. I will earn
        that money, because I want to live a life that is pure. One that is
        dedicated to whatever I love. To do so I will start with following my
        passions and my goal is to do the following:
      </p>
      <p>- 胡盛偉</p>
    </Layout>
  );
}

function Header() {
  return <h1>22.10.22 Hello there. Whaddup?</h1>;
}
