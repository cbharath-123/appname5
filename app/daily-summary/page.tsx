"use client";

import Sidebar from "../components/Sidebar";

export default function DailySummary() {
    const stats = [
        { label: "Total Defaulters", value: "9", color: "bg-[#FFE2E6]" },
        { label: "Alde Medi", value: "5", color: "bg-[#FFF4DE]" },
        { label: "Somediza", value: "4", color: "bg-[#DCFCE7]" },
        { label: "Repeated Offenders", value: "3", color: "bg-[#F3E8FF]" },
    ];

    const brokenRules = [
        { rule: "R4", description: "Time Gap < 5 min", calls: 22 },
        { rule: "R3", description: "Missed Doctor", calls: 9 },
        { rule: "R1", description: "Work Duration < 8 hrs", calls: 7 },
        { rule: "R2", description: "Over-Visit Rule", calls: 6 },
        { rule: "R5", description: "Maximum Idle Time > 60 min", calls: 4 },
    ];

    const repeatedOffenders = [
        {
            name: "R4",
            role: "PSR",
            calls: "R3,R4",
            avatar: "/avatars/AvatarByewind.png",
        },
        {
            name: "R5",
            role: "ASM",
            calls: "R2",
            avatar: "/avatars/Frame.png",
        },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 ml-64 bg-white p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Daily Summary</h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            This week
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-2">
                            <img src="/ByeWind.png" alt="ByeWind" className="w-8 h-8 rounded-full" />
                            <span className="text-sm font-medium text-gray-900">ByeWind</span>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`${stat.color} rounded-xl p-6`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm text-gray-700 font-medium">{stat.label}</span>
                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Top Broken Compliance Rules */}
                <div className="bg-white rounded-3xl border border-[#3E4BFF] p-8 mb-8 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Top broken Compliance Rules</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full bg-gray-50">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-xs font-normal text-gray-400">
                                <th className="pb-4 pl-4 font-normal">Rule</th>
                                <th className="pb-4 font-normal">Description</th>
                                <th className="pb-4 font-normal">Calls</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-2">
                            {brokenRules.map((row, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-[#EEF2FF]' : 'bg-white'}`}>
                                    <td className="py-4 pl-4 text-sm font-medium text-gray-900 rounded-l-lg">{row.rule}</td>
                                    <td className="py-4 text-sm text-gray-700">{row.description}</td>
                                    <td className="py-4 text-sm text-gray-700 rounded-r-lg">{row.calls}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Repeated Offenders */}
                <div className="bg-white rounded-3xl border border-[#3E4BFF] p-8 shadow-sm relative">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Repeated Offenders</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full bg-gray-50">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                    <table className="w-full mb-12">
                        <thead>
                            <tr className="text-left text-xs font-normal text-gray-400">
                                <th className="pb-4 pl-4 font-normal">Name</th>
                                <th className="pb-4 font-normal">Role</th>
                                <th className="pb-4 font-normal">Calls</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-2">
                            {repeatedOffenders.map((offender, index) => (
                                <tr key={index} className="bg-[#EEF2FF]">
                                    <td className="py-4 pl-4 rounded-l-lg">
                                        <div className="flex items-center gap-3">
                                            <img src={offender.avatar} alt={offender.name} className="w-8 h-8 rounded-full" />
                                            <span className="text-sm font-medium text-gray-900">{offender.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm text-gray-900">{offender.role}</td>
                                    <td className="py-4 text-sm text-gray-900 rounded-r-lg">{offender.calls}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="absolute bottom-8 right-8">
                        <button className="bg-[#66C66D] hover:bg-[#57ad5d] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors">
                            Send whatsapp
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
