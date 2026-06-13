'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    fbq: any;
  }
}

interface MetaPixelProps {
  pixelId: string;
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track PageView on route changes (App Router)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.fbq) return;

    window.fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="meta-pixel-script"
        strategy="afterInteractive"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
      />
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof fbq === 'undefined') {
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            }
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
