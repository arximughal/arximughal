'use client'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <footer>
      <div className={'flex flex-row justify-center items-center mt-16'}>
        <Image
          src={'/static/images/logo.png'}
          alt={'Byte-sized Banter by Muhammad Arslan Aslam'}
          width={200}
          height={200}
        />{' '}
        <span className={'mx-6 text-4xl italic text-gray-400 mt-6'}>by</span>{' '}
        <div className="ml-8">
          {currentTheme === 'dark' || currentTheme === 'system' ? (
            <Image
              src={'/static/images/dark-bg-light-text.png'}
              width={500}
              height={50}
              alt={'Muhammad Arslan Aslam'}
            />
          ) : (
            <Image
              src={'/static/images/light-bg-dark-text.png'}
              width={500}
              height={50}
              alt={'Muhammad Arslan Aslam'}
            />
          )}
          {/* <Image
                src={'/static/images/dark-bg-light-text.png'}
                width={280}
                height={50}
                alt="Muhammad Arslan Aslam"
              /> */}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
