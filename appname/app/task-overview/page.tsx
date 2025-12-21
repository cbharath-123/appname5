"use client";

export default function TaskOverview() {
  return (
    <div className="flex min-h-screen bg-[#F7F9FB]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3B4252] text-white fixed h-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
          <nav className="space-y-1">
            <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#434C5E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-base">Dashboard</span>
            </a>
            <a href="/call-targets" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#434C5E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-base">Call Targets</span>
            </a>
            <a href="/team-summary" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#434C5E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-base">Team Summary</span>
            </a>
            <a href="/task-overview" className="flex items-center gap-3 px-4 py-3 bg-[#4C566A] rounded-lg hover:bg-[#5E6A7E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="text-base">Task Overview</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo and Search */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <span className="text-lg font-semibold text-gray-800">App Name</span>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <span className="text-sm font-medium">ByeWind</span>
              </div>
            </div>
          </div>
        </header>

        {/* Task Overview Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Task Overview</h1>

          <div className="grid grid-cols-3 gap-6">
            {/* To do Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">To do</h2>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Task Card */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-pink-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    DEVELOPMENT
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Typography change</h3>
                <p className="text-sm text-gray-600 mb-4">Modify typography and styling of text placed on 4 screens of the website design.</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 bg-pink-400 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-blue-400 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-xl p-5 shadow-sm border-2 border-blue-300">
                <h3 className="font-semibold text-gray-900 mb-4">November 2022</h3>
                <div className="grid grid-cols-7 gap-2 text-center text-xs">
                  <div className="text-gray-500 font-medium">Mon</div>
                  <div className="text-gray-500 font-medium">Tue</div>
                  <div className="text-gray-500 font-medium">Wed</div>
                  <div className="text-gray-500 font-medium">Thu</div>
                  <div className="text-gray-500 font-medium">Fri</div>
                  <div className="text-gray-500 font-medium">Sat</div>
                  <div className="text-gray-500 font-medium">Sun</div>
                  
                  <div className="text-gray-400">29</div>
                  <div className="text-gray-400">30</div>
                  <div className="text-gray-400">31</div>
                  <div className="text-gray-900">01</div>
                  <div className="text-gray-900">02</div>
                  <div className="text-gray-900">03</div>
                  <div className="text-gray-900">04</div>
                  
                  <div className="text-gray-900">05</div>
                  <div className="text-gray-900">06</div>
                  <div className="text-gray-900">07</div>
                  <div className="text-gray-900">08</div>
                  <div className="text-gray-900">09</div>
                  <div className="text-gray-900">10</div>
                  <div className="text-gray-900">11</div>
                  
                  <div className="text-gray-900">12</div>
                  <div className="text-gray-900">13</div>
                  <div className="text-gray-900">14</div>
                  <div className="text-gray-900">15</div>
                  <div className="text-gray-900">16</div>
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">17</div>
                  <div className="text-gray-900">18</div>
                  
                  <div className="text-gray-900">19</div>
                  <div className="text-gray-900">20</div>
                  <div className="text-gray-900">21</div>
                  <div className="text-gray-900">22</div>
                  <div className="text-gray-900">23</div>
                  <div className="text-gray-900">24</div>
                  <div className="text-gray-900">25</div>
                  
                  <div className="text-gray-900">26</div>
                  <div className="text-gray-900">27</div>
                  <div className="text-gray-900">28</div>
                  <div className="text-gray-900">29</div>
                  <div className="text-gray-900">30</div>
                  <div className="text-gray-400">01</div>
                  <div className="text-gray-400">02</div>
                </div>
              </div>
            </div>

            {/* In progress Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">In progress</h2>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Task Cards */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-purple-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    DESIGNING
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Animate Illustration</h3>
                <p className="text-sm text-gray-600 mb-3">Designing</p>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-orange-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">2 days left</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-purple-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    CONSULTATION
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Web Dashboard</h3>
                <p className="text-sm text-gray-600 mb-3">Designing</p>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 bg-green-400 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">3 days left</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    DESIGN SYSTEM
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                <p className="text-sm text-gray-600 mb-3">Shopping</p>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 bg-pink-400 rounded-full border-2 border-white"></div>
                    <div className="w-7 h-7 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">25 days left</span>
                </div>
              </div>
            </div>

            {/* Done Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Done</h2>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Task Cards */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-pink-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    DEVELOPMENT
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fix bugs in the CSS code</h3>
                <p className="text-sm text-gray-600 mb-4">Fix small bugs that are essential to prepare for the next release that will happen this quarter.</p>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-7 h-7 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-purple-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    CONSULTATION
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proofread final text</h3>
                <p className="text-sm text-gray-600 mb-4">The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.</p>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 bg-orange-400 rounded-full border-2 border-white"></div>
                  <div className="w-7 h-7 bg-blue-400 rounded-full border-2 border-white"></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-pink-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    DEVELOPMENT
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-sm text-gray-600 mb-4">All designs need to be responsive. The requirement is that it fits all web and mobile screens.</p>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 bg-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-7 h-7 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
