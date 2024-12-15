'use client';

import { Book, Clock, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const courses = [
  {
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into closures, prototypes, and async programming',
    duration: '4h 30m',
    progress: 65,
    completed: false,
  },
  {
    title: 'Responsive Web Design',
    description: 'Master CSS Grid, Flexbox, and Media Queries',
    duration: '3h 45m',
    progress: 100,
    completed: true,
  },
  {
    title: 'React Fundamentals',
    description: 'Learn hooks, context, and component patterns',
    duration: '5h 15m',
    progress: 30,
    completed: false,
  },
  {
    title: 'TypeScript Essentials',
    description: 'Types, interfaces, and advanced features',
    duration: '4h 00m',
    progress: 0,
    completed: false,
  },
];

export default function LibraryPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Course Library</h1>
        
        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold">{course.title}</h3>
                    {course.completed && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-1" />
                      {course.completed ? 'Completed' : 'In Progress'}
                    </div>
                  </div>
                </div>
              </div>
              {!course.completed && (
                <div className="mt-4 space-y-2">
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}