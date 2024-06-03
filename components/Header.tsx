'use client'

import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <header className="flex items-center justify-between py-16">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between relative" style={{ width: '180px' }}>
            {/* <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )} */}
            <div className="mr-3 absolute">
              {currentTheme === 'dark' || currentTheme === 'system' ? (
                <Image
                  src={'/static/images/logo-transparent.png'}
                  width={180}
                  height={50}
                  alt={'Muhammad Arslan Aslam'}
                />
              ) : (
                <Image
                  src={'/static/images/logo-transparent.png'}
                  width={180}
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
        </Link>
      </div>
      <div className="flex items-center justify-start leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
