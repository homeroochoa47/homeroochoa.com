import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/helpers";

interface ProjectDataProps {
  data: {
    coverImage: {alt: string};
    projectDescription: string;
    projectYear: string;
    projectName: string;
    projectURL: string;
    ProjectImages: Array<{
      alt: string;
    }>
  };
  delay: number;
  key: number;
}

export default function ProjectCard({data, delay}: ProjectDataProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={`rounded-xl bg-transparent w-full`}>
      <div className={`animate-in duration-700 fade-in delay-${delay} flex mx-auto flex-col md:flex-row items-center gap-x-4`}>
        <div className='relative w-full bg-[#1E1615] md:max-w-[300px] rounded-lg border-2 border-yellow'>
          <img className="rounded-t-md w-full px-3 pt-3" src={urlFor(data.coverImage)} alt={`A screenshot of the ${data.coverImage.alt} website in a browser.`}/>
        </div>
        <div className="flex flex-col text-light w-full md:w-auto mt-2 md:mt-0">
          <h3 className="text-2xl lg:text-3xl font-semibold font-one text-light">
            {data.projectName}
          </h3>
          <p className="text-sm md:text-md font-light text-light/80 font-two">
            {data.projectYear}
          </p>
          <p className="lg:mt-1 md:text-lg lg:text-xl font-two font-light text-light/[82%] ml-[1px]">
            {data.projectDescription}
          </p>

          <button type="button" onClick={() => setIsModalOpen(!isModalOpen)} className="w-[175px] py-1.5 inline-flex justify-center items-center font-two text-sm md:text-md text-dark rounded-sm font-medium bg-yellow hover:bg-yellow/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 mt-1 md:mt-5">
            View Project
          </button>
        </div>
      </div>

      {/* Modal */}
      <motion.div
        className={`w-full h-full flex fixed top-0 left-0 z-[100] overflow-x-hidden ${isModalOpen ? 'visible' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{opacity: isModalOpen ? 1 : 0}}
        transition={{ duration: 0.1, ease: 'easeOut' }}>
        <div className={`sm:max-w-7xl sm:w-full m-3 sm:mx-auto h-[90%] flex items-center my-auto`}>
          <div className="relative w-full max-h-full overflow-hidden flex flex-col bg-[#1E1615] border-2 border-yellow shadow-sm rounded-xl px-5">
            {/* Close Button */}
            <button type="button" onClick={() => setIsModalOpen(!isModalOpen)} className="absolute right-3 top-3 inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-light hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm">
              <span className="sr-only">Close</span>
              <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Heading and Caption */}
            <div className="flex flex-col justify-between items-start py-3">
              <div className="flex flex-col sm:flex-row w-fit sm:items-end space-x-[2px] sm:space-x-3">
                <h3 className="font-semibold font-one text-xl sm:text-3xl text-light">
                  {data.projectName}
                </h3>
                <Link href={data.projectURL} rel="noopener noreferrer" target="_blank" className="text-sm md:text-md lg:text-lg font-light text-yellow font-two underline">
                  Live Site ↗
                </Link>
              </div>
              <p className="text-lg md:text-xl font-two font-light text-light/[82%] ml-[1px]">
                {data.projectDescription}
              </p>
            </div>

            {/* Scrollable Full Page Image */}
            <div className="overflow-y-auto">
              <img src={urlFor(data.ProjectImages[0])} className="mx-auto rounded-sm" alt={`A fullpage screenshot of the ${data.projectName} website home page.`} />
            </div>

            {/* Close Button */}
            <div className="flex justify-end items-center gap-x-2 py-3 px-4">
              <button type="button" className="py-2 px-6 inline-flex justify-center items-center gap-2 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all font-two text-md text-dark rounded-sm font-medium bg-yellow hover:bg-yellow/80" onClick={() => setIsModalOpen(!isModalOpen)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
