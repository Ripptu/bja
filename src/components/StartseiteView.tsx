import React from 'react';
import { COMPANY_INFO, CORE_PILLARS } from '../data/briefingData';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Clock, Activity, Monitor, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface StartseiteViewProps {
  onNavigate: (tab: string) => void;
}

export const StartseiteView: React.FC<StartseiteViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 w-full text-[#1d1d1f] gap-4 sm:gap-8 pb-8 sm:pb-16">
      {/* Apple-style Bento Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-0 sm:pt-4">
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-10 md:p-14 border border-gray-200/70 shadow-xl shadow-black/[0.02] flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-bl from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#002B5B] text-xs font-semibold tracking-wide mb-6 sm:mb-8 border border-blue-100/80">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" /> BJA Medical Solutions
            </span>
            
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-[#1d1d1f] tracking-tighter leading-[1.08] mb-6 sm:mb-8">
              Entlastung, wo <span className="text-[#002B5B]">Medizin</span> Zeit braucht.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
              {COMPANY_INFO.shortText}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button 
              onClick={() => onNavigate('kontakt')}
              className="bg-[#002B5B] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#003d82] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center group"
            >
              Unverbindliches Erstgespräch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('leistungen')}
              className="bg-gray-100 text-[#1d1d1f] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-200/80 transition-all duration-300 cursor-pointer text-center"
            >
              Lösungen entdecken
            </button>
          </div>

          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Remote & Vor-Ort
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Fokus: Psychiatrie
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> 100% DSGVO
            </span>
          </div>
        </motion.div>

        {/* Impression Image Bento Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex lg:col-span-4 rounded-3xl overflow-hidden shadow-xl shadow-black/[0.04] relative min-h-[260px] sm:min-h-[340px] lg:min-h-full items-center justify-center group bg-gray-100 border border-gray-200/70"
        >
          <img 
            src="https://s1.directupload.eu/images/260624/j888vweh.webp" 
            alt="BJA Medical Solutions Workflow" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Visual Workflow Impressions (Requested Image Placeholders) */}
      <section className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ImagePlaceholder 
            title="Digitaler Remote-Schreibplatz für KIS & Praxissoftware"
            subtitle="Abb. 1: Remote Assistenz"
            aspectRatio="video"
            icon={<Monitor className="w-6 h-6 text-[#002B5B]" />}
            imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ImagePlaceholder 
            title="Vor-Ort Inhouse Stationsunterstützung in Klinik & MVZ"
            subtitle="Abb. 2: Taskforce Vor-Ort"
            aspectRatio="video"
            icon={<Building2 className="w-6 h-6 text-[#002B5B]" />}
            imageUrl="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
          />
        </motion.div>
      </section>

      {/* Apple Bento Grid for Core Pillars */}
      <section className="mt-4 sm:mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 px-1 sm:px-2"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Kernkompetenzen</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">Spezialisierte Expertise für höchste Ansprüche.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200/70 shadow-lg shadow-black/[0.02] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center mb-6">
                  {idx === 0 && <ShieldCheck className="w-6 h-6 text-blue-600" />}
                  {idx === 1 && <Clock className="w-6 h-6 text-indigo-600" />}
                  {idx === 2 && <Activity className="w-6 h-6 text-sky-600" />}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#002B5B]">Mehr erfahren</span>
                <button onClick={() => onNavigate('leistungen')} className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#002B5B] hover:text-white text-gray-600 flex items-center justify-center transition-colors cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Psychological Pain-Point CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 sm:mt-10 bg-blue-50/50 rounded-3xl p-6 sm:p-10 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">
            Dokumentation stiehlt Ihre wertvollste Ressource: Zeit.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Befreien Sie sich und Ihr Team von administrativen Überstunden. Lassen Sie uns gemeinsam evaluieren, wie viel Zeit Sie durch externe Assistenz direkt am Patienten zurückgewinnen können.
          </p>
        </div>
        <button 
          onClick={() => onNavigate('kontakt')}
          className="w-full md:w-auto bg-[#002B5B] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#003d82] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0 group"
        >
          Kostenloses Erstgespräch vereinbaren
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.section>

      {/* Apple-like Vision Section Banner */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4 sm:mt-8 bg-gradient-to-r from-gray-900 to-[#1d1d1f] text-white rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden"
      >
        <div className="max-w-3xl relative z-10 space-y-3 sm:space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 block">
            Marken-Vision
          </span>
          <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Eine etablierte externe Dokumentationsassistenz für das gesamte Gesundheitswesen.
          </h2>
          <p className="text-xs sm:text-base text-gray-300 leading-relaxed max-w-2xl pt-1 sm:pt-2">
            Langfristiges Wachstum mit einem spezialisierten Fach-Team für Dokumentation, Qualitätsmanagement und kontinuierliche Prozessoptimierung in Kliniken und Praxen.
          </p>
          <div className="pt-3 sm:pt-4">
            <button 
              onClick={() => onNavigate('uebermich')}
              className="bg-white text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              Gründerin kennenlernen <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

