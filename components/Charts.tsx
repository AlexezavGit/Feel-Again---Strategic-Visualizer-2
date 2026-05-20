
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  Line
} from 'recharts';
import { motion } from 'framer-motion';
import { Users, Activity, Heart, Wallet, CheckCircle, AlertOctagon, XCircle, User, Users as UsersIcon, Shield, Lock, ArrowUpRight, Globe, Building2, ChevronDown, Zap, Cpu } from 'lucide-react';
import { Language } from '../types';

const springConfig = { type: "spring", stiffness: 300, damping: 30 };

const CustomTooltip = ({ active, payload, label, lang }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-md border border-cyber-cyan/30 p-3 rounded-lg shadow-2xl">
        <p className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-mono text-white">
          {payload[0].value}{payload[0].unit || ''}
        </p>
      </div>
    );
  }
  return null;
};

export const GlobalLocalFlowChart: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springConfig}
      className="h-96 w-full cyber-card p-6 flex flex-col"
    >
       <h3 className="text-[10px] font-mono font-bold text-cyber-cyan/50 uppercase tracking-[0.2em] mb-6">{label}</h3>
       
       <div className="flex-1 flex flex-col justify-between relative">
          {/* Connecting Line */}
          <div className="absolute left-[24px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-green opacity-30 z-0"></div>

          {/* Top: Global */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 z-10 group cursor-pointer"
          >
              <div className="w-12 h-12 bg-cyber-cyan/10 rounded-full flex items-center justify-center text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] shrink-0 group-hover:bg-cyber-cyan/20 transition-colors">
                  <Globe size={20} />
              </div>
              <div className="flex-1 bg-black/40 p-3 rounded-lg border border-cyber-cyan/10 group-hover:border-cyber-cyan/30 transition-all">
                   <div className="flex justify-between items-center mb-1">
                       <span className="text-[10px] font-mono font-bold text-cyber-cyan uppercase">{lang === Language.EN ? "Global Resources (Bank A)" : "Глобальні ресурси (Банк А)"}</span>
                       <span className="text-[10px] font-mono font-bold bg-cyber-cyan/20 text-cyber-cyan px-2 py-0.5 rounded border border-cyber-cyan/30">{lang === Language.EN ? "85% Funding" : "85% Фінансування"}</span>
                   </div>
                   <div className="text-[10px] font-mono text-cyber-cyan/60 flex gap-2">
                       <span>🌍 {lang === Language.EN ? "Donors" : "Донори"}</span>
                       <span>•</span>
                       <span>🏛️ {lang === Language.EN ? "Institutional" : "Інституційні"}</span>
                   </div>
              </div>
          </motion.div>

          {/* Middle: Fintech (The Bridge) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 z-10 pl-6 my-2 group cursor-pointer"
          >
               <div className="w-16 h-16 bg-cyber-cyan/20 rounded-xl flex flex-col items-center justify-center text-cyber-cyan shadow-[0_0_20px_rgba(0,229,255,0.3)] shrink-0 transform -rotate-3 border border-cyber-cyan/40 group-hover:bg-cyber-cyan/30 transition-all">
                    <Cpu size={24} className="mb-1" />
                    <span className="font-mono font-black text-[8px] leading-none uppercase">{lang === Language.EN ? "Fintech" : "Фінтех"}</span>
               </div>
               <div className="flex-1">
                   <div className="text-[10px] font-mono font-bold text-cyber-cyan uppercase mb-1 flex items-center gap-2">
                      {lang === Language.EN ? "The Digital Bridge" : "Цифровий міст"} <Shield size={12} className="text-cyber-green" />
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                       <div className="bg-black/60 border border-cyber-purple/30 text-cyber-purple p-2 rounded text-[9px] font-mono text-center uppercase tracking-tighter">
                           {lang === Language.EN ? "Immutable Audit" : "Незмінний аудит"}
                       </div>
                       <div className="bg-black/60 border border-cyber-green/30 text-cyber-green p-2 rounded text-[9px] font-mono text-center uppercase tracking-tighter">
                           {lang === Language.EN ? "Strategic Purchasing" : "Стратегічні закупівлі"}
                       </div>
                   </div>
               </div>
          </motion.div>

          {/* Bottom: Local */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 z-10 group cursor-pointer"
          >
              <div className="w-12 h-12 bg-cyber-green/10 rounded-full flex items-center justify-center text-cyber-green border border-cyber-green/30 shadow-[0_0_15px_rgba(0,255,102,0.2)] shrink-0 group-hover:bg-cyber-green/20 transition-colors">
                  <Building2 size={20} />
              </div>
              <div className="flex-1 bg-black/40 p-3 rounded-lg border border-cyber-green/10 group-hover:border-cyber-green/30 transition-all">
                   <div className="flex justify-between items-center mb-1">
                       <span className="text-[10px] font-mono font-bold text-cyber-green uppercase">{lang === Language.EN ? "Local Reality (Bank B)" : "Локальна реальність (Банк Б)"}</span>
                       <span className="text-[10px] font-mono font-bold bg-cyber-green/20 text-cyber-green px-2 py-0.5 rounded border border-cyber-green/30">{lang === Language.EN ? "15% Co-Fi" : "15% Співфін."}</span>
                   </div>
                   <div className="grid grid-cols-3 gap-1 mt-2">
                       <div className="bg-black/40 border border-cyber-green/20 p-1 rounded text-center hover:border-cyber-green/50 transition-colors">
                          <div className="text-[9px] font-mono font-bold text-cyber-green">ФОП</div>
                          <div className="text-[7px] font-mono text-cyber-green/50 uppercase">{lang === Language.EN ? "Private" : "Приватні"}</div>
                       </div>
                       <div className="bg-black/40 border border-cyber-green/20 p-1 rounded text-center hover:border-cyber-green/50 transition-colors">
                          <div className="text-[9px] font-mono font-bold text-cyber-green">{lang === Language.EN ? "Clinics" : "Клініки"}</div>
                          <div className="text-[7px] font-mono text-cyber-green/50 uppercase">{lang === Language.EN ? "Medical" : "Медичні"}</div>
                       </div>
                       <div className="bg-black/40 border border-cyber-green/20 p-1 rounded text-center hover:border-cyber-green/50 transition-colors">
                          <div className="text-[9px] font-mono font-bold text-cyber-green">{lang === Language.EN ? "Online" : "Онлайн"}</div>
                          <div className="text-[7px] font-mono text-cyber-green/50 uppercase">{lang === Language.EN ? "Platforms" : "Платформи"}</div>
                       </div>
                   </div>
              </div>
          </motion.div>
       </div>
    </motion.div>
  );
};

export const GDPChart: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
  const data = [
    { name: lang === Language.EN ? 'Intermediary Friction' : 'Посередницьке тертя', value: 35, fill: '#FF3D00' },
    { name: lang === Language.EN ? 'Fintech Fee' : 'Комісія Fintech', value: 3.5, fill: '#00E5FF' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springConfig}
      className="h-80 w-full cyber-card p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent animate-scanline"></div>
      <h3 className="text-[10px] font-mono font-bold text-cyber-cyan/50 uppercase tracking-[0.2em] mb-6">{label}</h3>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={60}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0, 229, 255, 0.05)" />
            <XAxis dataKey="name" tick={{fontSize: 9, fill: 'rgba(0, 229, 255, 0.5)', fontFamily: 'JetBrains Mono'}} axisLine={false} tickLine={false} dy={10} />
            <YAxis unit="%" tick={{fontSize: 9, fill: 'rgba(0, 229, 255, 0.5)', fontFamily: 'JetBrains Mono'}} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(0, 229, 255, 0.05)'}} />
            <Bar dataKey="value" radius={[2, 2, 0, 0]} label={{ position: 'top', fill: '#fff', fontSize: 10, fontFamily: 'JetBrains Mono' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity cursor-pointer" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute bottom-16 right-4 text-[8px] font-mono font-bold text-cyber-green uppercase tracking-widest bg-cyber-green/10 px-2 py-1 rounded border border-cyber-green/30">
        {lang === Language.EN ? "83% Potential Population Active" : "83% Потенційно активне населення"}
      </div>
      <div className="mt-4 pt-4 border-t border-cyber-cyan/10 text-[8px] font-mono uppercase tracking-wider text-cyber-cyan/40">
        {lang === Language.EN 
          ? "* British GDP Methodology (LSE) applied to Ukraine's MHPSS sector" 
          : "* Британська методологія ВВП (LSE) застосована до сектору MHPSS України"}
      </div>
    </motion.div>
  );
};

export const ShadowEconomyChart: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={springConfig}
      className="h-72 w-full cyber-card p-6 flex flex-col relative"
    >
      <h3 className="text-[10px] font-mono font-bold text-cyber-cyan/50 uppercase tracking-[0.2em] mb-4">{label}</h3>
      
      <div className="flex-1 flex items-end justify-between gap-4 relative px-4">
         {/* Grid Lines Background */}
         <div className="absolute inset-0 border-b border-cyber-cyan/5 z-0"></div>
         <div className="absolute inset-0 border-b border-cyber-cyan/5 top-1/4 z-0"></div>
         <div className="absolute inset-0 border-b border-cyber-cyan/5 top-2/4 z-0"></div>

         {/* Bar 1: Official */}
         <div className="flex flex-col items-center w-1/3 z-10 group cursor-help">
             <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono bg-black/90 border border-cyber-purple/30 text-cyber-purple px-2 py-1 rounded w-48 text-center shadow-2xl">
                {lang === Language.EN 
                  ? "$177M Health Cluster funds — a parallel cash flow without a common unit of measurement for aid delivered" 
                  : "$177 млн коштів Health Cluster — паралельний грошовий потік без єдиної одиниці вимірювання наданої допомоги"}
             </div>
             <div className="w-full bg-cyber-purple/20 border border-cyber-purple/40 rounded-t-sm relative overflow-hidden transition-all group-hover:bg-cyber-purple/30" style={{ height: '40px' }}>
                <div className="absolute inset-0 flex items-center justify-center text-cyber-purple/30">
                    <UsersIcon size={16} />
                </div>
             </div>
             <div className="mt-3 text-center">
                 <div className="text-lg font-mono font-bold text-cyber-purple">2k</div>
                 <div className="text-[8px] font-mono font-bold uppercase text-cyber-purple/60">{lang === Language.EN ? "Official Cluster" : "Офіційний кластер"}</div>
             </div>
         </div>

         {/* Visual Divider */}
         <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent border-r border-dashed border-cyber-cyan/10 mb-12"></div>

         {/* Bar 2: Shadow */}
         <div className="flex flex-col items-center w-1/3 z-10 group cursor-help">
             <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono bg-black/90 border border-cyber-green/30 text-cyber-green px-2 py-1 rounded shadow-2xl">
                {lang === Language.EN ? "Connected" : "Підключено"}: 15,000+
             </div>
             <div className="w-full bg-cyber-green/20 border border-cyber-green/40 rounded-t-sm relative overflow-hidden shadow-[0_0_20px_rgba(0,255,102,0.1)] transition-all group-hover:scale-[1.02] group-hover:bg-cyber-green/30" style={{ height: '160px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 gap-1 p-1 text-cyber-green">
                   <div className="flex gap-1"><UsersIcon size={12}/><UsersIcon size={12}/><UsersIcon size={12}/></div>
                   <div className="flex gap-1"><UsersIcon size={12}/><UsersIcon size={12}/><UsersIcon size={12}/></div>
                   <div className="flex gap-1"><UsersIcon size={12}/><UsersIcon size={12}/><UsersIcon size={12}/></div>
                </div>
                <div className="absolute top-2 right-2 text-cyber-green">
                    <ArrowUpRight size={14} />
                </div>
             </div>
             <div className="mt-3 text-center">
                 <div className="text-lg font-mono font-black text-cyber-green">15k+</div>
                 <div className="text-[8px] font-mono font-bold uppercase text-cyber-green bg-cyber-green/10 px-2 py-0.5 rounded border border-cyber-green/20">{lang === Language.EN ? "Private Capacity" : "Приватний сектор"}</div>
             </div>
         </div>
      </div>
      <div className="absolute top-12 right-6 text-[8px] font-mono font-bold text-cyber-purple uppercase tracking-widest bg-cyber-purple/10 px-2 py-1 rounded border border-cyber-purple/30">
        {lang === Language.EN ? "71% want outpatient care" : "71% хочуть амбулаторну допомогу"}
      </div>
    </motion.div>
  );
};

export const DeriskingChart: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={springConfig}
        className="h-80 w-full cyber-card p-6 flex flex-col"
      >
        <h3 className="text-[10px] font-mono font-bold text-cyber-cyan/50 uppercase tracking-[0.2em] mb-6">{label}</h3>
        
        <div className="flex-1 flex flex-col justify-end gap-1 relative">
            <div className="absolute right-4 top-0 bottom-0 w-12 flex flex-col items-center justify-center border-l border-dashed border-cyber-cyan/10 pl-2">
                <span className="text-[8px] font-mono font-bold text-cyber-cyan uppercase rotate-90 whitespace-nowrap mb-4">{lang === Language.EN ? "Risk Reduction" : "Зниження ризиків"}</span>
                <div className="h-full w-[1px] bg-gradient-to-t from-cyber-cyan/10 via-cyber-cyan/40 to-cyber-cyan rounded-full"></div>
            </div>

            {/* Layer 3: Investor */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="w-[85%] bg-black/60 border border-cyber-cyan/30 rounded-lg p-3 shadow-xl relative z-20 cursor-pointer group"
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyber-cyan/10 rounded border border-cyber-cyan/30"><Wallet size={18} className="text-cyber-cyan" /></div>
                        <div>
                            <div className="text-[10px] font-mono font-black uppercase text-cyber-cyan">{lang === Language.EN ? "Global Resources" : "Глобальні ресурси"}</div>
                            <div className="text-[8px] font-mono text-cyber-cyan/50">{lang === Language.EN ? "Bank A (Institutional)" : "Банк А (Інституційний)"}</div>
                        </div>
                    </div>
                    <div className="text-[9px] font-mono font-bold text-cyber-green flex items-center gap-1">
                        <Shield size={12} /> {lang === Language.EN ? "Safe" : "Безпечно"}
                    </div>
                </div>
                <div className="absolute -bottom-3 left-8 text-cyber-cyan/30">▼</div>
            </motion.div>

            {/* Layer 2: Community */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="w-[85%] bg-black/40 border border-cyber-purple/30 rounded-lg p-3 relative z-10 mt-1 cursor-pointer group"
            >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyber-purple/10 rounded border border-cyber-purple/30"><Users size={18} className="text-cyber-purple" /></div>
                        <div>
                            <div className="text-[10px] font-mono font-bold uppercase text-cyber-purple">{lang === Language.EN ? "P2P Validation" : "P2P Валідація"}</div>
                            <div className="text-[8px] font-mono text-cyber-purple/50">{lang === Language.EN ? "Local Reality (Bank B)" : "Локальна реальність (Банк Б)"}</div>
                        </div>
                    </div>
                    <div className="text-[8px] font-mono font-bold text-cyber-purple border border-cyber-purple/30 px-2 py-0.5 rounded bg-black/60">
                        {lang === Language.EN ? "Market Signal" : "Ринковий сигнал"}
                    </div>
                </div>
                <div className="absolute -bottom-3 left-8 text-cyber-purple/30">▼</div>
            </motion.div>

            {/* Layer 1: Grants */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="w-[85%] bg-black/20 border border-cyber-green/30 rounded-lg p-3 relative z-0 mt-1 cursor-pointer group"
            >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyber-green/10 rounded border border-cyber-green/30"><Heart size={18} className="text-cyber-green" /></div>
                        <div>
                            <div className="text-[10px] font-mono font-bold uppercase text-cyber-green">{lang === Language.EN ? "Strategic Purchasing" : "Стратегічні закупівлі"}</div>
                            <div className="text-[8px] font-mono text-cyber-green/50">{lang === Language.EN ? "Fintech Core" : "Ядро Fintech"}</div>
                        </div>
                    </div>
                    <div className="text-[8px] font-mono font-bold text-cyber-green border border-cyber-green/30 px-2 py-0.5 rounded bg-black/60">
                        {lang === Language.EN ? "Bridge" : "Міст"}
                    </div>
                </div>
            </motion.div>
        </div>
      </motion.div>
    );
};

export const LocalizationGapChart: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
  const data = [
    { name: lang === Language.EN ? 'Too Expensive' : 'Занадто дорого', value: 45, fill: '#FF3D00' },
    { name: lang === Language.EN ? 'Not Important' : 'Не важливо', value: 38, fill: '#A855F7' },
    { name: lang === Language.EN ? 'Other' : 'Інше', value: 17, fill: '#00FF66' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={springConfig}
      className="h-72 w-full cyber-card p-6"
    >
      <h3 className="text-[10px] font-mono font-bold text-cyber-cyan/50 uppercase tracking-[0.2em] mb-6">{label}</h3>
      <div className="flex items-center justify-center h-[85%] relative">
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity cursor-pointer" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl font-mono font-black text-white block">83%</span>
          <span className="text-[7px] font-mono text-cyber-cyan/60 font-bold uppercase tracking-widest leading-tight">{lang === Language.EN ? "Potential Help Seekers" : "Потенційні клієнти"}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const DonorDashboardMock: React.FC<{ label: string; lang?: Language }> = ({ label, lang = Language.EN }) => {
    return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          className="h-full w-full bg-black/80 rounded-lg shadow-2xl border border-cyber-cyan/20 overflow-hidden flex flex-col font-mono text-[10px]"
        >
            <div className="flex justify-between items-center p-3 border-b border-cyber-cyan/10 bg-black/40 z-10">
                <h3 className="font-bold text-cyber-cyan uppercase tracking-wider flex items-center gap-2">
                    <Activity size={14} /> {label}
                </h3>
                <div className="text-[8px] text-cyber-green flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"></div>
                   {lang === Language.EN ? "System Status: Active" : "Статус системи: Активна"}
                </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
                 <div className="absolute inset-0 cyber-grid opacity-20"></div>
                 <div className="text-center relative z-10">
                     <Activity size={48} className="mx-auto mb-4 text-cyber-cyan/20 animate-pulse"/>
                     <div className="text-[9px] font-mono text-cyber-cyan/40 uppercase tracking-[0.3em]">{lang === Language.EN ? "Live System Activity" : "Активність системи наживо"}</div>
                     <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="p-2 border border-cyber-cyan/10 rounded bg-black/40">
                            <div className="text-cyber-cyan/40 mb-1">TX_LOAD</div>
                            <div className="text-cyber-cyan font-bold">0.84ms</div>
                        </div>
                        <div className="p-2 border border-cyber-cyan/10 rounded bg-black/40">
                            <div className="text-cyber-cyan/40 mb-1">VER_RATE</div>
                            <div className="text-cyber-green font-bold">99.9%</div>
                        </div>
                     </div>
                 </div>
            </div>
        </motion.div>
    )
}

export const PsychologistDistributionChart: React.FC<{ lang?: Language }> = ({ lang = Language.EN }) => {
    const data = [
      { name: lang === Language.EN ? 'Private Platforms' : 'Приватні платформи', value: 2000, color: '#00E5FF' },
      { name: lang === Language.EN ? 'FOP (Private)' : 'ФОП (Приватні)', value: 3750, color: '#A855F7' },
      { name: lang === Language.EN ? 'State Med' : 'Держ. мед.', value: 2500, color: '#00FF66' },
      { name: lang === Language.EN ? 'NGO/Cluster' : 'НУО/Кластер', value: 1000, color: '#FF3D00' },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" tick={{fontSize: 8, fill: 'rgba(0, 229, 255, 0.5)', fontFamily: 'JetBrains Mono'}} width={100} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(0, 229, 255, 0.05)'}} />
          <Bar dataKey="value" radius={[0, 2, 2, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
};
