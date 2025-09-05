import React from 'react';
import './styles/globals.scss'
import AppBar from '../components/AppBar/AppBar.Component';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO - pozybc sie tego */}
      <script async defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
      </script>
      <body>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
