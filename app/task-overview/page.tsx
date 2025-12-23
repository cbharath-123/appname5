"use client";

import Sidebar from "../components/Sidebar";

export default function TaskOverview() {
  const stats = [
    { label: "Tasks due today", value: "9", color: "bg-[#FFE2E6]", icon: "arrow-up-right" },
    { label: "Tasks Completed", value: "5", color: "bg-[#FFF4DE]", icon: "arrow-trend-up" }, // Yellowish
    { label: "Tasks Missed", value: "4", color: "bg-[#DCFCE7]", icon: "arrow-up-right" }, // Greenish in screenshot
  ];

  const tasks = [
    {
      name: "ByeWind",
      role: "PSR",
      task: "Review PSR tour plan",
      dueDate: "12 Jun 2025",
      completed: true,
      avatar: "/ByeWind.png",
    },
    {
      name: "Natali Craig",
      role: "ASM",
      task: "Territory audit",
      dueDate: "12 Apr 2025",
      completed: true,
      avatar: "/avatars/AvatarMale01.png",
    },
    {
      name: "Drew Cano",
      role: "PSR",
      task: "Weekly review meeting",
      dueDate: "1 May 2025",
      completed: true,
      avatar: "/avatars/AvatarMale01.png",
    },
    {
      name: "Orlando Diggs",
      role: "ASM",
      task: "Approve daily summary",
      dueDate: "12 Jun 2025",
      completed: true,
      avatar: "/avatars/Block (4).png", // Using the new Block image here
    },
    {
      name: "Andi Lane",
      role: "PSR",
      task: "Approve Daily Summary",
      dueDate: "12 Jun 2025",
      completed: true,
      avatar: "/avatars/AvatarFemale06.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 ml-64 bg-white p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Task Overview</h1>
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <img src="/ByeWind.png" alt="ByeWind" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium text-gray-900">ByeWind</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-2xl p-6 w-64 flex flex-col justify-between h-32`}>
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-800 font-medium">{stat.label}</span>
                <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Simplified arrow logic */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Task Overview Table */}
        <div className="bg-white rounded-[24px] border border-[#3E4BFF] p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Task Overview</h2>
            <button className="p-2 hover:bg-gray-100 rounded-full bg-gray-50">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-normal text-gray-400">
                <th className="pb-4 pl-4 font-normal">Name</th>
                <th className="pb-4 font-normal">Role</th>
                <th className="pb-4 font-normal">Task</th>
                <th className="pb-4 font-normal">Due Date</th>
                <th className="pb-4 font-normal text-right pr-6">Completed</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {tasks.map((task, index) => (
                <tr key={index} className="bg-[#EEF2FF] rounded-lg">
                  <td className="py-4 pl-4 rounded-l-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={task.avatar}
                        alt={task.name}
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32' }}
                      />
                      <span className="text-sm font-medium text-gray-900">{task.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-900">{task.role}</td>
                  <td className="py-4 text-sm text-gray-900">{task.task}</td>
                  <td className="py-4 text-sm text-gray-900">{task.dueDate}</td>
                  <td className="py-4 pr-6 rounded-r-lg text-right">
                    {/* Toggle Switch */}
                    <div className="inline-flex items-center">
                      <div className="relative inline-block w-10 h-6 rounded-full bg-[#66C66D] transition-colors duration-200 ease-in-out cursor-pointer">
                        <span className="absolute left-[calc(100%-1.25rem)] top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out transform"></span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
