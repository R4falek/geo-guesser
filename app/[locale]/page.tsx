import DemoSection from './components/DemoSection/DemoSection.Component';
import GamesSection from './components/GamesSection/GamesSection.Component';
import HeroSection from './components/HeroSection/HeroSection.Component';
import PlaySection from './components/PlaySection/PlaySection.Component';
import StatisticsSection from './components/StatisticsSection/StatisticsSection.Component';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DemoSection />
      <GamesSection />
      <StatisticsSection />
      <PlaySection />
    </div>
  );
}
