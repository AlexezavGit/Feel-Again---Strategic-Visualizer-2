
import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Language, DocumentId } from '../types';
import { GDPChart, ShadowEconomyChart, LocalizationGapChart, DonorDashboardMock, DeriskingChart, GlobalLocalFlowChart } from './Charts';
import { TransparencyDashboardMockup, MonitoringDashboardMockup, FundingDashboardMockup, InnovationMockup } from './DashboardMockups';
import { ChevronRight, ChevronLeft, CornerUpLeft } from 'lucide-react';
import { PartnerLogo } from './PartnerLogos';

interface ReportViewProps {
  lang: Language;
  docId: DocumentId;
  currentPageId: number;
  onPageChange: (pageId: number) => void;
  onBackToSchema: () => void;
  onNextDoc: () => void;
}

const ReportView: React.FC<ReportViewProps> = ({ lang, docId, currentPageId, onPageChange, onBackToSchema, onNextDoc }) => {
  const t = CONTENT[lang].docs[docId].report;
  const tCenter = CONTENT[lang].docs[docId].schema.centerNode;
  const chartLabels = CONTENT[lang].charts;
  const navLabels = CONTENT[lang].appNav;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPageId, docId]);

  // Linear Navigation Logic
  const totalPages = t.pages.length;
  const currentPage = t.pages.find(p => p.id === currentPageId) || t.pages[0];
  const isCenterPage = currentPageId === totalPages; 

  const next = () => {
    if (currentPageId < totalPages) {
        onPageChange(currentPageId + 1);
    } else {
        // When clicking Next on the last page (Solution), go to the next Document (Frontal Page)
        onNextDoc();
    }
  };
  
  const prev = () => {
    if (currentPageId > 1) {
        onPageChange(currentPageId - 1);
    } else {
        onBackToSchema();
    }
  };

  const renderChart = (chartId?: string) => {
    if (!chartId) return null;
    switch (chartId) {
      case 'shadowVsCluster':
        return <ShadowEconomyChart label={chartLabels.shadowVsCluster} lang={lang} />;
      case 'fundingGap':
        return <GDPChart label={chartLabels.fundingGap} lang={lang} />;
      case 'donorDashboard':
        return <DonorDashboardMock label={chartLabels.donorDashboard} lang={lang} />;
      case 'dashboard_transparency':
        return <TransparencyDashboardMockup lang={lang} />;
      case 'dashboard_monitoring':
        return <MonitoringDashboardMockup lang={lang} />;
      case 'dashboard_funding':
        return <FundingDashboardMockup lang={lang} />;
      case 'adminCost':
        return <LocalizationGapChart label={chartLabels.adminCost} lang={lang} />;
      case 'derisking':
        return <DeriskingChart label={chartLabels.derisking} lang={lang} />;
      case 'globalLocal':
        return <GlobalLocalFlowChart label={chartLabels.globalLocal} lang={lang} />;
      case 'techStack':
        return <InnovationMockup lang={lang} />;
      default:
        return null;
    }
  };

  const parseText = (text: string) => {
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen p-2 md:p-8 pb-32 relative z-10">
      {/* Main Report Card - Compact */}
      <div className="cyber-card rounded shadow-2xl relative overflow-hidden flex flex-col border-cyber-cyan/20">
        
        {/* Accent Top Bar */}
        <div className={`w-full h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan animate-flow`}></div>

        <div className="p-4 md:p-12 relative z-10">
            
            {/* Page Title Section */}
            <div className="border-b border-cyber-cyan/10 pb-6 mb-8">
              <h1 className="text-2xl md:text-5xl font-mono font-black text-white mb-3 uppercase tracking-tighter leading-none">
                {currentPage.title}
              </h1>
              
              <p className="text-sm md:text-xl text-cyber-cyan/60 font-mono font-bold uppercase tracking-tight leading-snug">
                {currentPage.subtitle}
              </p>
            </div>
            
            {/* Body Content */}
            <div className="flex flex-col lg:flex-row gap-12">
               <div className="flex-1">
                 <p className="text-sm md:text-lg text-white/80 leading-relaxed text-justify mb-8 font-light">
                    {parseText(currentPage.body)}
                 </p>
                 
                 {currentPage.quote && (
                   <div className="border-l-4 border-cyber-purple pl-6 py-4 mb-8 italic text-cyber-purple/80 text-sm md:text-xl bg-cyber-purple/5 rounded-r font-serif">
                     "{currentPage.quote}"
                   </div>
                 )}

                 {currentPage.signature && (
                   <div className="mb-8 text-right">
                     <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-cyber-cyan bg-cyber-cyan/10 px-3 py-1 rounded border border-cyber-cyan/20">
                       {currentPage.signature}
                     </span>
                   </div>
                 )}

                 <div className="space-y-4">
                    <h4 className="text-[10px] font-mono font-black uppercase text-cyber-cyan/40 tracking-[0.3em] border-b border-cyber-cyan/10 pb-2 mb-4">{lang === Language.EN ? 'Key Takeaways' : 'Ключові висновки'}</h4>
                    {currentPage.bullets.map((b, i) => (
                      <div key={i} className="flex gap-3 text-sm md:text-base text-white/70 items-start font-medium group">
                        <span className={`w-2 h-2 rounded-sm mt-1.5 shrink-0 bg-cyber-cyan group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(0,229,255,0.5)]`} />
                        {b}
                      </div>
                    ))}
                 </div>
                 
                 {isCenterPage && tCenter.consortiumRoles && (
                     <div className="mt-12 pt-8 border-t border-cyber-cyan/10">
                         <h4 className="text-[10px] font-mono font-black uppercase text-cyber-cyan/40 tracking-[0.3em] mb-6">{lang === Language.EN ? 'Consortium Partners' : 'Партнери консорціуму'}</h4>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {tCenter.consortiumRoles.map((role, idx) => (
                                <div key={idx} className="p-4 border border-cyber-cyan/10 bg-black/40 rounded text-center hover:border-cyber-cyan/50 hover:bg-black/60 transition-all flex flex-col items-center justify-between group">
                                    <div className="h-12 w-full flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
                                        <PartnerLogo variant={role.logo} className="h-full w-full" />
                                    </div>
                                    <div className="text-[9px] font-mono font-black text-cyber-cyan/60 uppercase tracking-widest">{role.org}</div>
                                </div>
                            ))}
                         </div>
                     </div>
                 )}

               </div>
               
               {/* Right Column: Charts */}
               {currentPage.chartId && (
                 <div className="flex-1 lg:max-w-md">
                    <div className="sticky top-24">
                        <div className="p-1">
                            {renderChart(currentPage.chartId)}
                        </div>
                        {CONTENT[lang].charts[currentPage.chartId] && (
                            <div className="mt-4 flex items-center justify-between border-t border-cyber-cyan/10 pt-3 px-2">
                                <span className="text-[10px] text-cyber-cyan/30 uppercase font-mono font-black tracking-widest">{lang === Language.EN ? 'Fig' : 'Рис.'} {currentPageId}.1</span>
                                <span className="text-[10px] text-cyber-cyan font-mono font-black uppercase tracking-wider">{CONTENT[lang].charts[currentPage.chartId]}</span>
                            </div>
                        )}
                    </div>
                 </div>
               )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
