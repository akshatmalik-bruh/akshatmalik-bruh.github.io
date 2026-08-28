import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import CursorTracker from '@/components/common/CursorTracker';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { MusicProvider } from '@/context/MusicContext';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MusicProvider>
              <ReactLenis root>
                <Navbar />
                {children}
                <CursorTracker />
                <OnekoCat />
                <Quote />
                <Footer />
                <UmamiAnalytics />
              </ReactLenis>
            </MusicProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
