'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';

export default function AddItemWireframe() {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Header */}
      <div className="border-b border-black px-4 py-2 text-xs">
        9:41
      </div>
      <div className="border-b border-black p-4 flex items-center justify-between">
        <Link href="/wireframes/closet" className="text-sm">← Cancel</Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-md mx-auto w-full flex flex-col">
        <h1 className="text-xl font-bold mb-8 text-center">Add an Item</h1>

        {/* Camera Preview */}
        <div className="flex-1 border-2 border-black flex items-center justify-center bg-gray-50 mb-6">
          <div className="text-center space-y-4">
            <div className="text-6xl">📷</div>
            <p className="text-sm px-8">Camera Preview</p>
          </div>
        </div>

        <p className="text-xs text-center text-gray-600 mb-6">
          Lay item flat or hang it for best results
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <WireframeButton variant="secondary" className="text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">🖼</div>
              <div>Gallery</div>
            </div>
          </WireframeButton>

          <WireframeButton variant="primary" className="text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">○</div>
              <div>Capture</div>
            </div>
          </WireframeButton>
        </div>
      </div>
    </div>
  );
}
