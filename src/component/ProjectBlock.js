import React from 'react';
import CarouselItems from './CarouselItems';

const ProjectBlock = ({ data }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-7 gap-x-4 sm:gap-y-24 gap-y-8'>
      {data.map((project, index) => (
        <>
          <div key={index} className="my-0 ml-6 col-span-2 sm:col-span-4">
            <div className="absolute sm:w-40 sm:h-40 h-16 w-16 bg-stone-200 rounded-full mt-2 sm:-left-20 -left-8 border border-white dark:border-stone-900 dark:bg-stone-700">
              <img src={project.logo} className='h-full w-full rounded-full ring-8 dark:ring-white/25 ring-black/25' alt='record' />
            </div>
            <div className='sm:ml-28 ml-8'>
              <h3 className="flex items-center mb-1 sm:text-lg text-sm font-semibold text-stone-900 dark:text-white">
                {project.title}
                {project.link && (
                  <a href={project.link} className='text-amber-600'>{project.linkText}</a>
                )}
                {index === 0 && (
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ml-3">Latest</span>
                )}
              </h3>
              <time className="block mb-2 sm:text-sm text-xs font-normal leading-none text-stone-400">
                Released on {project.releaseYear}
              </time>
              <p id="description" dangerouslySetInnerHTML={{ __html: project.description }} className="mb-4 sm:text-base text-xs font-normal text-stone-500 dark:text-stone-400">
                {/* project.description */}
                {/* {<div dangerouslySetInnerHTML={{ __html: project.description }} />} */}
              </p>

              {/* {project.button && project.button[0].buttonText && ( */}
              <div className="inline-flex rounded-md shadow-sm" role="group">
                {project.button.map((button, buttonIndex) => (
                  <a
                    key={buttonIndex}
                    href={button.buttonLink}
                    className={`inline-flex items-center px-4 py-2 sm:text-sm text-xs font-medium text-stone-900 bg-white border hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700
                   ${buttonIndex === 0 ? 'rounded-l-lg' : ''} ${buttonIndex === project.button.length - 1 ? 'rounded-r-lg' : ''}`
                    }
                  >
                    {button.buttonText}
                  </a>
                ))}
              </div>
              {/* )} */}
            </div>
          </div>
          <div className="col-span-3 h-full pb-8">
            <CarouselItems carouselItems={project.images} />
          </div>
          {/* Render images based on data */}
          {/* {project.images.map((image, buttonIndex) => (
            // <img
            //   key={index}
            //   className={`sm:h-64 h-36 sm:max-w-sm max-w-[${project.width}] mt-4 mb-16 sm:mt-12 sm:mb-12 ${project.imageClass[0]}`}
            //   src={project.image[0]}
            //   alt="description"
            // />
            <img
            key={index}
            className={`sm:h-64 h-36 sm:max-w-sm max-w-[${project.width}] mt-4 mb-16 sm:mt-12 sm:mb-12 ${project.imageClass[0]}`}
            src={image}
            alt="description"
          />
          ))} */}


        </>
      ))}
    </div>
  );
};

export default ProjectBlock;
