
import React from 'react';
import { CheckCircle, Download, FileText, AlertTriangle, Activity, RefreshCw, Plus, Search, Shield, Eye, Zap } from 'lucide-react';
import { Language } from '../types';

// Mockup based on "Звітність та Стандарти" screenshot
export const TransparencyDashboardMockup: React.FC<{ lang?: Language }> = ({ lang = Language.EN }) => (
  <div className="bg-[#F8F9FB] p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900">{lang === Language.EN ? "Reporting & Standards" : "Звітність та стандарти"}</h3>
      <p className="text-xs text-gray-500 mt-1">{lang === Language.EN ? "Automated reporting according to Grand Bargain & IATI standards" : "Автоматизована звітність згідно зі стандартами Grand Bargain та IATI"}</p>
    </div>

    <div className="flex gap-3 mb-6">
       <div className="bg-white px-4 py-2 rounded border border-gray-200 text-sm text-gray-700 flex-1">{lang === Language.EN ? "Current Year" : "Поточний рік"}</div>
       <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium hover:bg-blue-700">
          <Download size={14} /> {lang === Language.EN ? "Export Reports" : "Експорт звітів"}
       </button>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-grow">
       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <CheckCircle size={16} className="text-green-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">Grand Bargain</div>
                   <div className="text-[10px] text-gray-500">{lang === Language.EN ? "Compliance" : "Відповідність"}</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-green-500 mt-2">88%</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <GlobeIcon className="text-blue-500 mt-0.5 w-4 h-4" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">IATI Standard</div>
                   <div className="text-[10px] text-gray-500">{lang === Language.EN ? "Compliance" : "Відповідність"}</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-blue-500 mt-2">92%</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <FileText size={16} className="text-indigo-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">{lang === Language.EN ? "Auto-Reports" : "Авто-звіти"}</div>
                   <div className="text-[10px] text-gray-500">{lang === Language.EN ? "This Month" : "Цього місяця"}</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-indigo-600 mt-2">156</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <RefreshCw size={16} className="text-emerald-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">{lang === Language.EN ? "Last Sync" : "Остання синхр."}</div>
                   <div className="text-[10px] text-gray-500">IATI Registry</div>
               </div>
           </div>
           <div className="text-lg font-bold text-emerald-500 mt-2">15.12.2024</div>
       </div>
    </div>
  </div>
);

// Mockup based on "Monitoring & Control" screenshot
export const MonitoringDashboardMockup: React.FC<{ lang?: Language }> = ({ lang = Language.EN }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
     <div className="mb-6 flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold text-gray-900">{lang === Language.EN ? "Monitoring & Control" : "Моніторинг та контроль"}</h3>
            <p className="text-xs text-gray-500 mt-1">{lang === Language.EN ? "AI/ML Analytics & De-identified Registry" : "AI/ML аналітика та деідентифікований реєстр"}</p>
        </div>
        <div className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> {lang === Language.EN ? "Live" : "Наживо"}
        </div>
     </div>

     <div className="flex gap-2 mb-6 text-xs border-b border-gray-100 pb-2">
         <span className="font-bold text-gray-900 border-b-2 border-black pb-2">{lang === Language.EN ? "AI/ML Automation" : "AI/ML Автоматизація"}</span>
         <span className="text-gray-400 px-2">{lang === Language.EN ? "Registry Monitor" : "Монітор реєстру"}</span>
         <span className="text-gray-400 px-2">{lang === Language.EN ? "Anomalies" : "Аномалії"}</span>
     </div>

     <div className="grid grid-cols-2 gap-4 mb-6">
         <div className="border border-gray-100 rounded p-3">
             <div className="text-xs text-gray-500 mb-1">{lang === Language.EN ? "Detected Anomalies" : "Виявлені аномалії"}</div>
             <div className="flex justify-between items-end">
                 <div className="text-2xl font-bold text-red-600">6</div>
                 <AlertTriangle size={16} className="text-red-500 mb-1" />
             </div>
             <div className="text-[10px] text-red-400 mt-1">{lang === Language.EN ? "Requires Attention" : "Потребує уваги"}</div>
         </div>
         <div className="border border-gray-100 rounded p-3">
             <div className="text-xs text-gray-500 mb-1">{lang === Language.EN ? "Risk Score" : "Оцінка ризику"}</div>
             <div className="flex justify-between items-end">
                 <div className="text-2xl font-bold text-yellow-600">12.8%</div>
                 <Eye size={16} className="text-yellow-500 mb-1" />
             </div>
             <div className="text-[10px] text-yellow-500 mt-1">{lang === Language.EN ? "Moderate" : "Помірний"}</div>
         </div>
     </div>

     <div className="bg-[#F8F9FB] rounded-lg p-4 border border-gray-100 mt-auto">
         <div className="flex justify-between items-center mb-2">
             <div className="flex items-center gap-2">
                 <Shield size={16} className="text-blue-500" />
                 <span className="font-bold text-gray-800 text-sm">{lang === Language.EN ? "Fraud Detection Model" : "Модель виявлення шахрайства"}</span>
             </div>
             <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">{lang === Language.EN ? "Active" : "Активна"}</span>
         </div>
         <p className="text-[10px] text-gray-500 leading-tight mb-3">
             {lang === Language.EN ? "Real-time transaction analysis for anomaly detection in MHPSS funding." : "Аналіз транзакцій у реальному часі для виявлення аномалій у фінансуванні MHPSS."}
         </p>
         <div className="flex justify-between text-[10px] text-gray-600 mb-1">
             <span>{lang === Language.EN ? "Accuracy" : "Точність"}</span>
             <span className="font-bold">98.7%</span>
         </div>
         <div className="w-full bg-gray-200 h-1.5 rounded-full">
             <div className="w-[98.7%] h-full bg-blue-500 rounded-full"></div>
         </div>
     </div>
  </div>
);

// Mockup based on "Funding Programs" screenshot
export const FundingDashboardMockup: React.FC<{ lang?: Language }> = ({ lang = Language.EN }) => (
    <div className="bg-[#F8F9FB] p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
        <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">{lang === Language.EN ? "Funding Programs" : "Програми фінансування"}</h3>
            <p className="text-xs text-gray-500 mt-1">{lang === Language.EN ? "Digital support with transparent tracking" : "Цифрова підтримка з прозорим відстеженням"}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">{lang === Language.EN ? "Active Programs" : "Активні програми"}</div>
                <div className="text-2xl font-bold text-gray-900">47</div>
            </div>
             <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">{lang === Language.EN ? "Transparency" : "Прозорість"}</div>
                <div className="text-2xl font-bold text-gray-900">98.5%</div>
            </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex-grow">
            <h4 className="font-bold text-gray-900 text-sm mb-3">{lang === Language.EN ? "Recommended Program" : "Рекомендована програма"}</h4>
            <div className="text-xs font-semibold text-gray-800 mb-2">
                {lang === Language.EN ? "MHPSS Support for 250 Adolescents - Zhytomyr Region" : "Підтримка MHPSS для 250 підлітків - Житомирська область"}
            </div>
            <div className="flex gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded">{lang === Language.EN ? "Psychological Support" : "Психологічна допомога"}</span>
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-medium">{lang === Language.EN ? "Verified" : "Верифіковано"}</span>
            </div>
            
            <div className="mt-auto">
                <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">{lang === Language.EN ? "Funding Progress" : "Прогрес фінансування"}</span>
                    <span className="font-bold text-gray-900">75%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mb-1">
                    <div className="w-[75%] h-full bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px]">
                    <span className="font-bold text-gray-900">$187,500</span>
                    <span className="text-gray-400">{lang === Language.EN ? "from $250,000" : "з $250,000"}</span>
                </div>
            </div>
        </div>
        
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-3 rounded mt-4 flex items-center justify-center gap-2 transition-colors">
            <Plus size={16} /> {lang === Language.EN ? "Create Campaign" : "Створити кампанію"}
        </button>
    </div>
);

// Mockup for Innovation & Capacity Building
export const InnovationMockup: React.FC<{ lang?: Language }> = ({ lang = Language.EN }) => (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 font-sans h-full flex flex-col text-white">
        <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-400">{lang === Language.EN ? "Innovation Line" : "Лінія інновацій"}</h3>
            <p className="text-xs text-slate-400 mt-1">{lang === Language.EN ? "Advanced Clinical Methodology & VR Training" : "Передова клінічна методологія та VR-навчання"}</p>
        </div>

        <div className="space-y-4 flex-grow">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 rounded text-emerald-400">
                        <Zap size={18} />
                    </div>
                    <div>
                        <div className="text-sm font-bold">{lang === Language.EN ? "VR-Therapy Scenarios" : "Сценарії VR-терапії"}</div>
                        <div className="text-[10px] text-slate-400">{lang === Language.EN ? "Partner: USC ICT" : "Партнер: USC ICT"}</div>
                    </div>
                </div>
                <div className="flex justify-between text-[10px] mb-1">
                    <span>{lang === Language.EN ? "Integration Progress" : "Прогрес інтеграції"}</span>
                    <span className="text-emerald-400">95%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full">
                    <div className="w-[95%] h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500/20 rounded text-blue-400">
                        <Activity size={18} />
                    </div>
                    <div>
                        <div className="text-sm font-bold">{lang === Language.EN ? "EMDR Protocols" : "Протоколи EMDR"}</div>
                        <div className="text-[10px] text-slate-400">{lang === Language.EN ? "Partner: Geha Clalit" : "Партнер: Geha Clalit"}</div>
                    </div>
                </div>
                <div className="flex justify-between text-[10px] mb-1">
                    <span>{lang === Language.EN ? "Specialist Training" : "Навчання фахівців"}</span>
                    <span className="text-blue-400">82%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full">
                    <div className="w-[82%] h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
            <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[8px] font-bold">
                        UA
                    </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-emerald-500 flex items-center justify-center text-[8px] font-bold">
                    +12
                </div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lang === Language.EN ? "Active Specialists" : "Активні фахівці"}</span>
        </div>
    </div>
);

// Helper Icon
const GlobeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);
