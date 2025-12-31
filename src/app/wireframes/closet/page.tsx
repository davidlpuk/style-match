'use client';

import Link from 'next/link';
import { WireframeLayout } from '@/components/wireframe/WireframeLayout';

export default function ClosetWireframe() {
  const items = Array(9).fill(null);
  const favorites = [0, 2, 4, 7];

  return (
    <WireframeLayout showNav activeTab="closet">
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">My Closet</h1>
          <Link href="/wireframes/add-item" className="text-2xl border border-black w-8 h-8 flex items-center justify-center">
            +
          </Link>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search items..."
          className="w-full border-2 border-black px-4 py-2 text-sm"
        />

        {/* Filters */}
        <div className="flex gap-2 flex-wrap text-xs">
          <button className="px-3 py-1 border-2 border-black bg-black text-white">All</button>
          <button className="px-3 py-1 border border-black">Tops</button>
          <button className="px-3 py-1 border border-black">Bottoms</button>
          <button className="px-3 py-1 border border-black">Shoes</button>
          <button className="px-3 py-1 border border-black">Outerwear</button>
          <button className="px-3 py-1 border border-black">♥ Favorites</button>
        </div>

        <div className="border-t border-black"></div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4">
          {items.map((_, index) => (
            <Link
              key={index}
              href="/wireframes/item"
              className="aspect-square border-2 border-black flex items-center justify-center relative hover:bg-gray-100"
            >
              <span className="text-xs">IMG</span>
              {favorites.includes(index) && (
                <span className="absolute top-2 right-2">♥</span>
              )}
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 pt-4">
          23 items
        </p>
      </div>
    </WireframeLayout>
  );
}
