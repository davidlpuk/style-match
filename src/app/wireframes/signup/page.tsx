'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';
import { WireframeInput } from '@/components/wireframe/WireframeInput';

export default function SignUpWireframe() {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-black">
        <Link href="/wireframes" className="text-sm">← Back</Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-md mx-auto w-full">
        <h1 className="text-2xl font-bold mb-8 text-center">Create Account</h1>

        <div className="space-y-6">
          <WireframeInput
            label="Email"
            type="email"
            placeholder="you@email.com"
          />

          <WireframeInput
            label="Password"
            type="password"
            placeholder="••••••••"
            helper="At least 8 characters"
          />

          <WireframeInput
            label="Display Name"
            type="text"
            placeholder="Your name"
          />

          <div className="pt-4">
            <Link href="/wireframes/home">
              <WireframeButton variant="primary" className="w-full">
                Create Account
              </WireframeButton>
            </Link>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2">or</span>
            </div>
          </div>

          <WireframeButton variant="secondary" className="w-full">
            <span className="mr-2">G</span> Continue with Google
          </WireframeButton>

          <p className="text-center text-sm pt-4">
            Already have an account?{' '}
            <Link href="/wireframes/login" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
