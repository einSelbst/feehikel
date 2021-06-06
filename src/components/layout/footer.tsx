const Vercel = () => (
    <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
      Powered by{' '}
      <img
        src='/vercel.svg'
        alt='Vercel Logo'
        width='71px'
        height='16px'
        className='logo'
      />
    </a>
  )

const Netlify = () => (
    <>
      <a href='https://www.netlify.com'>
        <img
          src='https://www.netlify.com/img/global/badges/netlify-color-accent.svg'
          alt='Deploys by Netlify'
          width='114'
          height='51'
        />
      </a>
      <a href='https://www.netlify.com'>
        <img
          src='https://www.netlify.com/img/global/badges/netlify-color-bg.svg'
          alt='Deploys by Netlify'
          width='114'
          height='51'
        />
      </a>
      <a href='https://www.netlify.com'>
        <img
          src='https://www.netlify.com/img/global/badges/netlify-light.svg'
          alt='Deploys by Netlify'
          width='114'
          height='51'
        />
      </a>
    </>
  )

export const Footer = (): JSX.Element => (
    <footer>
      {process.env.platform === 'vercel' ? <Vercel /> : <Netlify />}
      <p>Hosted on {process.env.platform}</p>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  )
