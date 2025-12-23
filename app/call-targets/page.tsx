"use client";

import Sidebar from "../components/Sidebar";
import Link from "next/link";
import Header from "../components/Header";

export default function CallTargets() {
  const messageTriggers = [
    { role: "PCR", trigger: true },
    { role: "ASM", trigger: true },
    { role: "RSM", trigger: true },
    { role: "ZSM", trigger: true },
    { role: "ASM", trigger: true },
  ];

  const teamHierarchy = [
    {
      name: "ByeWind",
      role: "NSM",
      reportsTo: "Hari",
      avatar: "/ByeWind.png",
    },
    {
      name: "Natali Craig",
      role: "ASM",
      reportsTo: "Aisha",
      avatar: "/avatars/Block (5).png",
    },
    {
      name: "Drew Cano",
      role: "PSR",
      reportsTo: "Hari",
      avatar: "/avatars/AvatarMale01.png",
    },
    {
      name: "Orlando Diggs",
      role: "RSM",
      reportsTo: "Sumit",
      avatar: "/avatars/Block (6).png",
    },
    {
      name: "Andi Lane",
      role: "RSM",
      reportsTo: "Aisha",
      avatar: "/avatars/AvatarFemale06.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar role="admin" />
      <main className="flex-1 ml-64 bg-white min-h-screen flex flex-col">
        <Header user={{ name: "Admin", avatar: "/ByeWind.png" }} />

        <div className="p-8">
          <div className="flex justify-between items-center mb-8 relative">
            <h1 className="text-2xl font-bold text-gray-900">Call Targets</h1>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-900">
              This week
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Targets Row */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Card - View Mode */}
            <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)] relative">
              <div className="flex gap-8 mb-6">
                <div className="flex-1">
                  <label className="block text-lg font-bold text-gray-900 mb-2">Alde Medi</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="12"
                      readOnly
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 font-bold text-gray-900 bg-white"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-lg font-bold text-gray-900 mb-2">Somediza</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="8"
                      readOnly
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 font-bold text-gray-900 bg-white"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#66C66D] text-white px-6 py-1.5 rounded-full text-sm font-medium">
                  Save
                </button>
              </div>
            </div>

            {/* Right Card - Edit Mode */}
            <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)] relative">
              <div className="flex gap-8 mb-6">
                <div className="flex-1">
                  <label className="block text-lg font-bold text-gray-900 mb-2">Alde Medi</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 font-bold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg font-bold text-gray-900 mb-2">Somediza</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 font-bold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#66C66D] text-white px-6 py-1.5 rounded-full text-sm font-medium">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-8">
            {/* Message Triggers */}
            <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)] relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Message Triggers</h2>
                <button className="p-2 hover:bg-gray-200 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-normal text-gray-400">
                    <th className="pb-4 pl-4 font-normal">Role</th>
                    <th className="pb-4 font-normal text-right pr-4">Trigger</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {messageTriggers.map((item, index) => (
                    <tr key={index} className="bg-[#EEF2FF] rounded-lg">
                      <td className="py-4 pl-8 text-sm font-medium text-gray-900 rounded-l-lg">{item.role}</td>
                      <td className="py-4 pr-8 rounded-r-lg text-right">
                        <div className="inline-flex items-center">
                          <div className="relative inline-block w-10 h-6 rounded-full bg-[#66C66D] cursor-pointer">
                            <span className="absolute left-[calc(100%-1.25rem)] top-1 w-4 h-4 bg-white rounded-full"></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Team Hierarchy */}
            <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)] relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Team Hierarchy</h2>
                <Link href="/call-targets/team-summary">
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </Link>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-normal text-gray-400">
                    <th className="pb-4 pl-4 font-normal">Name</th>
                    <th className="pb-4 font-normal">Role</th>
                    <th className="pb-4 font-normal">Reports To</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {teamHierarchy.map((member, index) => (
                    <tr key={index} className="bg-[#EEF2FF] rounded-lg">
                      <td className="py-2 pl-4 rounded-l-lg">
                        <div className="flex items-center gap-3">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32' }}
                          />
                          <span className="text-sm font-medium text-gray-900">{member.name}</span>
                        </div>
                      </td>
                      <td className="py-2 text-sm text-gray-900">{member.role}</td>
                      <td className="py-2 text-sm text-gray-900 rounded-r-lg">{member.reportsTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
