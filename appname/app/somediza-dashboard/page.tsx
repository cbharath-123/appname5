"use client";

import { useState } from "react";

export default function SomedizaDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState("Somediza");

  const handleDashboardChange = (dashboard: string) => {
    setSelectedDashboard(dashboard);
    setIsDropdownOpen(false);
    
    if (dashboard === "Alde Medi") {
      window.location.href = "/dashboard";
    }
  };

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
      <main className="flex-1 ml-64 min-h-screen bg-white rounded-tl-3xl">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <span className="text-lg font-semibold text-gray-800">App Name</span>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 text-sm"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <button className="p-2 hover:bg-gray-50 rounded-lg relative">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="flex items-center gap-2 ml-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">ByeWind</span>
              </div>
            </div>
          </div>
        </header>

        {/* Overview Content */}
        <div className="p-8 bg-white">
          {/* Overview Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-5 mb-6">
            {/* Total Calls */}
            <div className="bg-[#FFE2E5] rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-700 font-medium">Total Calls</span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">7,245</div>
              <div className="text-sm text-green-600 font-medium">+11.01%</div>
            </div>

            {/* Total Violations */}
            <div className="bg-[#FFF4DE] rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-700 font-medium">Total Violations</span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2671</div>
              <div className="text-sm text-red-600 font-medium">-0.03%</div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#DCFCE7] rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-700 font-medium">Working Hours</span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">356</div>
              <div className="text-sm text-green-600 font-medium">+15.03%</div>
            </div>

            {/* Status */}
            <div className="bg-[#F3E8FF] rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-700 font-medium">Status</span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1318</div>
              <div className="text-sm text-green-600 font-medium">+6.08%</div>
            </div>
          </div>

          {/* Violation Trend Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <h2 className="text-lg font-bold text-gray-900">Violation Trend</h2>
                <div className="flex gap-4 text-sm">
                  <button className="text-gray-500 hover:text-gray-900">Projects</button>
                  <button className="text-gray-500 hover:text-gray-900">Operating Status</button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm">
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
                <button className="p-2 hover:bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Chart SVG/Canvas area - simplified representation */}
            <div className="h-64 flex items-end justify-between gap-2 border-b border-l border-gray-200 pb-4 pl-4">
              <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="3"
                  points="0,150 100,120 200,170 300,140 400,90 500,70 600,120 700,80"
                />
                <circle cx="100" cy="120" r="5" fill="#E91E63" />
                <circle cx="300" cy="140" r="5" fill="#E91E63" />
                <circle cx="400" cy="90" r="5" fill="#E91E63" />
                <circle cx="500" cy="70" r="5" fill="#E91E63" />
                <circle cx="600" cy="120" r="5" fill="#E91E63" />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-4">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Bottom Section - Charts */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Calls vs Violations Chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Calls vs Violations</h3>
              <div className="flex items-end justify-between h-48 gap-3 px-2">
                {[
                  { day: "Monday", calls: 80, violations: 100 },
                  { day: "Tuesday", calls: 120, violations: 160 },
                  { day: "Wednesday", calls: 70, violations: 200 },
                  { day: "Thursday", calls: 180, violations: 120 },
                  { day: "Friday", calls: 90, violations: 140 },
                  { day: "Saturday", calls: 140, violations: 160 },
                  { day: "Sunday", calls: 110, violations: 180 }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full flex gap-1 items-end justify-center" style={{ height: '180px' }}>
                      <div 
                        className="bg-[#4FC3F7] rounded-t w-2.5"
                        style={{ height: `${item.calls / 2}%` }}
                      ></div>
                      <div 
                        className="bg-[#4CAF50] rounded-t w-2.5"
                        style={{ height: `${item.violations / 2}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-3 px-2">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#4FC3F7] rounded-full"></div>
                  <span className="text-gray-600">Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-gray-600">Violations</span>
                </div>
              </div>
            </div>

            {/* Violent Types Pie Chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Violent Types</h3>
              <div className="flex items-center justify-center mb-6">
                <svg width="200" height="200" viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r="70" fill="none" stroke="#2C3E50" strokeWidth="35" strokeDasharray="440 440" />
                  <circle cx="90" cy="90" r="70" fill="none" stroke="#7CB342" strokeWidth="35" strokeDasharray="100 440" strokeDashoffset="0" />
                  <circle cx="90" cy="90" r="70" fill="none" stroke="#29B6F6" strokeWidth="35" strokeDasharray="110 440" strokeDashoffset="-100" />
                  <circle cx="90" cy="90" r="70" fill="none" stroke="#66BB6A" strokeWidth="35" strokeDasharray="90 440" strokeDashoffset="-210" />
                  <circle cx="90" cy="90" r="35" fill="white" />
                </svg>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#2C3E50] rounded-full"></div>
                    <span className="text-gray-700">Missed Doctor</span>
                  </div>
                  <span className="font-medium">92.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#29B6F6] rounded-full"></div>
                    <span className="text-gray-700">Late Start</span>
                  </div>
                  <span className="font-medium">22.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#66BB6A] rounded-full"></div>
                    <span className="text-gray-700">Over-Visits</span>
                  </div>
                  <span className="font-medium">13.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#7CB342] rounded-full"></div>
                    <span className="text-gray-700">Other</span>
                  </div>
                  <span className="font-medium">11.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Summary Table - Full Width */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Team Summary Table</h3>
              <button className="p-1 hover:bg-gray-50 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3 pl-4">Name</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Role</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Calls</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Violation</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">ByeWind</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">PSR</td>
                    <td className="py-4 text-sm font-medium text-gray-900">30</td>
                    <td className="py-4 text-sm font-medium text-gray-900">2</td>
                    <td className="py-4 pr-4">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">In Progress</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Natali Craig</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">ASM</td>
                    <td className="py-4 text-sm font-medium text-gray-900">50</td>
                    <td className="py-4 text-sm font-medium text-gray-900">5</td>
                    <td className="py-4 pr-4">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Complete</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Drew Cano</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">PSR</td>
                    <td className="py-4 text-sm font-medium text-gray-900">69</td>
                    <td className="py-4 text-sm font-medium text-gray-900">3</td>
                    <td className="py-4 pr-4">
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full font-medium">Pending</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Orlando Diggs</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">ASM</td>
                    <td className="py-4 text-sm font-medium text-gray-900">36</td>
                    <td className="py-4 text-sm font-medium text-gray-900">4</td>
                    <td className="py-4 pr-4">
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full font-medium">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Andi Lane</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">PSR</td>
                    <td className="py-4 text-sm font-medium text-gray-900">21</td>
                    <td className="py-4 text-sm font-medium text-gray-900">2</td>
                    <td className="py-4 pr-4">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Complete</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
