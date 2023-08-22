import PageTransition from '@/components/PageTransition';
import { renderNavButtons } from '@/hooks/renderNavButtons';
import { forwardRef } from 'react';
import Head from 'next/head';

// For the page transitions
type PlaylistPageProps = {
  pageKey: string,
}

export type PlaylistPageRef = React.ForwardedRef<HTMLDivElement>

function Playlist({ pageKey }: PlaylistPageProps, ref: PlaylistPageRef) {
  return (
    <PageTransition pageKey={pageKey} ref={ref}>
      <Head>
        <title>Playlist | Homero Ochoa</title>
        <meta name="description" content="Thanks for visiting" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Playlist | Homero Ochoa" />
        <meta name="og:description" property="og:description" content="Thanks for visiting" />
        <meta property="og:site_name" content="Homero Ochoa" />
        <meta property="og:url" content="https://www.homeroochoa.com" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#2B2221"/>
      </Head>
      {renderNavButtons(pageKey)}
      <div id='playlist' className='flex h-full relative flex-col items-center justify-center bg-dark md:space-y-5 w-full pr-12 md:w-[55%] pl-2 md:pl-0 md:mx-auto'>
        <div className='w-full'>
          <h1 className='text-2xl lg:text-3xl font-semibold font-one text-light'>Playlist</h1>
          <p className="lg:mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[2px]">
            Thanks for checking out my site. Here’s a playlist for your time.
          </p>
        </div>
        <iframe className='h-[65%] md:h-[500px] drop-shadow-lg border-2 rounded-xl border-yellow' src="https://open.spotify.com/embed/playlist/65ZTSakunkRtuiXwDu1IrW?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </PageTransition>
  )
}

export default forwardRef(Playlist)
