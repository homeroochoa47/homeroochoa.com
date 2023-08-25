import { client } from '@/client';
import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';
import { renderNavButtons } from '@/hooks/renderNavButtons';
import Head from 'next/head';
import { forwardRef } from 'react';

interface ProjectPageProps {
  pageKey: string;
  projectData: {
    projectList: ProjectListItem[];
  };
}

interface ProjectListItem {
  coverImage: { alt: string };
  projectDescription: string;
  projectYear: string;
  projectName: string;
  projectURL: string;
  ProjectImages: Array<{
    alt: string;
  }>;
}


export type ProjectPageRef = React.ForwardedRef<HTMLDivElement>

function Projects({ pageKey, projectData }: ProjectPageProps, ref: ProjectPageRef) {
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
      <div id='Project' className='flex h-full w-full lg:w-[55%] px-5 lg:px-0 mx-auto relative flex-col items-start bg-dark md:space-y-5 overflow-scroll md:overflow-hidden pt-10 md:pt-[150px]'>
        <div className='w-full max-w-4xl'>
          <h1 className='animate-in duration-700 delay-100 fade-in text-2xl lg:text-3xl font-semibold font-one text-light'>Projects</h1>
          <p className="animate-in duration-700 delay-150 fade-in lg:mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[1px]">
            Browse some of my previous client work
          </p>
        </div>

        <div className='flex flex-col pt-4 md:pt-5 pb-20 space-y-12 md:space-y-10 overflow-y-scroll w-full'>
          {projectData.projectList.map((item, index) => (
            <ProjectCard key={index} delay={50 + index*50} data={item}/>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const projectData = await client.fetch(`*[_type == "projectsPage"][0]`);

  return {
    props: {
      projectData
    },
  };
}

export default forwardRef(Projects)
