import theme from "@/components/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const gaScript = `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WQPD7JS2');`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          }
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="odometer-theme-default.css" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#13294b" />
        <meta property="og:title" content="Taiwan Builder House" />
        <meta property="og:site_name" content="Builder House" />
        <meta
          property="og:url"
          content="https://www.taiwanbuilderhouse.com/main.png"
        />
        <meta property="og:description" content="Builder House" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.taiwanbuilderhouse.com/main.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="taiwanbuilderhouse.com" />
        <meta
          property="twitter:url"
          content="https://taiwanbuilderhouse.com/"
        />
        <meta name="twitter:title" content="Taiwan Builder House" />
        <meta name="twitter:description" content="Builder House" />
        <meta
          name="twitter:image"
          content="https://taiwanbuilderhouse.com/main.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '3420282974892057');
                fbq('track', 'PageView');
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3420282974892057&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="google-manager">{gaScript}</Script>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQPD7JS2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
