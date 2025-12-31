'use client';

import Link from 'next/link';
import { WireframeLayout } from '@/components/wireframe/WireframeLayout';
import { WireframeButton } from '@/components/wireframe/WireframeButton';
import { WireframeCard } from '@/components/wireframe/WireframeCard';

export default function HomeWireframe() {
  return (
    <WireframeLayout showNav activeTab="today">
      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Greeting */}
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Good morning, Mia</h1>
          <p className="text-sm text-gray-600">72°F Partly cloudy</p>
        </div>

        <div className="border-t border-black"></div>

        {/* Today's Outfit */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wide">TODAY'S OUTFIT</h2>

          <WireframeCard>
            {/* Outfit Items */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center space-y-2">
                <div className="aspect-square border-2 border-black flex items-center justify-center relative">
                  <span className="text-xs">IMG</span>
                  <span className="absolute top-1 right-1">♥</span>
                </div>
                <p className="text-xs font-bold">Top</p>
                <p className="text-xs">Blue linen shirt</p>
              </div>

              <div className="text-center space-y-2">
                <div className="aspect-square border-2 border-black flex items-center justify-center">
                  <span className="text-xs">IMG</span>
                </div>
                <p className="text-xs font-bold">Bottom</p>
                <p className="text-xs">Khaki chinos</p>
              </div>

              <div className="text-center space-y-2">
                <div className="aspect-square border-2 border-black flex items-center justify-center relative">
                  <span className="text-xs">IMG</span>
                  <span className="absolute top-1 right-1">♥</span>
                </div>
                <p className="text-xs font-bold">Shoes</p>
                <p className="text-xs">White snkrs</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              ♥ = Jordan loves this item
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <WireframeButton variant="primary" className="text-xs">
                ✓ Wear It
              </WireframeButton>
              <WireframeButton variant="secondary" className="text-xs">
                Shuffle
              </WireframeButton>
            </div>
          </WireframeCard>

          <p className="text-center text-xs hover:underline cursor-pointer">
            Share this look?
          </p>
        </div>
      </div>
    </WireframeLayout>
  );
}
