import { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/Gtm'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* <script
                    data-partytown-config
                    dangerouslySetInnerHTML={{
                        __html: `
                            partytown = {
                                lib: "/_next/static/~partytown/",
                                debug: true
                            };
                        `,
                    }}
                /> */}
                <meta name='application-name' content='Saffron Beauty Salon App' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Saffron Beauty Salon App' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#f80cde' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />

                <link rel='apple-touch-icon' href='/touch-icon-iphone.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/sbs_152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/sbs_180x180.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/sbs_167x167.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/sbs_32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/sbs_16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/512x512.png' color='#5bbad5' />
                <link rel="icon" href="/favicon.ico" />
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <body>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}