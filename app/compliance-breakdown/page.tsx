"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function ComplianceBreakdown() {
    const teamSummaryData = [
        { code: "R1", name: "Work Duration < 8 hrs", violations: 30 },
        { code: "R2", name: "Over-Visit Rule", violations: 50 },
        { code: "R3", name: "Missed Doctor", violations: 49 },
        { code: "R4", name: "Time Gap < 5 min", violations: 35 },
        { code: "R5", name: "Maximum Idle Time > 60 min", violations: 21 },
        { code: "R6", name: "Lunch Break Restriction", violations: 12 },
        { code: "R7", name: "Weekly Holiday (Sunday)", violations: 6 },
        { code: "R8", name: "Fixed Holiday Violation", violations: 9 },
        { code: "R9", name: "First Call Mismatch", violations: 22 },
    ];

    const staffData = [
        { name: "Drew Cano", date: "12 Jun", outlet: "City Hospital", avatar: "/avatars/AvatarMale01.png" },
        { name: "Andi Lane", date: "12 Jun", outlet: "Apollo Clinic", avatar: "/avatars/AvatarFemale06.png" },
        { name: "Natali Craig", date: "12 Jun", outlet: "Apollo Clinic", avatar: "/avatars/AvatarMale01.png" },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 ml-64 bg-white min-h-screen flex flex-col">
                <Header />

                <div className="p-8">
                    <div className="flex justify-between items-center mb-8 relative">
                        <h1 className="text-[29px] font-medium text-[#000000] font-['Poppins']">Compliance Breakdown</h1>
                        <button className="flex items-center gap-2 text-[16px] font-normal text-black bg-white">
                            <span>This week</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Team Summary Table Block */}
                    <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-6 mb-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-[18px] font-semibold text-[#000000]">Team Summary Table</h2>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        <th className="px-4 py-3 font-normal">Rule Code</th>
                                        <th className="px-4 py-3 font-normal">Rule Name</th>
                                        <th className="px-4 py-3 font-normal">Violations</th>
                                        <th className="px-4 py-3 font-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-2">
                                    {teamSummaryData.map((row, index) => (
                                        <tr key={row.code} className={`rounded-lg ${index % 2 === 0 ? 'bg-[#EEF2FF]' : 'bg-transparent'}`}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-900 rounded-l-lg">{row.code}</td>
                                            <td className="px-4 py-4 text-sm text-gray-900">{row.name}</td>
                                            <td className="px-4 py-4 text-sm text-gray-900">{row.violations}</td>
                                            <td className="px-4 py-4 rounded-r-lg">
                                                <button className="px-4 py-1.5 text-xs font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Staff List Block */}
                    <div className="mt-8">
                        <div className="w-full">
                            <div className="grid grid-cols-3 mb-4 px-6 text-xs font-medium text-gray-400">
                                <div>Rule Code</div>
                                <div>Date</div>
                                <div>Outlet</div>
                            </div>
                            <div className="space-y-2">
                                {staffData.map((staff, index) => (
                                    <div key={index} className="grid grid-cols-3 items-center bg-[#EEF2FF] rounded-[24px] px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                                <img src={staff.avatar} alt={staff.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32' }} />
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">{staff.name}</span>
                                        </div>
                                        <div className="text-sm text-gray-900">{staff.date}</div>
                                        <div className="text-sm text-gray-900">{staff.outlet}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
