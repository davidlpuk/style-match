'use client';

import Link from 'next/link';
import { WireframeCard } from '@/components/wireframe/WireframeCard';

export default function WireframeIndex() {
  const screens = [
    { name: 'Welcome', path: '/wireframes', category: 'Auth' },
    { name: 'Sign Up', path: '/wireframes/signup', category: 'Auth' },
    { name: 'Login', path: '/wireframes/login', category: 'Auth' },
    { name: 'Home (Daily Suggestion)', path: '/wireframes/home', category: 'Core' },
    { name: 'Closet Grid', path: '/wireframes/closet', category: 'Core' },
    { name: 'Item Detail', path: '/wireframes/item', category: 'Core' },
    { name: 'Add Item', path: '/wireframes/add-item', category: 'Core' },
    { name: 'Profile', path: '/wireframes/profile', category: 'Core' },
    { name: 'Partner Connection', path: '/wireframes/partner', category: 'Settings' },
  ];

  const groupedScreens = screens.reduce((acc, screen) => {
    if (!acc[screen.category]) {
      acc[screen.category] = [];
    }
    acc[screen.category].push(screen);
    return acc;
  }, {} as Record<string, typeof screens>);

  return (
    <div className="min-h-screen bg-white font-mono p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">StyleMatch Wireframes</h1>
          <p className="text-sm text-gray-600">
            Low-fidelity black and white wireframes - MVP screens
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedScreens).map(([category, categoryScreens]) => (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-black">
                {category} Screens
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryScreens.map((screen) => (
                  <Link key={screen.path} href={screen.path}>
                    <WireframeCard className="hover:bg-gray-100 cursor-pointer h-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono">{screen.name}</span>
                        <span className="text-lg">→</span>
                      </div>
                    </WireframeCard>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-black">
          <h3 className="font-bold mb-4">Screen Inventory</h3>
          <div className="text-xs space-y-1 text-gray-600">
            <p>Total Screens: {screens.length}</p>
            <p>MVP Priority: {screens.length}</p>
            <p>Status: Wireframe Complete</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm hover:underline">
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
