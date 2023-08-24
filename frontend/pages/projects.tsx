import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';
import { renderNavButtons } from '@/hooks/renderNavButtons';
import Head from 'next/head';
import { forwardRef } from 'react';

// For the page transitions
export type PlaylistPageProps = {
  pageKey: string,
}

export type PlaylistPageRef = React.ForwardedRef<HTMLDivElement>

const projects = [
  {
    name: 'TeslaWrap.com',
    year: '2023',
    description: 'SEO Focused lead generation website with Hubspot API integration.',
    coverImage: '/teslaWrap.png',
    fullImage: '/teslaWrapFull.png',
    url: 'https://teslawrap.com'
  },
  {
    name: 'ScottieLine.com',
    year: '2023',
    description: 'Website and CMS for a Southern California French Bulldog Breeder.',
    coverImage: '/scottieLine.png',
    fullImage: '/scottieLineFull.png',
    url: 'https://scottieline.com'
  },
  {
    name: 'VehicleWrapService.com',
    year: '2023',
    description: 'SEO Focused lead generation website with Hubspot API integration.',
    coverImage: '/vws.png',
    fullImage: '/vwsFull.png',
    url: 'https://vehiclewrapservice.com'
  },
  {
    name: 'InnovativeStreetLights.com',
    year: '2023',
    description: 'Marketing website for a small business.',
    coverImage: '/innovative.png',
    fullImage: '/innovativeFull.png',
    url: 'https://innovativestreetlights.com'
  },
  {
    name: 'Insites by 47.Dev',
    year: '2023',
    description: 'My web development branch focused on creating websites for therapists.',
    coverImage: '/insites.png',
    fullImage: '/insitesFull.png',
    url: 'https://insites.47webdev.com'
  },
  {
    name: 'Twilight',
    year: '2023',
    description: 'Demo website for a group therapy practice.',
    coverImage: '/twilight.png',
    fullImage: '/twilightFull.png',
    url: 'https://twilight.47webdev.com'
  },
  {
    name: '47.Dev',
    year: '2023',
    description: 'My web devlopment business website.',
    coverImage: '/47dev.png',
    fullImage: '/47devFull.png',
    url: 'https://47webdev.com'
  },
]

function Projects({ pageKey }: PlaylistPageProps, ref: PlaylistPageRef) {
  return (
    <PageTransition pageKey={pageKey} ref={ref}>
      <Head>
        <title>Projects | Homero Ochoa</title>
        <meta name="description" content="Browse some of my previous work" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Projects | Homero Ochoa" />
        <meta name="og:description" property="og:description" content="Browse some of my previous work" />
        <meta property="og:site_name" content="Homero Ochoa" />
        <meta property="og:url" content="https://www.homeroochoa.com" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#2B2221"/>
      </Head>

      {renderNavButtons(pageKey)}
      <div id='playlist' className='flex h-full w-full lg:w-[55%] px-5 lg:px-0 mx-auto relative flex-col items-start bg-dark md:space-y-5 overflow-scroll md:overflow-hidden pt-10 md:pt-[150px]'>
        <div className='w-full max-w-4xl'>
          <h1 className='animate-in duration-700 delay-[100] fade-in text-2xl lg:text-3xl font-semibold font-one text-light'>Projects</h1>
          <p className="animate-in duration-700 delay-150 fade-in lg:mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[1px]">
            Browse some of my previous client work
          </p>
        </div>

        <div className='flex flex-col pt-4 md:pt-5 pb-20 space-y-12 md:space-y-10 overflow-y-scroll w-full'>
          {projects.map((item, index) => (
            <ProjectCard key={index} delay={50 + index*50} {...item}/>
          ))}
        </div>

      </div>
    </PageTransition>
  )
}

export default forwardRef(Projects)
