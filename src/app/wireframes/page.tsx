'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';

export default function WelcomeWireframe() {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="mx-auto w-24 h-24 border-2 border-black flex items-center justify-center text-4xl">
          👗
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-bold tracking-tight">
          StyleMatch
        </h1>

        {/* Tagline */}
        <p className="text-lg">
          Style better, together
        </p>

        {/* Value Proposition */}
        <p className="text-sm text-gray-700 leading-relaxed px-4">
          Get daily outfit suggestions from your closet, powered by what your partner loves.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 pt-8">
          <Link href="/wireframes/signup" className="block">
            <WireframeButton variant="primary" className="w-full">
              Get Started
            </WireframeButton>
          </Link>

          <Link href="/wireframes/login" className="block text-sm hover:underline">
            I already have an account
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 pt-8">
          Terms of Service • Privacy
        </p>
      </div>
    </div>
  );
}
