/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef } from 'react'
import styles from './GoogleStreetView.module.scss'

interface GoogleStreetViewProps {
  height?: number
}

export const GoogleStreetView = ({ height }: GoogleStreetViewProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && (window as any).google) {
      new (window as any).google.maps.StreetViewPanorama(ref.current, {
        position: { lat: 50.015288, lng: 19.929235 },
        pov: { heading: 0, pitch: 0 },
        zoom: 1,
      });
    }
  }, []);

  return <div ref={ref} style={{ height: `${height}px` }} className={styles['google-street-view']} />;
}
