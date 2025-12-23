"use client";

import { useState } from "react";

export default function Header({ title = "App Name", user }: { title?: string; user?: { name: string; avatar: string } }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDashboard, setSelectedDashboard] = useState("Alde Medi");

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 w-full">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo and Search */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="h-10" />
                        <span className="text-lg font-semibold text-gray-800">{title}</span>
                    </div>

                    <div className="relative hidden md:block">
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
                            className="text-sm font-bold text-gray-900 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50"
                        >
                            {selectedDashboard}
                            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[150px] z-50">
                                <button
                                    onClick={() => { setSelectedDashboard("Alde Medi"); setIsDropdownOpen(false); }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedDashboard === "Alde Medi" ? 'bg-gray-100 font-medium' : ''}`}
                                >
                                    Alde Medi
                                </button>
                                <button
                                    onClick={() => { setSelectedDashboard("Somediza"); setIsDropdownOpen(false); }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedDashboard === "Somediza" ? 'bg-gray-100 font-medium' : ''}`}
                                >
                                    Somediza
                                </button>
                            </div>
                        )}
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-2">
                        <img src={user?.avatar || "/avatars/AvatarMale01.png"} alt={user?.name || "Admin"} className="w-8 h-8 rounded-full" />
                        <span className="text-sm font-medium text-gray-900">{user?.name || "Admin"}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
