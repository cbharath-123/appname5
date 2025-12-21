"use client";

import { useState } from "react";

export default function CallTargets() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState("Somediza");

  const handleDashboardChange = (dashboard: string) => {
    setSelectedDashboard(dashboard);
    setIsDropdownOpen(false);
    
    if (dashboard === "Somediza") {
      window.location.href = "/somediza-dashboard";
    } else if (dashboard === "Alde Medi") {
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
            <a href="/call-targets" className="flex items-center gap-3 px-4 py-3 bg-[#4C566A] rounded-lg hover:bg-[#5E6A7E] transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-base">Call Targets</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-white rounded-tl-3xl min-h-screen">
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
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
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium">B</div>
              <span className="text-sm font-medium">ByeWind</span>
            </div>
          </div>
        </div>

        {/* Call Targets Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Call Targets</h1>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300">
              <option>This week</option>
              <option>This month</option>
              <option>This year</option>
            </select>
          </div>

          {/* Call Target Cards */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Left Card - Purple Border */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-400">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">Alde Medi</label>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">12</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">Somediza</label>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">8</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2.5 rounded-lg text-sm font-medium shadow-sm">
                  Save
                </button>
              </div>
            </div>

            {/* Right Card - Purple Border */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">Alde Medi</label>
                  <div className="bg-white rounded-lg p-4 h-14 border border-gray-200"></div>
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">Somediza</label>
                  <div className="bg-white rounded-lg p-4 h-14 border border-gray-200"></div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2.5 rounded-lg text-sm font-medium shadow-sm">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Tables Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Message Triggers Table */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-400">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Message Triggers</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500">Role</th>
                    <th className="text-right py-3 px-2 text-xs font-medium text-gray-500">Trigger</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "PCR" },
                    { role: "ASM" },
                    { role: "RSM" },
                    { role: "ZSM" },
                    { role: "ASM" }
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-2 rounded-lg inline-block">{item.role}</span>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Team Hierarchy Table */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Team Hierarchy</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500">Name</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500">Role</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500">Reports To</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "ByeWind", role: "NSM", reportsTo: "Hari" },
                    { name: "Natali Craig", role: "ASM", reportsTo: "Aisha" },
                    { name: "Drew Cano", role: "PSR", reportsTo: "Hari" },
                    { name: "Orlando Diggs", role: "RSM", reportsTo: "Sumit" },
                    { name: "Andi Lane", role: "RSM", reportsTo: "Aisha" }
                  ].map((person, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">{person.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-600">{person.role}</td>
                      <td className="py-4 px-2 text-sm text-gray-600">{person.reportsTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
