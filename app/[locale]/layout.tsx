import React from 'react';
import '../modules/common/styles/globals.scss'
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import AppBar from '../modules/common/components/AppBar/AppBar.Component';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang="en">
      {/* TODO - pozybc sie tego */}
      <script async defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
      </script>
      <NextIntlClientProvider>
        <body>
          <AppBar />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
