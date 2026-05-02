const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Text */}
      <h2 className="mt-4 text-xl font-semibold animate-pulse">
        Loading your summer vibes...
      </h2>

      {/* Sub text */}
      <p className="text-gray-500 text-sm mt-1">
        Please wait while we fetch the best deals ☀️
      </p>

    </div>
  );
};

export default Loading;
