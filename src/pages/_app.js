import Head from 'next/head'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="stylesheet" href="/plyr.css" />
        <meta name="description" content="Follow the #EndSARS Protest live on Soro Soke Radio" />
        <meta name="keywords" content="#Soro Soke, #EndSARS Online Radio, SoroSoke Nigeria, #EndPoliceBrutality" />
        <title>Soro Soke Radio</title>

        <meta name='application-name' content='#SoroSoke Radio' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='#SoroSoke Radio' />
        <meta name='description' content='Follow the #EndSARS Protest live on Soro Soke Radio' />
        <meta name='mobile-web-app-capable' content='yes' />

        {/*
        <meta name='format-detection' content='telephone=no' />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <meta name='msapplication-tap-highlight' content='no' />

        <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
        <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
        
        
      */}

        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='twitter:card' content='Soro Soke Online Radio' />
        <meta name='twitter:url' content='https://soro-soke-radio.vercel.app' />
        <meta name='twitter:title' content='#SoroSoke Radio' />
        <meta name='twitter:description' content='Soro Soke Online Radio' />
        <meta name='twitter:image' content='https://soro-soke-radio.vercel.app/logo.png' />
        <meta name='twitter:creator' content='@feyikewa' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='#SoroSoke Radio' />
        <meta property='og:description' content='Soro Soke Online Radio' />
        <meta property='og:site_name' content='#SoroSoke Radio' />
        <meta property='og:url' content='https://soro-soke-radio.vercel.app' />
        <meta property='og:image' content='https://soro-soke-radio.vercel.app/logo.png' />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/logo.png"></link>
        <meta name="theme-color" content="#fadc58" />
        <meta name='msapplication-TileColor' content='#fadc58' />

      </Head>
      <Component {...pageProps} />
    </>
  )
}
