"use client";

export default function DashboardMockup() {
  return (
    <div className="w-full rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl flex text-left font-sans text-slate-200">
      
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-6 flex-col hidden md:flex bg-[#050505]">
        <div className="mb-10 pl-2">
          <h1 className="text-xl font-bold text-white tracking-wide">HAZINE</h1>
        </div>
        
        <nav className="space-y-1 flex-1">
          <NavItem active icon={<DashboardIcon />} label="Dashboard" />
          <NavItem icon={<OverviewIcon />} label="Overview" />
          <NavItem icon={<RevenueIcon />} label="Revenue" />
          <NavItem icon={<SettingsIcon />} label="Settings" />
          
          <div className="pt-8 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider pl-3">Account</div>
          <NavItem icon={<ProfileIcon />} label="Profile" />
          <NavItem icon={<SignOutIcon />} label="Sign Out" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#09090b] p-6 md:p-8 overflow-hidden flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-sm text-slate-400">
            <span>Pages</span>
            <span className="mx-2">/</span>
            <span className="text-white">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative group flex-1 sm:flex-none">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Search..." className="bg-[#111] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 w-full sm:w-64 transition-colors" />
            </div>
            <button className="p-2 text-slate-400 hover:text-white transition-colors"><SettingsIcon className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors"><BellIcon className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Top Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="VISIBILITY" value="67%" change="+55%" icon={<EyeIcon />} />
          <StatCard title="TRAFFIC" value="22.5K" change="+253" icon={<GlobeIcon />} color="purple" />
          <StatCard title="POSITION AVG." value="12.3" change="+3.2" icon={<FileIcon />} color="orange" />
          <StatCard title="ADS REVENUE" value="$223" change="+8%" icon={<StarIcon />} color="pink" />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-[#0C0C0E] rounded-xl border border-white/5 p-6 relative group overflow-hidden">
             <div className="mb-8">
               <h3 className="text-lg font-medium text-white mb-1">Visibility Trends</h3>
               <div className="text-sm text-slate-400"><span className="text-emerald-400 font-medium">(+5%) more</span> in 2024</div>
             </div>

             {/* Simulated Wave Chart */}
             <div className="h-48 w-full relative mt-auto">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                   <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                         <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                      </linearGradient>
                   </defs>
                   <path d="M0 40 Q 20 40 30 30 T 60 20 T 90 25 T 100 20 V 50 H 0 Z" fill="url(#gradient)" />
                   <path d="M0 40 Q 20 40 30 30 T 60 20 T 90 25 T 100 20" fill="none" stroke="#6366f1" strokeWidth="1" />
                </svg>
                
                {/* X-Axis Labels */}
                <div className="flex justify-between mt-4 text-[10px] text-slate-600 uppercase tracking-wider font-medium">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
             {/* SEO Score */}
             <div className="bg-[#0C0C0E] rounded-xl border border-white/5 p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                   <h3 className="text-sm font-semibold text-white mb-1">SEO Score</h3>
                   <p className="text-xs text-slate-500">Basis on daily analysis</p>
                </div>
                
                <div className="relative flex items-center justify-center py-4">
                   {/* Semi Circle Gauge */}
                   <svg className="w-40 h-20 overflow-visible" viewBox="0 0 100 50">
                      <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
                      <path d="M10 50 A 40 40 0 0 1 75 22" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                   </svg>
                   <div className="absolute bottom-0 text-center pb-2">
                      <div className="text-3xl font-bold text-white">82%</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Optimised</div>
                   </div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-600 font-medium px-4">
                   <span>0%</span>
                   <span>100%</span>
                </div>
             </div>
             
             {/* Bottom Mini Cards */}
             <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="bg-[#0C0C0E] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                   <div className="text-[10px] text-slate-500 font-bold uppercase">Active User</div>
                   <div className="text-xl font-bold text-white">14 people</div>
                </div>
                 <div className="bg-[#0C0C0E] rounded-xl border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute right-2 top-2 w-16 h-16 rounded-full border-4 border-emerald-500/20 flex items-center justify-center">
                        <div className="text-[10px] text-center leading-tight">
                            <div className="text-emerald-400 font-bold text-xs">9.3</div>
                            <div className="text-slate-500 text-[8px]">Daily</div>
                        </div>
                    </div>
                   <div className="text-[10px] text-slate-500 font-bold uppercase relative z-10">Event</div>
                   <div className="text-xl font-bold text-white relative z-10">1,465</div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-[#0C0C0E] rounded-xl border border-white/5 p-6">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Country Data View</h3>
                  <button className="text-slate-500 hover:text-white"><MoreVerticalIcon className="w-4 h-4" /></button>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  By ID Active user
               </div>
           </div>

           <div className="bg-[#0C0C0E] rounded-xl border border-white/5 p-6">
               <h3 className="text-base font-semibold text-white mb-1">Active Users (24h)</h3>
               <div className="text-xs text-slate-400"><span className="text-red-500 font-medium">(-1.2%) down</span> from yesterday</div>
           </div>
        </div>

      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${active ? 'bg-[#1a1a1a] text-white font-medium' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      <span className={`${active ? 'text-blue-500' : 'text-slate-500 group-hover:text-white'}`}>{icon}</span>
      {label}
    </button>
  );
}

function StatCard({ title, value, change, icon, color = "blue" }: { title: string, value: string, change: string, icon: React.ReactNode, color?: string }) {
  const colorMap: Record<string, string> = {
      blue: "text-blue-400 bg-blue-400/10",
      purple: "text-purple-400 bg-purple-400/10",
      orange: "text-orange-400 bg-orange-400/10",
      pink: "text-pink-400 bg-pink-400/10"
  };

  return (
    <div className="bg-[#0C0C0E] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{title}</div>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorMap[color] || colorMap.blue}`}>
           {icon}
        </div>
      </div>
      <div className="flex items-end gap-2">
         <span className="text-2xl font-bold text-white tracking-tight">{value}</span>
         <span className="text-xs font-medium text-emerald-400 mb-1">{change}</span>
      </div>
    </div>
  );
}

// Icons
const DashboardIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>;
const OverviewIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>;
const RevenueIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>;
const SettingsIcon = ({className = "w-4 h-4"}: {className?: string}) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const ProfileIcon = () => <div className="w-4 h-4 rounded-full bg-slate-600 text-[8px] flex items-center justify-center font-bold text-white">MJ</div>;
const SignOutIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>;
const EyeIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;
const GlobeIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>;
const FileIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const StarIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>;
const BellIcon = ({className = "w-4 h-4"}: {className?: string}) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>;
const MoreVerticalIcon = ({className = "w-4 h-4"}: {className?: string}) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>;
