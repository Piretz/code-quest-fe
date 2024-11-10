// pages/index.js
import GameHeader from '../components/GameHeader';
import MapView from '../components/MapView';
import Controls from '../components/Controls';
import HeroStats from '../components/HeroStats';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <GameHeader />
      <div className="flex-1 flex">
        <MapView />
        <HeroStats />
      </div>
      <Controls />
    </div>
  );
}
