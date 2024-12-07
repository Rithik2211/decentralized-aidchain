'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const handleSignInWithEmail = () => {
    // Implement email sign in logic
    console.log('Sign in with email:', email);
  };
  const router = useRouter();

  const HandleNavigate = (route : string) => {
    router.push(route)
  }


  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-6">
      <h1 className="text-4xl font-bold mb-4">Create an account</h1>
      <p className="mb-6 text-gray-600">Enter your email below to create your account</p>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>  setEmail(e.target.value)}
        className="w-full max-w-sm mb-3 px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Email Login Button */}
      <button
        onClick={handleSignInWithEmail}
        className="my-3 font-semibold px-4 py-2 max-w-sm w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
      >
        {/*  */}
        Login with Email
      </button>
      {/* Divider */}
      <div className="flex items-center mb-3 w-full max-w-sm">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Wallet Button Placeholder */}
      <button 
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md"
        onClick={() => HandleNavigate('/screens/homepage')}
        >
         Connect with Metamask
      </button>

      {/* Terms Checkbox */}
      <div className="flex items-center space-x-2 mt-3">
        <input
          type="checkbox"
          id="terms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="terms" className="text-sm">
          Accept terms and conditions
        </label>
      </div>

      {/* Terms Text */}
      <div className="text-gray-500 mt-2 text-sm text-center">
        By clicking, you agree to our{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default LoginPage;