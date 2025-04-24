'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-red-100 text-gray-800 px-4">
      {/* Logo */}
      <Image
        src="/icfp_logo-removebg-preview.png"
        alt="ICFP Logo"
        width={300}
        height={150}
        className="mb-6"
        priority
      />

      {/* Welcome Text */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 text-blue-800">
        Welcome to Institute of Computer and Finance Professional
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow transition">
          Create Account
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition">
          Login
        </button>
      </div>
    </div>
  );
}
