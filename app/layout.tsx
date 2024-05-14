import type { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';

import { Toaster } from '@/components/ui/toaster';

import { ThirdwebContextProvider } from './providers/ThirdWebContextProvider';

export const metadata: Metadata = {
  title: 'Marketplace - Libertum',
  description: 'Exploring freedom, technology, and innovation in our journey to a brighter future.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.ad360.media" />
        {/* <GoogleTagManager gtmId="GTM-WBK9FF4T" /> */}
        <Script
          defer
          id="za6uwxwg"
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/za6uwxwg';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
          }}
        />

        <Script
          defer
          id="za6uwxwg1"
          dangerouslySetInnerHTML={{
            __html: `window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "za6uwxwg",
  };`,
          }}
        />
      </head>

      <body>
        <ThirdwebContextProvider>{children}</ThirdwebContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
