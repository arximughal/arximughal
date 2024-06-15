import { Metadata } from 'next'
import Image from '@/components/Image'
import Link from 'next/link'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import HiveLayout from '@/layouts/HiveLayout'
import { coreContent } from 'pliny/utils/contentlayer'
// import { genPageMetadata } from 'app/seo'

export const metadata: Metadata = {
  title: 'HIVE 2.0 - Highly Intelligent AI for Practical Problem Solving',
}

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <HiveLayout content={mainContent}>
        <div
          className={`p-2 flex content-center w-full items-center justify-center flex-col py-16`}
        >
          <Image src={`/static/images/hive-logo.png`} width={148} height={148} alt={`HIVE 2.0`} />
          <h1
            className={`p-0 m-0 mt-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14`}
          >
            HIVE 2.0
          </h1>
          <h3
            className={`p-0 m-0 text-xl text-center font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-xl md:leading-14`}
          >
            Highly Intelligent AI for Practical Problem Solving
          </h3>
          <Link
            href={'https://chatgpt.com/g/g-E8ONcOcAH-hive-2-0'}
            target={`_blank`}
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className={`text-white`}>Try HIVE 2.0 now</span>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 14 10"
            >
              <path
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className={`p-2`}>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:gap-y-4 xl:space-y-0 text-center">
            <div className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Collaborative Intelligence</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Engage with a team of virtual personas with diverse expertise to tackle any problem
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Dynamic Discussions</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Personas dynamically interact, debate, and refine ideas to arrive at the best
                solutions
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Innovative Solutions</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Encourages out-of-the-box thinking and creative problem-solving
              </p>
            </div>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-4 xl:gap-y-4 xl:space-y-0 text-center pt-4">
            <div className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>User-Centric Iteration</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Continuously refine solutions based on your input and feedback
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Real-World Insights</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Draws from real-world examples and case studies to enhance discussions
              </p>
            </div>
          </div>
        </div>
        {/*<MDXLayoutRenderer code={author.body.code} />*/}
      </HiveLayout>
    </>
  )
}
