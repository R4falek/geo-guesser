'use client'

import { useEffect } from 'react';
import DemoSection from '../modules/home/components/DemoSection/DemoSection.Component';
import GamesSection from '../modules/home/components/GamesSection/GamesSection.Component';
import HeroSection from '../modules/home/components/HeroSection/HeroSection.Component';
import PlaySection from '../modules/home/components/PlaySection/PlaySection.Component';
import StatisticsSection from '../modules/home/components/StatisticsSection/StatisticsSection.Component';
import { useAuth } from '../modules/auth/contexts/Auth.Context';

export default function Home() {
  const {user} = useAuth()

  return (
    user 
      ? (
        <>
          <GamesSection />
        </>
      ) : (
        <>
          <HeroSection />
          <DemoSection />
          <GamesSection />
          <StatisticsSection />
          <PlaySection />
        </>
      )  
  );
}
