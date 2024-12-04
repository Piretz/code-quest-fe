'use client';

import { Trophy, Star, Target, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const achievements = [
  {
    title: 'Fast Learner',
    description: 'Complete 5 lessons in one day',
    progress: 80,
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    title: 'Code Master',
    description: 'Submit 10 perfect solutions',
    progress: 60,
    icon: Star,
    color: 'text-blue-500',
  },
  {
    title: 'Streak Champion',
    description: 'Maintain a 7-day learning streak',
    progress: 100,
    icon: Target,
    color: 'text-green-500',
  },
  {
    title: 'Problem Solver',
    description: 'Complete 20 coding challenges',
    progress: 45,
    icon: Award,
    color: 'text-purple-500',
  },
];

export default function AchievementsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Achievements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-accent ${achievement.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    <div className="space-y-2">
                      <Progress value={achievement.progress} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{achievement.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}