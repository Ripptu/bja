import React from 'react';
import { TARGET_GROUPS } from '../data/briefingData';
import { IconRenderer } from './IconRenderer';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ZielgruppenViewProps {
  onNavigate: (tab: string) => void;
  onSelectTargetGroup?: (groupTitle: string) => void;
}

export const ZielgruppenView: React.FC<ZielgruppenViewProps> = ({ onNavigate, onSelectTargetGroup }) => {
  const handleContactGroup = (title: string) => {
    if (onSelectTargetGroup) {
      onSelectTargetGroup(title);
    }
    onNavigate('kontakt');
  };

  return (
    <div className="flex flex-col flex-1 w-full text-[#1d1d1f] gap-8 pb-16">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/70 p-8 sm:p-12 shadow-xl shadow-black/[0.02]"
      >
        <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#002B5B] block mb-3">
          Einsatzgebiete & Einrichtungen
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
          Für wen ich arbeite.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Spezialisierte administrative Entlastung für Institutionen des Gesundheitswesens – mit besonderem Fokus auf Psychiatrie, Pflege und Akutmedizin.
        </p>
      </motion.div>

      {/* Focus Highlight Bento */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#002B5B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 text-xs tracking-wide px-3.5 py-1.5 font-semibold rounded-full mb-6 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" /> Kernkompetenz-Schwerpunkt
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Psychiatrie, Pflege & Notfallmedizin
            </h2>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              In diesen Bereichen bringt Gründerin Bianca-Julia Ahsmann jahrelange eigene Berufserfahrung ein. Das bedeutet für Sie: Sofortiges Verständnis spezifischer Krankheitsbilder, terminologische Stilsicherheit und keinerlei Einarbeitungsaufwand.
            </p>
          </div>
          <div className="flex shrink-0">
            <button 
              onClick={() => handleContactGroup('Psychiatrie / Pflege / Notfall Service')}
              className="bg-white text-[#002B5B] px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
            >
              Spezial-Anfrage stellen
            </button>
          </div>
        </div>
      </motion.div>

      {/* Target Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TARGET_GROUPS.map((group, gIdx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gIdx * 0.1 }}
            key={group.id}
            className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 group shadow-lg shadow-black/[0.02] relative overflow-hidden ${
              group.isFocus 
                ? 'bg-white border-blue-200 ring-2 ring-blue-500/10' 
                : 'bg-white border-gray-200/70 hover:border-gray-300'
            }`}
          >
            {group.isFocus && (
              <div className="absolute top-6 right-6 bg-blue-50 text-[#002B5B] border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Schwerpunkt
              </div>
            )}

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  group.isFocus ? 'bg-[#002B5B] text-white' : 'bg-blue-50/80 text-[#002B5B]'
                }`}>
                  <IconRenderer name={group.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                    {group.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#1d1d1f] tracking-tight">
                    {group.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {group.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
              <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Diskret & DSGVO
              </span>
              <button
                onClick={() => handleContactGroup(group.title)}
                className="bg-gray-50 group-hover:bg-[#002B5B] text-gray-700 group-hover:text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                Anfragen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual Impression Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ImagePlaceholder 
          title="Nahtlose Einbindung in Stationsabläufe psychiatrischer und somatischer Akutkliniken"
          subtitle="Abb. 4: Einbindung in Klinik"
          aspectRatio="banner"
          icon={<Building className="w-6 h-6 text-[#002B5B]" />}
          imageUrl="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80"
        />
      </motion.div>

      {/* Remote vs Vor Ort Section Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-lg shadow-black/[0.02]"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[#002B5B] block mb-2">
            Zusammenarbeit Modell 1
          </span>
          <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Digitaler Remote Service
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Deutschlandweite Übernahme Ihrer medizinischen Dokumentation über verschlüsselte, sichere Datenkanäle oder per VPN-Zugriff auf Ihr KIS (Krankenhausinformationssystem) bzw. Praxisportal.
          </p>
          <ul className="space-y-3 text-xs font-semibold text-gray-700 pt-2 border-t border-gray-100">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Bequeme Audio-/Diktat-Übermittlung</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Schnelle Bearbeitungszeiten im Hintergrund</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Ideal für Gutachten, Arztbriefe & Transkriptionen</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-lg shadow-black/[0.02]"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[#002B5B] block mb-2">
            Zusammenarbeit Modell 2
          </span>
          <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Vor-Ort Taskforce Unterstützung
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Direkter Einsatz in Ihrer Klinik, auf Station oder in den Praxisräumen zur Aufarbeitung von Aktenrückständen, Strukturierung von KIS-Akten oder physischer Stationsentlastung.
          </p>
          <ul className="space-y-3 text-xs font-semibold text-gray-700 pt-2 border-t border-gray-100">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Persönliche Taskforce bei Personalengpässen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Direkte Abstimmung mit Ärzten und Pflegeleitungen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#002B5B]" /> Strukturierung analoger & digitaler Aktenlager</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

