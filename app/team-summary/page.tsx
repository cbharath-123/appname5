"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function TeamSummary() {
  const [activeTab, setActiveTab] = useState("ASM");

  return (
    <div className="flex min-h-screen bg-[#F7F9FB]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-white rounded-tl-3xl min-h-screen">
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <nav className="flex gap-6">
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="/call-targets" className="text-gray-600 hover:text-gray-900">Call Targets</a>
              <a href="/team-summary" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1">Team Summary</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 rounded-lg">
              <span>Alde Medi</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <img src="/ByeWind.png" alt="ByeWind" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium text-gray-900">ByeWind</span>
            </div>
          </div>
        </div>

        {/* Team Summary Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Call Targets</h1>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>This week</option>
              <option>This month</option>
              <option>This year</option>
            </select>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("Home")}
              className={`pb-3 text-sm font-medium ${activeTab === "Home" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("RSM")}
              className={`pb-3 text-sm font-medium ${activeTab === "RSM" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              RSM
            </button>
            <button
              onClick={() => setActiveTab("ASM")}
              className={`pb-3 text-sm font-medium ${activeTab === "ASM" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              ASM
            </button>
            <button
              onClick={() => setActiveTab("PSM")}
              className={`pb-3 text-sm font-medium ${activeTab === "PSM" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              PSM
            </button>
          </div>

          {/* Team Summary Table - First */}
          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-blue-400">
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Calls</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Violation</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src="/ByeWind.png" alt="ByeWind" className="w-10 h-10 rounded-full" />
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

          {/* Team Summary Table - Second */}
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Calls</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Violation</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src="/ByeWind.png" alt="ByeWind" className="w-10 h-10 rounded-full" />
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
      </div>
    </div>
  );
}
