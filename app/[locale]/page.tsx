'use client'

import DemoSection from '../modules/home/components/DemoSection/DemoSection.Component';
import GamesSection from '../modules/home/components/GamesSection/GamesSection.Component';
import HeroSection from '../modules/home/components/HeroSection/HeroSection.Component';
import PlaySection from '../modules/home/components/PlaySection/PlaySection.Component';
import StatisticsSection from '../modules/home/components/StatisticsSection/StatisticsSection.Component';
import { useAuth } from '../modules/auth/contexts/Auth.Context';
import HelloSection from '../modules/home/components/HelloSection/HelloSection.Component';
import UserStatisticsSection from '../modules/home/components/UserStatisticsSection/UserStatisticsSection.Component';

export default function Home() {
  const {user} = useAuth()

  return (
    user 
      ? (
        <>
          <HelloSection />
          <GamesSection />
          <UserStatisticsSection />
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
