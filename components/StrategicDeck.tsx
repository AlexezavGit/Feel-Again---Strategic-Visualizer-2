
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie
} from 'recharts';
import { 
  ShieldCheck, Zap, BarChart3, Globe, Users, TrendingUp, 
  ArrowRight, ExternalLink, X, Play, ShieldAlert, Activity,
  Layers, Scale, RefreshCw, CheckCircle, AlertTriangle, Linkedin,
  FileText, Building, Clock, Shield, Target, Crosshair, Info
} from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { PsychologistDistributionChart } from './Charts';
import { PartnerLogo } from './PartnerLogos';

interface StrategicDeckProps {
  lang: Language;
}

const StrategicDeck: React.FC<StrategicDeckProps> = ({ lang }) => {
  const [pipVideo, setPipVideo] = useState(false);
  const [videoClosed, setVideoClosed] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // PiP logic: show when scrolled past hero AND video has been played
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > 800 && !videoClosed && hasPlayed) {
        setPipVideo(true);
      } else {
        setPipVideo(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY, videoClosed, hasPlayed]);

  const t = CONTENT[lang];

  // 4->1 Format Component
  const Description4to1 = ({ items }: { items: string[] }) => (
    <div className="mt-12 max-w-3xl space-y-4">
      {items.map((text, i) => {
        const isLast = i === items.length - 1;
        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-start gap-4 ${isLast ? 'mt-8 pt-6 border-t border-cyber-cyan/30' : ''}`}
          >
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isLast ? 'bg-cyber-cyan shadow-[0_0_8px_rgba(0,229,255,0.8)]' : 'bg-white/20'}`} />
            <p className={`text-sm md:text-base font-mono ${isLast ? 'text-cyber-cyan font-black uppercase tracking-tight' : 'text-white/60'}`}>
              {text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );

  // Section Header Component
  const SectionHeader = ({ title, accent, id }: { title: string; accent: string; id: string }) => (
    <div id={id} className="mb-12 relative">
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-cyber-cyan/20"></div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-7xl font-mono font-black text-white leading-none uppercase tracking-tighter"
      >
        {title}<br />
        <span className="text-cyber-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">{accent}</span>
      </motion.h2>
      <div className="w-64 h-1 bg-gradient-to-r from-cyber-cyan to-transparent mt-8"></div>
    </div>
  );

  const DeploymentPhase = ({ phase, year, items }: { phase: string, year: string, items: { title: string, subtitle: string, icon: any }[] }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="cyber-card rounded-2xl overflow-hidden flex flex-col h-full border-cyber-cyan/10 hover:border-cyber-cyan/40 transition-all group"
    >
      <div className="bg-cyber-cyan/5 p-6 border-b border-cyber-cyan/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
            <Activity size={80} className="text-cyber-cyan" />
        </div>
        <div className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-cyber-cyan/60 mb-1">{phase}</div>
        <div className="text-4xl font-mono font-black text-white tracking-tighter">{year}</div>
      </div>
      <div className="p-6 space-y-6 flex-grow relative z-10">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 group/item">
            <div className="mt-1 text-cyber-cyan/60 group-hover/item:text-cyber-cyan group-hover/item:scale-110 transition-all">
              <item.icon size={20} />
            </div>
            <div>
              <div className="text-sm font-mono font-black text-white uppercase tracking-tight group-hover/item:text-cyber-cyan transition-colors">{item.title}</div>
              <div className="text-xs text-white/40 leading-relaxed mt-1 font-medium">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const GoalTile = ({ icon: Icon, value, label, sublabel, color }: any) => {
    const colorClass = color === 'cyber-cyan' ? 'text-cyber-cyan' : color === 'cyber-purple' ? 'text-cyber-purple' : 'text-cyber-green';
    const borderClass = color === 'cyber-cyan' ? 'border-cyber-cyan/20' : color === 'cyber-purple' ? 'border-cyber-purple/20' : 'border-cyber-green/20';
    const bgClass = color === 'cyber-cyan' ? 'bg-cyber-cyan/5' : color === 'cyber-purple' ? 'bg-cyber-purple/5' : 'bg-cyber-green/5';

    return (
      <div className={`relative overflow-hidden ${bgClass} border ${borderClass} p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:border-opacity-100 transition-all duration-500`}>
          <div className={`absolute top-0 left-0 w-full h-1 bg-current ${colorClass} opacity-50`}></div>
          <Icon size={24} className={`${colorClass} mb-3 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
          <div className="text-4xl font-mono font-black text-white mb-1 tracking-tighter">{value}</div>
          <div className={`text-[10px] font-mono font-black uppercase tracking-[0.2em] ${colorClass} mb-2`}>{label}</div>
          <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest">{sublabel}</div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full bg-cyber-bg text-white pb-32 overflow-hidden">
      {/* Cyber Grid Overlay */}
      <div className="cyber-grid opacity-20"></div>
      <div className="cyber-vignette"></div>
      
      {/* AS IS / PROBLEM */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="problem"
          title={lang === Language.EN ? "Millions Spent." : "Мільйони витрачено."}
          accent={lang === Language.EN ? "Zero Measured Clinical Outcomes." : "Вимірюваного клінічного результату — нуль."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { val: "96,000", label: lang === Language.EN ? "Active clinics & specialists" : "активних клінік та спеціалістів", source: "HeRAMS 2024", color: "cyber-cyan" },
            { val: "74%", label: lang === Language.EN ? "Treatment gap among IDPs" : "treatment gap серед ВПО", source: "WHO SIMH 2024", color: "cyber-purple" },
            { val: "2.5%", label: lang === Language.EN ? "Health budget for mental" : "бюджету охорони здоров'я на ментальне", source: "WHO recommends ≥5%", color: "cyber-green" },
            { val: "3,200,000", label: lang === Language.EN ? "Ukrainians need outpatient care" : "українців потребують амбулаторної допомоги", source: "World Bank", color: "cyber-cyan" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cyber-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-${card.color}`}></div>
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className="text-4xl md:text-5xl font-mono font-black text-white mb-4 tracking-tighter"
              >
                {card.val}
              </motion.div>
              <div className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.2em] mb-3 leading-tight">{card.label}</div>
              <div className={`text-[10px] text-${card.color}/60 font-mono font-bold uppercase tracking-widest`}>{card.source}</div>
            </motion.div>
          ))}
        </div>

        <div className="border-l-4 border-cyber-cyan pl-10 py-6 mb-24 max-w-4xl bg-cyber-cyan/5 rounded-r-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <ShieldAlert size={120} className="text-cyber-cyan" />
          </div>
          <p className="text-xl md:text-3xl font-light italic text-white/90 leading-relaxed relative z-10">
            {lang === Language.EN 
              ? "\"Budgets flow one way. Ukrainians move the other. Training scales easily, effectiveness does not. $177M Health Cluster funds — a parallel cash flow without a common unit of measurement for aid delivered.\""
              : "\"Бюджети течуть в один бік. Українці рухаються в інший. Навчання масштабується легко, ефективність — ні. $177M коштів Health Cluster — паралельний грошовий потік без спільної одиниці виміру наданої допомоги.\""}
          </p>
          <div className="mt-6 text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-[0.3em]">
            {lang === Language.EN ? "Sources" : "Джерела"}: WHO SIMH 2024, World Bank, UNDP, Health Cluster Ukraine
          </div>
        </div>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "$177M Health Cluster — large-scale funding without an integrated system for measuring clinical outcomes.",
            "89% of the budget goes to inpatient care (psychiatric hospitals), although 71% of patients visit outpatient facilities. A fundamental mismatch.",
            "38% of the population considers mental health 'not important', 45% — 'too expensive' (PMC 2024).",
            "21.7% of healthcare workers are displaced, the number of psychiatrists per facility fell by 23% (PMC 2024).",
            "→ The system cannot keep up because it lacks a digital backbone."
          ]
          : [
            "$177M Health Cluster — масштабне фінансування без інтегрованої системи виміру клінічних результатів.",
            "89% бюджету йде на стаціонари (психдиспансери), хоча 71% пацієнтів звертаються в амбулаторні заклади. Фундаментальна невідповідність.",
            "38% населення вважає ментальне здоров'я \"не важливим\", 45% — \"занадто дорого\" (PMC 2024).",
            "21.7% медпрацівників переміщені, кількість психіатрів на заклад впала на 23% (PMC 2024).",
            "→ Система не встигає, бо не має цифрового хребта."
          ]
        } />
      </section>

      {/* WHY / EVIDENCE */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="evidence"
          title={lang === Language.EN ? "Where the Money Goes" : "Куди веде шлях грошей"}
          accent={lang === Language.EN ? "And Where It Doesn't" : "і куди він не доходить"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Localization Chart - REBUILT */}
          <div className="cyber-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={160} className="text-cyber-cyan" />
            </div>
            <h3 className="text-2xl font-mono font-black mb-10 uppercase tracking-tighter text-white relative z-10">{lang === Language.EN ? "Resource Localization Shift" : "Зсув Локалізації Ресурсів"}</h3>
            
            <div className="space-y-12 relative z-10">
                {/* Traditional Model */}
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[10px] font-mono font-black uppercase text-white/40 tracking-widest">{lang === Language.EN ? "Traditional Model" : "Традиційна модель"}</span>
                        <span className="text-xs font-mono text-white/40 font-bold">1.2% Local</span>
                    </div>
                    <div className="w-full h-10 bg-black/40 rounded-lg overflow-hidden flex border border-white/5">
                        <div className="h-full bg-cyber-purple/40" style={{ width: '1.2%' }}></div>
                        <div className="h-full bg-white/10" style={{ width: '35%' }}></div>
                        <div className="h-full bg-white/5" style={{ width: '63.8%' }}></div>
                    </div>
                </div>

                {/* FeeL Again Model */}
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[10px] font-mono font-black uppercase text-cyber-cyan tracking-[0.2em]">{lang === Language.EN ? "FeeL Again Model" : "Модель FeeL Again"}</span>
                        <span className="text-xs font-mono text-cyber-cyan font-black">70% Local</span>
                    </div>
                    <div className="w-full h-16 bg-black/60 rounded-lg overflow-hidden flex border border-cyber-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.25)] transition-all">
                        <div className="h-full bg-cyber-cyan flex items-center justify-center text-[11px] font-mono font-black text-black uppercase tracking-widest animate-pulse-glow" style={{ width: '70%' }}>{lang === Language.EN ? 'LOCAL' : 'ЛОКАЛЬНО'}</div>
                        <div className="h-full bg-white/10" style={{ width: '5%' }}></div>
                        <div className="h-full bg-white/5" style={{ width: '25%' }}></div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-cyber-cyan rounded-sm shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
                    <span className="text-[10px] uppercase font-mono font-black text-white/60 tracking-wider">{lang === Language.EN ? "Local Delivery" : "Локальна допомога"}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                    <span className="text-[10px] uppercase font-mono font-black text-white/60 tracking-wider">{lang === Language.EN ? "Admin Overhead" : "Адмін витрати"}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                    <span className="text-[10px] uppercase font-mono font-black text-white/60 tracking-wider">{lang === Language.EN ? "Intl Chain" : "Міжн. ланцюг"}</span>
                </div>
            </div>
            <p className="mt-8 text-base text-white/60 leading-relaxed italic font-light">
                {lang === Language.EN 
                    ? "FeeL Again recovers 30% of administrative loss by shifting focus from international chains to direct local empowerment." 
                    : "FeeL Again відновлює 30% адміністративних втрат, переносячи фокус з міжнародних ланцюгів на пряме посилення локальних акторів."}
            </p>
          </div>

          {/* Budget vs Needs Chart */}
          <div className="cyber-card p-10 rounded-2xl flex flex-col justify-between">
            <h3 className="text-2xl font-mono font-black mb-10 uppercase tracking-tighter text-white">{lang === Language.EN ? "Budget vs Beneficiary Needs" : "Бюджет vs. Потреби Бенефіціарів"}</h3>
            <div className="h-72 w-full flex items-center justify-center relative">
               {/* Decorative Background for Chart */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-48 h-48 rounded-full border border-cyber-cyan animate-pulse-glow"></div>
               </div>
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: lang === Language.EN ? 'Inpatient' : 'Стаціонарна', value: 89, fill: '#A855F7' },
                        { name: lang === Language.EN ? 'Outpatient' : 'Амбулаторна', value: 8, fill: '#00E5FF' },
                        { name: lang === Language.EN ? 'Preventive' : 'Превентивна', value: 3, fill: '#00FF66' }
                      ]}
                      cx="50%" cy="50%" innerRadius={70} outerRadius={95} paddingAngle={8} dataKey="value" stroke="none"
                    >
                      <Cell fill="#A855F7" />
                      <Cell fill="#00E5FF" />
                      <Cell fill="#00FF66" />
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#050A15', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '4px', fontFamily: 'JetBrains Mono' }}
                      itemStyle={{ color: '#fff', fontSize: '12px' }}
                    />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center bg-black/40 p-6 rounded-xl border border-white/5">
              <p className="text-lg font-mono font-black text-cyber-purple uppercase tracking-tight">{lang === Language.EN ? "89% for inpatient maintenance." : "89% на утримання стаціонару."}</p>
              <p className="text-xs text-white/40 mt-2 font-mono uppercase tracking-widest">{lang === Language.EN ? "38% consider it unimportant. 45% — too expensive." : "38% вважають це неважливим. 45% — занадто дорого."}</p>
            </div>
          </div>
        </div>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "Grand Bargain committed to localizing 25% of resources — actually implemented 1.2%. A 20x difference.",
            "$177M Health Cluster — a parallel flow without a common unit of measurement. Everyone counts differently.",
            "The budget is inverted: hospitals receive the majority, outpatient treatment — the remains. But the need is the opposite.",
            "36% of households have a member with psychosocial problems (OCHA, January 2025).",
            "→ Two streams of money — state and international — flow in parallel. No one sees the full picture."
          ]
          : [
            "Grand Bargain зобов'язав локалізувати 25% ресурсів — фактично реалізовано 1.2%. Різниця у 20 разів.",
            "$177M Health Cluster — паралельний потік без спільної одиниці виміру. Кожен рахує по-своєму.",
            "Бюджет перевернутий: стаціонари отримують більшість, амбулаторне лікування — залишки. А потреба — навпаки.",
            "36% домогосподарств мають члена з психосоціальними проблемами (OCHA, січень 2025).",
            "→ Два потоки грошей — державний і міжнародний — течуть паралельно. Ніхто не бачить повної картини."
          ]
        } />
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center relative z-10">
         <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.1)] border border-cyber-cyan/20 relative group">
            {!hasPlayed && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-md group-hover:bg-black/40 transition-all">
                <button 
                  onClick={() => setHasPlayed(true)}
                  className="w-24 h-24 bg-cyber-cyan rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-110 transition-transform"
                >
                  <Play size={40} fill="currentColor" />
                </button>
              </div>
            )}
            {hasPlayed && (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/GC1KShJIADw?autoplay=1&mute=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
            {!hasPlayed && (
              <img 
                src="https://picsum.photos/seed/feelagain/1280/720" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-50"
              />
            )}
         </div>
         <p className="mt-8 text-cyber-cyan/40 text-[10px] uppercase tracking-[0.4em] font-mono font-black">
            {lang === Language.EN ? "FeeL Again: Strategic Presentation" : "FeeL Again: Стратегічна Презентація"}
         </p>
      </section>

      {/* SOLUTION / HOW IT WORKS */}

      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="how-it-works"
          title={lang === Language.EN ? "A digital bridge between" : "Цифровий міст між"}
          accent={lang === Language.EN ? "Aid and Healing" : "Допомогою та Зціленням"}
        />
        <p className="text-xl md:text-2xl text-white/60 mb-20 max-w-4xl font-light leading-relaxed">
          {lang === Language.EN 
            ? "The program does not hire specialists — it provides digital coordination, support, and tracking rails to achieve transparency and accountability of services."
            : "Програма не наймає фахівців — вона надає цифрові рейки координації, супроводу, відстеження для досягнення прозорості та підзвітності послуг."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { icon: ShieldCheck, title: lang === Language.EN ? "De-identified Registry Transparency" : "Прозорість де-персоніфікованого реєстру", desc: "100% traceability" },
            { icon: Activity, title: lang === Language.EN ? "Clinical Verification" : "Клінічна верифікація", desc: "Standardized protocols" },
            { icon: BarChart3, title: lang === Language.EN ? "Open Data Set" : "Єдиний Набір Даних", desc: "First in Ukraine", link: "https://mhpss-ukraine-dashboard-199627674101.us-west1.run.app/" },
            { icon: TrendingUp, title: lang === Language.EN ? "Real-time Dashboard" : "Дашборд реального часу", desc: "Live monitoring", link: "https://mhpss-ukraine-dashboard-199627674101.us-west1.run.app/" },
            { icon: Globe, title: lang === Language.EN ? "Sovereign Data" : "Суверенні дані", desc: "GDPR compliant" },
            { icon: Users, title: lang === Language.EN ? "Provider Verification" : "Верифікація надавачів", desc: "KYC integration" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={card.link ? { scale: 1.02, backgroundColor: 'rgba(0,229,255,0.05)' } : {}}
              className={`cyber-card p-10 rounded-2xl relative overflow-hidden group ${card.link ? 'cursor-pointer border-cyber-cyan/30' : 'border-white/5'}`}
              onClick={() => card.link && window.open(card.link, '_blank')}
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="mb-8 text-cyber-cyan"
              >
                <card.icon size={40} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <h4 className="text-xl font-mono font-black mb-3 text-white uppercase tracking-tight group-hover:text-cyber-cyan transition-colors">{card.title}</h4>
              <p className="text-sm font-mono text-white/40 uppercase tracking-widest">{card.desc}</p>
              {card.link && <ExternalLink size={16} className="absolute top-6 right-6 text-cyber-cyan/20 group-hover:text-cyber-cyan transition-colors" />}
            </motion.div>
          ))}
        </div>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "The de-identified registry records every transaction from donor to provider — 100% fund traceability.",
            "Clinical verification guarantees: every specialist meets standards, every session is confirmed.",
            "A single set of open de-identified data — the first in Ukraine. All actors see one picture.",
            "Real-time dashboard for humanitarian actors and donors: where the money is, who is working, what the result is.",
            "→ A digital bridge connects those who fund with those who provide help — transparently, measurably, accountably."
          ]
          : [
            "Блокчейн фіксує кожну транзакцію від донора до надавача послуг — 100% простежуваність коштів.",
            "Клінічна верифікація гарантує: кожен спеціаліст відповідає стандартам, кожен сеанс підтверджено.",
            "Єдиний набір відкритих деперсоніфікованих даних — перший в Україні. Всі актори бачать одну картину.",
            "Real-time dashboard для гуманітарних акторів та донорів: де гроші, хто працює, який результат.",
            "→ Цифровий міст з'єднує тих хто фінансує з тими хто надає допомогу — прозоро, вимірювано, підзвітно."
          ]
        } />
      </section>

      {/* WHOLE GOVERNANCE */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="governance"
          title={lang === Language.EN ? "Whole Governance" : "Стратегічна Рамка"}
          accent={lang === Language.EN ? "Strategic Framework" : "Whole Governance"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { title: lang === Language.EN ? "Humanitarian" : "Гуманітарна", items: ["Humanitarian Reset", "OCHA, UNHCR, WHO", "Grand Bargain"], color: "cyber-cyan" },
            { title: lang === Language.EN ? "Tech / Fintech" : "Технологічна / Fintech", items: ["De-identified Registry, P2P", "Banking Integration", "eHealth, IATI"], color: "cyber-purple" },
            { title: lang === Language.EN ? "Sustainability" : "Сталий розвиток", items: ["SDG 3, 8, 17", "GDP Methodology", "Human Capital"], color: "cyber-green" },
            { title: lang === Language.EN ? "Clinical" : "Клінічний", items: ["VR & EMDR Protocols", "mhGAP Stepped Care", "Verification & Supervision"], color: "cyber-cyan" }
          ].map((box, i) => (
            <div key={i} className="cyber-card p-10 rounded-2xl relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-1 h-full bg-${box.color}`}></div>
              <h4 className={`text-xl font-mono font-black mb-8 text-${box.color} uppercase tracking-[0.2em]`}>{box.title}</h4>
              <ul className="space-y-4">
                {box.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-4 text-white/70 group-hover:text-white transition-colors font-mono text-sm uppercase tracking-tight">
                    <div className={`w-2 h-2 bg-${box.color}/40 rounded-sm group-hover:scale-125 transition-transform`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 p-10 rounded-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
             <Layers size={140} className="text-cyber-cyan" />
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light relative z-10">
            {lang === Language.EN 
              ? "Existing initiatives usually work in their own direction. FEEL Again is a software infrastructure created at the intersection of all four expertises. War brought everything to one crossroad with a single non-competitive solution that turns everything into an 'integration landscape'."
              : "Існуючі ініціативи та програми як правило, працюють кожна за своїм напрямом. FEEL Again — це програмна інфраструктура яка створена в центрі перехрестя всіх чотирьох експертиз. Війна звела все на одне перехрестя з єдиним не \"конкурентним\" рішенням яке перетворює все у \"ландшафт інтеграції\"."}
          </p>
        </div>
      </section>

      {/* FINTECH */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="blended-finance"
          title={lang === Language.EN ? "Visa/Mastercard for" : "Visa/Mastercard для"}
          accent={lang === Language.EN ? "MHPSS Services" : "MHPSS послуг"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { label: lang === Language.EN ? "MHPSS Index" : "Індекс MHPSS", val: "87.4", color: "cyber-cyan" },
            { label: lang === Language.EN ? "Active Programs" : "Активні програми", val: "24", color: "cyber-purple" },
            { label: lang === Language.EN ? "Tracked Funds" : "Відстежувані кошти", val: "$177M", color: "cyber-green" },
            { label: lang === Language.EN ? "Beneficiaries" : "Бенефіціари", val: "15M+", color: "cyber-cyan" }
          ].map((kpi, i) => (
            <div key={i} className="cyber-card p-10 rounded-2xl text-center relative group overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${kpi.color}`}></div>
              <div className="text-4xl font-mono font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform">{kpi.val}</div>
              <div className={`text-[10px] font-mono font-black text-${kpi.color}/60 uppercase tracking-[0.3em]`}>{kpi.label}</div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.open('https://mhpss-ukraine-dashboard-199627674101.us-west1.run.app/', '_blank')}
          className="px-12 py-5 bg-cyber-cyan text-black font-mono font-black text-xs uppercase tracking-[0.3em] rounded shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all flex items-center gap-4 mb-20"
        >
          {lang === Language.EN ? "Open Data Dashboard" : "Відкрити Дашборд Даних"} <ExternalLink size={18} />
        </button>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "Humanitarian finance lacks a 'Visa/Mastercard' — there is no single system linking payment to service.",
            "FEEL Again's blockchain ledger creates this link: every transaction is tied to a specific session, provider, and beneficiary.",
            "Blended finance combines humanitarian, corporate, and state flows into one transparent channel.",
            "Automatic reporting removes the administrative burden from both donor and provider.",
            "→ FEEL Again is a payment infrastructure for the MHPSS sector. Like Visa for banks — but for mental health."
          ]
          : [
            "Гуманітарні фінанси не мають \"Visa/Markercard\" — немає єдиної системи що зв'язує платіж з послугою.",
            "Блокчейн-леджер FEEL Again створює цей зв'язок: кожна транзакція прив'язана до конкретного сеансу, провайдера, бенефіціара.",
            "Blended finance об'єднує гуманітарні, корпоративні та державні потоки в один прозорий канал.",
            "Автоматична звітність знімає адміністративне навантаження і з донора, і з виконавця.",
            "→ FEEL Again — це платіжна інфраструктура для сектору MHPSS. Як Visa для банків — тільки для ментального здоров'я."
          ]
        } />
      </section>

      {/* STRATEGIC DEPLOYMENT */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="roadmap"
          title={lang === Language.EN ? "Programmed for Mental Wellbeing." : "Програмовано для ментального добробуту."}
          accent={lang === Language.EN ? "Forged in War Conditions." : "Виковується в умовах війни."}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <DeploymentPhase 
            phase={lang === Language.EN ? "Targeted Modeling" : "Точкове моделювання"} 
            year="2026"
            items={lang === Language.EN ? [
                { title: "Global Actors Projects", subtitle: "Various directions and target audiences with global humanitarian partners.", icon: Globe },
                { title: "Banking System Integration", subtitle: "NBU Charter + EBRD + 38 banks. Financial rails for MHPSS.", icon: Building },
                { title: "Health Cluster (WHO)", subtitle: "Session by session reporting + Digital Bus integration.", icon: Activity }
            ] : [
                { title: "Проєкти з глобальними акторами", subtitle: "Різні напрями та цільові аудиторії з міжнародними партнерами.", icon: Globe },
                { title: "Проєкт з банківською системою", subtitle: "Хартія НБУ + EBRD + 38 банків. Фінансові рейки для MHPSS.", icon: Building },
                { title: "Health Cluster (WHO)", subtitle: "Session by session reporting + Digital Bus інтеграція.", icon: Activity }
            ]} 
          />
          <DeploymentPhase 
            phase={lang === Language.EN ? "Regional Deployment" : "Регіональне розгортання"} 
            year="2027"
            items={lang === Language.EN ? [
                { title: "Clinical & Humanitarian Sync", subtitle: "Integration of clinical and humanitarian indicators.", icon: Layers },
                { title: "Military Integration", subtitle: "Gateway from hospital to civilian psychologist.", icon: Shield },
                { title: "Regional Deploy", subtitle: "Competition for Mental Wellbeing across 24 regions.", icon: Target },
                { title: "Regulatory Framework", subtitle: "Creating conditions for formalization as a foundation for sustainable development.", icon: Scale }
            ] : [
                { title: "Інтеграція показників", subtitle: "Синхронізація клінічних та гуманітарних показників.", icon: Layers },
                { title: "Military Integration", subtitle: "Шлюз від шпиталю до цивільного психолога.", icon: Shield },
                { title: "Regional Deploy", subtitle: "Змагання за Ментальний Добробут 24 області.", icon: Target },
                { title: "Regulatory Framework", subtitle: "Створення умов для формалізації як фундаменту сталого розвитку.", icon: Scale }
            ]} 
          />
          <DeploymentPhase 
            phase={lang === Language.EN ? "National Coverage" : "Національне охоплення"} 
            year="2028+"
            items={lang === Language.EN ? [
                { title: "Integration with 'How Are You?'", subtitle: "Full national integration with the state program.", icon: TrendingUp },
                { title: "Licensing Model", subtitle: "Implementation of the national licensing model for providers.", icon: CheckCircle },
                { title: "National Response Model", subtitle: "Creation of a response model based on real disaster experience.", icon: Activity }
            ] : [
                { title: "Інтеграція з «Ти Як?»", subtitle: "Повна національна інтеграція з державною програмою.", icon: TrendingUp },
                { title: "Модель ліцензування", subtitle: "Впровадження національної моделі ліцензування надавачів.", icon: CheckCircle },
                { title: "Модель реагування", subtitle: "Створення моделі національного реагування на реальному досвіді.", icon: Activity }
            ]} 
          />
        </div>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "Launch not in a lab — but on real budgets of real humanitarian actors and successful projects of local NGOs.",
            "Scaling integrates the military sector — the most critical and most important cohort.",
            "National coverage transitions the infrastructure to a licensing model — the program becomes self-sustaining.",
            "Each subsequent phase creates an evidence base and regulatory pressure for the next — a sequence of blocking victories.",
            "→ Launch proves the model, opens regions, which pave the way to the country."
          ]
          : [
            "Запуск не в лабораторії — а на реальних бюджетах реальних гуманітарних акторів та успішних проєктах локальних НУО.",
            "Масштабування інтегрує військовий сектор — найбільш критичну та найбільш важливу когорту.",
            "Національне охоплення переводить інфраструктуру на модель ліцензування — програма стає самоокупною.",
            "Кожна наступна фаза створює доказову базу та регуляторний тиск для наступної — послідовність блокуючих перемог.",
            "→ Запуск доводить модель, та відкриває регіони, які прокладають шлях до країни."
          ]
        } />
      </section>

      {/* DISTRIBUTION */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="distribution"
          title={lang === Language.EN ? "Human Capital" : "Людський Капітал"}
          accent={lang === Language.EN ? "Supply Chain" : "Ланцюг Поставок"}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-mono font-black mb-8 uppercase tracking-tighter text-white">
              {lang === Language.EN ? "Distribution of the human capital supply chain for private sector development" : "Розподіл ланцюга поставок людського капіталу для розвитку приватного сектору"}
            </h3>
            <p className="text-white/60 leading-relaxed mb-10 font-light text-lg">
              {lang === Language.EN 
                ? "Our model integrates the 'invisible' private sector into the humanitarian response, creating a unified supply chain of clinical expertise."
                : "Наша модель інтегрує «невидимий» приватний сектор у гуманітарне реагування, створюючи єдиний ланцюг поставок клінічної експертизи."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: lang === Language.EN ? "Private Platforms" : "Приватні Платформи", color: "bg-cyber-purple" },
                { label: lang === Language.EN ? "FOP (Private Practice)" : "ФОП (Приватна Практика)", color: "bg-cyber-cyan" },
                { label: lang === Language.EN ? "State Medical Sector" : "Державний Медсектор", color: "bg-cyber-green" },
                { label: lang === Language.EN ? "NGO / Health Cluster" : "НУО / Health Cluster", color: "bg-cyber-cyan" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`w-3 h-3 rounded-sm ${item.color} group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(0,229,255,0.4)]`} />
                  <span className="text-xs font-mono font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cyber-card p-10 rounded-2xl h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            <PsychologistDistributionChart lang={lang} />
          </div>
        </div>

        {/* Enhanced Content from Document */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
               <Target size={120} className="text-cyber-cyan" />
            </div>
            <h4 className="text-xl font-mono font-black mb-6 text-cyber-cyan uppercase tracking-[0.2em]">
              {lang === Language.EN ? "Strategic Action: Sector Mobilization" : "Стратегічна Дія: Мобілізація Секторів"}
            </h4>
            <p className="text-base text-white/70 leading-relaxed font-light relative z-10">
              {lang === Language.EN 
                ? "We collect and direct private practice to humanitarian response using evidence-based methods across four key sectors: Formalized Practice, Non-formalized Practice, Graduate Specialists, and the broader Humanitarian Sector. This creates a 'Clinical Reserve' ready for immediate deployment."
                : "Ми збираємо та спрямовуємо приватну практику на гуманітарне реагування, використовуючи доказові методи у чотирьох ключових секторах: Формалізована практика, Неформалізована практика, Випускники-фахівці та ширший Гуманітарний сектор. Це створює «Клінічний Резерв», готовий до негайного розгортання."}
            </p>
          </div>
          <div className="cyber-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
               <Activity size={120} className="text-cyber-cyan" />
            </div>
            <h4 className="text-xl font-mono font-black mb-6 text-white uppercase tracking-[0.2em]">
              {lang === Language.EN ? "Digital Infrastructure Backbone" : "Цифровий Хребет Інфраструктури"}
            </h4>
            <ul className="space-y-4 text-sm font-mono text-white/60 relative z-10">
              <li className="flex items-center gap-4 group/li">
                <CheckCircle size={18} className="text-cyber-cyan group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-white transition-colors uppercase tracking-tight">{lang === Language.EN ? "Unified de-identified registry for all MHPSS actors" : "Єдиний де-персоніфікований реєстр для всіх акторів MHPSS"}</span>
              </li>
              <li className="flex items-center gap-4 group/li">
                <CheckCircle size={18} className="text-cyber-cyan group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-white transition-colors uppercase tracking-tight">{lang === Language.EN ? "Real-time transaction transparency (Donors to Providers)" : "Прозорість транзакцій у реальному часі (від Донорів до Виконавців)"}</span>
              </li>
              <li className="flex items-center gap-4 group/li">
                <CheckCircle size={18} className="text-cyber-cyan group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-white transition-colors uppercase tracking-tight">{lang === Language.EN ? "Automated IATI and mhGAP compliance reporting" : "Автоматизована звітність за стандартами IATI та mhGAP"}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="outcomes"
          title={lang === Language.EN ? "What Changes" : "Що зміниться"}
          accent={lang === Language.EN ? "When It Works" : "коли запрацює"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { label: lang === Language.EN ? "Transparency" : "Прозорість", val: "100%", desc: lang === Language.EN ? "Traceability from donor to provider" : "простежуваність транзакцій", color: "cyber-cyan" },
            { label: lang === Language.EN ? "Access" : "Доступ", val: "74% → 50%", desc: lang === Language.EN ? "Reduction in treatment gap" : "зменшення treatment gap", color: "cyber-purple" },
            { label: lang === Language.EN ? "Efficiency" : "Ефективність", val: "<10%", desc: lang === Language.EN ? "Overhead reduction" : "зменшення адмінвитрат", color: "cyber-green" },
            { label: lang === Language.EN ? "Data Sovereignty" : "Суверенність даних", val: "Unified", desc: lang === Language.EN ? "First open de-identified set" : "перший єдиний набір даних", color: "cyber-cyan" },
            { label: lang === Language.EN ? "Clinical Quality" : "Клінічна якість", val: "Verified", desc: lang === Language.EN ? "Protocol monitoring" : "моніторинг протоколів", color: "cyber-purple" },
            { label: lang === Language.EN ? "Economy" : "Економіка", val: "GDP+", desc: lang === Language.EN ? "Impact assessment methodology" : "оцінка впливу на ВВП", color: "cyber-green" }
          ].map((card, i) => (
            <div key={i} className="cyber-card p-10 rounded-2xl relative group overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${card.color}`}></div>
              <div className={`text-cyber-cyan font-mono font-black text-[10px] uppercase tracking-[0.3em] mb-6 text-${card.color}`}>{card.label}</div>
              <div className="text-4xl font-mono font-black mb-3 tracking-tighter text-white group-hover:scale-105 transition-transform">{card.val}</div>
              <p className="text-sm font-mono text-white/40 uppercase tracking-widest">{card.desc}</p>
            </div>
          ))}
        </div>

        <Description4to1 items={
          lang === Language.EN 
          ? [
            "Transparency: instead of 'we spent $X' — 'here is a specific beneficiary, specialist, session, and result.'",
            "Efficiency: 97% of funds to the beneficiary vs. industry standard 40-60%.",
            "Quality: not 'trained 96,000 people' but 'verified X sessions with Y clinical outcome.'",
            "Data: instead of 24 separate reports — one dashboard, one truth, one language.",
            "→ The result — the first infrastructure where every hryvnia has a clinical address."
          ]
          : [
            "Прозорість: замість \"ми витратили $X\" — \"ось конкретний бенефіціар, конкретний спеціаліст, конкретний сеанс, конкретний результат.\"",
            "Ефективність: 97% коштів до бенефіціара vs. індустріальний стандарт 40-60%.",
            "Якість: не \"навчили 96,000 осіб\" а \"верифікували X сеансів з Y клінічним результатом за протоколом Z.\"",
            "Дані: замість 24 окремих звітів — один дашборд, одна правда, одна мова.",
            "→ Результат — перша інфраструктура де кожна гривня має клінічний адресу."
          ]
        } />
      </section>

      {/* TEAM / CONSORTIUM */}
      <section className="min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 relative z-10">
        <SectionHeader 
          id="team"
          title={lang === Language.EN ? "Consortium" : "Консорціум"}
          accent={lang === Language.EN ? "Strategic Team" : "Стратегічна Команда"}
        />

        {/* Radial Team Layout */}
        <div className="relative w-full h-[600px] flex items-center justify-center mb-32">
          {/* Central Hub */}
          <div className="relative z-20 w-48 h-48 rounded-full bg-black border-2 border-cyber-cyan shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col items-center justify-center text-center p-4 group hover:scale-110 transition-transform duration-500">
             <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-20"></div>
             <Users size={40} className="text-cyber-cyan mb-2" />
             <span className="text-sm font-mono font-black text-white uppercase tracking-widest">{lang === Language.EN ? "TEAM" : "КОМАНДА"}</span>
             <span className="text-[8px] text-cyber-cyan/60 font-mono uppercase tracking-widest mt-1">{lang === Language.EN ? "Core Leadership" : "Керівний склад"}</span>
          </div>

          {/* Team Members - Positioned Radially */}
          {[
            { name: "Alex Zvolinskiy", role: "COP FEEL Again", linkedin: "alexeyzvolinskiy", img: "https://media.licdn.com/dms/image/v2/D4E03AQG8_X_X_X_X/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700000000000?e=1740000000&v=beta&t=X" },
            { name: "Olga Kalga", role: "Partnerships", linkedin: "olga-kalga-326a0a93" },
            { name: "Dr. Skip Rizzo", role: "VR Advisor", linkedin: "skiprizzovr" },
            { name: "Arsen Nizelsky", role: "Legal Advisor", linkedin: "arsen-nizelsky-59aba428" },
            { name: "Denys Goncharenko", role: "Fintech", linkedin: "denys-goncharenko" },
            { name: "Oleg Lysiuk", role: "Banking", linkedin: "oleg-lysiuk-138b6683" }
          ].map((member, i, arr) => {
            const angle = (i / arr.length) * 2 * Math.PI;
            const radius = 240; // Desktop radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 100 }}
                style={{ 
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
                className="group z-30"
              >
                <div className="relative">
                  {/* Connection Line to Center */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-[240px] h-px bg-gradient-to-r from-cyber-cyan/40 to-transparent origin-left z-0 hidden md:block"
                    style={{ 
                      transform: `rotate(${angle + Math.PI}rad) translateX(-240px)`,
                    }}
                  ></div>

                  <div className="w-20 h-20 rounded-full bg-black border border-cyber-cyan/30 overflow-hidden group-hover:border-cyber-cyan group-hover:scale-110 transition-all duration-500 shadow-lg relative z-10">
                    <img 
                      src={member.img || `https://ui-avatars.com/api/?name=${member.name}&background=00E5FF&color=000`} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Member Info - Tooltip style */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-40">
                    <div className="bg-black/90 backdrop-blur-md border border-cyber-cyan/40 p-3 rounded shadow-2xl">
                       <div className="text-xs font-mono font-black text-white uppercase">{member.name}</div>
                       <div className="text-[8px] font-mono text-cyber-cyan uppercase tracking-widest">{member.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           {[
             { title: lang === Language.EN ? "Clinical Stack" : "Клінічний стек", desc: "Geha Clalit + USC ICT + UA Psychologists", hover: "Supervision, protocol monitoring, project management.", color: "cyber-cyan" },
             { title: lang === Language.EN ? "Tech/Fintech Stack" : "Tech/Fintech стек", desc: "HighCastle + Enkidu + P2P", hover: "Transaction tracking, blended finance, program management.", color: "cyber-purple" },
             { title: lang === Language.EN ? "Coordination" : "Координація", desc: "Open Data + Dashboard", hover: "Unified data set, digital coordination, automated reporting.", color: "cyber-green" },
             { title: lang === Language.EN ? "Academic Stack" : "Академічний стек", desc: "KNU Shevchenko + Oxford + Groningen", hover: "Methodology, research, GDP impact assessment.", color: "cyber-cyan" }
           ].map((stack, i) => (
             <div key={i} className="group relative cyber-card p-10 rounded-2xl overflow-hidden border-white/5">
                <div className={`absolute top-0 left-0 w-1 h-full bg-${stack.color}`}></div>
                <h4 className={`text-2xl font-mono font-black mb-3 text-${stack.color} uppercase tracking-tighter`}>{stack.title}</h4>
                <p className="text-sm font-mono text-white/50 uppercase tracking-widest">{stack.desc}</p>
                <div className={`absolute inset-0 bg-${stack.color} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-10 rounded-2xl z-20`}>
                   <p className="text-black font-mono font-black text-center text-lg uppercase tracking-tight">{stack.hover}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Partner Logos Section */}
        <div className="mt-32 pt-16 border-t border-cyber-cyan/10">
          <h3 className="text-center text-cyber-cyan/30 text-[10px] font-mono font-black uppercase tracking-[0.5em] mb-16">
            {lang === Language.EN ? "Strategic Consortium Partners" : "Стратегічні Партнери Консорціуму"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 items-center justify-items-center opacity-40 hover:opacity-100 transition-all duration-700">
            {[
              { variant: 'open_society', link: 'https://www.opensocietyfoundations.org/' },
              { variant: 'geha', link: 'https://www.geha.org.il/' },
              { variant: 'usc', link: 'https://ict.usc.edu/' },
              { variant: 'solana', link: 'https://highcastle.co/' },
              { variant: 'shevchenko', link: 'https://www.knu.ua/' }
            ].map((partner, i) => (
              <motion.a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, filter: 'brightness(1.5)' }}
                className="w-48 h-20 grayscale hover:grayscale-0 transition-all duration-500 flex items-center justify-center"
              >
                <PartnerLogo variant={partner.variant} className="w-full h-full object-contain" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-cyber-cyan/10 text-center relative z-10">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
           <Globe size={600} className="text-cyber-cyan animate-pulse-glow" />
        </div>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-8xl font-mono font-black mb-12 uppercase tracking-tighter leading-none"
        >
          {lang === Language.EN ? "Restoring Mental Well-Being:" : "Відновлення Ментального Здоров'я:"}<br />
          <span className="text-cyber-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">{lang === Language.EN ? "Rebuilding Ukraine" : "Відбудова України"}</span>
        </motion.h2>
        <p className="text-xl md:text-3xl text-white/40 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          {lang === Language.EN 
            ? "Created as a humanitarian response. Processed in tough conditions. Will work anywhere."
            : "Створено як гуманітарна відповідь. Опрацьовується в жорстких умовах. Буде працювати будь-де."}
        </p>
        <div className="flex flex-col items-center gap-8">
          <a href="mailto:partnership@feelagain.me" className="text-2xl md:text-5xl font-mono font-black text-white hover:text-cyber-cyan transition-all tracking-tighter border-b-2 border-transparent hover:border-cyber-cyan pb-2">partnership@feelagain.me</a>
          <a href="https://www.feelagain.me" className="text-cyber-cyan/40 font-mono font-black uppercase tracking-[0.4em] hover:text-cyber-cyan transition-colors text-sm">www.feelagain.me</a>
        </div>
      </section>

      {/* PiP Video */}
      <AnimatePresence>
        {pipVideo && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed bottom-24 right-6 w-80 aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.3)] border border-cyber-cyan/30 z-[1000]"
          >
            <button 
              onClick={() => { setVideoClosed(true); setPipVideo(false); }}
              className="absolute top-2 right-2 z-10 p-1 bg-black/50 rounded-full hover:bg-black transition-colors"
            >
              <X size={16} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/GC1KShJIADw?autoplay=1&mute=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StrategicDeck;
