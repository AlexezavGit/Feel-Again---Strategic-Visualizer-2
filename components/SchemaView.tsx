
import React from 'react';
import { 
  TrendingDown, ShieldAlert, Cpu, Banknote, Activity, Globe, 
  Database, Users, EyeOff, Ghost, Building2, ShieldCheck, 
  Fingerprint, TrendingUp, ArrowRightLeft, Briefcase, Heart,
  Smartphone, Stethoscope, LayoutDashboard, X, Wallet, CheckCircle, Zap, Building, Layers, BarChart3
} from 'lucide-react';
import { CONTENT } from '../constants';
import { Language, DocumentId, SchemaNode } from '../types';

interface SchemaViewProps {
  lang: Language;
  docId: DocumentId;
  onNodeClick: (pageId: number) => void;
}

const IconMap: Record<string, any> = {
  TrendingDown, ShieldAlert, Cpu, Banknote, Activity, Globe,
  Database, Users, EyeOff, Ghost, Building2, ShieldCheck,
  Fingerprint, TrendingUp, ArrowRightLeft, Briefcase, Heart,
  Smartphone, Stethoscope, LayoutDashboard, Wallet, CheckCircle, Zap, Building, Layers, BarChart3
};

const SchemaView: React.FC<SchemaViewProps> = ({ lang, docId, onNodeClick }) => {
  const doc = CONTENT[lang].docs[docId];
  const t = doc.schema;
  const navT = CONTENT[lang].appNav;

  const renderNode = (node: SchemaNode, index: number) => {
    const Icon = IconMap[node.icon] || Activity;
    const accentColor = index % 2 === 0 ? 'text-cyber-cyan' : 'text-cyber-purple';

    return (
      <button 
        key={node.id}
        onClick={() => onNodeClick(node.targetPage)}
        aria-label={`${lang === Language.EN ? 'Read more about' : 'Читати більше про'} ${node.title}`}
        className="cyber-card p-4 md:p-8 text-left w-full flex flex-col group hover:scale-[1.03] transition-all duration-300 ease-out relative overflow-hidden min-h-[140px] md:min-h-[180px] justify-between z-10 hover:z-20 border-cyber-cyan/10 hover:border-cyber-cyan/50"
      >
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/0 via-cyber-cyan/0 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-center justify-between w-full mb-2 md:mb-4 relative z-10">
           <h3 className="font-mono font-bold text-cyber-cyan/40 uppercase tracking-[0.2em] text-[8px] md:text-[9px] group-hover:text-cyber-cyan transition-colors">{node.title}</h3>
           <Icon size={18} className={`${accentColor} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 md:w-5 md:h-5`} />
        </div>
        
        <div className="relative z-10">
          <div className="text-lg md:text-2xl font-mono font-black text-white leading-tight tracking-tight group-hover:text-cyber-cyan transition-colors">
            {node.highlight}
          </div>
        </div>
        
        <div className="mt-4 md:mt-6 flex items-center text-[8px] md:text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-cyber-cyan/30 group-hover:text-cyber-cyan transition-colors relative z-10">
            {navT.readMore} <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
        </div>
      </button>
    );
  };

  const CenterButton = () => (
     <div className="flex flex-col items-center justify-center p-4 text-center relative order-1 md:order-2 col-span-1 md:col-span-1">
        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
           <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-cyber-cyan/20 animate-pulse-glow"></div>
           <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-cyber-purple/10 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <button 
            onClick={() => onNodeClick(t.centerNode.targetPage || 1)} 
            aria-label={`${lang === Language.EN ? 'Enter' : 'Увійти'} ${t.centerNode?.title}`}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.2)] z-10 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden border border-cyber-cyan/30 hover:border-cyber-cyan"
        >
            <div className="mb-2 md:mb-4 p-3 md:p-4 bg-cyber-cyan/10 rounded-full group-hover:bg-cyber-cyan/20 transition-colors border border-cyber-cyan/20">
                <Activity size={24} className="text-cyber-cyan/60 group-hover:text-cyber-cyan transition-colors md:w-8 md:h-8" />
            </div>
            <h1 className="text-lg md:text-3xl font-mono font-black text-white leading-none mb-1 md:mb-2 px-4 tracking-tighter uppercase group-hover:scale-105 transition-transform text-center">
                {t.centerNode?.title}
            </h1>
            <p className="text-[8px] md:text-[10px] text-cyber-cyan/40 font-mono font-bold uppercase tracking-[0.3em] group-hover:text-cyber-cyan/60">{t.centerNode?.subtitle}</p>
            
            <div className="mt-2 md:mt-4 text-[8px] md:text-[9px] text-black font-mono font-black uppercase tracking-[0.2em] bg-cyber-cyan px-3 py-1 md:px-4 md:py-2 rounded shadow-[0_0_15px_rgba(0,229,255,0.5)] group-hover:bg-white transition-colors">
                {navT.enterSpace}
            </div>
        </button>
     </div>
  );

  return (
    <div className="w-full flex-grow flex flex-col items-center pb-24 md:pb-32">
       
       <div className="h-4 md:h-24"></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-8 items-center">
              
              {/* Left Column */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 order-1 md:order-1 w-full">
                 {t.nodes[0] && renderNode(t.nodes[0], 0)}
                 {t.nodes[1] && renderNode(t.nodes[1], 1)}
              </div>
              
              {/* Right Column (Moved up on mobile to be before center) */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 order-2 md:order-3 w-full">
                 {t.nodes[2] && renderNode(t.nodes[2], 2)}
                 {t.nodes[3] && renderNode(t.nodes[3], 3)}
              </div>

              {/* Center Column (Moved down on mobile) */}
              <div className="order-3 md:order-2">
                <CenterButton />
              </div>
          </div>
        </div>
    </div>
  );
};

export default SchemaView;
