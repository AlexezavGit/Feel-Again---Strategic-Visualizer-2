
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Language } from '../types';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';

interface DashboardViewProps {
  lang: Language;
}

const DashboardView: React.FC<DashboardViewProps> = ({ lang }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    const data = [
      { month: 'Jan', aid: 1.2 },
      { month: 'Feb', aid: 2.5 },
      { month: 'Mar', aid: 3.8 },
      { month: 'Apr', aid: 5.1 },
      { month: 'May', aid: 7.4 },
      { month: 'Jun', aid: 9.2 },
    ];

    const x = d3.scalePoint()
      .domain(data.map(d => d.month))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.aid) || 10])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line<any>()
      .x(d => x(d.month)!)
      .y(d => y(d.aid))
      .curve(d3.curveMonotoneX);

    // Add gradient
    const gradient = svg.append("defs")
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(10));

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#00E5FF");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#8A2BE2");

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "url(#line-gradient)")
      .attr("stroke-width", 4)
      .attr("d", line)
      .attr("stroke-dasharray", function() { return (this as any).getTotalLength(); })
      .attr("stroke-dashoffset", function() { return (this as any).getTotalLength(); })
      .transition()
      .duration(2000)
      .attr("stroke-dashoffset", 0);

    // Add dots
    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => x(d.month)!)
      .attr("cy", d => y(d.aid))
      .attr("r", 0)
      .attr("fill", "#00E5FF")
      .transition()
      .delay((d, i) => i * 200 + 1000)
      .duration(500)
      .attr("r", 6);

    // Add axes
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .attr("color", "rgba(255,255,255,0.3)")
      .selectAll("text")
      .attr("color", "rgba(255,255,255,0.6)")
      .style("font-family", "monospace");

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5))
      .attr("color", "rgba(255,255,255,0.3)")
      .selectAll("text")
      .attr("color", "rgba(255,255,255,0.6)")
      .style("font-family", "monospace");

  }, [lang]);

  const metrics = [
    { 
      label: lang === Language.EN ? 'Total Aid Distributed' : 'Загальна розподілена допомога', 
      value: '$12.4M', 
      icon: DollarSign, 
      color: 'text-cyber-cyan',
      trend: '+15%'
    },
    { 
      label: lang === Language.EN ? 'GDP Preservation' : 'Збереження ВВП', 
      value: '8.2%', 
      icon: TrendingUp, 
      color: 'text-emerald-400',
      trend: '+2.1%'
    },
    { 
      label: lang === Language.EN ? 'Local Partners' : 'Локальні партнери', 
      value: '482', 
      icon: Users, 
      color: 'text-cyber-purple',
      trend: '+24'
    },
    { 
      label: lang === Language.EN ? 'Active Sessions' : 'Активні сесії', 
      value: '15.2k', 
      icon: Activity, 
      color: 'text-blue-400',
      trend: '+1.2k'
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-cyber-cyan/10 pb-6">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter italic">
            {lang === Language.EN ? 'Operational Dashboard' : 'Операційний дашборд'}
          </h1>
          <p className="text-cyber-cyan/60 font-mono text-xs uppercase tracking-[0.3em]">
            {lang === Language.EN ? 'Real-time Impact Monitoring' : 'Моніторинг впливу в реальному часі'}
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">
            {new Date().toLocaleDateString(lang === Language.EN ? 'en-US' : 'uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="cyber-card p-6 border-cyber-cyan/10 hover:border-cyber-cyan/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg bg-white/5 ${m.color}`}>
                <m.icon size={20} />
              </div>
              <span className="text-[10px] font-mono font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                {m.trend}
              </span>
            </div>
            <div className="text-2xl font-black text-white mb-1">{m.value}</div>
            <div className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 cyber-card p-8 border-cyber-cyan/10 h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xs font-mono font-black text-white uppercase tracking-[0.3em]">
              {lang === Language.EN ? 'Aid Distribution Growth ($M)' : 'Ріст розподілу допомоги ($ млн)'}
            </h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-cyan"></div>
                <span className="text-[10px] font-mono text-white/40 uppercase">Actual</span>
              </div>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center overflow-hidden">
            <svg ref={chartRef} width="800" height="400" viewBox="0 0 800 400" className="w-full h-full"></svg>
          </div>
        </div>

        <div className="cyber-card p-8 border-cyber-cyan/10 flex flex-col">
          <h3 className="text-xs font-mono font-black text-white uppercase tracking-[0.3em] mb-8">
            {lang === Language.EN ? 'Regional Distribution' : 'Регіональний розподіл'}
          </h3>
          <div className="space-y-6 flex-grow">
            {[
              { region: 'Kyiv', value: 35 },
              { region: 'Kharkiv', value: 22 },
              { region: 'Lviv', value: 18 },
              { region: 'Dnipro', value: 15 },
              { region: 'Odesa', value: 10 },
            ].map((r, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono font-black uppercase">
                  <span className="text-white/60">{r.region}</span>
                  <span className="text-cyber-cyan">{r.value}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all duration-1000"
                    style={{ width: `${r.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5">
            <button className="w-full py-3 border border-cyber-cyan/20 rounded font-mono text-[10px] font-black uppercase text-cyber-cyan hover:bg-cyber-cyan/10 transition-all">
              {lang === Language.EN ? 'Export Full Report' : 'Експортувати повний звіт'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
