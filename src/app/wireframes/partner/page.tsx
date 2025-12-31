'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';
import { WireframeCard } from '@/components/wireframe/WireframeCard';

export default function PartnerConnectionWireframe() {
  const isConnected = true;

  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Header */}
      <div className="border-b border-black px-4 py-2 text-xs">
        9:41
      </div>
      <div className="border-b border-black p-4">
        <Link href="/wireframes/profile" className="text-sm">← Back</Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-md mx-auto w-full space-y-6">
        <h1 className="text-xl font-bold text-center">Partner Connection</h1>

        <div className="border-t border-black"></div>

        {isConnected ? (
          <>
            <p className="text-sm font-bold">Connected with</p>

            <WireframeCard>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                  ○
                </div>
                <div>
                  <p className="font-bold">Jordan</p>
                  <p className="text-xs text-gray-600">Connected 47d</p>
                </div>
              </div>
            </WireframeCard>

            <div className="border-t border-black"></div>

            <div className="space-y-3">
              <p className="text-sm font-bold">Partner Stats</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Items they hearted</span>
                <span className="font-mono">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last active</span>
                <span className="font-mono">2h ago</span>
              </div>
            </div>

            <div className="border-t border-black"></div>

            <div className="space-y-3">
              <WireframeButton variant="secondary" className="w-full text-xs">
                Ask to refresh favorites
              </WireframeButton>
              <p className="text-xs text-gray-600 text-center">
                Send Jordan a nudge to update their favorites if you added new items.
              </p>
            </div>

            <div className="border-t border-black"></div>

            <button className="w-full text-center text-sm text-red-600 hover:underline">
              Disconnect Partner
            </button>
          </>
        ) : (
          <>
            <div className="text-center space-y-4 py-8">
              <div className="w-24 h-24 mx-auto border-2 border-black flex items-center justify-center text-3xl">
                ♥ ?
              </div>
              <p className="font-bold">No partner connected</p>
              <p className="text-sm text-gray-600 px-4">
                Invite your partner to pick their favorites. Your daily outfits will feature items they love.
              </p>
            </div>

            <div className="border-t border-black"></div>

            <div className="space-y-4">
              <p className="text-sm font-bold">Your invite code</p>
              <WireframeCard className="text-center">
                <p className="text-2xl font-mono tracking-wider">ABC123</p>
              </WireframeCard>
              <div className="grid grid-cols-2 gap-3">
                <WireframeButton variant="secondary" className="text-xs">
                  Copy
                </WireframeButton>
                <WireframeButton variant="secondary" className="text-xs">
                  Share
                </WireframeButton>
              </div>
            </div>

            <div className="border-t border-black"></div>

            <WireframeButton variant="primary" className="w-full">
              Enter Partner Code
            </WireframeButton>
          </>
        )}
      </div>
    </div>
  );
}
