import React, { useState } from 'react';
import { StartseiteView } from './components/StartseiteView';
import { LeistungenView } from './components/LeistungenView';
import { UberMichView } from './components/UberMichView';
import { ZielgruppenView } from './components/ZielgruppenView';
import { KontaktView } from './components/KontaktView';
import { ArrowUpRight, Home, Briefcase, User, Users, Mail, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'startseite' | 'leistungen' | 'uebermich' | 'zielgruppen' | 'kontakt'>('startseite');
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleNavigate = (tab: string) => {
    if (tab === 'kontakt') setActiveTab('kontakt');
    else if (tab === 'leistungen') setActiveTab('leistungen');
    else if (tab === 'uebermich') setActiveTab('uebermich');
    else if (tab === 'zielgruppen') setActiveTab('zielgruppen');
    else setActiveTab('startseite');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (subject: string) => {
    setContactSubject(subject);
  };

  const navItems = [
    { id: 'startseite', label: 'Startseite', icon: Home },
    { id: 'leistungen', label: 'Leistungen', icon: Briefcase },
    { id: 'zielgruppen', label: 'Einsatzgebiete', icon: Users },
    { id: 'uebermich', label: 'Über mich', icon: User },
    { id: 'kontakt', label: 'Kontakt', icon: Mail },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fbfbfd] text-[#1d1d1f] flex flex-col justify-between selection:bg-[#002B5B] selection:text-white antialiased">
      
      {/* Top Header Navbar (Ultra clean for Mobile & Desktop - Removed on Mobile) */}
      <header className="hidden lg:block sticky top-2 sm:top-4 z-50 px-3 sm:px-8 max-w-6xl mx-auto w-full transition-all">
        <nav className="apple-glass rounded-full border border-gray-200/70 shadow-lg shadow-black/[0.03] px-4 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center w-full backdrop-blur-2xl">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavigate('startseite')}
            className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-[#002B5B] group-hover:scale-105 transition-transform">BJA</span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-gray-500 border-l border-gray-300/80 pl-2">
              Medical Solutions
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200/50">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#002B5B] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Call / Inquiry Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigate('kontakt')}
              className="bg-[#1d1d1f] text-white px-4 sm:px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#002B5B] transition-colors duration-300 flex items-center gap-1 shadow-sm cursor-pointer shrink-0"
            >
              <span className="hidden sm:inline">Anfragen</span>
              <span className="sm:hidden">Kontakt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-3 sm:pt-8 max-w-7xl mx-auto w-full px-3 sm:px-6 md:px-8 pb-20 lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col w-full"
          >
            {activeTab === 'startseite' && <StartseiteView onNavigate={handleNavigate} />}
            {activeTab === 'leistungen' && <LeistungenView onNavigate={handleNavigate} onSelectServiceForContact={handleSelectServiceForContact} />}
            {activeTab === 'uebermich' && <UberMichView onNavigate={handleNavigate} />}
            {activeTab === 'zielgruppen' && <ZielgruppenView onNavigate={handleNavigate} onSelectTargetGroup={handleSelectServiceForContact} />}
            {activeTab === 'kontakt' && <KontaktView initialSubject={contactSubject} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Ultra Minimalist Mobile Bottom Navigation (Visible only on mobile/tablet) */}
      <div className="lg:hidden fixed bottom-3 left-2 right-2 z-50 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto apple-glass rounded-full border border-gray-200/80 shadow-2xl shadow-black/10 px-1 py-1 flex items-center justify-around gap-0.5 max-w-md w-full backdrop-blur-2xl bg-white/90">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            // Shorten label for mobile
            const label = item.id === 'zielgruppen' ? 'Gebiete' : item.label;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-full transition-all duration-200 cursor-pointer select-none ${
                  isActive ? 'text-[#002B5B] font-bold bg-blue-50/80' : 'text-gray-500 hover:text-gray-900 font-medium'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110 stroke-[2.2]' : 'stroke-[1.7]'}`} />
                <span className="text-[9px] tracking-tight mt-0.5 leading-none">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Apple-style Footer */}
      <footer className="mt-16 sm:mt-24 bg-[#1d1d1f] text-[#f5f5f7] py-12 sm:py-16 px-5 sm:px-12 border-t border-gray-800 pb-28 lg:pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-gray-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">BJA</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">Medical Solutions</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Entlastung, wo Medizin Zeit braucht. Professionelle externe Dokumentationsassistenz auf Augenhöhe.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 block">Schwerpunkte</span>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-gray-300">
              <li>Psychiatrie & Psychotherapie</li>
              <li>Akut- & Notfallmedizin</li>
              <li>Stationäre & Ambulante Pflege</li>
              <li>Medizinische Gutachten</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 block">Arbeitsweise</span>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-gray-300">
              <li>Digitaler Remote-Service</li>
              <li>Vor-Ort Inhouse Taskforce</li>
              <li>KIS- & Praxis-Integration</li>
              <li>100% DSGVO-konform</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 block">Direktkontakt</span>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">Bianca-Julia Ahsmann</p>
            <a href="mailto:info@bja-medical.de" className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold block transition-colors">
              info@bja-medical.de
            </a>
            <a href="tel:+491708924410" className="text-xs text-gray-400 hover:text-white block pt-0.5 transition-colors">+49 (0) 170 892 4410</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} BJA Medical Solutions. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <button onClick={() => handleNavigate('kontakt')} className="hover:text-gray-300 cursor-pointer transition-colors">Impressum & Datenschutz</button>
            <button onClick={() => handleNavigate('uebermich')} className="hover:text-gray-300 cursor-pointer transition-colors">Qualifikationen</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

