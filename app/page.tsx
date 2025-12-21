"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8EEF3] flex flex-col">
      {/* Logo Header */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="text-lg font-semibold text-gray-800">App Name</span>
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Log In to your account
            </h1>
            <p className="text-gray-500 text-sm">
              Enter details to login
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {/* Admin Login Link */}
            <div className="text-center text-sm text-gray-600">
              Or login as{' '}
              <a 
                href="/admin-login" 
                className="text-gray-800 underline hover:text-gray-950 font-medium"
              >
                Admin
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 mt-6"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
