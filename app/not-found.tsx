'use client'
export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-6 py-16 max-w-lg">
          <div className="mb-8">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">404</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <div className="inline-block">
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Home
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            This site is still under construction.
          </p>
        </div>
      </main>
    </div>
  );
}
