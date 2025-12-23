"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function TeamSummary() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const teamData = [
        {
            name: "ByeWind",
            role: "PSR",
            reportsTo: "30",
            division: "2",
            callTarget: "",
            avatar: "/ByeWind.png",
        },
        {
            name: "Natali Craig",
            role: "ASM",
            reportsTo: "50",
            division: "5",
            callTarget: "",
            avatar: "/avatars/Block (5).png",
        },
        {
            name: "Drew Cano",
            role: "PSR",
            reportsTo: "49",
            division: "3",
            callTarget: "",
            avatar: "/avatars/AvatarMale01.png",
        },
        {
            name: "Orlando Diggs",
            role: "ASM",
            reportsTo: "35",
            division: "4",
            callTarget: "",
            avatar: "/avatars/Block (6).png",
        },
        {
            name: "Andi Lane",
            role: "PSR",
            reportsTo: "21",
            division: "2",
            callTarget: "",
            avatar: "/avatars/AvatarFemale06.png",
        },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar role="admin" />
            <main className="flex-1 ml-64 bg-white min-h-screen flex flex-col">
                <Header user={{ name: "Admin", avatar: "/ByeWind.png" }} />

                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Call Targets</h1>
                        <div className="flex gap-4">
                            {/* Division Dropdown */}
                            <div className="relative">
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white">
                                    Division
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* This week Dropdown */}
                            <div className="relative">
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white">
                                    This week
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Add Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#60A5FA] hover:bg-[#3B82F6] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add PSR/ ASM/RSM
                            </button>
                        </div>
                    </div>

                    {/* Team Summary Table */}
                    <div className="bg-[#F9F9FA] rounded-[24px] border border-[#3E4BFF] p-8 shadow-[2px_4px_0.5px_0px_rgba(0,0,0,0.1)] relative">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-900">Team Summary Table</h2>
                            <button className="p-2 hover:bg-gray-200 rounded-full">
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
                                    <th className="pb-4 font-normal">Reports To</th>
                                    <th className="pb-4 font-normal">Division</th>
                                    <th className="pb-4 font-normal">Call Target</th>
                                </tr>
                            </thead>
                            <tbody className="space-y-2">
                                {teamData.map((member, index) => (
                                    <tr key={index} className="bg-[#EEF2FF] rounded-lg">
                                        <td className="py-4 pl-4 rounded-l-lg">
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
                                        <td className="py-4 text-sm text-gray-900">{member.role}</td>
                                        <td className="py-4 text-sm text-gray-900">{member.reportsTo}</td>
                                        <td className="py-4 text-sm text-gray-900">{member.division}</td>
                                        <td className="py-4 text-sm text-gray-900 rounded-r-lg">{member.callTarget}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Add Member Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-[20px] p-6 w-[500px] shadow-lg relative">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg font-medium text-gray-900">Add member</h2>
                                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-normal text-gray-900 mb-1">Name</label>
                                        <input type="text" className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-normal text-gray-900 mb-1">Role</label>
                                        <div className="relative">
                                            <select className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                                                <option></option>
                                                <option>PSR</option>
                                                <option>ASM</option>
                                                <option>RSM</option>
                                            </select>
                                            <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-normal text-gray-900 mb-1">Reports To</label>
                                        <input type="text" className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-normal text-gray-900 mb-1">Divisions</label>
                                        <div className="relative">
                                            <select className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                                                <option></option>
                                                <option>Alde Medi</option>
                                                <option>Somediza</option>
                                            </select>
                                            <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
