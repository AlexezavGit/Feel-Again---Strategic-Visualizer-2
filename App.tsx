
import React, { useState, useEffect } from 'react';
import { ViewMode, Language, DocumentId } from './types';
import { CONTENT } from './constants';
import SchemaView from './components/SchemaView';
import ReportView from './components/ReportView';
import HeroView from './components/HeroView';
import StrategicDeck from './components/StrategicDeck';
import DashboardView from './components/DashboardView';
import FeelAgainLogo from './components/Logo';
import { Globe, ChevronRight, ChevronLeft, Menu, X, ShieldAlert, Loader2, Layers, CornerUpLeft, BarChart3 } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [view, setView] = useState<ViewMode>(ViewMode.HERO);
  const [activeDoc, setActiveDoc] = useState<DocumentId>(DocumentId.CHALLENGE);
  const [reportPage, setReportPage] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [view, activeDoc, reportPage]);

  const toggleLang = () => setLang(l => l === Language.EN ? Language.UA : Language.EN);
  const appT = CONTENT[lang].appNav;
  
  // Navigation Sequence
  const navSequence = [
    'HERO',
    'DECK',
    'DASHBOARD',
    DocumentId.CHALLENGE,
    DocumentId.IMPERATIVE,
    DocumentId.GOVERNANCE,
    DocumentId.INFRASTRUCTURE,
    DocumentId.FINANCE,
    DocumentId.OPERATIONAL,
    DocumentId.MONITORING,
    DocumentId.PARTNERS
  ];

  const switchDoc = (direction: 'next' | 'prev') => {
    // Determine current index based on view
    let currentIndex = -1;
    if (view === ViewMode.HERO) {
      currentIndex = 0;
    } else if (view === ViewMode.DECK) {
      currentIndex = 1;
    } else if (view === ViewMode.DASHBOARD) {
      currentIndex = 2;
    } else {
      currentIndex = navSequence.indexOf(activeDoc);
    }

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Cycle
    if (newIndex >= navSequence.length) newIndex = 0;
    if (newIndex < 0) newIndex = navSequence.length - 1;
    
    const target = navSequence[newIndex];

    if (target === 'HERO') {
      setView(ViewMode.HERO);
    } else if (target === 'DECK') {
      setView(ViewMode.DECK);
    } else if (target === 'DASHBOARD') {
      setView(ViewMode.DASHBOARD);
    } else {
      setActiveDoc(target as DocumentId);
      setView(ViewMode.SCHEMA); 
    }
    
    setReportPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNodeClick = (pageId: number) => {
    setReportPage(pageId);
    setView(ViewMode.REPORT);
  };

  const Sidebar = () => (
    // Stronger background opacity for readability against bright gradient
    <div className={`fixed top-0 left-0 h-full w-64 bg-black/95 backdrop-blur-2xl border-r border-cyber-cyan/10 z-50 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex flex-col h-full">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3 cursor-pointer group" onClick={() => { setView(ViewMode.HERO); setMobileMenuOpen(false); }}>
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-xl overflow-hidden shadow-lg p-1">
                   <FeelAgainLogo className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white tracking-tight text-base leading-none mb-0.5">FEEL AGAIN</span>
                  <span className="text-[10px] uppercase tracking-wider text-cyber-cyan font-bold whitespace-nowrap">Strategic Briefing</span>
                </div>
            </div>

            <nav className="flex-grow space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                {navSequence.map((item, idx) => {
                  if (item === 'HERO') {
                    return (
                      <button
                          key="HERO"
                          onClick={() => { setView(ViewMode.HERO); setMobileMenuOpen(false); }}
                          className={`w-full text-left px-4 py-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-l-2 whitespace-nowrap overflow-hidden text-ellipsis ${view === ViewMode.HERO ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                      >
                          <Layers size={14} />
                          {lang === Language.EN ? 'Title Page' : 'Титульна сторінка'}
                      </button>
                    );
                  }
                  if (item === 'DECK') {
                    return (
                      <button
                          key="DECK"
                          onClick={() => { setView(ViewMode.DECK); setMobileMenuOpen(false); }}
                          className={`w-full text-left px-4 py-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-l-2 whitespace-nowrap overflow-hidden text-ellipsis ${view === ViewMode.DECK ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                      >
                          <Layers size={14} />
                          {lang === Language.EN ? 'Analysis of Open Data' : 'Аналіз відкритих даних'}
                      </button>
                    );
                  }
                  if (item === 'DASHBOARD') {
                    return (
                      <button
                          key="DASHBOARD"
                          onClick={() => { setView(ViewMode.DASHBOARD); setMobileMenuOpen(false); }}
                          className={`w-full text-left px-4 py-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-l-2 whitespace-nowrap overflow-hidden text-ellipsis ${view === ViewMode.DASHBOARD ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                      >
                          <BarChart3 size={14} />
                          {lang === Language.EN ? 'Operational Dashboard' : 'Операційний дашборд'}
                      </button>
                    );
                  }
                  // Regular Docs
                  const doc = item as DocumentId;
                  const isActive = activeDoc === doc && view !== ViewMode.HERO && view !== ViewMode.DECK;
                  return (
                    <button
                        key={doc}
                        onClick={() => { setActiveDoc(doc); setView(ViewMode.SCHEMA); setMobileMenuOpen(false); }}
                        className={`w-full text-left px-4 py-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border-l-2 whitespace-nowrap overflow-hidden text-ellipsis ${isActive ? 'bg-white/10 text-white border-cyber-cyan' : 'border-transparent text-gray-500 hover:bg-white/5 hover:text-white'}`}
                    >
                        <span className="opacity-50 mr-2">{idx}.</span>
                        {CONTENT[lang].docs[doc]?.navTitle || doc}
                    </button>
                  );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
                 <div className="text-[10px] text-gray-500 leading-tight">
                    {appT.contact}<br/>
                    <span className="text-gray-300">alex.zvolinskiy@feelagain.me</span>
                 </div>
                <button 
                    onClick={toggleLang}
                    className="w-full px-4 py-2 text-white bg-white/5 hover:bg-white/10 rounded flex items-center justify-center gap-2 font-mono text-[10px] font-bold transition-colors border border-white/10"
                    aria-label={lang === Language.EN ? "Switch to Ukrainian" : "Переключити на англійську"}
                >
                    <Globe size={14} />
                    {lang}
                </button>
            </div>
        </div>
    </div>
  );

  // Render Full Screen Hero
  if (view === ViewMode.HERO) {
      return (
        <div className="min-h-screen relative font-sans text-white bg-cyber-bg">
             <div className="cyber-grid"></div>
             <div className="cyber-vignette"></div>
             <HeroView 
                lang={lang} 
                onStart={() => { setView(ViewMode.DECK); }}
                onToggleLang={toggleLang}
             />
        </div>
      );
  }

  return (
    <div className="min-h-screen relative font-sans text-white bg-cyber-bg flex flex-col">
      
      {/* Loading Indicator */}
      {isTransitioning && (
        <>
          <div className="fixed top-0 left-0 w-full h-1 z-[100] overflow-hidden">
            <div className="h-full bg-cyber-cyan animate-loading-bar w-full"></div>
          </div>
          <div className="fixed bottom-20 right-6 z-[100] md:bottom-6">
             <div className="bg-black/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-cyber-cyan/20 flex items-center gap-2">
                <Loader2 size={16} className="text-cyber-cyan animate-spin" />
                <span className="text-[10px] font-bold text-cyber-cyan/80 uppercase tracking-wider pr-1">{lang === Language.EN ? 'Loading' : 'Завантаження'}</span>
             </div>
          </div>
        </>
      )}

      {/* Background */}
      <div className="cyber-grid"></div>
      <div className="cyber-vignette"></div>
      
      {/* Mobile Menu Toggle - Adjusted position to avoid overlap */}
      <div className="md:hidden fixed top-3 left-3 z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 bg-black/80 backdrop-blur border border-cyber-cyan/20 rounded-md shadow-lg text-cyber-cyan hover:bg-black transition-colors" aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
      </div>

      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative z-10 md:pl-64 transition-all duration-300 min-h-screen">
        
        {/* Top Navigation Bar - Unified Switcher - Increased left padding on mobile */}
        <div className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-cyber-cyan/10 py-3 px-6 pl-14 md:pl-6 shadow-xl">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
             
             <div className="flex items-center gap-2">
                {view === ViewMode.REPORT && (
                  <button 
                    onClick={() => setView(ViewMode.SCHEMA)} 
                    className="mr-2 p-2 rounded-full border border-cyber-cyan/20 text-cyber-cyan/60 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
                    title={lang === Language.EN ? "Back to Strategy Map" : "Назад до карти стратегії"}
                  >
                    <CornerUpLeft size={18} />
                  </button>
                )}
                <button 
                  onClick={() => {
                    if (view === ViewMode.REPORT) {
                      if (reportPage > 1) {
                        setReportPage(reportPage - 1);
                      } else {
                        setView(ViewMode.SCHEMA);
                      }
                    } else if (view === ViewMode.SCHEMA) {
                      // Go to previous document's report last page
                      const currentIndex = navSequence.indexOf(activeDoc);
                      const prevIndex = currentIndex - 1;
                      if (prevIndex >= 0) {
                        const target = navSequence[prevIndex];
                        if (target === 'DASHBOARD') {
                          setView(ViewMode.DASHBOARD);
                        } else if (target === 'DECK') {
                          setView(ViewMode.DECK);
                        } else if (target === 'HERO') {
                          setView(ViewMode.HERO);
                        } else {
                          const prevDoc = target as DocumentId;
                          setActiveDoc(prevDoc);
                          const totalPages = CONTENT[lang].docs[prevDoc]?.report.pages.length || 1;
                          setReportPage(totalPages);
                          setView(ViewMode.REPORT);
                        }
                      } else {
                        // Loop to end
                        const lastDoc = navSequence[navSequence.length - 1] as DocumentId;
                        setActiveDoc(lastDoc);
                        const totalPages = CONTENT[lang].docs[lastDoc]?.report.pages.length || 1;
                        setReportPage(totalPages);
                        setView(ViewMode.REPORT);
                      }
                    } else {
                      switchDoc('prev');
                    }
                  }} 
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-cyber-cyan/20 hover:bg-cyber-cyan/10 text-cyber-cyan/60 hover:text-cyber-cyan transition-all" 
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
             </div>
             
             <div className="flex flex-col items-center text-center">
                <span className="text-[9px] font-bold uppercase text-cyber-cyan tracking-[0.3em] mb-0.5">
                    {view === ViewMode.DECK 
                      ? (lang === Language.EN ? 'ANALYSIS OF OPEN DATA' : 'АНАЛІЗ ВІДКРИТИХ ДАНИХ') 
                      : view === ViewMode.DASHBOARD
                        ? (lang === Language.EN ? 'OPERATIONAL DASHBOARD' : 'ОПЕРАЦІЙНИЙ ДАШБОРД')
                        : view === ViewMode.REPORT 
                          ? `${CONTENT[lang].docs[activeDoc]?.navTitle} / PAGE ${reportPage}`
                          : view === ViewMode.SCHEMA
                            ? `SECTION ${navSequence.indexOf(activeDoc) + 1} / ${navSequence.length}`
                            : (lang === Language.EN ? 'TITLE PAGE' : 'ТИТУЛЬНА СТОРІНКА')}
                </span>
                <h2 className="text-sm md:text-base font-medium text-white uppercase tracking-tight leading-none">
                    {view === ViewMode.DECK 
                      ? (lang === Language.EN ? 'Analysis of Open Data' : 'Аналіз відкритих даних') 
                      : view === ViewMode.DASHBOARD
                        ? (lang === Language.EN ? 'Real-time Impact Monitoring' : 'Моніторинг впливу в реальному часі')
                        : view === ViewMode.REPORT
                          ? CONTENT[lang].docs[activeDoc]?.report.pages.find(p => p.id === reportPage)?.title
                          : view === ViewMode.SCHEMA
                            ? CONTENT[lang].docs[activeDoc]?.navTitle
                            : (lang === Language.EN ? 'Feel Again' : 'Feel Again')}
                </h2>
             </div>
 
             <button 
               onClick={() => {
                 if (view === ViewMode.SCHEMA) {
                   setReportPage(1);
                   setView(ViewMode.REPORT);
                 } else if (view === ViewMode.REPORT) {
                   const totalPages = CONTENT[lang].docs[activeDoc]?.report.pages.length || 0;
                   if (reportPage < totalPages) {
                     setReportPage(reportPage + 1);
                   } else {
                     switchDoc('next');
                   }
                 } else {
                   switchDoc('next');
                 }
               }} 
               className="w-8 h-8 flex items-center justify-center rounded-full bg-cyber-cyan text-black hover:bg-cyber-cyan/80 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]" 
               aria-label="Next"
             >
                <ChevronRight size={18} />
             </button>
          </div>
        </div>

        {view === ViewMode.DECK ? (
             <StrategicDeck lang={lang} />
        ) : view === ViewMode.DASHBOARD ? (
             <DashboardView lang={lang} />
        ) : view === ViewMode.SCHEMA ? (
          <div className="flex-grow flex flex-col pt-0 md:pt-0">
             <SchemaView lang={lang} docId={activeDoc} onNodeClick={handleNodeClick} />
          </div>
        ) : (
          <ReportView 
            lang={lang} 
            docId={activeDoc} 
            currentPageId={reportPage}
            onPageChange={(p) => setReportPage(p)}
            onBackToSchema={() => setView(ViewMode.SCHEMA)}
            onNextDoc={() => switchDoc('next')}
          />
        )}

        {/* Standard Dark Footer - Conditional Visibility: Only on Deck and Last Page */}
        {(view === ViewMode.DECK || (activeDoc === DocumentId.PARTNERS && (view === ViewMode.SCHEMA || view === ViewMode.REPORT))) && (
          <footer className="bg-black/80 border-t border-white/5 py-12 px-8 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-bold p-1">
                     <FeelAgainLogo className="w-full h-full" />
                  </div>
                  <span className="font-bold text-white tracking-tight text-lg">FEEL AGAIN</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed max-w-md">
                  {lang === Language.EN 
                    ? "A non-competitive digital infrastructure connecting humanitarian actors, local providers, and beneficiaries through a de-identified registry and fintech-driven transparency."
                    : "Неконкурентна цифрова інфраструктура, що об'єднує гуманітарних акторів, локальних виконавців та бенефіціарів через деперсоніфікований реєстр та фінтех-прозорість."}
                </p>
              </div>
              <div>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">{lang === Language.EN ? "Resources" : "Ресурси"}</h4>
                <ul className="space-y-3 text-gray-500 text-xs">
                  <li><a href="#" className="hover:text-cyber-cyan transition-colors">WHO mhGAP</a></li>
                  <li><a href="#" className="hover:text-cyber-cyan transition-colors">Grand Bargain</a></li>
                  <li><a href="#" className="hover:text-cyber-cyan transition-colors">IATI Standards</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">{lang === Language.EN ? "Legal" : "Юридична інформація"}</h4>
                <ul className="space-y-3 text-gray-500 text-xs">
                  <li><a href="#" className="hover:text-cyber-cyan transition-colors">{lang === Language.EN ? "Privacy Policy" : "Політика конфіденційності"}</a></li>
                  <li><a href="#" className="hover:text-cyber-cyan transition-colors">{lang === Language.EN ? "Rules & Standards" : "Правила та стандарти"}</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 text-[10px] uppercase tracking-widest">
                © 2025 ALL RIGHTS RESERVED. FOUNDATION OF OPEN SYSTEMS.
              </div>
              <div className="flex gap-6">
                <span className="text-gray-600 text-[10px] uppercase tracking-widest">KYIV, UKRAINE</span>
                <span className="text-gray-600 text-[10px] uppercase tracking-widest">LONDON, UK</span>
              </div>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
};

export default App;
