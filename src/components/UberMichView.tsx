import React from 'react';
import { COMPANY_INFO } from '../data/briefingData';
import { CheckCircle2, Award, HeartPulse, Brain, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface UberMichViewProps {
  onNavigate: (tab: string) => void;
}

export const UberMichView: React.FC<UberMichViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 w-full text-[#1d1d1f] gap-4 sm:gap-8 pb-8 sm:pb-16">
      {/* Header Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-12 shadow-xl shadow-black/[0.02]"
      >
        <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#002B5B] block mb-3">
          Hintergrund & Qualifikation
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
          Über mich.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Praxisorientierte Dokumentationsassistenz auf Augenhöhe – mit tiefem Verständnis für den klinischen Alltag statt einer anonymen Schreibzentrale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Founder Bio Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-12 shadow-lg shadow-black/[0.02]"
        >
          <span className="inline-block bg-blue-50 text-[#002B5B] border border-blue-100 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full mb-6">
            Die Person hinter BJA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mb-2 leading-tight">
            {COMPANY_INFO.founder}
          </h2>
          <p className="text-xs font-bold uppercase tracking-widest text-[#002B5B] mb-8 block">
            {COMPANY_INFO.role}
          </p>

          <div className="space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              Wer medizinische Dokumente verfasst, muss nicht nur tippen können – er muss die Medizin dahinter verstehen. Mein Name ist Bianca-Julia Ahsmann und ich habe BJA Medical Solutions gegründet, um genau diese Lücke zu schließen.
            </p>
            <p>
              Aus meiner langjährigen aktiven Berufserfahrung in der <strong className="text-[#1d1d1f] font-semibold">Pflege</strong>, im <strong className="text-[#1d1d1f] font-semibold">Rettungsdienst</strong> und in der <strong className="text-[#1d1d1f] font-semibold">Psychiatrie</strong> kenne ich den enormen Zeit- und Dokumentationsdruck im Gesundheitswesen aus erster Hand. Schichtdienst, Notfälle und kontinuierlich steigende administrative Anforderungen lassen oft kaum noch Freiraum für die eigentliche Patientenbetreuung.
            </p>
            <p>
              Deshalb verstehe ich mich ausdrücklich <strong className="text-[#002B5B] font-bold">nicht als reine Schreibkraft</strong>, sondern als externe Dokumentationsassistenz mit fundiertem medizinischem Fachverständnis. Ich kenne klinische Abläufe, beherrsche die medizinische Terminologie sicher und weiß, worauf es bei rechtssicheren Berichten und Gutachten ankommt.
            </p>
          </div>

          <div className="mt-8 hidden sm:block">
            <ImagePlaceholder 
              title="Bianca-Julia Ahsmann bei der Dokumentationsanalyse im KIS-System"
              subtitle="Gründerin Portrait"
              aspectRatio="wide"
              icon={<UserCheck className="w-6 h-6 text-[#002B5B]" />}
              imageUrl="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          {/* Deep Understanding Grid */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">
              Mein direktes Fachverständnis für Ihren Alltag
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[#002B5B] mb-3" />
                <span className="block font-bold text-sm text-[#1d1d1f] mb-1">Medizinische Terminologie</span>
                <span className="text-xs text-gray-500 leading-normal block">Sicherer Umgang mit Fachvokabular, ICD-10 & klinischen Abkürzungen ohne Korrekturbedarf.</span>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[#002B5B] mb-3" />
                <span className="block font-bold text-sm text-[#1d1d1f] mb-1">Klinische Abläufe</span>
                <span className="text-xs text-gray-500 leading-normal block">Nahtlose Integration in KIS-Strukturen, Visitenabläufe und Praxisorganisation.</span>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[#002B5B] mb-3" />
                <span className="block font-bold text-sm text-[#1d1d1f] mb-1">Dokumentationspflichten</span>
                <span className="text-xs text-gray-500 leading-normal block">Exakte Einhaltung von Formvorschriften, Gutachtenstrukturen und MDK-Anforderungen.</span>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[#002B5B] mb-3" />
                <span className="block font-bold text-sm text-[#1d1d1f] mb-1">Stress & Zeitdruck</span>
                <span className="text-xs text-gray-500 leading-normal block">Höchste Belastbarkeit, Termintreue und pragmatisches Handeln, wenn es brennt.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Qualifications & Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-4 sm:gap-8"
        >
          {/* Qualification Cards Bento */}
          <div className="bg-[#002B5B] text-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-950/10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-300 block mb-4">
              Praktische Fundierung
            </span>
            <h3 className="text-2xl font-bold tracking-tight mb-8">
              Drei Säulen klinischer Erfahrung
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-blue-900/40 p-4 rounded-2xl border border-blue-800/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-bold text-white tracking-tight">Pflege</span>
                  <span className="text-xs text-blue-200 block mt-1 leading-relaxed">
                    Fundierte Kenntnis stationärer und ambulanter Pflegedokumentation, Pflegeberichte und interdisziplinärer Schnittstellen.
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-blue-900/40 p-4 rounded-2xl border border-blue-800/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-bold text-white tracking-tight">Rettungsdienst</span>
                  <span className="text-xs text-blue-200 block mt-1 leading-relaxed">
                    Erfahrung in der Akutmedizin, Notfalldokumentation, Triage und schnellen Erfassung kritischer Behandlungsdaten unter Zeitdruck.
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-blue-900/40 p-4 rounded-2xl border border-blue-800/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-bold text-white tracking-tight">Psychiatrie</span>
                  <span className="text-xs text-blue-200 block mt-1 leading-relaxed">
                    Besonderer Schwerpunkt: Sensibilität für psychopathologische Befunde, Verlaufsberichte und umfangreiche psychiatrische Gutachten.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Callout Bento */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/70 shadow-lg shadow-black/[0.02]">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1d1d1f] tracking-tight mb-2">
              Qualitätsversprechen
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Jedes Dokument wird mit maximaler Sorgfalt, absoluter Vertraulichkeit (DSGVO-konform) und medizinischem Blick geprüft. Entlastung bedeutet bei BJA: Sie diktieren oder übergeben die Fakten – ich liefere das fertige, unterschriftsreife Resultat.
            </p>
            <button
              onClick={() => onNavigate('kontakt')}
              className="w-full bg-[#1d1d1f] text-white py-4 rounded-full text-sm font-semibold hover:bg-[#002B5B] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
            >
              Lassen Sie uns zusammenarbeiten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

