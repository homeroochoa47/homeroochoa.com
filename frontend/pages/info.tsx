import PageTransition from '@/components/PageTransition';
import { renderNavButtons } from '@/hooks/renderNavButtons';
import { forwardRef } from 'react';
import Head from 'next/head';
import { client } from '@/client';
import { urlFor } from '@/lib/helpers';

interface InfoPageProps{
  pageKey: string;
  infoData: {
    infoImages: Array<
      {
        alt: string
      }
    >;
  };
}

export type InfoPageRef = React.ForwardedRef<HTMLDivElement>

function Info({ pageKey, infoData }: InfoPageProps, ref: InfoPageRef) {

  return (
    <PageTransition pageKey={pageKey} ref={ref}>
      <Head>
        <title>Info | Homero Ochoa</title>
        <meta name="description" content="More about me" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Info | Homero Ochoa" />
        <meta name="og:description" property="og:description" content="More about me" />
        <meta property="og:site_name" content="Homero Ochoa" />
        <meta property="og:url" content="https://www.homeroochoa.com" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#2B2221"/>
      </Head>

      <div id='info' className='flex h-full mx-auto relative flex-col items-center bg-dark space-y-5 max-w-4xl lg:px-5 pl-12 pr-2 overflow-auto md:overflow-hidden'>
        <div className='w-full max-w-4xl pt-[8%]'>
          <h1 className='animate-in duration-700 delay-50 fade-in text-2xl lg:text-3xl font-semibold font-one text-light'>Info</h1>
          <p className="animate-in duration-700 delay-100 fade-in lg:mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[2px]">
              Some more about me and what I do
          </p>
        </div>
        <div className='animate-in duration-700 delay-150 fade-in grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 lg:gap-8 w-full max-w-4xl'>
          {infoData.infoImages.map((item, index) => (
            <img key={index} src={urlFor(item).url()} alt={item.alt} className='w-full h-full max-h-[325px] rounded-[4px] border-2 border-yellow object-cover hover:scale-105 transition-all duration-300 ease-out' />
          ))}
        </div>

        <div className='animate-in duration-700 delay-300 fade-in w-full flex flex-col space-y-10 md:space-y-24 md:overflow-y-scroll no-scrollbar pb-16 md:pb-[250px]'>
          
          <div className='flex flex-col md:flex-row '>
            <div className="sticky top-0 h-fit">
              <h2 className="text-xl font-normal text-light w-[250px] font-two ml-[2px]">Me</h2>
            </div>
            <p id="me" className="mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[2px]">
              I grew up in the California desert and moved to
              the LA South Bay area after finishing my Bachelor’s degree. 
              <br />
              <br />
              Having played soccer growing up, I’m a big Arsenal fan. Nowadays I play basketball in my free time.
              <br />
              <br />
              I’ve always been influenced by different forms of art; I love breaking down my favorite songs and have taken more photos than I can count. 
            </p>
          </div>

          <div className='flex flex-col md:flex-row'>
            <div className="sticky top-0 h-fit">
              <h2 className="text-xl font-normal text-light w-[250px] font-two ml-[2px]">Coding</h2>
            </div>
            <p id="coding" className="mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[2px]">
              I found out that I loved coding just after finishing my degree in Materials Engineering at UC Irvine. While working in the aerospace industry as a Metallurgical Engineer, I started coding every day after work hoping to one day become a software developer.
              <br />
              <br />
              I eventually quit my job and went to work for Porsche as a test driver here in LA (probably the most fun job on earth). I then made the jump to becoming a freelance web developer full time so I could make progress toward doing what I love every day. I'm now looking to be a part of a team as a full stack or frontend developer.
            </p>
          </div>
        </div>
      </div>
      {renderNavButtons(pageKey)}
    </PageTransition>
  )
}

export async function getStaticProps() {
  const infoData = await client.fetch(`*[_type == "infoPage"][0]`);

  return {
    props: {
      infoData
    },
  };
}

export default forwardRef(Info)