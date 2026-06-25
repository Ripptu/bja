import React, { useState } from 'react';
import { SERVICES } from '../data/briefingData';
import { IconRenderer } from './IconRenderer';
import { CheckCircle2, Clock, Calculator, ArrowRight, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface LeistungenViewProps {
  onNavigate: (tab: string) => void;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const LeistungenView: React.FC<LeistungenViewProps> = ({ onNavigate, onSelectServiceForContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'documentation' | 'administration' | 'future'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Interactive Calculator State
  const [reportsPerWeek, setReportsPerWeek] = useState<number>(15);
  const [minutesPerReport, setMinutesPerReport] = useState<number>(35);
  const [doctorHourlyCost, setDoctorHourlyCost] = useState<number>(85);

  const totalHoursSpent = Math.round((reportsPerWeek * minutesPerReport) / 60);
  const monthlyCostEstimate = Math.round(totalHoursSpent * 4.2 * doctorHourlyCost);

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  const handleRequestQuote = (title: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(title);
    }
    onNavigate('kontakt');
  };

  const tabs = [
    { id: 'all', label: `Alle (${SERVICES.length})` },
    { id: 'documentation', label: 'Dokumentation' },
    { id: 'administration', label: 'Administration' },
    { id: 'future', label: 'Ausblick' },
  ];

  return (
    <div className="flex flex-col flex-1 w-full text-[#1d1d1f] gap-4 sm:gap-8 pb-8 sm:pb-16">
      {/* Top Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-12 shadow-xl shadow-black/[0.02]"
      >
        <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#002B5B] block mb-3">
          Portfolio & Service-Architektur
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
          Professionelle Leistungen.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Maßgeschneiderte Dokumentation und administrative Entlastung – sowohl digital im Remote-Verfahren als auch als direkte Taskforce bei Ihnen vor Ort in Klinik oder Praxis.
        </p>

        {/* Apple Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-gray-100">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-white' : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#002B5B] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Services Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence>
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              key={service.id}
              onClick={() => {
                if (window.innerWidth < 640) {
                  setExpandedId(isExpanded ? null : service.id);
                }
              }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/70 p-5 sm:p-8 flex flex-col justify-between shadow-lg shadow-black/[0.02] hover:shadow-xl sm:hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden cursor-pointer sm:cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50/80 text-[#002B5B] flex items-center justify-center sm:group-hover:scale-110 sm:group-hover:bg-[#002B5B] sm:group-hover:text-white transition-all duration-300">
                    <IconRenderer name={service.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    {service.category === 'documentation' && 'Dokumentation'}
                    {service.category === 'administration' && 'Administration'}
                    {service.category === 'future' && 'Ausblick'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight sm:mb-3 sm:group-hover:text-[#002B5B] transition-colors flex items-center justify-between">
                  {service.title}
                  <span className="sm:hidden text-gray-400 font-normal">
                    {isExpanded ? '−' : '+'}
                  </span>
                </h3>
                
                <div className={`${isExpanded ? 'block mt-3' : 'hidden'} sm:block`}>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-gray-100/70 text-gray-600 text-[11px] font-medium px-3 py-1 rounded-full">
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${isExpanded ? 'flex' : 'hidden'} sm:flex pt-5 sm:pt-6 border-t border-gray-100 items-center justify-between`}>
                <span className="text-xs font-medium text-gray-400">
                  Remote & Vor-Ort
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRequestQuote(service.title);
                  }}
                  className="bg-gray-50 hover:bg-[#002B5B] text-gray-700 hover:text-white sm:group-hover:bg-[#002B5B] sm:group-hover:text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  Anfragen <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Impression Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hidden sm:block"
      >
        <ImagePlaceholder 
          title="Präzise Erfassung & Formatierung komplexer Arztbriefe und Gutachten"
          subtitle="Abb. 3: Resultat-Präzision"
          aspectRatio="banner"
          icon={<FileText className="w-6 h-6 text-[#002B5B]" />}
        />
      </motion.div>

      {/* Interactive Apple-style Rechner Bento */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 bg-[#1d1d1f] text-white rounded-3xl p-6 sm:p-12 md:p-14 border border-gray-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
          <Calculator className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide mb-6 border border-blue-500/20">
            <Clock className="w-3.5 h-3.5" /> Interaktiver Zeitersparnis-Kalkulator
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Wie viel Arztzeit verlieren Sie durch Schreibkram?
          </h2>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed mb-10">
            Vergleichen Sie Ihre wöchentliche Dokumentationszeit mit der externen Assistenz von BJA Medical Solutions. Mehr Zeit bei Ihren Patienten statt an der Tastatur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-10 bg-gray-900/80 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-800 backdrop-blur-md">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                Arztbriefe / Woche: <span className="text-white text-base font-bold ml-1">{reportsPerWeek}</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="80" 
                value={reportsPerWeek} 
                onChange={(e) => setReportsPerWeek(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-800 rounded-lg" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                Minuten / Bericht: <span className="text-white text-base font-bold ml-1">{minutesPerReport} Min</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="90" 
                step="5"
                value={minutesPerReport} 
                onChange={(e) => setMinutesPerReport(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-800 rounded-lg" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                Interner Kostensatz: <span className="text-white text-base font-bold ml-1">{doctorHourlyCost} €/h</span>
              </label>
              <input 
                type="range" 
                min="60" 
                max="150" 
                step="5"
                value={doctorHourlyCost} 
                onChange={(e) => setDoctorHourlyCost(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-800 rounded-lg" 
              />
            </div>
          </div>

          {/* Results Bento Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 p-5 sm:p-8 bg-white text-[#1d1d1f] rounded-2xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center font-black text-2xl text-[#002B5B]">
                {totalHoursSpent}h
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">Gebundene Arbeitszeit</span>
                <span className="text-lg font-bold text-[#1d1d1f]">ca. {totalHoursSpent * 4.2} Stunden / Monat</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:border-l sm:border-gray-200 sm:pl-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">Opportunitätskosten</span>
                <span className="text-2xl font-black text-red-600">ca. {monthlyCostEstimate.toLocaleString('de-DE')} €</span>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleRequestQuote(`Entlastungs-Paket für ca. ${reportsPerWeek} Berichte/Woche`)}
                  className="w-full sm:w-auto bg-[#002B5B] text-white px-6 py-3.5 rounded-full text-xs font-semibold hover:bg-[#003d82] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  Kosten jetzt senken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-gray-500 text-center sm:text-right hidden sm:block">Gemeinsam ROI berechnen</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" /> BJA Medical Solutions bietet flexible Kontingente ohne die dauerhafte Fixkostenbelastung einer internen Planstelle.
          </p>
        </div>
      </motion.div>

      {/* Final Decision CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-10 shadow-lg shadow-black/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Unsicher, welches Paket das richtige ist?</h3>
          <p className="text-sm text-gray-600 max-w-lg leading-relaxed">Keine Sorge. In einem kurzen, unverbindlichen Gespräch analysieren wir Ihren Bedarf und finden heraus, wie wir Sie am besten entlasten können.</p>
        </div>
        <button
          onClick={() => onNavigate('kontakt')}
          className="w-full sm:w-auto bg-gray-100 text-[#1d1d1f] px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-200/80 transition-colors cursor-pointer shrink-0"
        >
          Unverbindlich anfragen
        </button>
      </motion.div>
    </div>
  );
};

