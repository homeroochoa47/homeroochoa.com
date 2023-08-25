import React from 'react'
import { renderNavButtons } from '@/hooks/renderNavButtons';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition'
import { forwardRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { client } from '@/client';
import { urlFor } from '@/lib/helpers';


// For the page transitions
interface IndexPageProps { 
  pageKey: string;
  homeData: {
    profilePicture: {
      alt: string;
    };
  };
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Home({ pageKey, homeData }: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition pageKey={pageKey} ref={ref}>
      <Head>
        <title>Homero Ochoa | Web Developer</title>
        <meta name="description" content="Homero Ochoa is a web developer based in Los Angeles, CA" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Homero Ochoa | Web Developer" />
        <meta name="og:description" property="og:description" content="Homero Ochoa is a web developer based in Los Angeles, CA" />
        <meta property="og:site_name" content="Homero Ochoa" />
        <meta property="og:url" content="https://www.homeroochoa.com" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#2B2221"/>
      </Head>

      {renderNavButtons(pageKey)}
      <div id='home' className='h-full flex relative items-center -mt-5 md:mt-0 justfy-center bg-dark'>
          <div className="flex flex-col md:flex-row md:items-center gap-x-4 w-[70%] lg:w-[50%] mx-auto">
            <img src={urlFor(homeData.profilePicture).url()} className='animate-in duration-700 fade-in delay-150 rounded-full w-full max-w-[150px] lg:max-w-[250px] border-2 border-yellow' alt={homeData.profilePicture.alt} />
            <div className=" flex flex-col text-light">
              <h3 className="animate-in duration-700 delay-100 fade-in font-semibold font-one text-3xl md:text-4xl lg:text-5xl">
                Homero Ochoa
              </h3>
              <p className="animate-in duration-700 delay-150 fade-in lg:text-lg font-light text-light/90 font-two ml-[1px]">
                Web Developer
              </p>
              <p className="animate-in duration-700 delay-200 fade-in mt-1 lg:mt-3 text-sm md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[2px]">
                Hi I’m Homero, an engineer and web developer that makes websites using Next.js and headless CMS backends.
              </p>

              <div id='button-group' className='animate-in duration-700 delay-300 fade-in flex flex-row mt-2 space-x-5'>
                <a href="mailto:homeroochoa47@gmail.com">
                  <button type="button" className="w-[100px] sm:w-[175px] py-1.5 inline-flex justify-center items-center font-two text-sm lg:text-md text-dark rounded-sm font-medium bg-yellow hover:bg-yellow/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
                    Email Me
                  </button>
                </a>
                <Link href="https://www.linkedin.com/in/homero-ochoa-047/">
                  <button type="button" className="w-[100px] sm:w-[175px] py-1.5 inline-flex justify-center items-center font-two text-sm lg:text-md text-dark rounded-sm font-medium bg-yellow hover:bg-yellow/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const homeData = await client.fetch(`*[_type == "homePage"][0]`);
  console.log(homeData)

  return {
    props: {
      homeData
    },
  };
}


export default forwardRef(Home)