"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500 text-5xl animate-bounce">
          <FaExclamationTriangle />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold bg-[linear-gradient(90deg,#ff6a00,#ee0979)] bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-2">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/">
            <button className="btn btn-primary rounded-xl px-6">
              Go Back Home
            </button>
          </Link>
        </div>

        {/* Extra link */}
        <p className="mt-4 text-sm text-gray-400">
          Or try browsing our products
        </p>
      </div>

    </div>
  );
};

export default NotFound;
