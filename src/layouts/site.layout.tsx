import Link from 'next/link'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const SiteLayout = ({ children }: Props) => (
  <div className='bg-white antialiased'>
    <div>
      <div>
        <div className='max-w-xl mx-auto px-8'>
          <nav title='Main Navigation'>
            <div className='py-4 flex-shrink-0 flex items-center'>
              <img
                className='h-8 w-8'
                src='/icons/safari-pinned-tab.svg'
                alt='Logo Icon'
                width='32'
                height='32'
              />
              <Link href='/'>
                <a className='ml-8 font-medium text-gray-900'>Home</a>
              </Link>
              <Link href='/account-settings/basic-information'>
                <a className='ml-8 font-medium text-gray-900'>
                  Account Settings
                </a>
              </Link>
            </div>
            <div className='mt-2'>
              <label htmlFor='search-local'>
                <span>Find settings</span>
                <input
                  title='Search again'
                  type='search'
                  id='search-local'
                  className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
                  placeholder='Search...'
                />
              </label>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className='mt-6 sm:mt-0 sm:py-12'>{children}</div>
  </div>
)

export const getLayout = (page: React.ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
)

export default SiteLayout