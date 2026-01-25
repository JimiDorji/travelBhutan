import Script from 'next/script'
import Mhome from '../src/mhome/main'

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9681042570650797"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <Mhome />
    </>
  )
}
