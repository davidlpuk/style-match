'use client';

import Link from 'next/link';
import { WireframeButton } from '@/components/wireframe/WireframeButton';
import { WireframeInput } from '@/components/wireframe/WireframeInput';

export default function LoginWireframe() {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-black">
        <Link href="/wireframes" className="text-sm">← Back</Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-md mx-auto w-full">
        <h1 className="text-2xl font-bold mb-8 text-center">Welcome Back</h1>

        <div className="space-y-6">
          <WireframeInput
            label="Email"
            type="email"
          />

          <WireframeInput
            label="Password"
            type="password"
          />

          <div className="text-right">
            <Link href="#" className="text-xs hover:underline">
              Forgot password?
            </Link>
          </div>

          <div className="pt-4">
            <Link href="/wireframes/home">
              <WireframeButton variant="primary" className="w-full">
                Log In
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
            Don't have an account?{' '}
            <Link href="/wireframes/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
