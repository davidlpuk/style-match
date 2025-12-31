'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';

export default function ItemDetailWireframe() {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Header */}
      <div className="border-b border-black px-4 py-2 text-xs">
        9:41
      </div>
      <div className="border-b border-black p-4 flex items-center justify-between">
        <Link href="/wireframes/closet" className="text-sm">← Back</Link>
        <Link href="#" className="text-sm">Edit</Link>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-md mx-auto">
          {/* Item Photo */}
          <div className="aspect-square border-b-2 border-black flex items-center justify-center bg-gray-50">
            <span className="text-6xl">[ITEM PHOTO]</span>
          </div>

          {/* Details */}
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-xl font-bold mb-2">Blue Linen Shirt</h1>
              <p className="text-sm text-gray-600">♥ Jordan loves this</p>
            </div>

            <div className="border-t border-black"></div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Category</span>
                <span className="font-mono">Tops - Shirt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color</span>
                <span className="font-mono">Blue</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Brand</span>
                <span className="font-mono">Uniqlo</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 mb-2">Tags</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 border border-black text-xs">casual</span>
                <span className="px-3 py-1 border border-black text-xs">summer</span>
                <span className="px-3 py-1 border border-black text-xs">work</span>
              </div>
            </div>

            <div className="border-t border-black"></div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Added</span>
                <span className="font-mono">Dec 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Times worn</span>
                <span className="font-mono">8 times</span>
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full text-center text-sm text-red-600 hover:underline">
                Delete this item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
