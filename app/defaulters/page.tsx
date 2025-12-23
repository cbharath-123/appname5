"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Defaulters() {
    const defaultersData = [
        {
            name: "ByeWind",
            role: "PSR",
            brokenRules: "R3, R4",
            violationCount: 2,
            repeat: "Yes",
            repeatColor: "blue",
            avatar: "/ByeWind.png",
        },
        {
            name: "Natali Craig",
            role: "ASM",
            brokenRules: "R1",
            violationCount: 5,
            repeat: "No",
            repeatColor: "green",
            avatar: "/avatars/AvatarMale01.png",
        },
        {
            name: "Drew Cano",
            role: "PSR",
            brokenRules: "R2",
            violationCount: 3,
            repeat: "Yes",
            repeatColor: "yellow",
            avatar: "/avatars/AvatarMale01.png",
        },
        {
            name: "Orlando Diggs",
            role: "ASM",
            brokenRules: "R4, R5",
            violationCount: 4,
            repeat: "Yes",
            repeatColor: "yellow",
            avatar: "/avatars/Block (1).png",
        },
        {
            name: "Andi Lane",
            role: "PSR",
            brokenRules: "R6",
            violationCount: 2,
            repeat: "No",
            repeatColor: "green",
            avatar: "/avatars/AvatarFemale06.png",
        },
    ];

    const getRepeatStyles = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-100 text-blue-600";
            case "green":
                return "bg-green-100 text-green-600";
            case "yellow":
                return "bg-[#FFF8DD] text-[#B98900]"; // Custom yellow to match screenshot better
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 ml-64 bg-white min-h-screen flex flex-col">
                <Header />

                <div className="p-8">
                    <div className="mb-6 relative">
                        <h1
                            className="text-gray-900"
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '29px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}
                        >
                            Defaulters
                        </h1>
                    </div>

                    {/* Team Summary Table */}
                    <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-6 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-[18px] font-semibold text-[#000000]">Team Summary Table</h2>
                            <button className="p-2 hover:bg-gray-200 rounded-full">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        <th className="px-6 py-3 font-normal">Name</th>
                                        <th className="px-6 py-3 font-normal">Role</th>
                                        <th className="px-6 py-3 font-normal">Broken Rules</th>
                                        <th className="px-6 py-3 font-normal">Violation Count</th>
                                        <th className="px-6 py-3 font-normal text-center">Repeat</th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-2">
                                    {defaultersData.map((row, index) => (
                                        <tr key={index} className={`rounded-lg ${index % 2 === 0 ? 'bg-[#EEF2FF]' : 'bg-transparent'}`}>
                                            <td className="px-6 py-4 rounded-l-lg">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={row.avatar}
                                                        alt={row.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40' }}
                                                    />
                                                    <span className="text-sm font-medium text-gray-900">{row.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{row.role}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{row.brokenRules}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{row.violationCount}</td>
                                            <td className="px-6 py-4 rounded-r-lg text-center">
                                                <span className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-medium ${getRepeatStyles(row.repeatColor)}`}>
                                                    {row.repeat}
                                                </span>
                                            </td>
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
