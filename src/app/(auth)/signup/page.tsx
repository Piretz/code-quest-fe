import { CourseCarousel } from '@/components/ui/coursecarousel';
import { Statistics } from '@/components/ui/statistics';
import { Leaderboard } from '@/components/ui/leaderboard';

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome back, John! 👋</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8 flex justify-center">
              <CourseCarousel />
            </div>
            <div>
              <Leaderboard />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}