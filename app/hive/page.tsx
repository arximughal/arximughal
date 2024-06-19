import { Metadata } from 'next'
import Image from '@/components/Image'
import Link from 'next/link'
import { Authors, allAuthors } from 'contentlayer/generated'
import HiveLayout from '@/layouts/HiveLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
// import { genPageMetadata } from 'app/seo'

export const metadata: Metadata = {
  title: 'HIVE 2.0 - Highly Intelligent AI for Practical Problem Solving',
  openGraph: {
    title: `HIVE 2.0 - Highly Intelligent AI for Practical Problem Solving`,
    description: `HIVE 2.0: Intelligent AI for problem-solving. Engage with virtual experts to brainstorm, evaluate, and refine solutions. Try HIVE 2.0 for innovative, actionable insights.`,
    url: 'https://arslanaslam.me/hive',
    siteName: siteMetadata.title,
    images: `/static/images/hive-banner-t.png`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'HIVE 2.0 - Highly Intelligent AI for Practical Problem Solving',
    card: 'summary_large_image',
    images: `/static/images/hive-banner-t.png`,
  },
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className={`p-2`}>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:gap-y-4 xl:space-y-0 text-center">
            <div
              className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Collaborative Intelligence</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Engage with a team of virtual personas with diverse expertise to tackle any problem
              </p>
            </div>
            <div
              className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Dynamic Discussions</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Personas dynamically interact, debate, and refine ideas to arrive at the best
                solutions
              </p>
            </div>
            <div
              className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Innovative Solutions</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Encourages out-of-the-box thinking and creative problem-solving
              </p>
            </div>
          </div>
          <div
            className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-4 xl:gap-y-4 xl:space-y-0 text-center pt-4">
            <div
              className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>User-Centric Iteration</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Continuously refine solutions based on your input and feedback
              </p>
            </div>
            <div
              className="flex flex-col justify-center max-w-none dark:prose-invert xl:col-span-1 bg-gray-800 p-4 border-gray-500 rounded-xl min-h-[140px]">
              <h2 className={`text-lg font-bold`}>Real-World Insights</h2>
              <p className={`text-sm mt-2 text-gray-400`}>
                Draws from real-world examples and case studies to enhance discussions
              </p>
            </div>
          </div>
        </div>
        <div className={`py-24 relative`}>
          <h1 className={`text-6xl font-extrabold text-white text-center py-4 mb-6`}>
            How does{' '}
            <Image
              src={`/static/images/hive-logo.png`}
              width={100}
              height={100}
              alt={`HIVE 2.0`}
              className={`inline`}
            />{' '}
            work?
          </h1>
          <div className={`absolute top-36 left-36`}>
            <svg
              width="400"
              height="150"
              viewBox="0 0 1520 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1182.75 0.124877C986.22 1.93788 855.978 8.92804 595.496 31.6425C572.588 33.6396 536.772 36.7515 515.904 38.5581C344.006 53.4343 104.091 90.3309 38.0796 112.042C24.3898 116.545 0 129.048 0 131.564C0 131.98 1.13903 131.327 5.61928 128.344C26.2744 114.591 81.6927 102.291 218.156 81.1743C298.765 68.6997 386.851 57.4382 459.407 50.3313C514.79 44.906 777.594 23.7945 786.435 24.0613C788.249 24.1156 778.228 25.2005 764.166 26.4719C613.095 40.1319 561.655 45.6698 470.541 58.0868C399.944 67.7073 358.528 74.7623 252.697 95.1992C212.88 102.887 214.03 102.602 213.398 104.977C211.798 110.993 216.898 111.127 249.6 105.926C471.375 70.6611 603.729 57.8371 811.178 51.5143C866.995 49.8131 1060.35 48.2555 1056.96 49.5342C1055.03 50.2648 996.877 54.7413 899.431 61.6601C681.408 77.1412 541.906 95.5283 388.32 129.028C345.734 138.316 338.093 141.239 341.809 146.816C345.734 152.705 370.009 151.029 488.687 136.676C666.425 115.18 732.428 109.422 874.687 103.003C907.757 101.511 964.561 99.9863 962.939 100.635C962.486 100.816 926.669 104.818 883.347 109.528C774.95 121.313 705.394 129.953 702.965 131.934C699.22 134.99 700.301 139.396 705.118 140.711C710.991 142.315 727.598 141.437 765.815 137.503C848.696 128.971 931.525 124.294 1054 121.23C1072.33 120.771 1093.67 120.049 1101.42 119.626C1119.46 118.642 1148.06 118.644 1161.3 119.632C1166.97 120.054 1174.02 120.576 1176.97 120.79C1188.15 121.604 1149.38 116.366 1132.85 114.829C1091.41 110.979 1037.39 110.118 973.337 112.284C958.643 112.781 946.492 113.062 946.336 112.91C946.01 112.589 960.9 111.091 1033.05 104.192C1088.36 98.9014 1089.75 98.6678 1091.86 94.2983C1093.19 91.5261 1091.86 88.2284 1088.72 86.5606C1086.34 85.2989 1005.56 85.6971 961.702 87.1865C856.559 90.7582 800.842 93.8037 730.762 99.8079C659.854 105.883 612.749 111.313 494.937 126.994C423.212 136.541 385.445 141.133 372.804 141.848L364.968 142.29L374.453 139.876C403.712 132.432 501.242 114.271 556.732 105.935C671.998 88.6185 750.77 80.6732 927.473 68.54C1075.95 58.3455 1106.36 55.2903 1108.65 50.3385C1111.12 45.0033 1106.71 41.8338 1094.49 40.1684C1077.83 37.8973 872.126 38.477 799.219 41.0003C727.732 43.4749 642.829 48.2661 597.971 52.3575C593.208 52.7921 588.012 53.101 586.424 53.0443C574.751 52.6275 735.365 37.3021 827.262 30.0647C927.934 22.1364 1007.58 17.5601 1118 13.3592C1189.4 10.6437 1371.64 11.7797 1445.44 15.4017C1513.8 18.7569 1516.26 18.8023 1518.33 16.7655C1520.49 14.6411 1520.55 13.0657 1518.54 11.0945C1515.99 8.58584 1501.61 7.25694 1468.95 6.51097C1456.93 6.2361 1430.39 5.12443 1409.97 4.03955C1389.56 2.95547 1364.32 1.70114 1353.89 1.25194C1334.2 0.404624 1228.12 -0.293509 1182.75 0.124877ZM819.236 22.0586C818.677 22.2807 817.564 22.2945 816.761 22.0885C815.959 21.8826 816.416 21.701 817.777 21.6848C819.138 21.6686 819.794 21.8364 819.236 22.0586ZM808.509 22.9083C807.495 23.1004 805.639 23.1053 804.385 22.9197C803.132 22.7332 803.961 22.5759 806.23 22.5694C808.498 22.5637 809.524 22.7161 808.509 22.9083ZM797.363 23.7289C796.115 23.9145 794.075 23.9145 792.827 23.7289C791.579 23.5432 792.6 23.3915 795.095 23.3915C797.59 23.3915 798.611 23.5432 797.363 23.7289ZM581.681 53.7213C580.661 53.9143 578.99 53.9143 577.97 53.7213C576.949 53.5275 577.784 53.3694 579.826 53.3694C581.867 53.3694 582.702 53.5275 581.681 53.7213ZM572.609 54.4965C572.042 54.7219 571.114 54.7219 570.547 54.4965C569.98 54.2719 570.444 54.0878 571.578 54.0878C572.712 54.0878 573.176 54.2719 572.609 54.4965ZM1184.19 121.795C1184.76 122.02 1185.68 122.02 1186.25 121.795C1186.82 121.57 1186.35 121.386 1185.22 121.386C1184.09 121.386 1183.62 121.57 1184.19 121.795Z"
                fill="#cdcdcd"
              />
            </svg>
          </div>
          <div className={`mt-16`}>
            <div className={`flex flex-col`}>
              <div className={`flex flex-row pl-8 items-center`}>
                <p className={`font-extrabold text-9xl text-green-100`}>1</p>
                <div className={`ml-6`}>
                  <h1 className={`text-3xl font-bold`}>Pose a Problem</h1>
                  <p className={`mt-1 text-gray-400`}>
                    Describe your specific problem or query to HIVE 2.0 for personalized assistance.
                    Clear and detailed descriptions help the virtual personas understand and address
                    your needs effectively.
                  </p>
                </div>
              </div>
              <div className={`flex flex-row pl-24 items-center`}>
                <p className={`font-extrabold text-9xl text-green-100`}>2</p>
                <div className={`ml-6`}>
                  <h1 className={`text-3xl font-bold`}>Engage in Dialogues</h1>
                  <p className={`mt-1 text-gray-400`}>
                    Five virtual personas with diverse expertise discuss and brainstorm solutions.
                    They dynamically interact, debate, and refine ideas to arrive at the best
                    solutions.
                  </p>
                </div>
              </div>
              <div className={`flex flex-row pl-40 items-center`}>
                <p className={`font-extrabold text-9xl text-green-100`}>3</p>
                <div className={`ml-6`}>
                  <h1 className={`text-3xl font-bold`}>Receive Summaries</h1>
                  <p className={`mt-1 text-gray-400`}>
                    HIVE 2.0 provides a summary of the personas' discussion and actionable items.
                    These summaries offer clear, practical solutions based on the collaborative
                    dialogue.
                  </p>
                </div>
              </div>
              <div className={`flex flex-row pl-56 items-center`}>
                <p className={`font-extrabold text-9xl text-green-100`}>4</p>
                <div className={`ml-6`}>
                  <h1 className={`text-3xl font-bold`}>Iterate and Improve</h1>
                  <p className={`mt-1 text-gray-400`}>
                    Provide additional input to refine and enhance the proposed solutions. This
                    iterative process ensures continuous improvement and adaptation to your feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className={`w-full text-center`}>*/}
        {/*  <Link*/}
        {/*    href={'https://chatgpt.com/g/g-E8ONcOcAH-hive-2-0'}*/}
        {/*    target={`_blank`}*/}
        {/*    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
        {/*  >*/}
        {/*    <span className={`text-white`}>Try HIVE 2.0 now</span>*/}
        {/*    <svg*/}
        {/*      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"*/}
        {/*      aria-hidden="true"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      fill="#ffffff"*/}
        {/*      viewBox="0 0 14 10"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        stroke="#ffffff"*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        strokeWidth="2"*/}
        {/*        d="M1 5h12m0 0L9 1m4 4L9 9"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<MDXLayoutRenderer code={author.body.code} />*/}
        <div className="flex items-center justify-center py-12 bg-gray-900 rounded-lg">
          <NewsletterForm title={`Get updates from HIVE 2.0 - NO SPAM ✌`} />
        </div>
        <div className="flex items-center justify-center py-12 rounded-lg">
          <p>
            If you have any questions, feel free to drop a line at{' '}
            <a href={'mailto:hello@arslanaslam.me'}>hello@arslanaslam.me</a>
          </p>
        </div>
      </HiveLayout>
    </>
  )
}
