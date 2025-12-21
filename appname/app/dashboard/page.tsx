"use client";

import { useState } from "react";

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState("Alde Medi");

  const handleDashboardChange = (dashboard: string) => {
    setSelectedDashboard(dashboard);
    setIsDropdownOpen(false);
    
    // Navigate to the other dashboard when Somediza is selected
    if (dashboard === "Somediza") {
      window.location.href = "/somediza-dashboard";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FB]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3B4252] text-white fixed h-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
          <nav className="space-y-1">
            <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#4C566A] rounded-lg hover:bg-[#5E6A7E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-base">Dashboard</span>
            </a>
            <a href="/team-summary" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#434C5E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-base">Team Summary</span>
            </a>
            <a href="/task-overview" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#434C5E] transition-colors text-white">
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
              <img src="/logo.png" alt="App Name Logo" className="h-10" />
              
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
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {selectedDashboard}
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[150px] z-50">
                    <button
                      onClick={() => handleDashboardChange("Alde Medi")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedDashboard === "Alde Medi" ? 'bg-gray-100 font-medium' : ''}`}
                    >
                      Alde Medi
                    </button>
                    <button
                      onClick={() => handleDashboardChange("Somediza")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedDashboard === "Somediza" ? 'bg-gray-100 font-medium' : ''}`}
                    >
                      Somediza
                    </button>
                  </div>
                )}
              </div>
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
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">ByeWind</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Overview Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {/* Total Calls */}
            <div className="bg-[#FFE2E5] rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-700 font-medium">Total Calls</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">7,245</div>
              <div className="text-sm text-gray-700">+11.01%</div>
            </div>

            {/* Total Violations */}
            <div className="bg-[#FFF4DE] rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-700 font-medium">Total Violations</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">2671</div>
              <div className="text-sm text-gray-700">-0.03%</div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#DCFCE7] rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-700 font-medium">Working Hours</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">356</div>
              <div className="text-sm text-gray-700">+15.03%</div>
            </div>

            {/* Status */}
            <div className="bg-[#F3E8FF] rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-700 font-medium">Status</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1318</div>
              <div className="text-sm text-gray-700">+6.08%</div>
            </div>
          </div>

          {/* Violation Trend Chart */}
          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Violation Trend</h2>
                <div className="flex gap-4 text-sm text-gray-500">
                  <button className="hover:text-gray-900">Projects</button>
                  <button className="hover:text-gray-900">Operating Status</button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="h-64 relative px-8">
              <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
                {/* Line path */}
                <path
                  d="M 50 140 L 150 100 L 250 130 L 350 80 L 450 60 L 550 40 L 650 70 L 750 90 L 850 60 L 950 80 L 1050 50 L 1150 45"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points */}
                <circle cx="50" cy="140" r="6" fill="#3B82F6" />
                <circle cx="250" cy="130" r="6" fill="#3B82F6" />
                <circle cx="450" cy="60" r="6" fill="#3B82F6" />
                <circle cx="650" cy="70" r="6" fill="#3B82F6" />
                <circle cx="850" cy="60" r="6" fill="#3B82F6" />
                <circle cx="1050" cy="50" r="6" fill="#3B82F6" />
              </svg>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Calls vs Violations */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Calls vs Violations</h3>
              <div className="h-64 flex items-end justify-around">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <div className="flex gap-1 items-end">
                      <div className="w-4 bg-blue-500 rounded-t" style={{ height: Math.random() * 120 + 40 + 'px' }}></div>
                      <div className="w-4 bg-cyan-400 rounded-t" style={{ height: Math.random() * 100 + 30 + 'px' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">{day.slice(0, 3)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Violations</span>
                </div>
              </div>
            </div>

            {/* Violent Types */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Violent Types</h3>
              <div className="flex items-center justify-between">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#22C55E" strokeWidth="20" strokeDasharray="75.4 251.2" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="69.1 251.2" strokeDashoffset="-75.4" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#6B7280" strokeWidth="20" strokeDasharray="34.6 251.2" strokeDashoffset="-144.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1F2937" strokeWidth="20" strokeDasharray="72.1 251.2" strokeDashoffset="-179.1" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#1F2937] rounded-full"></div>
                      <span className="text-sm text-gray-600">Missed Doctor</span>
                    </div>
                    <span className="text-sm font-medium">32.1%</span>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
                      <span className="text-sm text-gray-600">Late Start</span>
                    </div>
                    <span className="text-sm font-medium">27.8%</span>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#6B7280] rounded-full"></div>
                      <span className="text-sm text-gray-600">Over-Visits</span>
                    </div>
                    <span className="text-sm font-medium">13.5%</span>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
                      <span className="text-sm text-gray-600">Other</span>
                    </div>
                    <span className="text-sm font-medium">11.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Summary Table */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Team Summary Table</h3>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Calls</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Violation</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">ByeWind</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">PSR</td>
                  <td className="py-4 px-4 text-gray-900">30</td>
                  <td className="py-4 px-4 text-gray-900">2</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">In Progress</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Natali Craig</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">ASM</td>
                  <td className="py-4 px-4 text-gray-900">50</td>
                  <td className="py-4 px-4 text-gray-900">5</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Complete</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Drew Cano</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">PSR</td>
                  <td className="py-4 px-4 text-gray-900">49</td>
                  <td className="py-4 px-4 text-gray-900">3</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Orlando Diggs</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">ASM</td>
                  <td className="py-4 px-4 text-gray-900">35</td>
                  <td className="py-4 px-4 text-gray-900">4</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Andi Lane</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">PSR</td>
                  <td className="py-4 px-4 text-gray-900">21</td>
                  <td className="py-4 px-4 text-gray-900">2</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Complete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
