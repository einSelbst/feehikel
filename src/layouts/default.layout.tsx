import Link from 'next/link'

const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <header style={{ background: 'lightblue' }}>
        <nav>
          <Link href='/'>
            <a href='/'>Home</a>
          </Link>{' '}
          |
          <Link href='/about'>
            <a href='legal/about'>About</a>
          </Link>{' '}
          |
          <Link href='/contact'>
            <a href='legal/contact'>Contact</a>
          </Link>
        </nav>
      </header>

      <main style={{ border: '4px dashed green' }}>
        <header>
          <h1>Page Headline</h1>
        </header>

        <section aria-label='quick summary'>
          Summary Text. Visit this for more info:
          https://www.smashingmagazine.com/2020/01/html5-article-section/
        </section>

        <article>
          <header>
            <p>The Header of the article</p>
          </header>
          <section className='introduction'></section>
          <section className='content'>{children}</section>
          <section className='summary'></section>
          <footer>
            <p>The footer of the article</p>
          </footer>
        </article>
      </main>

      <aside
        style={{ background: 'darkslateblue', color: 'lightgoldenrodyellow' }}
      >
        <p>Something which is supposed to be on the side</p>
      </aside>

      <footer style={{ background: 'turquoise' }}>
        <p>©Copyright 2050 by nobody. All rights reversed.</p>
      </footer>
    </>
  )
}

export default DefaultLayout