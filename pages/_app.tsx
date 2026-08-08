import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<string>('en')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('nh_lang') : null
    if (stored) setLang(stored)
    document.documentElement.dir = stored === 'ar' ? 'rtl' : 'ltr'
  }, [])

  useEffect(() => {
    if (lang) {
      localStorage.setItem('nh_lang', lang)
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }, [lang])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>N&H Arabic & Islamic Academy</title>
      </Head>
      <div className="main-phone">
        <Component {...pageProps} setLang={setLang} lang={lang} />
      </div>
    </>
  )
}
