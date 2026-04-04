// App.js
import React, { useState } from 'react';

const SERIES_PORTALS = [
    {
        id: 'dynasties',
        title: 'Dynasties',
        subtitle: 'A Legacy of Steel and Shadow. In a world where bloodlines define destiny, one warrior must reclaim a stolen throne before the darkness consumes the realm.',
        image: '/media/posters/dynasties/AdmoniCity.png', 
        path: '/pages/series/dynasties.html',
        tags: ['Action', 'Historical', 'Epic'],
        label: 'New Release',
        kanji: '朝'
    },
    {
        id: 'mictlan-2030',
        title: 'Mictlan 2030',
        subtitle: 'Where ancient shadows meet neon skylines. Explore the high-tech underworld of a futuristic empire rising from the ruins of the past.',
        image: '/media/posters/dynasties/Tenochtitlan2030.png',
        path: '#',
        tags: ['Cyberpunk', 'Mythology', 'Thriller'],
        label: 'In Production',
        kanji: '死'
    },
    {
        id: 'kyoto-noir',
        title: 'Kyoto Noir',
        subtitle: 'Rain Slicks and Neon Blades. In the neon-drenched streets of a future Kyoto, an underground syndicate faces a reckoning they never saw coming.',
        image: '[https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&q=80&w=2000](https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&q=80&w=2000)',
        path: '#',
        tags: ['Cyberpunk', 'Thriller'],
        label: 'Trending',
        kanji: '闇'
    }
];

const PortalRow = ({ series }) => {
    const handleClick = () => {
        if (series.path !== '#') {
            window.location.href = series.path;
        }
    };

    return (
        <div 
            onClick={handleClick}
            className="portal-row group relative w-full min-h-[50vh] md:min-h-[45vh] lg:min-h-[40vh] overflow-hidden cursor-pointer border-b border-[#FAEBD7]/10 bg-[#1A1C1F] flex items-center"
        >
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${series.image})` }}
                />
                <div className="absolute inset-0 bg-[#1A1C1F]/60 group-hover:bg-[#1A1C1F]/30 transition-colors duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C1F] via-[#1A1C1F]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1F] via-transparent to-[#1A1C1F]/40" />
            </div>
            
            <div className="relative z-20 w-full px-6 sm:px-12 md:px-24 py-24 md:py-32 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <span className="bg-[#C02F12] text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-sm tracking-[0.2em] uppercase shadow-lg shadow-[#C02F12]/30">
                        {series.label}
                    </span>
                    <div className="flex gap-4">
                        {series.tags.map(tag => (
                            <span key={tag} className="text-[#FAEBD7]/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border-l border-[#FAEBD7]/20 pl-4">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-[#FAEBD7] mb-6 tracking-tighter transition-all duration-700 group-hover:text-white group-hover:translate-x-3">
                    {series.title}
                </h2>
                
                <p className="text-[#FAEBD7]/70 text-sm sm:text-lg md:text-xl font-light tracking-wide max-w-2xl transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-150 leading-relaxed">
                    {series.subtitle}
                </p>

                <div className="mt-8 sm:hidden text-[#C02F12] text-[10px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
                    Tap to Enter Realm
                </div>
            </div>

            <div className="absolute right-4 sm:right-12 md:right-32 top-1/2 -translate-y-1/2 opacity-[0.04] group-hover:opacity-[0.1] pointer-events-none transition-all duration-1000 select-none z-10">
                <span className="text-[15rem] sm:text-[25rem] md:text-[35rem] font-bold text-[#FAEBD7] leading-none">
                    {series.kanji}
                </span>
            </div>

            <div className="absolute right-12 bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0 hidden md:block z-30">
                <div className="flex items-center gap-6 text-[#C02F12]">
                    <span className="text-xs font-black uppercase tracking-[0.5em]">Enter Realm</span>
                    <div className="w-16 h-[1px] bg-[#C02F12]/50 group-hover:w-24 transition-all duration-700"></div>
                    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="min-h-screen bg-[#1A1C1F] w-full flex flex-col selection:bg-[#C02F12] selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-6 sm:py-8 flex justify-between items-center bg-gradient-to-b from-[#1A1C1F] via-[#1A1C1F]/70 to-transparent">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C02F12] rounded-full flex items-center justify-center shadow-2xl shadow-[#C02F12]/40 group-hover:scale-110 transition-transform">
                        <span className="text-[#FAEBD7] font-black text-xl sm:text-2xl">T</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#FAEBD7] font-black tracking-[0.3em] uppercase text-xs sm:text-sm leading-none">Toriku Films</span>
                        <span className="text-[#C02F12] text-[8px] font-black tracking-[0.5em] uppercase mt-1">Studio Selection</span>
                    </div>
                </div>
            </nav>

            <main className="flex-1 flex flex-col">
                {SERIES_PORTALS.map(series => (
                    <PortalRow key={series.id} series={series} />
                ))}
            </main>

            <footer className="fixed bottom-0 left-0 w-full z-50 px-8 py-6 pointer-events-none flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[#FAEBD7]/40 text-[9px] uppercase font-black tracking-[0.3em]">Vault Link Active</span>
                    </div>
                </div>
                <div className="pointer-events-auto hidden sm:block">
                    <span className="text-[#FAEBD7]/20 text-[9px] uppercase tracking-[0.4em] font-black">Est. 2026 / Visual Narratives</span>
                </div>
            </footer>
        </div>
    );
}
