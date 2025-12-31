'use client';

import Link from 'next/link';
import { WireframeLayout } from '@/components/wireframe/WireframeLayout';
import { WireframeCard } from '@/components/wireframe/WireframeCard';

export default function ProfileWireframe() {
  return (
    <WireframeLayout showNav activeTab="profile">
      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Avatar & Name */}
        <div className="text-center space-y-4 pt-8">
          <div className="w-20 h-20 mx-auto border-2 border-black rounded-full flex items-center justify-center text-2xl">
            ○
          </div>
          <h1 className="text-xl font-bold">Mia</h1>
          <p className="text-sm text-gray-600">Connected with Jordan</p>
        </div>

        <div className="border-t border-black"></div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <WireframeCard className="text-center">
            <div className="text-2xl font-bold mb-1">23</div>
            <div className="text-xs">Items</div>
          </WireframeCard>
          <WireframeCard className="text-center">
            <div className="text-2xl font-bold mb-1">12</div>
            <div className="text-xs">Partner Faves</div>
          </WireframeCard>
          <WireframeCard className="text-center">
            <div className="text-2xl font-bold mb-1">14</div>
            <div className="text-xs">Days Streak</div>
          </WireframeCard>
        </div>

        <div className="border-t border-black"></div>

        {/* Menu Items */}
        <div className="space-y-0 border-2 border-black">
          <Link
            href="/wireframes/partner"
            className="flex items-center justify-between p-4 border-b border-black hover:bg-gray-100"
          >
            <span className="text-sm">Partner Connection</span>
            <span>&gt;</span>
          </Link>

          <Link
            href="/wireframes/notifications"
            className="flex items-center justify-between p-4 border-b border-black hover:bg-gray-100"
          >
            <span className="text-sm">Notifications</span>
            <span>&gt;</span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between p-4 hover:bg-gray-100"
          >
            <span className="text-sm">Help & Support</span>
            <span>&gt;</span>
          </Link>
        </div>

        <div className="border-t border-black"></div>

        <button className="w-full text-center py-3 text-sm hover:underline">
          Log Out
        </button>
      </div>
    </WireframeLayout>
  );
}
